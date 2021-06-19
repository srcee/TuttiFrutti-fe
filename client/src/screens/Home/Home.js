import { useState, useEffect } from 'react'

import ProductCard from '../../components/ProductCard/ProductCard';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import './Home.css'
import {primaryColor} from '../../constants/themes';
import fruitService from '../../services/fruitsService';

const Home = () => {
    const [ fruits, setFruits ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const override = css`
        display: block; 
        margin: 10rem auto;
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
        isLoading ? (
            <RingLoader color={primaryColor} css={override} size={100} />
        ) : (
            <div className="product-cards-container">
                {fruits.map(fruit => <ProductCard key={fruit._id} product={fruit}/>)}
            </div>
        )
    )
}

export default Home
