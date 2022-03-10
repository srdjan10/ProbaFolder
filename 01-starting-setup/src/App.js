import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Lista from "./components/Lista.js";
import Todolist from "./components/ToDoList";
import ListPeopleHandler from "./components/ListPeopleHandler";
import Button from "./components/Button"; 
import Navigation from "./components/Navigation";


function App() {

  const [people, setPeople] = useState([]);

  useEffect(()=>{
    const podatak = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const ucitaniPodatak = [];
  
  for(const key in data){
    ucitaniPodatak.push({
      id:key,
      name: data[key].name,
      username: data[key].username,
      email: data[key].email,
    })
    setPeople(ucitaniPodatak);
    }
  }
  podatak();
  },[])

  const [suggestionslist, setsugestionslist] = useState([]);
  const addsugestionhandler =(sugest)=>{
    setsugestionslist((prevlistsugestion)=>{
      return[...prevlistsugestion, {suggestions: sugest, id:Math.random().toString()},];
    });
  };
  
 /* async function fetchPeopleHandler() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
        console.log(data);
          const transformedPeople = data.map(PeopleData => {
            return {
              id: PeopleData.id,
              name: PeopleData.name,
              username: PeopleData.username,
              email: PeopleData.email,
              };
          });
          setPeople(transformedPeople); 
    };  */
  return (
  <div>
     <Header/>
     <Navigation/>
      <div> 
      <Todolist onToDolist={addsugestionhandler}/>
      </div>
      <Lista users={suggestionslist}/>
      {/* <Button onClick={fetchPeopleHandler}>IMPORT PEOPLE</Button> */}
      <section>
      <ListPeopleHandler peoples={people} />
      </section>
  </div>
  );
}
export default App;
