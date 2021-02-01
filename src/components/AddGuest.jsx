import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"

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
        <Form>
            <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)} />

            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)} />

            </Form.Group>
            <Form.Group>
                <Form.Label>Age:</Form.Label>
                <Form.Control type="number" name="name" value={age} onChange={event => setAge(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={event => addNewGuest(event)}>Dodaj Gościa</Button>
        </Form>
    )
}