import PropTypes from "prop-types";

const Cart = ({ selectCourse }) => {


    return (
        <div className="bg-base-100 p-6 rounded-lg">
            <h3 className="border-b-2 pb-4 text-[#2F80ED] text-lg font-bold">Credit Hour Remaining 7 hr</h3>
            <h3 className="text-[#1C1B1B] text-xl font-bold pt-4 pb-5">Course Name</h3>
            {
                selectCourse.map(course => (
                    <li key={course.id} className="list-decimal font-normal text-[#1C1B1B99]">{course.title}</li>
                ))
            }
            <h4 className="border-t-2 p-4 font-medium text-[#1C1B1BCC]">Total Credit Hour : 13</h4>
            <h4 className="border-t-2 p-4 font-semibold text-[#1C1B1BCC]">Total Price : 48000 USD</h4>


        </div>
    );
};
Cart.propTypes = {
    selectCourse: PropTypes.array
}
export default Cart;