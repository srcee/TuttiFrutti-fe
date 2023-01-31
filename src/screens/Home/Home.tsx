import React, { useState, useEffect } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import "./Home.css";
import { primaryColor } from "../../constants/themes";
import fruitService from "../../services/fruitsService";
import Banner from "src/components/Banner/Banner";
import { FruitModel } from "src/ts/models/fruit.model";

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
