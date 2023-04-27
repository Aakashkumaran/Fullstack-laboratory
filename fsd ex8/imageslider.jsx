import React from "react";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";
import img5 from "./5.jpeg";
import img6 from "./6.jpeg";
import img7 from "./7.jpeg";
import img8 from "./8.jpeg";
import left from './left.png';
import right from './right.png';
import { useState } from "react";
export default function Imageslider(){
     const arr=[img1,img2,img3,img4,img5,img6,img7,img8];
     const [index,setindex]=useState(0);
     const leftslide=()=>{
        var ind=index-1;
        if(ind<0)
         ind+=8;
         setindex(ind);
     }
     const rightslide=()=>{
        var ind=index+1;
        if(ind>7)
         ind%=8;
         setindex(ind);
     }
     const slide=(id)=>{
        setindex(id);
     }
     return(
        <div style={{backgroundColor:"lightgreen",fontFamily:"sans-serif",height:"100%",width:"100%"}}>
        <h2 style={{fontFamily:"sans-serif",position:"absolute",top:"2%",left:"40%"}}>Image slider</h2>
            <div style={{position:"absolute",top:"20%",left:"33%",width:"400px",height:"400px",borderRadius:"20px"}}>
              <div>
                  <img  style={{borderRadius:"30px"}} src={arr[index]} alt="image unavailable" width="400px" height="400px"/>
              </div>
              <div style={{position:"absolute" ,top:"40%",left:"5%" }}>
              <button style={{borderRadius:"30px"}} onClick={leftslide}>
              <img  src={left} alt="image unavailable" width="50px" height="50px"/>
              </button>              </div>
              <div style={{position:"absolute" ,top:"40%",left:"80%" }}>
              <button style={{borderRadius:"30px"}} onClick={rightslide}>
              <img src={right} alt="image unavailable" width="50px" height="50px"/>
              </button>
              </div>
              <div style={{width:"150px",height:"5%",position:"absolute",top:"85%",left:"30%",paddingTop:"3%",paddingLeft:"5px",backgroundColor:"white",borderRadius:"20px",}}>{
                arr.map((item,index)=>{return (<div id={index} onClick={e=>{slide(e.target.id)}} style={{position:"absolute",borderRadius:"40px",backgroundColor:"black",width:"15px",height:"15px",left:(18*index+2)+"px"}}></div>)})
              }</div>
            </div>

        </div>
        
     );
}