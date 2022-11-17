import { useState } from 'react';
import Counter from '../Counter/Counter';
import Status from '../Status/Status';
const initialState = [
    {
        id: 1,
        count: 0
    },
    {
        id: 2,
        count: 0
    }
]

const Home = () => {
    const [state, setState] = useState(initialState);
    const totalCount = () => {
        return state.reduce((total, counter) => total + counter.count, 0);
    };

    const handleIncrement = (id) => {
        const updateCounter = state.map(c => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count + 1,
                }
            }
            return { ...c };
        });
        setState(updateCounter)
    }
    const handleDeccrement = (id) => {
        const updateCounter = state.map(c => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count - 1,
                }
            }
            return { ...c };
        });
        setState(updateCounter)
    }

    return (
        <div>
            {state.map(count => <Counter
                key={(count.id)}
                id={count.id}
                handleDeccrement={handleDeccrement}
                handleIncrement={handleIncrement}
                count={count.count}
            />)}
            <Status count={totalCount()} />
        </div >
    );
};

export default Home;