import * as Interfaces from '../../utils/home/promotional_image';
import React, { useEffect, useState } from 'react';

const PromotionalImage: React.FC = () => {
  const [promotionalImages, setPromotionalImages] = useState<Interfaces.PromotionalImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromotionalImages = async () => {
      try {
        const response = await fetch('https://web-fe-html-css-prj2-api.onrender.com/promotionalImages');
        const data = await response.json();
        setPromotionalImages(data);
      } catch (error) {
        console.error('(PLACEHOLDER) Error fetching promotional images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotionalImages();
  }, []);

  return (
    <div className="promotional-image-gallery">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-opacity-50"></div>
        </div>
      ) : promotionalImages.length > 0 ? (
        promotionalImages.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt={image.description}
            className="w-full h-auto"
          />
        ))
      ) : (
        <p>No images available.</p>
      )}
    </div>
  );
};

export default PromotionalImage;