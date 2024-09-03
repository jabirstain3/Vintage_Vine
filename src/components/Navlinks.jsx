import { NavLink, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

const Navlinks = ({text, address='/', classname='text-lg', activeclass='', isDefault=false}) => {
    const location = useLocation();

    const isActive = location.pathname === address || (isDefault && location.pathname === '/');

    const classes=`rounded-md hover:border-b-2 hover:border-black px-4 hover:bg-secondary font-semibold ${classname} ${isActive ? activeclass : ""}`
    return (
        <NavLink className={classes} to={address}>{text}</NavLink>
    );
};

Navlinks.propTypes ={
    text: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    classname: PropTypes.string,
    isDefault: PropTypes.bool,
    activeclass: PropTypes.string
}


export default Navlinks;