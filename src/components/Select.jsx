import React, { useState } from "react";
import { ListP } from "./ListP";
let counter=0;
let data=[{category: "job",
id:11},
{category: "family",
id:12}
]
export const Select =({handleCategory}) => {
    
    const [dataSelect, setDataSelect] = useState([])
   
    const[newData, setNewData] = useState({})
    

    function handleNewData (e)
    {
    if(newData.trim() == "")

  {alert("Please add new category.");
   return}
    data.push({category:newData, sifra: data[data.length-1].sifra+1})
    setDataSelect(data[data.length-1].category)
    console.log("ooo")
    let inputField = document.querySelector("#inputField");
    inputField.value = "";
    setNewData("");
    let addNewCategory = document.querySelector("#addNewCategory");
        addNewCategory.style.display = "none"}

    function handleDisplay (e) {
        e.preventDefault()
        let addNewCategory = document.querySelector("#addNewCategory");
        addNewCategory.style.display = "block"
    }
    return(<>  <select onChange={handleCategory} id="select">
        <option>Select ideas category</option>
         <ListP array={data}/>
        {/* <option>{dataSelect}</option> */}
        
      </select>  
      <a href="" id="pAddNewCategory" onClick={(e)=>{handleDisplay(e)}}>Add new category?</a>
      <div id="addNewCategory">
    <input type="text" placeholder="Add new category" onInput={(e) => setNewData(e.target.value)} id="inputField"/>
          <button onClick={(e)=> {handleNewData(e)}}>Add</button>
          </div>
         
    </>)
}