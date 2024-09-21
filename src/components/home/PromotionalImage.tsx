interface PromotionalImageProps {
    PromotionalIMG: { imageUrl: string }[];
  }
  
  const PromotionalImage = ({ PromotionalIMG }: PromotionalImageProps) => {
    return (
      <div className="flex flex-col items-center ">
        {PromotionalIMG.map((image, index) => (
          <img key={index} src={image.imageUrl} alt={`Promotional Image ${index + 1}`} className="w-full h-auto" />
        ))}
      </div>
    );
  };
  
  export default PromotionalImage;