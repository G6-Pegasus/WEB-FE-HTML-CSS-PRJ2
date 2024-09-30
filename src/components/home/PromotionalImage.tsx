import * as Interfaces from '../../utils/home/promotional_image'
import React, { useEffect, useState } from 'react';

const PromotionalImage: React.FC = () => {
    const [promotionalImages, setPromotionalImages] = useState<Interfaces.PromotionalImage[]>([]);
  
    useEffect(() => {
      const fetchPromotionalImages = async () => {
        try {
          const response = await fetch('https://web-fe-html-css-prj2-api.onrender.com/promotionalImages');
          const data = await response.json();
          setPromotionalImages(data);
        } catch (error) {
          console.error('(PLACEHOLDER)Error fetching promotional images:', error);
        }
      };
  
      fetchPromotionalImages();
    }, []);
  
    return (
      <div className="promotional-image-gallery">
        
        {promotionalImages.length > 0 ? (
          promotionalImages.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={image.description}
              className="w-full h-auto"
            />
          ))
        ) : (
          <p>Loading images...(PLACEHOLDER)</p>
        )}
      </div>
    );
  };
  
  export default PromotionalImage;