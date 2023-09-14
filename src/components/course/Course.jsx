import PropTypes from 'prop-types';
const Course = ({ course, handleCredit }) => {

  const { courseName, courseDetails, creditHours, price, img } = course;
  return (
    <div >
      <div className='w-80 bg-white shadow-xl rounded-lg'>
        <div className='flex items-center justify-center'><img src={img} alt={`image of ${courseName}`} className='mt-4'/></div>
        <div className='p-4'>
        <h2 className="card-title text-lg font-semibold mb-3">{courseName}</h2>
          <p className="text-sm font-normal text-[rgba(28, 27, 27, 0.60)] mb-4">{courseDetails}</p>
          <div className="flex justify-between mb-6">
            <p className="text-base font-medium text-[rgba(28, 27, 27, 0.60)]">Price:{price}</p>
            <p className="text-base font-medium text-[rgba(28, 27, 27, 0.60)]">Credit: {creditHours}hr</p>
          </div>
          <div className=" mx-auto">
            <button className="btn text-center bg-blue-400 w-72 normal-case text-lg font-semibold text-white" onClick={()=>handleCredit(course)} >Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Course.propTypes ={
    course : PropTypes.object.isRequired,
    handleCredit : PropTypes.func
}
export default Course;
