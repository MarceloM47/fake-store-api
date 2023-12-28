import { Link, useNavigate  } from "react-router-dom"
import { useAuthStore } from "../store/auth"

function Navbar() {
  const logout = useAuthStore(state => state.logout)
  const token = useAuthStore.getState().token

  const navigate  = useNavigate();

  
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <Link to={'/'} className="navbar-brand">MarceloM47</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                </li>
                {
                  token ? (
                    <li className="nav-item">
                      <a className="nav-link active" onClick={() => {
                        logout()
                        navigate('/login')
                      }}>Logout</a>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link to={'/login'} className="nav-link active">Login</Link>
                    </li>
                  )
                }
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar