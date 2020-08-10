import React, { useState, useEffect } from 'react';
import { Select} from './Select';
import "./myIdeas.css"
import { ListIdeas } from './ListIdeas';
// import firebase from "../firebase";
let array = [];
let counter=1;
export const MyIdeas = () => {
    const[shortName, setShortName] = useState('');
    const[describeIdea, setDescribeIdea] = useState('');
    const[rate, setRate]= useState('');
    const[category, setCategory] = useState('');
    const[options, setOptions] = useState([]);
    const[alert, setAlert] = useState("");
    // useEffect(() => {
       
    //     const fetchData = async () => {
    //         const db = firebase.firestore();
    //         const data = await db.collection("options").get()
    //         console.log(data)
            
            // console(data.data())
            // console.log(options)
        
    //     }; fetchData()
    // }, [])
    
    function Category(e)  {
        e.preventDefault();
        setCategory(e.target.value);
        
    }
    function handleDisplay (e) {
        let enterIdeas = document.getElementById("enterIdeas");
        enterIdeas.style.display="flex";
       
    }
    
    function makeYourIdea (e) {
        if(shortName.trim()=="" || describeIdea.trim()=="" || rate.trim()=="" || category.trim()=="")
        {return setAlert("All fields are required.")}
        e.preventDefault(e);
        setAlert("")
        let date = new Date ();
        let dateD=`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
        let time = `${date.getHours()}:${date.getMinutes()}`;
        let idea = {
            id: counter,
            date: dateD,
            time: time,
            shortName: shortName,
            describeIdea: describeIdea,
            category: category,
            rate: rate


        }
        counter++;
       
       array.push(idea);
      
       let select = document.querySelector("#select");
       select.value= "Select ideas category";
       let inputShortName = document.querySelector("#inputShortName")
       inputShortName.value = '';
       let inputDescription = document.querySelector("#inputDescription")
       inputDescription.value = '';
       let inputRate = document.querySelector("#inputRate")
       inputRate.value = '';
       setShortName("");
       setDescribeIdea("");
       setCategory("");
       setRate("")
        
    }
    
    return (
        <>
        <div id="header">
        <h3>This is a place where you can write your ideas.</h3>
        <button onClick = {(e)=>{handleDisplay(e)}}>Let's start</button>
        </div>
        <div id = "enterIdeas">
        <Select handleCategory={Category}/>
        <input type="text" placeholder="Name of idea" maxLength="10" onInput={(e)=>setShortName(e.target.value)} id="inputShortName"/>
        <input type="text" placeholder="Describe your idea" onInput={(e)=>{setDescribeIdea(e.target.value)}} id="inputDescription"/>
        <input type="number"min="1" max="10" step="1" placeholder="Rate your idea"onInput={(e)=>{setRate(e.target.value)}} id="inputRate"/>
        <button onClick={(e)=>{makeYourIdea(e)}}>Done</button>
        <p className="alert">{alert}</p>
        </div>
        <ListIdeas arrayIdeas={array}/>
        </>
    )
}