import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useAuthStore } from '../store/auth';

function Login() {
  const setToken = useAuthStore(state => state.setToken)

  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginFetch = async () => {
    try {
        const loginres = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const res = await loginres.json();
      setToken(res.token);

      navigate('/')
    } catch (error) {
      console.log(error);
    }
    
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    loginFetch();
  };


  return (
    <form onSubmit={handleSubmit} >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Iniciar sesión
      </button>
    </form>
  );
}

export default Login;
