import { Button } from 'react-bootstrap';


const Buttons = ({ increment, deccrement }) => {

    return (
        <div>
            < div className='d-flex justify-content-center'>

                <Button
                    onClick={increment}
                    variant="success" className='me-3'>Increment</Button>
                <Button
                    onClick={deccrement}
                    variant="danger">Deccrement</Button>

            </div>
        </div>
    );
};

export default Buttons;