import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import PropTypes from 'prop-types';

const Arrow =(props) => {
    const { className, style, onClick } = props;
    return (
    <div
        className={`${className} rounded-full`}
        style={{ ...style, display: "block", background: "black",width: '20px', height: '20px'}}
        onClick={onClick}
    />
    );
}

const OutdoorplantsCtg = () => {
    const [plants, setPlants] = useState([]); 
    useEffect( () => {
        fetch('plants.json')
        .then(res => res.json())
        .then(data => setPlants(data))
    }, [])
    // console.log(plants.length);

    const settings = {
        className: "slider w-full",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility:true,
        arrows:true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        variableWidth: true
    };

    return (
        <div className="">
            <Slider {...settings }>
                {plants.map((plant, index) => <Card key={index} plant={plant}></Card>)}
            </Slider>
        </div>
    );
};

Arrow.proptypes = {
    props:PropTypes.object.isRequired
}

export default OutdoorplantsCtg;