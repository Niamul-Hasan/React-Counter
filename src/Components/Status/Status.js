import React from 'react';

const Status = ({ count }) => {
    return (
        <div className='w-25 mx-auto p-3 border rounded-pill my-2 shadow bg-body'>
            <h1 className='text-center text-success'> Total : {count}</h1>

        </div>
    );
};

export default Status;