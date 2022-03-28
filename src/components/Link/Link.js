import React from 'react';

const Link = (props) => {
    const {name,link} =props.route;
    return (
        <div>
            
            <li className='mr-16'><a href={link}></a>{name}</li>
        </div>
    );
};

export default Link;