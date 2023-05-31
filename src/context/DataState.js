import { useState } from "react";
import DataContext from "./dataContext";
const DataState = (props)=>{
  const URL = 'http://localhost:5000/data/'
    const initialdata = []

const  [data, setData]= useState(initialdata)

const fetchData =async()=>{
  const response = await fetch(`${URL}/getdata`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  console.log(json)
setData(json)
}

const addName= async(name)=>{
  const singh = {
    "name": name,
  }
  setData(data.concat(singh))
  const response = await fetch(`${URL}/adddata`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({name})
  });
  const json = await response.json();
  console.log(json)
}
const dltClicker = async(id)=>{
  console.log(id)
  const  newData = data.filter((e)=>{return e._id!==id})
  setData(newData);
  const response = await fetch(`${URL}/dlt/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  console.log(json)
}
    return(
        <DataContext.Provider value={{data , addName, dltClicker, fetchData}}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataState;