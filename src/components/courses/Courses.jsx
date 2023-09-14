import { useEffect, useState } from 'react';
import Course from '../course/Course';
import PropTypes from 'prop-types';
const Courses = ({handleCredit}) => {
   const [courses, setCourses] = useState([]);
   useEffect(()=>{
    fetch('courses.json').then(res=>res.json()).then(data=>setCourses(data))
   },[])
    return (
        <div className='w-3/4'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
                courses.map((course)=><Course key={course.id} course={course} handleCredit={handleCredit}></Course>)
            }
           </div>
        </div>
    );
};
Courses.propTypes ={
    handleCredit : PropTypes.func
}
export default Courses;