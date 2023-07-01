import React, { useState } from 'react';

function Accordion(){
    const[status,setStatus]=useState({
        status1:true,
        status2:false,
        status3:false,
        status4:false
})
const handleClick1=(key1)=>{
    setStatus(prevStatus=>({...prevStatus,[key1]:!prevStatus[key1]}))
}
const style={
    collapsed:{
        display:"none"
    },
    expanded:{
        display:"block"
    }
};
return (
    <div>
        <br/>
        <button style={{width:"100%",fontSize:"16px"}} onClick={()=>handleClick1("status1")}>Moral of the story</button>
        <p style={status.status1?style.expanded:style.collapsed}><span>Greed is not good for you. Be content and satisfied to lead a happy and fulfilling life</span></p>
        <button style={{width:"100%",fontSize:"16px"}} onClick={()=>handleClick1("status2")}>Part1</button>
        <p style={status.status2?style.expanded:style.collapsed}><span>Once upon a time, there was a Greek King, Midas.
He was very rich and had lots of Gold. He had a daughter, who he loved a lot.
One day, Midas found an angel in need of help. He helped her and in return she agreed to grant a wish.</span></p>
        <button style={{width:"100%",fontSize:"16px"}} onClick={()=>handleClick1("status3")}>Part2</button>
        <p style={status.status3?style.expanded:style.collapsed}><span>Midas wished that everything he touched would turn into gold. His wish was granted
On his way home, he touched rocks and plants and they turned into gold.
As he reached home, in excitement he hugged his daughter, who turned into gold.</span></p>
        <button style={{width:"100%",fontSize:"16px"}} onClick={()=>handleClick1("status4")}>Part3</button>
        <p style={status.status4?style.expanded:style.collapsed}><span>Midas was devastated and he had learnt his lesson. Upon learning his lesson, Midas asked the angel to take his wish away.</span></p>
    </div>
)
}
export default Accordion;