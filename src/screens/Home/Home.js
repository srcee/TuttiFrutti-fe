import { useState, useEffect } from 'react'

import ProductCard from '../../components/ProductCard/ProductCard';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import './Home.css'
import {primaryColor} from '../../constants/themes';
import fruitService from '../../services/fruitsService';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    const [ fruits, setFruits ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const override = css`
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    useEffect(() => {
        fruitService.getAllFruits()
            .then(result => {
                setFruits(result.data);
                setTimeout(() => setIsLoading(false), 500);
            })
            .catch(console.error)
    }, []);

    return (
        <>
            <Banner />
            <div className='product-cards-container'>
                {isLoading ? 
                    <RingLoader color={primaryColor} css={override} size={100} /> :
                    fruits.map(fruit => <ProductCard key={fruit._id} product={fruit}/>)
                }
            </div>
        </>
    )
}

export default Home
