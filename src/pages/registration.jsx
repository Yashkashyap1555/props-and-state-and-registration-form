import { useState } from "react";
import './registration.css'

const Registration = () => {
  const InitialState = {
    name: "",
    password: "",
    email: "",
    confirmpassword: "",
  };
  const [userdetail, setUserDetail] = useState(InitialState);
  console.log(userdetail, "67809");
  // const [alluserdetail, setAlluserDetail] = useState([])
  // console.log(alluserdetail,"989")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({
      ...userdetail,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
     setUserDetail(userdetail)
    // setAlluserDetail([
    //     ...alluserdetail,userdetail

    //     localStorage.setItem("alluserdetail",(alluserdetail))
      localStorage.setItem("userdetail", JSON.stringify(userdetail))
      const {email, password, confirmpassword} = userdetail
      if(email == userdetail.email && password == userdetail.confirmpassword){
        alert("verified")

      }
      else{
        alert("not verified")
      }

    
  };

  const { name, password, confirmpassword, email } = userdetail;
  return (
    <form onSubmit={handlesubmit}>
      <div className="bodybox">
      <div>
        <h2>Create Registration From Using jQuery</h2>
      </div>

      <div>
        <div>
          <label>Name :</label>
        </div>
        <input className="namebox"
          name="name"
          value={name}
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />
      </div>

      <div>
        <div>
          <label>Email :</label>
        </div>
        <input
          name="email"
          value={email}
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </div>

      <div>
        <div>
          <label>Password :</label>
        </div>
        <input
          name="password"
          value={password}
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </div>

      <div>
        <div>
          <label>Confirm Password :</label>
        </div>
        <input
          name="confirmpassword"
          value={confirmpassword}
          type="password"
          placeholder="Enter your confirm password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn">Registration</button>
      </div>
    </form>
  );
};
export default Registration;
