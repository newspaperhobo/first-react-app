import './App.css';
import { UserList } from './components/UserList';



function App() {
  // P3 - Move the “users” array inside the App component.
  // P1 & P2 - Inside the App() functions, define an array of objects named "list" 
  const userArray = [
  // P1 & P2 - Make sure this array has at least two objects with the following fields: id(number), name (string), location(string), followers(number), following(number)
  { id: 1, name: "Kira", location: "Boston, MA", followers: 457, following: 997 },
  { id: 2, name: "Sonia", location: "Worcester, MA", followers: 229, following: 1295 },
  { id: 3, name: "Heidi", location: "Roslindale, MA", followers: 107, following: 194 },
  ]
  // P3 - Create a new handler function. For naming convention, start with the word “handle”
  // P3 - Include a parameter. e.target.value grabs text field input value
  const handleInputChange = (e) => {
    // P3 - In the function body, console log the parameter.
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <h1>Instagram Account Information</h1>
      <label htmlFor="name" className="namelabel">
        Name:
      </label>
      {/* P3 - Attach this parameter to input’s on change event */}
      <input type="text" id="name" name="name" onChange={handleInputChange} />
      <hr></hr>
      {/* P1 & P2 - component instantation */}
      {/* P3 - Use props to pass this array into the UserItem component */}
      <UserList userArray={userArray} />
    </div>
  );

}


//  P1 & P2 - In the end, you will have bullet points displaying each field (except for id) for each object.
export default App;
