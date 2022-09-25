import CardList from './components/card-list/card-list.component';
import './App.css';
import React, {useState, useEffect} from 'react';
import SearchBox from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearch] = useState('');

  useEffect(() => {
    if(monsters.length===0){
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((r) => r.json())
        .then((r) => setMonsters(r))
    }
  });

  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

  const handleChange = (e) => setSearch(e.target.value)
  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox  
        placeholder='search mosters' 
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
    
    
  );
}

export default App;
