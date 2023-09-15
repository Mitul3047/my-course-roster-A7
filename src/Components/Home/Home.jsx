import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";


const Home = () => {
    const [courses, setCourses] = useState([])
    const [selectCourse, setSelectCourse] = useState([])
    const [hourRemain, setHourRemain] = useState(0)
    const [totalHour, setTotalHour] = useState(0)
    const [totalPrice, setTotalPrice ] = useState(0)

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
            return alert('Has Been Enrolled')
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
                alert('limit Crossed')
            } else {
                setTotalHour(hourTotal)
                setHourRemain(totalHourRemain)
                const selectNewCourse = [...selectCourse, course]
                setSelectCourse(selectNewCourse)
                setTotalPrice(priceTotal)
            }
        }

    }
    // console.log(selectCourse)
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-6">


            <div className="crads grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-2/3 mx-auto gap-6">
                {
                    courses.map(course => (
                        <div key={course.id} className="card  bg-gray-100 shadow-xl">
                            <figure className="px-5 pt-10">
                                <img src={course.cover_img} alt="Shoes" className="rounded-xl w-full" />
                            </figure>
                            <div className="card-body items-center text-center ">
                                <h2 className="card-title">{course.title}</h2>
                                <p>{course.description}</p>
                            </div>
                            <div className="px-5">
                                <div className="flex justify-between items-center p-5">
                                    <p>Price: {course.price}</p>
                                    <p>Credit: {course.credit_hour} hr</p>
                                </div>
                                <div className="card-actions pb-10 px-5">
                                    <button onClick={() => handleSelect(course)} className="btn  bg-sky-500 w-full hover:bg-slate-200 hover:text-black text-white">Select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="carts  lg:w-1/3 mx-auto ">
                <Cart
                    hourRemain={hourRemain}
                    selectCourse={selectCourse}
                    totalHour={totalHour}
                    totalPrice={totalPrice}></Cart>
            </div>



        </div>
    );
};

export default Home;