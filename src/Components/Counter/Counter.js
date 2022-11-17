import Buttons from "../Button/Buttons";

const Counter = ({ id, count, handleDeccrement, handleIncrement }) => {

    return (
        <div>
            <div className='w-25 mx-auto p-3 border rounded-pill my-2 shadow bg-body'>
                <h1 className='text-center'>{count}</h1>
                < div className='d-flex justify-content-center'>

                    <Buttons
                        increment={() => handleIncrement(id)}
                        deccrement={() => handleDeccrement(id)}
                    />

                </div>
            </div>

        </div>
    );
};

export default Counter;