import React, { useState } from "react";
export default function Search(){
    const items=[{id:1,fruit:"apple"},{id:2,fruit:"orange"},{id:3,fruit:"pineapple"},{id:4,fruit:"mango"},{id:5,fruit:"cheri"},{id:6,fruit:"chittah"},{id:7,fruit:"greenapple"}];
    const [val,setval]=useState('');
    const [searchresult,setsearchresult]=useState([]);
    const change=(event)=>{
        const {value}=event.target;
          setval(value.toLowerCase());
          const result=items.filter((item)=>{return item.fruit.includes(val)});
          console.log(result);
          setsearchresult(result);
      }
    return (<div style={{backgroundColor:"#243b55",fontFamily:"sans-serif",height:"100%",width:"100%"}}>
     <div style={{position:"absolute",top:"20%",left:"30%",backgroundColor:"lightgreen",minWidth:"400px",minHeight:"400px",borderRadius:"20px"}}>
     <h1 style={{color:"lightred",fontSize:"25px",paddingLeft:"25px"}}>Search App</h1>

       <input type='text' name='value'  value={val} style={{marginTop:"7%",marginLeft:"5%",width:"65%",height:"25%",fontFamily:"sans-serif",fontSize:"20px",borderRadius:"10px"}} onChange={change} placeholder='s e a r c h' />
      <div style={{marginTop:"5%",marginLeft:"7%"}}>
        {
            searchresult.map((item)=>{return <div style={{marginTop:"3%",marginBottom:"3%",fontSize:"25px"}}>{item.fruit}</div>})
        }
      </div>
     </div>
    </div>);
}