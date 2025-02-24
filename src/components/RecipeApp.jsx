import React, { useState,useEffect } from "react";
import { FetchRecipies } from "../../api/RecipeApi";
import { NavLink } from "react-router-dom";
const RecipeApp = () => {
    const [query,setQuery]=useState("")
    const [suggestions,setSuggestions]=useState([])
    // const [selectedRecipe,se]

   
    //function tohandle search
 const HandleSearch=async()=>{
        if(!query.trim){
            setSuggestions([])
            return ;
        }
            const data=await FetchRecipies(query)
            setSuggestions(data.recipes||[]);
        
    }
    useEffect(()=>{
        if (query.trim() === "") {
            setSuggestions([]); // Clear suggestions if query is empty
            return;
          }
        const DelayFun=setTimeout(()=>{
            HandleSearch();
        },500);
        return ()=>clearTimeout(DelayFun)
    },[query])
  
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light vw-50">
        <div className="text-center w-75">
          <h1 className="fw-bold my-3">Recipe App</h1>
          <div className="container bg-secondary bg-opacity-50 p-4 rounded shadow-lg text-light">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search recipes..."
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                backgroundColor:"transparent",
                color:"white"
              }}
            />
            <ul className="list-group mt-2">
                {suggestions.map((recipe)=>(
                   <NavLink to={`/${recipe.id}` } key={recipe.id}>
                              <li  className="list-group-item bg-dark text-light border-0 cursor-pointer">{recipe.name}</li> 
                   </NavLink>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeApp;
