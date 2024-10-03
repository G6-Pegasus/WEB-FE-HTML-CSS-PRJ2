//import * as Interfaces from '../../utils/home/promotional_image';
//import React, { useEffect, useState } from 'react';
import { useFetchImages } from '../../hooks/useFetchImagesHomeImage';


const PromotionalImage: React.FC = () => {
  const { data: images, isLoading, error } = useFetchImages();

  if (isLoading) {
    return <p>(PLACEHOLDER)Loading images...</p>;
  }

  if (error) {
    return <p>(PLACEHOLDER)Failed to load images: {error.message}</p>;
  }

  return (
    <div className="flex flex-col w-full h-screen">
      {images?.map((image) => (
        <div key={image.id} className="flex-1 w-full">
          <img src={image.imageUrl} alt={image.description} className="object-cover w-full h-full " />
          
        </div>
      ))}
    </div>
  );
};

export default PromotionalImage;