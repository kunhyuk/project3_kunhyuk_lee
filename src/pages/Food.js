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


    
    // const loaded = () => {
    //     return props.item.map((item) => (
    //             <div key={item._id} className='item'>
    //                 <Link to={`/${item._id}`}>
    //                     <h1>{item.name}</h1>
    //                     <img src={item.image} alt={item.name} />
    //                     <h3>$ {item.price}</h3>
    //                 </Link>
    //             </div>
    //         )
    //     )
    // }

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