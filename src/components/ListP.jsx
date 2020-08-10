import React from "react";
export const ListP =({array})=> {
    return (
    <>
    {array.map(el=> <option key={el.id}>{el.category}</option>)}</>)}