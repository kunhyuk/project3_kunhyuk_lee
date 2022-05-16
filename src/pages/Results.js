import React from "react";


const Results = (props) => {



    const showData = props.results.map((food) => {
        return (
            <>
            <div><hr/>{food.recipe.label}</div>
            {/* Why should I add key for */}
            <img src = {food.recipe.image} alt={food.recipe.label}/>
            </>
        )
    })

    return (
        <div>
            {showData}
            <hr/>
        </div>
    )
}

export default Results