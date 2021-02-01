import React, { useState } from "react";
import { Button, Form } from "react-bootstrap"

export const UpdateGuest = (props) => {

    const [firstName, setFirstName] = useState(props.guest.firstName);
    const [lastName, setLastName] = useState(props.guest.lastName);
    const [age, setAge] = useState(props.guest.age);


    const updateGuest = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const newGuest = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }

        const url = "http://localhost:8080/api/guests/"+props.guest.id;

        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newGuest)
        }).then(
            data => console.log(data)
        )
    }


    return (
        <Form inline>
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
            <Button variant="warning" type="submit" onClick={event => updateGuest(event)}>Edytuj</Button>
        </Form>
    )
}