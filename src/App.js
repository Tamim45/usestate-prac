import React, { useState } from 'react';
import List from "./List";
import data from "./data";
function App() {
  const [people, setpeople] = useState (data)
  return <main>
    <section className='container'>
      <h4> {people.length} of my fav persons</h4>
      <List people ={people}/>
      <button onClick={() =>{setpeople([])}} className='container button'>Clear</button>
    </section>
  </main>;
}

export default App;
