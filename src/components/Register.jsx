// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [user, setUser] = useState({ username: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     await axios.post("http://localhost:8080/api/register", user);
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
//       <input placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;
