import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Food from "../pages/Food";
//import Show from "../pages/Show";


function Main(props) {
    const [food, setFood] = useState(null);
    const URL = "https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=chicken&app_id=a186ee52&app_key=%2036ca755913a6240918f3cbdf0f2efcad"
    // const URL = "http://localhost:4000/item/";
    // const URL = "https://api.edamam.com/api/recipes/v2?"
    // const app_id="a186ee52"
    // const app_key="2036ca755913a6240918f3cbdf0f2efcad"
    // const beta = true;
    // const q = "chicken";

    // let URLID = ""

    // const getURL = async () => {
    //     URLID = 
    // }

    
    const getFood = async () => {
        const res = await fetch(URL)
        const data = await res.json()
        setFood(data)
    }

    // const createItem = async (item) => {
    //     // make post request to create people
    //     await fetch(URL, {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
	// 	        body: JSON.stringify(item),
    //     });
    //     // update list of people
    //     getItem();
    // };

    // const updateItem = async (item, id) => {
    //     // make put request to create people
    //     await fetch(URL + id, {
    //         method: "put",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(item),
    //     })
    //     // update list of people
    //     getItem()
    // }

    // const deleteItem = async id => {
    //     // make delete request to create people
    //     await fetch(URL + id, {
    //         method: "delete",
    //         })
    //     // update list of people
    //     getItem()
    // }

  
    useEffect(() => {
        getFood()
    }, [])

    return (
        <main>
            <Routes>
                <Route exact path = "/" element = {<Food Food={food} />} />
                {/* <Route path = "/:id" element = {<Show item={item} updateItem={updateItem} deleteItem = {deleteItem}/>}/> */}


            </Routes>
        </main>
    );
}

export default Main;