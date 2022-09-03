import React from 'react'
import axios from "axios"
import Card from './Card';
import { useEffect, useState } from "react"



  const Home = () => {
    const [data,setData]=useState([]);
    useEffect(() => {
      request();
    
    }, [])
    const request =async()=>{
      try{
          const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
          setData(data);
      }
      catch(e){
          console.log(e);
      }
      
    }
    

  return (
    <>
    
    { <div className='container'>
        <div className="container row">
            {data.map((element)=>{
              return <div className="col-md-6 col-lg-4 my-4" key={element.id}>
                <Card title={element.title} id={element.id} body={element.body} userId={element.UserID} />
              </div>
            })}
        </div>
    </div> }
 
     {/* <div style={{display:"flex", flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly"}}>
         {data.map((element)=>{
           return <div >
             <Card  key= {element.id} title={element.title} body={element.body} />
        </div>
       })}
    </div> */}
    </>
  )
}

export default Home