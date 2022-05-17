import React from "react";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


function FoodDetail(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isIngredientOpen, setIsIngredientOpen] = React.useState(false)

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const showIngredient = () => {
    setIsIngredientOpen(true)
  }

  const hideIngredient = () => {
    setIsIngredientOpen(false)
  }

  // const ingredientMapping = (props) => {
  //   return (

  //   )
  // }

  return (
    <div>
      <button onClick={showIngredient}> Ingredient </button>
      <Modal show = {isIngredientOpen} onHide={hideIngredient}>
      <Modal.Header>
          <Modal.Title>Ingredient</Modal.Title>
        </Modal.Header>
       
          <Modal.Body>
              {props.ingredients.text}

          </Modal.Body>

      </Modal>
    <button onClick={showModal}>Nutrition</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Nutrition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.food.ENERC_KCAL.label}: {props.food.ENERC_KCAL.quantity} {props.food.ENERC_KCAL.unit}
          <br/>
          {props.food.FAT.label}: {props.food.FAT.quantity} {props.food.FAT.unit}
          <br/>
          {props.food.FASAT.label}: {props.food.FASAT.quantity} {props.food.FASAT.unit}
          <br/>
          {props.food.FATRN.label}: {props.food.FATRN.quantity} {props.food.FATRN.unit}
          <br/>
          {props.food.FAMS.label}: {props.food.FAMS.quantity} {props.food.FAMS.unit}
          <br/>
          {props.food.FAPU.label}: {props.food.FAPU.quantity} {props.food.FAPU.unit}
          <br/>
          {props.food.CHOCDF.label}: {props.food.CHOCDF.quantity} {props.food.CHOCDF.unit}
          <br/>
          {props.food.FIBTG.label}: {props.food.FIBTG.quantity} {props.food.FIBTG.unit}
          <br/>
          {props.food.SUGAR.label}: {props.food.SUGAR.quantity} {props.food.SUGAR.unit}
          <br/>
          {props.food.PROCNT.label}: {props.food.PROCNT.quantity} {props.food.PROCNT.unit}
          <br/>
          {props.food.CHOLE.label}: {props.food.CHOLE.quantity} {props.food.CHOLE.unit}
          <br/>
          {props.food.NA.label}: {props.food.NA.quantity} {props.food.NA.unit} 

          </Modal.Body>

        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          {/* latermake savebutton here  */}
          {/* <button>Save</button> */}
        </Modal.Footer>
      </Modal>
      <button onClick={()=> window.open(props.external, "_blank")}>To external website to get detail</button>
      </div>
  );
}

export default FoodDetail