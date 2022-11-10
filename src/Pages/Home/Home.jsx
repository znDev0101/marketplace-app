import React from 'react';
import CarouselImage from '../../Components/CarouselImagesProduct/CarouselImagesProduct';
import ImagesProduct from '../../Components/ImagesProduct/ImagesProduct';
import CardProduct from '../../Components/CardProduct/CardProduct';
import CategoryItems from '../../Components/CategoryItems/CategoryItems';
import PromoCardProduct from '../../Components/PromoCardProduct/PromoCardProduct';

const Home = () => {
  return (
    <>
      <CarouselImage />
      <CategoryItems />
      <ImagesProduct />
      <PromoCardProduct />
      <CardProduct />
    </>
  );
};

export default Home;
