import React from 'react'; 
import Card from '../components/Card.js';
import classesToDo from '../components/ToDoList.module.css'; 

const Lista = (props) => {
  return (
    <Card className={classesToDo.users} >
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.suggestions}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Lista;