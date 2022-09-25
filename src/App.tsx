import React, {useState, useEffect, ChangeEvent} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearch] = useState('');  //is already assigned to a string
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async() => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };
    fetchUsers();
  }, []);


  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
  
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => setSearch(e.target.value);

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox  
        placeholder='search mosters' 
        handleChange={ onSearchChange }
      />
      <CardList monsters={filteredMonsters}/>
    </div>
    
    
  );
}

export default App;
