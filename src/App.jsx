import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Courses from "./components/courses/Courses";
function App() {
  const [credits, setCredits] = useState([]);

  const [remainingHour, setRemainingHour] = useState(20);
  const [price, setPrice] =useState(0);
  const [hours, setHours]=useState(0);

  const handleCredit = (course) => {
    const duplicate = credits.find((credit) => credit.id === course.id);
    const newCourse = [...credits, course];
    console.table(course)
    if (duplicate) {
      alert('This course has already been added.');
    } else if (remainingHour - course.creditHours >= 0) {
      setCredits(newCourse);
      setRemainingHour(remainingHour - course.creditHours);
      setHours(hours + course.creditHours);
      setPrice(price + course.price);
    } else {
      alert('Cannot exceed 20 hours');
    }
  };
  
  
  return (
    <>
      <main className="bg-[ #F3F3F3]">
        <header className="text-center font-bold text-3xl mt-12">
          Course Registration
        </header>
        <section className="flex flex-col lg:flex-row mx-auto mt-8 gap-6 container">
          <Courses handleCredit={handleCredit}></Courses>
          <Bookmarks
            credits={credits}
            remainingHour={remainingHour} hours={hours} price={price}
          ></Bookmarks>
        </section>
      </main>
    </>
  );
}

export default App;
