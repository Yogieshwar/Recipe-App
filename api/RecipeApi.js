//function to fetch recipes
export const FetchRecipies =async(query)=>{
    const res=await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
    const data=res.json()
    console.log(data)
    return data

}

//function to fetch recipes Details
export const FetchRecipieDetails =async(id=null)=>{
    const res=await fetch(`https://dummyjson.com/recipes/${id}`)
    const data=res.json()
    console.log(data)
    return data

}
