import React, { useState } from "react";
import "./App.css";
import { Spinner } from "react-bootstrap";

function App() {
	const [user, setUser] = useState([]);
	const [done, setDone] = useState(false);
	const [isButton, setIsButton] = useState(false);

	const getUsers = async () => {
		setIsButton(true);
		const response = await fetch("https://reqres.in/api/users");
		const res = await response.json();
		setUser(res.data);
		console.log(res.data);
		setInterval(() => {
			setDone(true);
		}, 3000);
	};

	return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <h2>MicroWeb Solutions</h2>
        </div>

        <div className="nav-btn">
          <a onClick={getUsers}>GET USERS</a>
          </div>
      </nav>
      <div class="grid">
			{
        isButton ? (
				done ? (
					user.map((user) => (
            
                <div class="card">
                  <div class="picture">
                    <img src={user.avatar} alt="userimage"/>
                  </div>
                  <div>
                    <h3>{user.first_name} {user.last_name}</h3>
                    <p>{user.email}</p>
                  </div>  
                </div>  
            
					))
				) : (
					<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				)
			) : (
				<div class="h1-body">
					<h1>  </h1>
				</div>
			)}
    </div>
    </div>
	);
}

export default App;