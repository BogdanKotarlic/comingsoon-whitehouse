import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const App = () => {
     const [expiryTime, setExpiryTime] = useState("01 jan 2023 00:00:00");
     const [countdownTime, setCountdownTime] = useState({
          countdownDays: "",
          countdownHours: "",
          countdownlMinutes: "",
          countdownSeconds: "",
     });

     const countdownTimer = () => {
          const timeInterval = setInterval(() => {
               const countdownDateTime = new Date(expiryTime).getTime();
               const currentTime = new Date().getTime();
               const remainingDayTime = countdownDateTime - currentTime;
               const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
               const totalHours = Math.floor(
                    (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
               );
               const totalMinutes = Math.floor(
                    (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
               );
               const totalSeconds = Math.floor(
                    (remainingDayTime % (1000 * 60)) / 1000
               );

               const runningCountdownTime = {
                    countdownDays: totalDays,
                    countdownHours: totalHours,
                    countdownMinutes: totalMinutes,
                    countdownSeconds: totalSeconds,
               };

               setCountdownTime(runningCountdownTime);

               if (remainingDayTime < 0) {
                    clearInterval(timeInterval);
                    setExpiryTime(false);
               }
          }, 1000);
     };

     useEffect(() => {
          countdownTimer();
     });

     return (
          <>
               <section className="preloader">
                    <div className="spinner">
                         <span className="spinner-rotate"></span>
                    </div>
               </section>

               <section id="home">
                    <div className="overlay"></div>
                    <div className="container">
                         <div className="row">
                              <div className="col-md-12 col-sm-12">
                                   <div className="home-info">
                                        <img src="images/logo.png" alt="logo" className="logo" />
                                        <a href="https://www.instagram.com/whitehouse.sremskikarlovci/" target="_blank" style={{ marginBottom: '30px' }}>
                                             <i className="fab fa-instagram fa-lg" style={{ fontSize: '36px' }}></i>
                                        </a>
                                        <h1>Get ready everyone. <br />Our site is launching soon! <span style={{ display: 'inline' }}>&#x1F680;</span></h1>
                                        <ul className="countdown">
                                             <li>
                                                  <span className="days">{countdownTime.countdownDays}</span>
                                                  <h3>Days</h3>
                                             </li>
                                             <li>
                                                  <span className="hours">{countdownTime.countdownHours}</span>
                                                  <h3>hours</h3>
                                             </li>
                                             <li>
                                                  <span className="minutes">{countdownTime.countdownMinutes}</span>
                                                  <h3>minutes</h3>
                                             </li>
                                             <li>
                                                  <span className="seconds">{countdownTime.countdownSeconds}</span>
                                                  <h3>seconds</h3>
                                             </li>
                                        </ul>
                                        <p>&copy; Copyright - whitehouse Official Website by <a href="http://bogdankotarlic.com" className="bk_consulting" target="_blank">@bogdankotarlic</a></p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default App;