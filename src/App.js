import logo from './logo.svg';
import './App.css';


function App() {
  const list = [
  {
    id: 1,
    name: "Kira",
    location: "Boston, MA",
    followers: 457,
    following: 997 
  },
  {
    id: 2,
    name: "Sonia",
    location: "Worcester, MA",
    followers: 229,
    following: 1295 
  },
  {
    id: 3,
    name: "Heidi",
    location: "Roslindale, MA",
    followers: 107,
    following: 194 
  },
]
  return (
    <div className="App">
    <h1>Instagram Account Information</h1>
    <label htmlFor="username" className="usernamelabel">Username:</label>
    <input type="text" id="usernameinput"></input>
    <hr></hr>
     <ListItem />
    </div>
  );

  function ListItem() {
    return list.map((listItem) => (
      <ul key={listItem.id}>
        <li>Name: {listItem.name}</li>
        <li>Location: {listItem.location}</li>
        <li>Followers: {listItem.followers}</li>
        <li>Following: {listItem.following}</li>
      </ul>
    ));
  }
}



export default App;
