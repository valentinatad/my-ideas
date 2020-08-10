import React from "react";
export const ListIdeas = (array) => {

   
    return (
        <>
        <div id="divListIdeas">
        
        {array.arrayIdeas.map(el=><div
        className="listIdeas" key={el.id}>
            <p className="classTh1 fr"><b>Nb.</b> {el.id}</p>
            <p className="classTh sc"><b>Date:</b> {el.date.toLocaleString()}<br></br> <b>time:</b> {el.time}</p>
            <p className="classTh fr"><b>Name:</b> {el.shortName}</p>
            <p className="classTh sc"><b>Description:</b> {el.describeIdea}</p>
            <p className="classTh fr"><b>Category:</b> {el.category}</p>
            <p className="classTh1 sc" ><b>Rate:</b> {el.rate}</p>
            <button>Change</button>
            <button>Delete</button>
        </div>)}
        </div>
        
        </>
    )
}