import React, { useState } from 'react';

const Form = props => {
    const [teamMember, setTeamMember] = useState([
        {
        name: "",
        email: "",
        role: ""
    }]);

    const changeHandler = event = {
        setTeamMember({
            ...teamMember,
            [event.target.name]: event.target.value
        });
    };

    const teamSubmitHandler = event => {
        event.preventDefault();

        props.newTeamMember({
            ...teamMember, 
            id: Date.now();
        });

        setTeamMember({
            name: "",
            email: "",
            role: ""
        });
    };

    return(
        <form onSubmit = {teamSubmitHandler}>
            <label htmlFor = "name">Name:</label>
            <input 
                type = 'text'
                name = 'name'
                value = {teamMember.name}
                onChange = {changeHandler}
                placeholder = 'Type name here' />
            <label htmlFor = "email">Email:</label>
            <input 
                type = 'text'
                name = 'email'
                value = {teamMember.email}
                onChange = {changeHandler}
                placeholder = 'Type email here' />
            <label htmlFor = "role">Role: </label>
            <input 
                type = 'text'
                name = 'role'
                value = {teamMember.role}
                onChange = {changeHandler}
                placeholder = 'Type role here' />
            <button type = 'submit'>Create New Team Member</button>
        </form>
    );
};