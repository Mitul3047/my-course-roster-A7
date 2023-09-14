import PropTypes from "prop-types";

const Cart = ({selectCourse}) => {

   
    return (
        <div className="bg-base-100 p-6 rounded-lg">
            <h3 className="">Credit Hour Remaining 7 hr</h3>
                {
                    selectCourse.map(course =>(
                        <li key={course.id} className="list-decimal font-normal text-[#1C1B1B99]">{course.title}</li>
                    ))
                }



        </div>
    );
};
Cart.propTypes ={
    selectCourse : PropTypes.array
}
export default Cart;