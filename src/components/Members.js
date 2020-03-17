import React from 'react';

const Members = props => {
    return(
        <div>
            {props.teamMember.map(member => (
                <div key = {member.id}>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
};

export default Members;