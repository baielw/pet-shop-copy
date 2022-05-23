import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
    return (
        <ul className={classes.Nav}>
            <li>
                <NavItem url="/">Home</NavItem>
            </li>
            <li>
                <NavItem url="/products">animals feed</NavItem>
            </li>
            <li>
                <NavItem url="/contacts">Contacts</NavItem>
            </li>

        </ul>
    );
}

export default Nav;