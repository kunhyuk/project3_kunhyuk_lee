import React from "react"


const Search = (props)=> {

    return (

        <section>
            <form onSubmit={props.handleSubmit}>
                <span>Search</span>
                <input onChange={ props.handleSearch} name ="searchbar" type="text" value={props.query} ></input>
                <button>Search</button>
            </form>
        </section>
    )
  }

export default Search