import React from "react";
import Card from "./Card";
import contacts from "./Contacts";

let createCard = (contact) =>{
    return(
        <Card
        key = {contact.id}
        name = {contact.name}
        img = {contact.imgURL}
        phn = {contact.phone}
        email = {contact.email}
        />
    );
}

let App = () => {
    return (
        <>
            <div><h1 className="heading">My Contacts</h1></div>
            {contacts.map(createCard)}
        </>
    );
}
export default App;
