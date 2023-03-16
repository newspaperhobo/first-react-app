// import `useState` from react
import { useState } from 'react';
import './App.css';
import { UserItem } from './User/UserItem';
import { UserForm } from './User/UserForm';

function App() {
  // create a new state and its setter function. This state will keep the value of the user input via input field. The value will represent a username.
  // Initial value of the state is an empty string
  const [userName, setUserName] = useState("");
  const userArray = [
  { id: 1, name: "Kira", location: "Boston, MA", followers: 457, following: 997 },
  { id: 2, name: "Sonia", location: "Worcester, MA", followers: 229, following: 1295 },
  { id: 3, name: "Heidi", location: "Roslindale, MA", followers: 107, following: 194 },
  ]
  // In the `handleUserNameChange` function, after the console log. set the state that will hold the user name to the value entered into the field. (Hint: event.target.value)
  const handleUserNameChange = (e) => {
    // console.log(e.target.value);
    setUserName(e.target.value);
  }

  return (
    <div className="App">
      <h1>Instagram Account Information</h1>
      {/* In the App.js file, Pass two props to UserForm component: 
      `userName`
      `handleUserNameChange` */}
      <UserForm
        handleUserNameChange={handleUserNameChange}
        userName={userName}
      />
      <UserItem userArray={userArray} />
    </div>
  );

}


//  P1 & P2 - In the end, you will have bullet points displaying each field (except for id) for each object.
export default App;
