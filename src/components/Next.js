import React from "react"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Next = (props)=> {

    function goNext() {
        
        return (
                
                <Button varinat='outline-secondary' type="submit">Next</Button>
                
        )
    }



    return (

        <section>
            <hr></hr>
            <form onSubmit={props.nextButton}>
            {goNext()}
            </form>


        </section>
    )
  }

export default Next