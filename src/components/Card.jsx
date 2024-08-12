import PropTypes from 'prop-types';

const Card = ({plant}) => {
    // console.log(plant);
    const { name , /* _id,*/ image, reating, price} = plant;
    // console.log(name);
    
    return (
        <div className='w-64 lg:w-80 xl:w-[512px]'>
            <div className='overflow-hidden'>
                <img src={image} alt="name" className='object-center transform transition duration-500 hover:scale-110'/>
            </div>
            <div className='mx-2 my-6 grid gap-2'>
                <h1 className='text-xl font-bold'>{name[0]}</h1>
                <p className='text-lg font-bold'>Ratingc: {reating}/5</p>
                <p className='text-lg font-semibold'>{price}Taka</p>
            </div>
        </div>
    );
};

Card.propTypes = { 
    plant:PropTypes.object.isRequired
}

export default Card;