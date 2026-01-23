import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () =>{
    const {logout} = useContext(AuthContext);

    return(
            <nav className="navbar navbar-light bg-ligt px-3">
                <h3 className="navbar-brand">Student Managemnet</h3>

                <button onClick={logout} className="btn btn-danger">Logout</button>
            </nav>
    );
};
export default Navbar;