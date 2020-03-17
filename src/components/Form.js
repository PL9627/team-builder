import React, { useState } from 'react';
import Members from './Members';

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

    return();
}