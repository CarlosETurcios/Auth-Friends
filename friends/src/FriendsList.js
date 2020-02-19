import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utils/axiosWithAuth"
import { AddFriends } from "./AddFriends";


export default function FriendsList(props) {

    const [friends, setFriends] = useState()

    useEffect(() => {



        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => console.error(err))




    }, [])

    if (!Array.isArray(friends)) {
        return (
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                <p>loading...</p>
            </div>
        )

    } else {


        return (
            <div>
                <AddFriends />
                {friends.map(friends => (
                    <div key={friends.id}>
                        <h1>Name: {friends.name}</h1>
                        <p>age: {friends.age}</p>
                        <p>email: {friends.email}</p>
                    </div>
                ))}

            </div>

        )

    }

}




