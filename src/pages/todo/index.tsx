import React from 'react';
import Counter from '../../components/Counter'

function ToDoPage(): JSX.Element {
    return (
        <div className='w-full h-full text-center p-5 box-content bg-gray-500 max-w-5xl font-bold text-2xl flex flex-col items-center'>
            <Counter initialCount={0} />
            <span>Hi, I'm a todo app!</span>
            <span>Hi, I'm a todo app!</span>
            <span>Hi, I'm a todo app!</span>
            <span>Hi, I'm a todo app!</span>
        </div>
    );
}

export default ToDoPage;