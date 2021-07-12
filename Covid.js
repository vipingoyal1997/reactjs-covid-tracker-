import React,{useEffect,useState} from 'react'
import './Covid.css';
export const Covid = () => {

       const[data,setdata] = useState([]);
    const  Getcoronadata = async() => {
         const res = await fetch('https://api.covid19india.org/data.json');
         const actual = await res.json();
         console.log(actual);
         setdata(actual.statewise[0]);
    }
         
     useEffect(()=>{
            Getcoronadata();
     },[]);

    return (
      <>
             <body style={{backgroundColor:"black", margin:"auto"}}>
             <h3 style={{textAlign:"center", color:"red"}}>🔴Live</h3>
                <h1 style={{textAlign:"center",color:"white" }}>Live Covid Corona Virus Tracker</h1>
             <ul style={{textAlign:"center"}}>
             <li className="card" style={{backgroundColor:" SlateBlue", width:"18rem",height:"12rem" ,display: "inline-block" }}>
               <div className="card-body">
                    <h1 className="card-title" style={{color:"black", textShadow:"2px 2px"}}>Our Country</h1>
                    <h2 className="card-subtitle mb-2 " style={{color:"red", textShadow:"2px 2px"}}>India</h2>
           
                </div>
            </li>
            
            <li className="card" style={{backgroundColor:"Orange", width:"18rem",height:"12rem" ,display: "inline-block" }}>
               <div className="card-body">
                    <h1 className="card-title" style={{color:"black", textShadow:"2px 2px"}}>Total Recover</h1>
                    <h2 className="card-subtitle mb-2 " style={{color:"green", textShadow:"2px 2px"}}><b>{data.recovered}</b></h2>
                        
                </div>
            </li>

            <li className="card" style={{backgroundColor:"Tomato", width:"18rem",height:"12rem" ,display: "inline-block" }}>
               <div className="card-body">
                    <h1 className="card-title" style={{color:"black", textShadow:"2px 2px"}}>Total Confirm</h1>
                    <h2 className="card-subtitle mb-2 " style={{color:"blue", textShadow:"2px 2px"}}><b>{data.confirmed}</b></h2>
           
                </div>
            </li>
        
             </ul>
              <br />
           
             <ul style={{textAlign:"center"}}>
             <li className="card" style={{backgroundColor:"MediumSeaGreen", width:"18rem",height:"12rem" ,display: "inline-block" }}>
               <div className="card-body">
                    <h1 className="card-title" style={{color:"black", textShadow:"2px 2px"}}>Total Deaths Record</h1>
                    <h2 className="card-subtitle mb-2 "style={{color:"orange", textShadow:"2px 2px"}}><b>{data.deaths}</b></h2>
           
                </div>
            </li>

            <li className="card" style={{backgroundColor:"Violet", width:"18rem",height:"12rem" ,display: "inline-block" }}>
               <div className="card-body">
                    <h1 className="card-title" style={{color:"black", textShadow:"2px 2px"}}>Total Active Record</h1>
                    <h2 className="card-subtitle mb-2 "style={{color:"red", textShadow:"2px 2px"}}><b>{data.active}</b></h2>
           
                </div>
            </li>
               
            <li className="card" style={{backgroundColor:"DodgerBlue", width:"18rem",height:"12rem" ,display: "inline-block" }}>
               <div className="card-body">
                    <h1 className="card-title" style={{color:"black", textShadow:"2px 2px"}}>Last update </h1>
                    <h2 className="card-subtitle mb-2 "style={{color:"purple",paddingTop:"10px", textShadow:"1px 1px"}}><b>{data.lastupdatedtime}</b></h2>
           
                </div>
            </li>
           

             </ul>
            
              <br />
              <br />

              <br />
              <br />
              <br />
              <br />





             </body>
         

      </>
    )
}
