import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { BsCurrencyDollar, BsBook } from 'react-icons/Bs';
import toast from "react-hot-toast";



const Home = () => {
    const [courses, setCourses] = useState([])
    const [selectCourse, setSelectCourse] = useState([])
    const [hourRemain, setHourRemain] = useState(0)
    const [totalHour, setTotalHour] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        fetch('./Data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(courses)
    const handleSelect = course => {
        // console.log(course)
        const isExist = selectCourse.find(item => item.id == course.id)
        if (isExist) {
            toast.error('Course has already been enrolled');
        } else {
            let remainHour = course.credit_hour;
            let hourTotal = course.credit_hour;
            let priceTotal = course.price
            selectCourse.forEach(item => {
                remainHour += item.credit_hour;
                hourTotal += item.credit_hour;
                priceTotal += item.price

            });

            const totalHourRemain = 20 - remainHour
            if (remainHour > 20) {
                toast.error('Credit hour limit has been crossed');
            } else {
                setTotalHour(hourTotal)
                setHourRemain(totalHourRemain)
                const selectNewCourse = [...selectCourse, course]
                setSelectCourse(selectNewCourse)
                setTotalPrice(priceTotal)


            }

        }

    }
    const handleRemoveCourse = (courseToRemove) => {
        const updatedSelectCourse = selectCourse.filter(course => course.id !== courseToRemove.id);
        const removedHours = courseToRemove.credit_hour;
        setSelectCourse(updatedSelectCourse);
        setTotalHour(totalHour - removedHours);
        setHourRemain(hourRemain + removedHours);
        setTotalPrice(totalPrice - courseToRemove.price);
        toast.success('Course has been removed')
    }
    // console.log(selectCourse)
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-6">


            <div className="crads grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto gap-6">
                {
                    courses.map(course => (
                        <div key={course.id} className="card  bg-base-100 shadow-xl">
                            <figure className="p-3">
                                <img src={course.cover_img} alt={course.title} className="rounded-xl w-full" />
                            </figure>
                            <div className="px-3 items-start  ">
                                <h2 className="card-title text-[#1C1B1B] text-lg font-semibold ">
                                    {course.title}
                                </h2>
                                <p className="text-sm h-40 text-[#1C1B1BCC] text-justify">
                                    {course.description}
                                </p>
                            </div>
                            <div className="px-3">
                                <div className="flex justify-between items-center pb-5 px-3">
                                    <p>
                                        <span className="inline-block items-center">
                                            <BsCurrencyDollar />
                                        </span> Price: {course.price}
                                    </p>
                                    <p>
                                        <span className="inline-block items-center">
                                            <BsBook />
                                        </span> Credit: {course.credit_hour} hr
                                    </p>
                                </div>
                                <div className=" pb-3">
                                    <button  onClick={() => handleSelect(course)}
                                        className="btn  bg-[#2F80ED] w-full hover:bg-slate-200 hover:text-black text-white">
                                        Select
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="carts  lg:w-1/4 mx-auto ">
                <Cart
                    hourRemain={hourRemain}
                    selectCourse={selectCourse}
                    totalHour={totalHour}
                    totalPrice={totalPrice}
                    handleRemoveCourse={handleRemoveCourse}></Cart>
            </div>



        </div>
    );
};

export default Home;