import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>)=>{
        console.log(inputRef.current?.value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }
    return (
        <div>
            <input type='text' value={inputValue} onChange={changeHandler} placeholder='controlled'/>
            <input type='text' ref={inputRef} placeholder='uncontrolled'/>
            <button onClick={clickHandler}>click me</button>
            
            <div draggable onDrag={dragHandler} style={{width: '200px', height: '200px', background: 'red'}}></div>
            <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler} style={{width: '200px', height: '200px', background: isDrag ? 'blue':'red', marginTop: '15px'}}></div>
        </div>
    );
};

export default EventsExample;