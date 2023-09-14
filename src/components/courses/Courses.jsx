import { useEffect, useState } from 'react';
import Course from '../course/Course';

const Courses = () => {
   const [courses, setCourses] = useState([]);
   useEffect(()=>{
    fetch('courses.json').then(res=>res.json()).then(data=>setCourses(data))
   },[])
    return (
        <div className='w-3/4'>
           <div className='grid grid-cols-3 gap-6'>
           {
                courses.map(course=><Course key={course.id} course={course}></Course>)
            }
           </div>
        </div>
    );
};

export default Courses;