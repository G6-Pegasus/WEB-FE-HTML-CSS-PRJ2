import * as Interfaces from '../../utils/interfaces'

const PromotionalImage = ({ imageUrl, description }: Interfaces.PromotionalImage) => {
    return <img src={imageUrl} alt={description} className="w-full h-auto" />
};

export default PromotionalImage;