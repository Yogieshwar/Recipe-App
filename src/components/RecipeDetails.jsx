import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchRecipieDetails } from "../../api/RecipeApi";
import { useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const [details, setDetails] = useState(null);

  const navigate=useNavigate()

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await FetchRecipieDetails(id);
        setDetails(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };
    getDetails();
  }, [id]);
  // Handle loading state
  if (!details) {
    return (
      <div className="vh-100 bg-dark text-light d-flex justify-content-center align-items-center">
        Loading...
      </div>
    );
  }
  return (
    <>
      <div className=" bg-black text-light container-fluid py-5 text-center">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
            <img
              src={details.image}
              alt=""
              width={400}
              className="img-top border rounded recipe-img"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center d-flex justify-content-center flex-column mt-4">
            <h3>Name:&nbsp;{details.name}</h3>
            <p>Meal Type:&nbsp;{details.mealType}</p>
            <p>Cook Time:&nbsp;{details.cookTimeMinutes}</p>
            <h5 className="text-warning">Rating:&nbsp;{details.rating}</h5>
          </div>
        </div>
        <div className="row my-5 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-3">
            <h4 className="text-center">Ingredients</h4>
            <ul className="ingredient-list list-style">
              {details.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-3">
          <h4 className="text-center">Instructions</h4>
            <ul className="instruction-list list-style">
              {details.instructions.map((instruction) => (
                <li>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className="btn btn-success py-2 px-4 border rounded text-center fw-600" onClick={()=>navigate('/')}>Back</button>
      </div>
    </>
  );
};

export default RecipeDetails;
