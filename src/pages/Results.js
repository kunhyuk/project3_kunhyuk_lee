import React from "react";
import FoodDetail from "../components/FoodDetail";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css";

const Results = (props) => {

    const showData = props.results.map((food, idx) => {
        return (
            <Container class="container">
                <hr/>
                <Row>
                    <Col>
            {/* <div key = {idx}> */}


            <h2>{food.recipe.label}</h2>
            
            {/* Why should I add key for */}
            <img src = {food.recipe.image} alt={food.recipe.label} />
            </Col>
            <Col>
            <br/><br/>
            <h3>Description: </h3> 
            <h4>
                Cuisine: {food.recipe.cuisineType}
                <br/>
                Meal Type: {food.recipe.mealType}
                <br/>
                Dish Type: {food.recipe.dishType}
                <br/>
                Calories: {food.recipe.calories} kcal
                </h4>
                <br></br>
                <FoodDetail food ={food.recipe.totalNutrients} external = {food.recipe.url} ingredients = {food.recipe.ingredients}/>
            
                </Col>
            {/* </div> */}
            </Row>
            </Container>
        )
    })


    return (
        <div>
            {showData}
            
        </div>
    )
}

export default Results