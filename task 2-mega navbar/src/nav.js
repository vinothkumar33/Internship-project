import "./styles.css";
import React from "react";
import { BsSearch} from "react-icons/bs";
import {RiArrowDropDownLine} from "react-icons/ri";
import {MdSupportAgent} from "react-icons/md";
function Nav(){

  return(
  <>
      <div>
         <ul>
         <li className="dropdown">
           <a href="#" className="dropbtn" ><b>Services</b><RiArrowDropDownLine /></a>
           <div className="dropdown-content">
             <div className="dropdown-content-left">
               <a href="#">All Services</a>
               <a href="#">Web App Development</a>
               <a href="#">Mobile App Development</a>
               <a href="#">Desktop App Development</a>
               <a href="#">Software Product Development</a>
               <a href="#">Architecture Consultation</a>
               <a href="#">Serverless Applications</a>
               <a href="#">Digital Marketing</a>
               <br></br>
               <a href="#">Publishing & Content Solutions</a>
               <a href="#">Transcription</a>
               <a href="#">Translation</a>
               
             </div>
             <div className="dropdown-content-right">
               <a href="#">Application Maintenance</a>
               <a href="#">Cloud Infrastructure</a>
               <a href="#">UI UX Design Services</a>
               <a href="#">Static Websites</a>
               <a href="#">Outstaffing Services</a>
               <a href="#">Outsourcing Services</a>
               <a href="#">Outstaffing Services</a>
               <a href="#">Quality Assurance Services</a>
               <br></br>
               <a href="#">Localization Services</a>
               <a href="#">Accessibility Services</a>
               <a href="#">Voice Support</a>
             </div>
           </div>
         </li>
         <li className="dropdown-1">
           <a href="#" className="dropbtn-1" ><b>Products</b><RiArrowDropDownLine /></a>
           <div className="dropdown-content-1">
             <div className="dropdown-content-left-1">
               <a href="#">Aadu</a>
               <a href="#">Squadzen</a>
               <a href="#">Squashfit</a>             
             </div>
            
           </div>
         </li>
         <li className="dropdown">
           <a href="#" className="dropbtn" ><b>Hire Us</b><RiArrowDropDownLine /></a>
           <div className="dropdown-content">
             <div className="dropdown-content-left">
               <a href="#">Hire Angular Developers</a>
               <a href="#">Hire React Developers</a>
               <a href="#">Hire NodeJS Developers</a>
               <a href="#">Hire React Native Developers</a>
               <a href="#">Hire UI/UX Designers</a>
               <a href="#">Hire Software Architects</a>
               <a href="#">Hire Software Developers</a>          
             </div> 
             <div className="dropdown-content-right">
               <a href="#">Hire Vue.js Developers</a>
               <a href="#">Hire Ionic Developers</a>
               <a href="#">Hire Mongo DB Developers</a>
               <a href="#">Hire SQL Developers</a>
               <a href="#">Hire Electron Developers</a>
               <a href="#">Hire Fullstack Engineers</a>
               <a href="#">Hire Digital Marketers</a>
             </div>
             
           </div>
         </li>
         <li className="dropdown-1">
           <a href="#" className="dropbtn-1" ><b>Company</b><RiArrowDropDownLine /></a>
           <div className="dropdown-content-1">
             <div className="dropdown-content-left-1">
               <a href="#">About us</a>
               <a href="#">Blog</a>
               <a href="#">Careers</a>       
               <a  href="#">Portfolio</a>      
             </div>
            
           </div>
         </li>
         <li className="dropdown">
           <a  href="#" className="dropbtn" ><b>Contact</b></a>
         </li>
         <li>
           <a href="#" ><b><BsSearch /></b></a>
         </li>
         <li className="button" >
           <div >
           <a href="#" className="btn" ><b>Free Consultation</b></a>
           </div>
         </li>
       </ul>
        
     </div> 
    
  </>
  )
}
export default Nav;