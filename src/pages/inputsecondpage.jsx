import { useState } from "react";

const InputSecondPage = () => {
  const InitialState = {
    name: "",
    password: "",
    email: "",
  };
  // first state
  const [details, setDetails] = useState(InitialState);
  console.log(details);

  // second state to insert the user value array in UI list
  const [allUserdetails, setAlluserDetails] = useState([]);
  console.log(allUserdetails);

  const ChangeValue = (e) => {
    //first of follow name and value to destructure on event its important
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
    // jab object ke ander value pas karni hai to (...spreadoperator) and [name] : value to pas the all value in object then it is on itF
  };

  const ChangeSubmit =(e)=> {
    e.preventDefault()
    setAlluserDetails([
      ...allUserdetails, details
    ]);
  };

  const { name, password, email } = details;
  //name, password, email ko destructure isly kiya kyuki niche usko use kiya hai
  return (
    <>
      <form onSubmit={ChangeSubmit}>
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
            <th>Email</th>
            <th>Password</th>
          </tr>
            {allUserdetails?.map((value, i) =>(
                <tr key={i}>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
              </tr>
            )

            )}
          

        </table>
      </div>
    </>
  );
};
export default InputSecondPage;
