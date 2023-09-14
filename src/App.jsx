import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Courses from "./components/courses/Courses";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [credits, setCredits] = useState([]);

  const [remainingHour, setRemainingHour] = useState(20);
  const [price, setPrice] = useState(0);
  const [hours, setHours] = useState(0);

  const handleCredit = (course) => {
    const duplicate = credits.find((credit) => credit.id === course.id);
    const newCourse = [...credits, course];
    console.table(course);
    if (duplicate) {
      toast.warn("You can not add same course twice", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (remainingHour - course.creditHours >= 0) {
      setCredits(newCourse);
      setRemainingHour(remainingHour - course.creditHours);
      setHours(hours + course.creditHours);
      setPrice(price + course.price);
    } else {
      toast.error('maximum hours limit crossed', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
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
            remainingHour={remainingHour}
            hours={hours}
            price={price}
          ></Bookmarks>
        </section>
      </main>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
