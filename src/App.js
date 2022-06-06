import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [index, setIndex] = useState(0);
  let data = [1, 2, 3, 4, 5];
  const infinetScroll = () => {
    if (index == data.length - 1) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };
  useEffect(() => {
    let intervel;
    intervel = setInterval(() => {
      infinetScroll();
    }, 1000);
    return () => clearInterval(intervel);
  });
  return (
    <div className="carousel">
      {data.map((sc, index) => {
        return (
          <h1
            className="carousel-track"
            // style={{ transform: `translatey(-${index * 100}%)` }}
            key={Math.random() * 100}
          >
            {sc}
          </h1>
        );
      })}
    </div>
  );
}
