import PropTypes from "prop-types";
import { TiDelete } from 'react-icons/Ti';
const Cart = ({ selectCourse, hourRemain, totalHour, totalPrice,handleRemoveCourse }) => {


    return (
        <div className="bg-base-100 p-6 rounded-lg">
            <h3 className="border-b-2 pb-4 text-[#2F80ED] text-lg font-bold">Credit Hour Remaining {hourRemain} hr</h3>
            <h3 className="text-[#1C1B1B] text-xl font-bold pt-4 pb-5">Course Name</h3>
            {
                selectCourse.map(course => (
                    <li key={course.id} className="list-decimal  text-[#1C1B1B99]">{course.title}<span className="text-lg cursor-pointer  text-red-700" onClick={()=>handleRemoveCourse(course)}><TiDelete/></span></li>
                ))
            }
            <h4 className="border-t-2 p-4 mt-6 font-medium text-[#1C1B1BCC]">Total Credit Hour : {totalHour}</h4>
            <h4 className="border-t-2 p-4 font-semibold text-[#1C1B1BCC]">Total Price : {totalPrice} USD</h4>


        </div>
    );
};


Cart.propTypes = {
    hourRemain: PropTypes.number,
    selectCourse: PropTypes.array,
    totalHour: PropTypes.array,
    totalPrice: PropTypes.array,
    handleRemoveCourse: PropTypes.func
   
}
export default Cart;