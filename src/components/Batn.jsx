import PropTypes from 'prop-types';

const Batn = ( {text, address='/', classname=''} ) => {
    const classes = `w-fit mx-auto bg-action text-white  rounded-3xl font-semibold ${classname}`
    return (
        <button className={classes} to={address}>
            {text}
        </button >
    );
};

Batn.propTypes ={
    text: PropTypes.string.isRequired,
    address: PropTypes.string,
    classname: PropTypes.string,
}

export default Batn;