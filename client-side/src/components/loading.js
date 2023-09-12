import React, { useState, useEffect } from 'react';

export const WaterBottle = () => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const water = document.querySelector(".water");
    const fillLevel = document.querySelector(".fill-level");

    water.style.animation = "fillWater 5s forwards";

    const interval = setInterval(() => {
      setCurrentPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        if (newPercentage === 100) {
          clearInterval(interval);
          setShowOptions(true); // Show options when the animation completes
        }
        return newPercentage;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="containerbottle">
      <div className="water-bottle">
        <div className="bottle-body">
          <div className="water">
            <span className="fill-level">{currentPercentage}%</span>
          </div>
          <div className="bottle-neck"></div>
          <div className="bottle-cap"></div>
        </div>
      </div>
      {showOptions && (
        <div className="options-box">
          <p>Choose an option:</p>
          <button className="option-button">Continue as Guest</button>
          <button className="option-button">Login</button>
          <button className="option-button">Register</button>
        </div>
      )}
    </div>
  );
};