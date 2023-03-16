export function UserForm({handleUserNameChange, userName}) {

  return (
    <>
      <label htmlFor="name" className="namelabel">
        Name:
      </label>
      {/* P3 - Attach this parameter to input’s on change event */}
      <input
        type="text"
        id="name"
        name="name"
        onChange= {handleUserNameChange}
      />
      <p>Searching for a new user named: {userName}</p>
      <hr></hr>
      {/* P1 & P2 - component instantation */}
      {/* P3 - Use props to pass this array into the UserItem component */}
    </>
  );
}
