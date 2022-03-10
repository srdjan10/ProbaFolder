import React, { useState } from "react";
import Card from "./Card";
import Button from '../components/Button'
import classesToDo from '../components/ToDoList.module.css'

const Todolist =(props)=>{
  const [suggestions, setsuggestions] = useState('');
    
  const addsugestionhandler = (event) => {
    event.preventDefault();
    if (suggestions.trim().length === 0 ) {
      return;
    }
    props.onToDolist(suggestions);
    /* console.log(suggestions); */
    setsuggestions('');
  };
  const suggestionsChangeHandler = (event) => {
    setsuggestions(event.target.value);
  };
  return(
  <Card className={classesToDo.input}>
      <form onSubmit={addsugestionhandler}>
        <label htmlFor="username">Enter your suggestions: </label>
        <input
          id="username"
          type="text"
          value={suggestions}
          onChange={suggestionsChangeHandler}
        />
        <Button type="submit">Add suggestions</Button>
      </form>
    </Card>
  )
};
export default Todolist;