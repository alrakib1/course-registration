import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({ credits,remainingHour, hours}) => {
  // console.log(credits)
  return (
    <div className="w-1/4 bg-white rounded-lg shadow-xl p-6 mt-6" >
        <h4 className="text-lg font-bold text-[#2F80ED] mb-4">Credit Hour Remaining {remainingHour}hr</h4>
        <hr className="mb-4" />
        <h3 className="font-bold text-xl mb-5">Course Name</h3>
      <div>{credits.map((credit, idx) => (
        <Bookmark key={idx} credit={credit}></Bookmark>
      ))}</div>
      <hr className="mt-6 mb-6"/>
      <h3 className="text-base font-medium">Total Hours: {hours} </h3>
    </div>
  );
};
Bookmarks.propTypes = {
  credits: PropTypes.array,
  remainingHour : PropTypes.number,
  hours : PropTypes.number
};
export default Bookmarks;
