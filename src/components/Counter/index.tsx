import React, {useState} from 'react';

interface Props {
    initialCount: number;
}

function Counter({initialCount}: Props): JSX.Element {

    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(prevCount =>prevCount + 1)
    const decrement = () => setCount(prevCount =>prevCount - 1)
    const reset = () => setCount(initialCount)
    return (
        <div className='flex flex-col bg-blue-200 w-2/12 p-2 box-content text-center items-center h-auto'>
            <span>{count}</span>
            <div className='p-2 flex flex-row place-content-around box-content h-8'>
                <button className='m-1 w-8 h-6 text-xl p-2 box-content font-bold bg-blue-100 hover:bg-blue-300 rounded-2xl' onClick={decrement}>-</button>
                <button className='m-1 w-8 h-6 text-xl p-2 box-content font-bold bg-blue-100 hover:bg-blue-300 rounded-2xl' onClick={increment}>+</button>
            </div>
            <button className='mt-2 w-6/12 h-auto text-xl p-2 box-content font-bold bg-blue-100 hover:bg-blue-300 rounded-2xl' onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;