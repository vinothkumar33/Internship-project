import "./styles.css";
import React, { useEffect, useState } from "react";


function App(){
     const[open,setOpen]=useState(false);
     const handleChange=(e)=>{
       console.log(open);
       
       console.log(open);
      let id=e.target.id; 
      console.log(id);
      let src1 =document.getElementById("img1")
      let src2 =document.getElementById("img2")
      let src3 =document.getElementById("img3")
      let src4 =document.getElementById("img4")
      let src5 =document.getElementById("img5")
      let src6 =document.getElementById("img6")
      
      if(id == src1.id){
        document.getElementById("myModal").style.display = "block";
        document.getElementById("img01").src = src1.src;
      }
      else if(id == src2.id){
        document.getElementById("myModal").style.display = "block";
        document.getElementById("img01").src = src2.src;
      }
      else if(id == src3.id){
        document.getElementById("myModal").style.display = "block";
        document.getElementById("img01").src = src3.src;
      }
      else if(id == src4.id){
        document.getElementById("myModal").style.display = "block";
        document.getElementById("img01").src = src4.src;
      }
      else if(id == src5.id){
        document.getElementById("myModal").style.display = "block";
        document.getElementById("img01").src = src5.src;
      }
      else{
        document.getElementById("myModal").style.display = "block";
        document.getElementById("img01").src = src6.src;
      }
     }
     useEffect(() => {
      setOpen(true);
     },[open]);
     
  return(
  <>
    <div className="main-container">
    <h1 className="head"><b>Popup Gallery</b></h1>
    <img id="img1" className="myImg" onClick={handleChange} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Snow" />
    <img id="img2" className="myImg" onClick={handleChange} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="Snow" />
    <img id="img3" className="myImg" onClick={handleChange} src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="Snow" />
    <img id="img4" className="myImg" onClick={handleChange} src="https://www.oberlo.com/media/1603969791-image-1.jpg" alt="Snow" />
    <img id="img5" className="myImg" onClick={handleChange} src="https://i.pcmag.com/imagery/articles/00Cx7vFIetxCuKxQeqPf8mi-23..v1643131202.jpg" alt="Snow" />
    <img id="img6" className="myImg" onClick={handleChange} src="https://tinypng.com/images/social/website.jpg" alt="Snow" />
   
    {open && <div id="myModal" class="modal">
      <span class="close" onClick={()=>{setOpen(false)}}>&times;</span>
      <img class="modal-content" id="img01" />
      <div id="caption"></div>
    </div>}
    </div>
    


  </>
  )
}
export default App;