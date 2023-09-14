import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart/Cart";


const Home = () => {
    const [courses, setCourses] = useState([])
    const [selectCourse, setSelectCourse] = useState([])

    useEffect(() => {
        fetch('./Data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(courses)
    const handleSelect = course => {
        // console.log(course)
        const selectNewCourse = [...selectCourse, course]
        setSelectCourse(selectNewCourse)
       

    }
    // console.log(selectCourse)
    return (
        <div className="flex justify-between gap-6">


            <div className="crads grid md:grid-cols-3 w-2/3 mx-auto gap-6">
                {
                    courses.map(course => (
                        <div key={course.id} className="card  bg-gray-100 shadow-xl">
                            <figure className="px-5 pt-10">
                                <img src={course.cover_img} alt="Shoes" className="rounded-xl w-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{course.title}</h2>
                                <p>{course.description}</p>
                            </div>
                            <div className="">
                                <div className="flex justify-between items-center">
                                    <p>Price: {course.price}</p>
                                    <p>Credit: {course.credit_hour} hr</p>
                                </div>
                                <div className="card-actions">
                                    <button onClick={() => handleSelect(course)} className="btn  w-full">Select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="carts w-1/3 mx-auto">
                <h1>Cart</h1>
                <Cart selectCourse={selectCourse}></Cart>
            </div>



        </div>
    );
};

export default Home;