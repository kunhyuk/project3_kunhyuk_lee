import React from "react";
import FoodDetail from "../components/FoodDetail";


const Results = (props) => {

    const showData = props.results.map((food, idx) => {
        return (
            <div key = {idx}>


            <h2><hr/>{food.recipe.label}</h2>
            
            {/* Why should I add key for */}
            <img src = {food.recipe.image} alt={food.recipe.label} />
            <span><h3>Ingredients: </h3> 

                {food.recipe.ingredientLines}
                <br></br>
                <FoodDetail food ={food.recipe.totalNutrients} external = {food.recipe.url} ingredients = {food.recipe.ingredients}/>
            </span>
            
            </div>
        )
    })


    return (
        <div>
            {showData}
            
        </div>
    )
}

export default Results