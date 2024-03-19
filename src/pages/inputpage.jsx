import { useState } from "react";

const InputPage = () => {
  const InitialState = {
    name: "",
    password: "",
    email: "",
  };
  const [userdetail, setUserdetail] = useState(InitialState);
//   const [userdetail, setUserdetail] = useState({
//     name: "",
//     password: "",
//     email: "",
//   });
  console.log(userdetail, "86789");

  const changeValue = (e) => {
    //because vaha par jo aapne name and value ki niche use ki hai vo alag alag rakhne ke liye//
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setUserdetail({
        ...userdetail, [name] : value
    })

    // setUserdetail();
  };
  //    const handleChange = () =>{
  //     setUserdetail({
  //         name : ,
  //         password : ,
  //         email :

  //     })
  //    }
const {name, password, email} = userdetail
  return (
    <form>
      <div>
        <h2>Registration Form</h2>
        <div>
          <label>Username</label>
          <input
        //   because ye name and value hamesha likhni hai kyuki bina iske chalega nahi //
        //   jese dekh har jagha jagha name pe name ki value rakhi hai aur value pe uski value 

            name="name"
            value={name}
            type="text"
            placeholder="Enter your name"
            onChange={changeValue}
          />
        </div>
        <div>
          <label>Email</label>
          <input
        //   because ye name and value hamesha likhni hai kyuki bina iske chalega nahi //
        //   jese dekh har jagha jagha name pe name ki value rakhi hai aur value pe uski value 
          
            name ="email"  
            value={email}
            type="email"
            placeholder="Enter your email"
            onChange={changeValue}
          />
        </div>
        <div>
          <label>Password</label>
          <input
        //   because ye name and value hamesha likhni hai kyuki bina iske chalega nahi //
        //   jese dekh har jagha jagha name pe name ki value rakhi hai aur value pe uski value

            name ="password"
            value={password}
            type="password"
            placeholder="Enter your password"
            onChange={changeValue}
          />
        </div>
        <button>submit</button>
      </div>
    </form>
  );
};
export default InputPage;
