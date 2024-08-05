import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';

const Navlinks = ({text, address='/', classname=''}) => {
    const classes = `rounded-md hover:border-b-2 hover:border-black px-2 hover:bg-gray-100  ${classname}`
    return (
        <NavLink className={classes}  to={address}>{text}</NavLink>
    );
};

Navlinks.propTypes ={
    text: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    classname: PropTypes.string
}


export default Navlinks;