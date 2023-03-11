import logo from './logo.svg';
import './App.css';

// Inside the App() functions, define an array of objects named "list" 
const list = [
//Make sure this array has at least two objects with the following fields: id(number), name (string), location(string), followers(number), following(number)
{ id: 1, name: "Kira", location: "Boston, MA", followers: 457, following: 997 },
{ id: 2, name: "Sonia", location: "Worcester, MA", followers: 229, following: 1295 },
{ id: 3, name: "Heidi", location: "Roslindale, MA", followers: 107, following: 194 },
]

function App() {
  return (
    <div className="App">
    <h1>Instagram Account Information</h1>
    <label htmlFor="name" className="namelabel">Name:</label>
    <input type="text" id="name" name="name"></input>
    <hr></hr>
    {/* component instantation */}
     <UserList />
    </div>
  );

}

// component definition
function UserList() {
  //Inside the return, in the main div element, map through this array
  return list.map((listItem) => (
    // We will create a "ul" element for each object in the array with each field being a "li" element
    <ul key={listItem.id}>
      <li>Name: {listItem.name}</li>
      <li>Location: {listItem.location}</li>
      <li>Followers: {listItem.followers}</li>
      <li>Following: {listItem.following}</li>
    </ul>
  ));
}

//  In the end, you will have bullet points displaying each field (except for id) for each object.
export default App;
