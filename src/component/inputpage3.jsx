import { useState } from "react";
const InitialData = {
  name: "",
  password: "",
  email: "",
  contact: "",
};

const InputPageThird = () => {
  const [userdetails, setUserDetails] = useState(InitialData);
  const [usersave, setUserSave] = useState([]);
  console.log(usersave);
  console.log(userdetails);

  const ValueChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userdetails,
      [name]: value,
    });
  };

  const ValueSubmit = (event) => {
    event.preventDefault();
    setUserSave([...usersave, userdetails]);
    // setUserDetails(userdetails).
  };

  const ValueDelete = (Data) =>{
    console.log(Data,"confirm delete")
    const valuefilter = usersave.filter((value , i) => i !== Data)
    setUserSave(valuefilter)
  }

  const { name, password, email, contact } = userdetails;

  return (
    <>
      <form onSubmit={ValueSubmit}>
        <div>
          <h2>Registration form and listing show in UI</h2>
        </div>

        <div>
          <input
            name="name"
            value={name}
            type="text"
            placeholder="enter your name"
            onChange={ValueChange}
          />
        </div>

        <div>
          <input
            name="password"
            value={password}
            type="password"
            placeholder="enter your password"
            onChange={ValueChange}
          />
        </div>

        <div>
          <input
            name="email"
            value={email}
            type="email"
            placeholder="enter your email"
            onChange={ValueChange}
          />
        </div>

        <div>
          <input
            name="contact"
            value={contact}
            type="number"
            placeholder="enter your contact"
            onChange={ValueChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <div>
      <table> 
        <tr> 
            <th>Firstname</th> 
            <th>Lastname</th> 
            <th>Age</th> 
            <th>Contact</th>
        </tr> 
        {usersave?.map((value, i) => (
        <tr key={i}> 
            <td>{value.name}</td> 
            <td>{value.password}</td> 
            <td>{value.email}</td> 
            <td>{value.contact}</td>
            
            <td><button onClick={()=>ValueDelete(i)}>delete</button></td>
            {/* <td>{name}</td> 
            <td>{password}</td> 
            <td>{email}</td> 
            <td>{contact}</td> */}
        </tr> 
        ))}
        
      
    </table> 
      </div>
      
    </>
  );
};
export default InputPageThird;
