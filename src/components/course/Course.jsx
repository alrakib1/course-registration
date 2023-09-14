const Course = ({ course }) => {
  console.table(course);
  const { id, courseName, courseDetails, creditHours, price, img } = course;
  return (
    <div >
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            className="w-full"
            src={img}
            alt={`image of ${courseName}`}
            class="rounded-xl"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-lg font-semibold">{courseName}</h2>
          <p className="text-sm font-normal text-gray-700">{courseDetails}</p>
          <div className="flex justify-between">
            <p className="text-base font-medium text-gray-700">Price:{price}</p>
            <p className="text-base font-medium text-gray-700">Credit: {creditHours}hr</p>
          </div>
          <div class="card-actions mx-auto">
            <button class="btn text-center bg-blue-400 w-80 normal-case text-lg font-semibold text-white" >Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
