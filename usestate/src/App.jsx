import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Yaş"
      />
      <p>İsim: {name}, Yaş: {age}</p>
    </div>
  );
}

export default App
