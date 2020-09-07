import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import courseData from '../src/courseData/courses';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {

  const [carts, setCart] = useState([]);

  const btnEventHandler = (course) => {
    setCart([...new Set([...carts, course])]);
  }

  return (
    <div>
      <Header carts={carts}></Header>

      <div className="container mt-5">
        <div className="row">
          {
            courseData.map(courses =>
              <Courses courses={courses} btnEventHandler={btnEventHandler}
                key={courses.id}>
              </Courses>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
