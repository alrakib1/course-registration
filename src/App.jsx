
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/courses/Courses'

function App() {
  

  return (
    <>
      
      
      <header className='text-center font-bold text-3xl mt-12'>Course Registration</header>
      <main className='flex mx-auto mt-8 gap-6'>
      <Courses></Courses>
      <Bookmarks></Bookmarks>
      </main>
   
    
     
    </>
  )
}

export default App
