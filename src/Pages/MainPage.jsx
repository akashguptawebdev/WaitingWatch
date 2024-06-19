import React, { useEffect, useState } from "react";
import "./MainPage.css";
import watchImg from "../assets/WatchBg.png"
const MainPage = () => {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [second, setSecond] = useState("");

  const findDateAndTime = () => {
    const futureDate = new Date("2024-07-17");

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffInMilliseconds = futureDate - currentDate;

    // Calculate the difference in days, hours, minutes, and seconds
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // Calculate remaining hours, minutes, and seconds
    const remainingHours = diffInHours % 24;
    const remainingMinutes = diffInMinutes % 60;
    const remainingSeconds = diffInSeconds % 60;

    setHours(remainingHours);
    setMinutes(remainingHours);
    setSecond(remainingSeconds);
    setDays(diffInDays);
  };

  setInterval(() => {
    findDateAndTime();
  }, 1000);

  return (
    <div className="TimerContainer font-serif flex justify-center  items-center h-screen w-full  bg-black text-white">
      <div className="main px-10">

        <h1 className=" quets text-2xl max-w-[250px] font-sans ">Every second brings us closer to being together.</h1>

            <div className="watch mb-20">
                <img className="" src={watchImg} alt="" />
            </div>


        <div className="meters flex   justify-center items-center gap-5">
          <div className="days custom">
            <h1> Date</h1>
            <h1> {days}</h1>
          </div>
          <div className="hours custom">
            <h1> Hours</h1>
            <h1> {hours}</h1>
          </div>

          <div className="minutes custom">
            <h1> Minuts</h1>
            <h1> {minutes}</h1>
          </div>
          <div className="second custom">
            <h1> Second</h1>
            <h1> {second}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
