import { LOGO_URL } from "../utils/constans";

const Header = ()=>{
    const btnName = "login"
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="logo" src={LOGO_URL}/>

            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><button onClick={
                        ()=>{
                            btnName = "Logout"
                        }
                    } className="login">Login</button></li>
                </ul>
            </div>

        </div>
    )
}
export default Header;