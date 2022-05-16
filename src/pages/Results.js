import React from "react";


const Results = (props) => {

    const showData = props.results.map((food) => {
        return (
            <div>{food.recipe.label}</div>
        )
    })

    return (
        <div>
            {showData}
        </div>
    )
}

export default Results