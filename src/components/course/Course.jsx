import PropTypes from "prop-types";
import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
const Course = ({ course, handleCredit }) => {
  const { courseName, courseDetails, creditHours, price, img } = course;
  return (
    <div className="w-80 bg-white shadow-xl rounded-lg">
      <div className="flex items-center justify-center">
        <img src={img} alt={`image of ${courseName}`} className="mt-4" />
      </div>
      <div className="p-4">
        <h2 className="card-title text-lg font-semibold mb-3">{courseName}</h2>
        <p className="text-sm font-normal text-[rgba(28, 27, 27, 0.60)] mb-4">
          {courseDetails}
        </p>
        <div className="flex justify-between mb-6">
          <p className="text-base font-medium text-[rgba(28, 27, 27, 0.60)] flex items-center">
            <FiDollarSign className="text-xl"></FiDollarSign>
            <span className="ml-1">Price:{price}</span>
          </p>
          <p className="text-base font-medium text-[rgba(28, 27, 27, 0.60)] flex items-center">
          <HiOutlineBookOpen className="text-xl"></HiOutlineBookOpen>
            <span className="ml-2"> Credit: {creditHours}hr</span>
          </p>
        </div>
        <div className=" mx-auto">
          <button
            className="btn text-center bg-blue-400 w-72 normal-case text-lg font-semibold text-white"
            onClick={() => handleCredit(course)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCredit: PropTypes.func,
};
export default Course;
