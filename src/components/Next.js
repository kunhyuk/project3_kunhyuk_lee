import React from "react"


const Next = (props)=> {

    function goNext() {
        
        return (
                
                <button type="submit">Next</button>
                
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