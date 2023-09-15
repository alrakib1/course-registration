import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({credits,remainingHour, hours, price}) => {

  return (
    <div className="w-80 lg:w-1/4 bg-white rounded-lg shadow-xl p-6 mt-6" >
        <h4 className="text-lg font-bold text-[#2F80ED] mb-4">Credit Hour Remaining {remainingHour} hr</h4>
        <hr className="mb-4" />
        <h3 className="font-bold text-xl mb-5">Course Name</h3>
      <div>{credits.map((credit, index) => (
        <Bookmark key={index} index={index} credit={credit}></Bookmark>
      ))}</div>
      <hr className="mt-6 mb-6"/>
      <h3 className="text-base font-medium mb-4">Total Credit Hour : {hours} </h3>
      <hr className="mb-8" />
      <h4 className="text-[rgba(28, 27, 27, 0.80)] text-base font-semibold">Total Price : {price} USD</h4>
    </div>
  );
};
Bookmarks.propTypes = {
  credits: PropTypes.array,
  remainingHour : PropTypes.number,
  hours : PropTypes.number,
  price : PropTypes.number
};
export default Bookmarks;
