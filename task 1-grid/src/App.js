import "./styles.css";
import React from "react";
import { FaPlay,FaBookOpen} from 'react-icons/fa';
function App() {
  

  return (
     <>
     <div className="grid">  
       <div className="left-container">
          <h3 className="left-head">ABOUT</h3>
          <hr className="left-line"/>
          <ul className="nav-list">
            <li>
          <a href="#" className="btn">The College<FaPlay  className="icon" /></a>
          </li>
          <li>
          <a href="#" className="btn">Our Quality<FaPlay  className="icon" /></a>
          </li>
          <li>
          <a href="#" className="btn">Chairman<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Managing Trustee<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Secretary<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Principal<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Council & Committee<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Club & Cell<FaPlay  className="icon"/></a>
          </li>
          </ul>
          <h4 className="left-subhead">NAAC</h4>
          <ul className="nav-list">
          <li>
          <a href="#" className="btn">Declaration Form< FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">NAAC<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">AQAR Reports<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Academic Calendar<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Academic Council<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">BOS Minutes<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">COs , POs &amp; PSOs<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a className="btn">Activity Report<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a className="btn">AnnualReport<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Green Campus<FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Student Feedback<FaPlay  className="icon"/></a>
          </li>
          </ul>
          <h4 className="left-subhead">IQAC</h4>
          <ul className="nav-list">
          <li>
          <a href="#" className="btn">IQAC< FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">IQAC Meeting<FaPlay  className="icon"/></a>
          </li>
          </ul>
          <h4 className="left-subhead">Other</h4>
          <ul className="nav-list">
          <li>
          <a href="#" className="btn">Work with RVS< FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">NIRF Documents <FaPlay  className="icon"/></a>
          </li>
          <li>
          <a href="#" className="btn">Press Coverage  <FaPlay  className="icon"/></a>
          </li>
          </ul>
       </div>

       <div className="middle-container">
        <p className="middle-p"> <a className="a-link" href="#">HOME</a>/<a className="a-link" href="about">ABOUT</a></p>
         <hr className="middle-line"/>
         <h4 className="middle-head">At a Glance</h4>
         <ul className="middle-list">
         <li className="list-li">< FaBookOpen className="color"/><span>Established - 1986</span></li>
         <li className="list-li">< FaBookOpen className="color"/><span>Faculty-to-student ratio - 1:12</span></li>
         <li className="list-li">< FaBookOpen className="color"/><span>Enrollment - Nearly 4,800 Students</span></li>
         <li className="list-li">< FaBookOpen className="color"/><span>Location - Sulur, Coimbatore, TamilNadu, India</span></li>
         <li className="list-li">< FaBookOpen className="color"/><span>Campus - 14.24 acres, including Amenities</span></li>
         </ul>
         <p className="list-p">Rathnavel Subramaniam College of Arts and Science, affiliated to Bharathiar University, Coimbatore, offer career-oriented education leading to graduation, post-graduation and research degrees in Arts and Science disciplines. Founded on 31st October, 1986, it has grown exuberantly to become one of the biggest self- financing colleges. The college was accorded autonomous status in 2004 by UGC and re-accredited in 2014 with 'A' Grade.</p>
         <p className="list-p">The courses have been framed meticulously under autonomous system, to meet the demands of the industry. They also cater to the expectations of the present generation. The design and development of the curriculum was meticulously monitored by the respective Departments of the college. The College has on its roll a team of talented, dedicated and competent faculty adept in industry experience as well.</p>
         <p className="list-p">The College offers Bachelors, Masters and Research programs in various streams like Computer Science, Electronics, Management, Commerce, English Literature, Mathematics and Life Sciences.</p>
         <p  className="list-p">More Career-Oriented programs have been introduced incorporating Animation and Visual Effects, Oracle and Networking for students to enhance their knowledge facilitating provision for a multi-dimensional career path.</p>
       </div>
       <div className="right-container">
         <h2 className="right-head">NAVIGATE</h2>
         <hr className="right-line"/>
         <br></br>
         <img src="https://www.rvscas.ac.in/static/media/about.d0b14f5e.jpg" />
       </div>
     </div>
     </>
       
   );

}
export default App;