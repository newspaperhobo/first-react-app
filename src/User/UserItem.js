// P1 & P2 - component definition
export function UserItem({userArray}) {
    // P3 - Use props as a parameter in the UserItem component and access the same exact information from the props this time (i.e. name, location, etc.
    // props is an object to in order to access the array you have to call it
  return userArray.map((userEntry) => (
    // P1 & P2 - We will create a "ul" element for each object in the array with each field being a "li" element
    <ul key={userEntry.id}>
      <li>Name: {userEntry.name}</li>
      <li>Location: {userEntry.location}</li>
      <li>Followers: {userEntry.followers}</li>
      <li>Following: {userEntry.following}</li>
    </ul>
  ));
}
