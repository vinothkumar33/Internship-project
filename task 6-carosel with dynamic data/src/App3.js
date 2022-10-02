import axios from "axios";
import React, { useEffect, useState } from "react";
 import ReactDOM from "react-dom";
 import Carousel from "react-simply-carousel";
// import Thiru from "./thiru.JPG";
// import praveen from "./praveen.JPG";
// import Dinesh from "./dinesh.JPG";
// import Madhan from './madhan.JPG'; 
// import Siva from './siva.JPG';

export default function App3() {
  const [activeSlide, setActiveSlide] = useState(0);
   const[data,setData]=useState([{}]);
   const[img,setImg]=useState([{}]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      // console.log(response.data)
      setData(response.data)
    })
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(response=>{
      // console.log(response.data)
      setImg(response.data)
    })
  })
  // console.log(data)
  // console.log(img);

  return (
     <>
    <div>
      <h1 style={{ textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                  color: "red",textAlign:"center"}}>Testominal</h1>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "text",
            marginTop: "5%",
            // border: "1px solid black",
            background: "rgb(248, 8, 48)",
            // backgroundImage:"linear-gradient( rgb(95, 15, 105), rgb(225, 0, 105))"

          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={
          {
            // style: {
            //   background: "blue"
            // }
          }
        }
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            fontSize:"xx-large",
            width: 60,
            height: 60,
            border:"none",
            color:"white",
            cursor:"pointer",
            background:"rgb(248, 8, 48)",
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            fontSize:"xx-large",
            width: 60,
            height: 60,
            border:"none",
            color:"white",
            cursor:"pointer",
            background:"rgb(248, 8, 48)",
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={3}
        speed={300}
      >
        {
          data.map((value,index)=>{
           return(
            <div
            style={{
              //  border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 300,
              height: 400
            }}
          >
            <div
              style={{
                // border: "1px solid black",
                background: "white",
                marginTop: "55px",
                width: 250,
                height: 300,
                boxShadow:
                  "0px 5px 20px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "20px"
              }}
            >
              <img
                src={img[0].url}
                width={100}
                alt="name"
                style={{
                  height: "38%",
                  borderRadius: "50%",
                  marginLeft: "75px",
                  marginTop: "-67px",
                  boxShadow:
                    "0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19)"
                }}
              />
              <h2
                style={{
                  textShadow:
                    "1px 1px 2px black, 0 0 25px red, 0 0 5px darkblue",
                  fontFamily: "Cursive",
                  fontSize: "20px",
                  textAlign: "center",
                  marginTop: "10px"
                }}
              >
                {value.name}
              </h2>
              <h2
                style={{
                  textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                  color: "red",
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "10px"
                }}
              >
               {value.id}
              </h2>
              <h2
                style={{
                  textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                  color: "red",
                  textAlign: "center",
                  fontSize: "15px",
                  marginTop: "10px"
                }}
              >
                {value.email}
              </h2>
              <p
                style={{
                  fontFamily: "Cursive",
                  textAlign: "center",
                  marginTop: "40px"
                }}
              >
                <a href={value.website}>{value.website}</a>
              </p>
            </div>
          </div>
           )
          })
        }
       {/* {data.map(v=>(
         <>  
        <div
        style={{
          //  border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 400
        }}
      >
        <div
          style={{
            // border: "1px solid black",
            background: "white",
            marginTop: "55px",
            width: 250,
            height: 300,
            boxShadow:
              "0px 5px 20px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px"
          }}
        >
          <img
            src="https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
            width={100}
            alt="name"
            style={{
              height: "38%",
              borderRadius: "50%",
              marginLeft: "75px",
              marginTop: "-67px",
              boxShadow:
                "0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19)"
            }}
          />
          <h2
            style={{
              textShadow:
                "1px 1px 2px black, 0 0 25px red, 0 0 5px darkblue",
              fontFamily: "Cursive",
              textAlign: "center",
              marginTop: "0px"
            }}
          >
            {v.name}
          </h2>
          <h2
            style={{
              textShadow:
                "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
              color: "red",
              textAlign: "center",
              fontSize: "xxx-medium",
              marginTop: "-10px"
            }}
          >
            {v.id}
          </h2>
          <h2
            style={{
              textShadow:
                "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
              color: "red",
              textAlign: "center",
              fontSize: "xxx-small",
              marginTop: "-10px"
            }}
          >
            {v.email}
          </h2>
          <p
            style={{
              fontFamily: "Cursive",
              textAlign: "center",
              marginTop: "30px"
            }}
          >
           
          </p>
        </div>
      </div>  
      </>
    ))} */}
        
      </Carousel>
    </div>
    </> 
  );
}
