import React, { useState } from 'react';
import './App.css';
import Button from './button';

function App() {
  const [input, setInput] = useState(''); 
  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <header><b>Caculator</b></header>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <Button onClick={() => handleClick('7')} label="7" />
        <Button onClick={() => handleClick('8')} label="8" />
        <Button onClick={() => handleClick('9')} label="9" />
        <Button onClick={() => handleClick('/')} label="/" />
  
        <Button onClick={() => handleClick('4')} label="4" />
        <Button onClick={() => handleClick('5')} label="5" />
        <Button onClick={() => handleClick('6')} label="6" />
        <Button onClick={() => handleClick('*')} label="x" />
  
        <Button onClick={() => handleClick('1')} label="1" />
        <Button onClick={() => handleClick('2')} label="2" />
        <Button onClick={() => handleClick('3')} label="3" />
        <Button onClick={() => handleClick('+')} label="+" />
  
        <Button onClick={() => handleClick('0')} label="0" />
        <Button onClick={() => handleClick('.')} label="." />
        <Button onClick={handleEqual} label="=" />
        <Button onClick={() => handleClick('-')} label="-" />
  
        <Button onClick={handleClear} label="C" className="clear-button" />
      </div>
    </div>
  );
}

export default App;
