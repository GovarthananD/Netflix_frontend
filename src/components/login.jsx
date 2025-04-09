import React, { useState } from "react";
import Netflix_Logo from "../assets/Netflix_Logo.png";
import { useNavigate } from "react-router-dom";




const Logging = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      // Save token in localStorage
      localStorage.setItem('token', res.data.token);

      setMessage('Login Successful!');
      // Optionally redirect to another page (like /dashboard)
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Something went wrong. Try again.'
      );
    }
  };

    return (<>
        <div className="container-fluid back">
            <nav class="navbar">
                <div class="container-fluid">
                    <img src={Netflix_Logo} alt="Logo" class="img-fluid" style={{ height: "60px" }} />
                </div>
            </nav>

            <div className="container ">
                <div className="row  d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-4 md-6 xl-8 outline">
                        <p className="text-white fs-1 fw-bold">Sign In</p>
                        {err ? <p className="text-danger">{err}</p>:""}
                        <form>
                            <div class="mb-3">
                                <input  name="email" onChange={(event)=> setEmail(event.target.value)} value={email}
                                placeholder="Email" type="email" class="form-control for" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <input placeholder="Password" name="password" onChange={(event)=>setPassword(event.target.value)} value={password}
                                type="password" class="form-control for" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" class="btn btn-danger w-100 fw-bold" onClick={handleLogin}>Sign In</button>
                            {loading ? "Signing In..." : "Sign In"}
                            <p className="new mt-3">New to Netflix? <span className="text-white home-nav" onClick={() => navigate("/register")}>Sign up now</span></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default Logging;