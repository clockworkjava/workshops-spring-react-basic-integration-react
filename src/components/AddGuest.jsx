import React, { useState } from "react";

export const AddGuest = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);


    const addNewGuest = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const newGuest = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }

        const url = "http://localhost:8080/api/guests";

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newGuest)
        }).then(
            data => console.log(data)
        )
    }


    return (
        <form>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={ event => setFirstName(event.target.value)} />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={ event => setLastName(event.target.value)} />
            </label>
            <label>
                Age:
                <input type="number" name="name" value={age} onChange={event => setAge(event.target.value)} />
            </label>
            <input type="submit" value="Dodaj gościa" onClick={event => addNewGuest(event)}/>
        </form>
    )
}