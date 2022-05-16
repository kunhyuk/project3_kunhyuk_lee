import React from "react"


const Search = (props)=> {

    return (

        <section>
            <form onSubmit={props.handleSubmit}>
               <h2> <span>Search </span>
                <input onChange={ props.handleSearch} name ="searchbar" type="text" value={props.query} ></input>
                <button>Search</button>
                </h2>
            </form>
        </section>
    )
  }

export default Search