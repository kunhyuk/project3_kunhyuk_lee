import { useState } from 'react';
import { Link } from 'react-router-dom';

function Food(props) {// state to hold formData
    const [newForm, setNewForm] = useState({
        label: "",
        image: ""
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createItem(newForm);
        setNewForm({
            label: "",
            image: ""
        });
    };


    
    const loaded = () => {
        return props.food.map((food) => (
                <div key={food._id} className='food'>
                    
                        <h1>{food.label}</h1>
                        <img src={food.image} alt={food.name} />
                        <h3>$ {food.price}</h3>
                    
                </div>
            )
        )
    }

    const loading = () => {
        return <h1>Loading.........</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.label}
                    name="label"
                    placeholder="label"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.price}
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Item" />
            </form>
            {/* {props.item ? loaded() : loading()} */}
        </section>
    )
}

export default Food