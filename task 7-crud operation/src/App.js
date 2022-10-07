import "./styles.css";
import React, { useEffect, useState } from "react";
import {  useFormik } from "formik";
import { Routes, Route, HashRouter } from "react-router-dom";

// create account for users
const CreateAccount =({data})=>{
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
     data.push(values);
     console.log(data);
    }
  });
  return(
    <>
    <div>
      <form onSubmit={formik.handleSubmit}>
        <br></br>
        <br></br>
        <label>Name:</label>
        <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} />
        <br></br>
        <br></br>
        <label>Email:</label>
        <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
        <br></br>
        <br></br>
        <label>Password:</label>
        <input type="password"  id="password" name="password"value={formik.values.password} onChange={formik.handleChange}/>
        <br></br>
        <br></br>
        <input className="btn" type="submit" />
      </form>
     </div>
    </>
  )
}

// view a details for users
const ViewDetails =({data})=>{
  // let header =Object.keys(data)
  return(
    <>
    <br></br>
    {/* {header.map((value,index)=>{
      return <div>{value}</div>;
    })} */}
    <div >
    {data.map((user,index)=>{
        console.log(user);
        return(
         <div className="card">
         <h1>Name:{user.name}</h1> <h1>Email:{user.email}</h1><h1> Password:{user.password}</h1>
        </div> 
        )})}
        </div>
    </>
  )
}

// users can change the filed input
const Update =({data})=>{
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      data.find((user,index)=>{
        if(values.email == user.email){
          if(values.name==""){
            user.password = values.password;
            console.log("update successfully");
          }
          else{
            user.name = values.name;
            console.log("update successfully");
          }
          return
        }
        else{
          console.log("email can't match");
        }
      })
    }
  });
  return(
    <>
    <div>
      <form onSubmit={formik.handleSubmit}>
        <br></br>
        <br></br>
        <h1>Enter your Email</h1>
        <label> Email:</label>
        <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
        <br></br>
        <br></br>
        <h1>what changes you need</h1>
        <label>Name:</label>
        <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} />
        <br></br>
        <br></br>
        <label>Password:</label>
        <input type="password"  id="password" name="password"value={formik.values.password} onChange={formik.handleChange}/>
        <br></br>
        <br></br>
        <input className="btn" type="submit" />
      </form>
     </div>
    </>
  )
}

//users can delete the account 
const Delete =({data})=>{
  let value=data.splice(0,data.length)

  return(
    <>
    <div>
      <h1>{data==[]?"Noo Details here":"Deleted  Successfully"}</h1>
     </div>
    </>
  )
}


const Account=()=>{
  return(
    <div>
      <a  className="btn" href="#/CreateAccount/">Create Account</a>
      <a  className="btn" href="#/update/">Update Details</a>
      <a  className="btn" href="#/delete/">Delete Account</a>
      <a  className="btn" href="#/view/">View Details</a>
    </div>
  )
}
function App(){
  let data=[];

  return(
   <HashRouter>  
     <Account/>
        <div>
          <Routes>
            <Route path="/createaccount" element={<CreateAccount data={data} />} />
            <Route path="/view" element={<ViewDetails data={data}/>} />
            <Route path="/update" element={<Update data={data}/>} />
            <Route path="/delete" element={<Delete data={data}/>} />
          </Routes >
        </div>
    </HashRouter>
  
  )
}
export default App;