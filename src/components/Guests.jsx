import React, { useEffect, useState } from "react";
import { UpdateGuest } from "./UpdateGuest";
import { Table, Button } from "react-bootstrap";

export const Guests = () => {

    const [appState, setAppState] = useState({ guests: []})

    useEffect( () => {
        const url = "http://localhost:8080/api/guests";
        fetch(url)
            .then(data => data.json())
            .then( response => setAppState({guests: response}));
    });

    const removeGuest = (event, id) => {
        const url = "http://localhost:8080/api/guests/"+id;

        fetch(url, {
            method: "DELETE"
        }).then(
            data => console.log(data)
        )
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Wiek</th>
                    </tr>
                </thead>
                <tbody>
                    
            {appState.guests.map( (guest, index) => {
                return (
                    <tr key={index}>
                        <td>{guest.firstName}</td>
                        <td>{guest.lastName}</td>
                        <td>{guest.age}</td>
                        <td>
                            <Button variant="warning" onClick={event=>removeGuest(event, guest.id)}>Usuń</Button>
                        </td>
                        <td>
                            <UpdateGuest guest={guest}/>
                        </td>
                    </tr>
                )
            })} 
                </tbody>
            </Table>
        </>
    )
}