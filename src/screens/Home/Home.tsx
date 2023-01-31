import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

import fruitService from "src/services/fruitsService";
import Banner from "src/components/Banner/Banner";
import ProductCard from "src/components/ProductCard/ProductCard";
import { primaryColor } from "src/constants/themes";
import { FruitModel } from "src/ts/models/fruit.model";

import "./Home.css";

const Home: React.FC = () => {
  const [fruits, setFruits] = useState<FruitModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const override = css`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  useEffect(() => {
    const fetchAllFruits = async () => {
      const fruits = await fruitService.getAllFruits();

      setFruits(fruits);
      setIsLoading(false);
    };

    fetchAllFruits();
  }, []);

  return (
    <>
      <Banner />
      <div className="product-cards-container">
        {isLoading ? (
          <RingLoader color={primaryColor} css={override} size={100} />
        ) : (
          fruits.map((fruit) => <ProductCard key={fruit._id} product={fruit} />)
        )}
      </div>
    </>
  );
};

export default Home;
