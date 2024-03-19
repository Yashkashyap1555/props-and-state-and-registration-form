import { useState } from "react";

const InputSecondPage = () => {
  const InitialState = {
    name: "",
    password: "",
    email: "",
  };

  const [details, setDetails] = useState(InitialState);
  
  const [allUserdetails, setAlluserDetails] = useState([])
  console.log(allUserdetails)
  
  console.log(details);

  const ChangeValue = (e) => {
    //first of follow name and value to destructure on event its important
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
    // jab object ke ander value pas karni hai to (...spreadoperator) and [name] : value to pas the all value in object then it is on itF
  };
  
  const ChangeSubmit = () =>{

  }

   const {name, password, email} = details
   //name, password, email ko destructure isly kiya kyuki niche usko use kiya hai
  return (
    <>
     <form>
      <h2>Registration form and data insert in list</h2>
      <div>
        <input
          name="name"
          value={name}
          type="text"
          placeholder="Enter your name"
          onChange={ChangeValue}
        />
      </div>

      <div>
        <input
          name="email"
          value={email}
          type="email"
          placeholder="Enter your email"
          onChange={ChangeValue}
        />
      </div>

      <div>
        <input
          name="password"
          value={password}
          type="password"
          placeholder="Enter your password"
          onChange={ChangeValue}
        />
      </div>
      <button type="submit">submit</button>
    </form>

    <div>
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
        </tr>
        <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
        </tr>
        <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
        </tr>
    </table>
    </div>
    </>
   
    
  );
};
export default InputSecondPage;
