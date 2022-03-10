import React from 'react'; 
import ListPeople from '../components/ListPeople';
import classes from '../components/ListPeople.module.css'
import Card from './Card.js';

const ListPeopleHandler = (props) => {
    return (
    <Card className={classes.users}>
      <ul className={classes['users ul']}>
        <li className={classes['users li']}>
        {props.peoples.map((people) => (
           <ListPeople 
           key={people.id}
           name={people.name}
           username = {people.username}
           email = {people.email}
           />
        ))}
        </li>
        </ul>
     </Card>
  );
};

export default ListPeopleHandler;