import React from 'react';


class WaterBottle extends component{
    componentDidMount(){
        const water = document.querySelector(".water");
        const fillLevel = document.querySelector(".fill-level");

        water.style.animation = "fillWater 5s forwards";

        let currentPercentage = 0;

        const interval = setInterval(function (){
            currentPercentage++;
            fillLevel.textContent = currentPercentage + "%";

            if (currentPercentage === 100){
                clearInterval(interval);
            }
        }, 50);
    }
    render(){
        return (
            <div className="water-bottle">
            <div className="bottle-body">
              <div className="water">
                <span className="fill-level">0%</span>
              </div>
              <div className="bottle-neck"></div>
              <div className="bottle-cap"></div>
            </div>
          </div>
        )
    }
}

export default WaterBottle;