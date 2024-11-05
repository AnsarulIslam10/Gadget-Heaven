import React from 'react';

const Heading = ({title}) => {
    return (
        <div>
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
        </div>
    );
};

export default Heading;