//@ts-nocheck
import React, { useState } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";



export const AddFriends = (props) => {

    const [add, setAdd] = useState({
        name: "",
        age: "",
        email: "",
        id: Date.now(),
        loading: false,
    });

    const handleChange = (e) => {
        e.preventDefault();
        setAdd({
            ...add,
            [e.target.name]: e.target.value
        })

    }

    const addingFriend = (e) => {

        axiosWithAuth().post("/friends", add)
            .then(res => {

                setAdd([...res.data, res.data],
                    props.history.push("/protected"))
            })
            .catch(err => console.log(err))

    }
    return (

        <form>

            <input
                type="text"
                name="name"
                placeholder="Name"
                value={add.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="age"
                placeholder="Age"
                value={add.age}
                onChange={handleChange}

            />
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={add.email}
                onChange={handleChange} />
            <button onClick={addingFriend}>ADD</button>
        </form>
    )


}