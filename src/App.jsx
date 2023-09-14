
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/courses/Courses'
function App() {
  const [credits, setCredits] = useState([]);
  
const handleCredit = course =>{
  const newCourse = [...credits,course];
  setCredits(newCourse);
}
  return (
    
    <>
      
      
      <main className='bg-[ #F3F3F3]'>
      <header className='text-center font-bold text-3xl mt-12'>Course Registration</header>
      <section className='flex flex-col lg:flex-row mx-auto mt-8 gap-6 container'>
      <Courses handleCredit={handleCredit}></Courses>
      <Bookmarks credits={credits}></Bookmarks>
      </section>
      </main>
   
    
     
    </>
  )
}

export default App
