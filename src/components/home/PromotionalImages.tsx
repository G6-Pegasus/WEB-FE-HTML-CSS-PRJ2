import { usePromotionalImage } from '../../hooks/usePromotionalImage';
import PromotionalImage from './PromotionalImage';
import * as Interfaces from '../../utils/interfaces'
import Spinner from '../common/Spinner';
import Error from '../common/Error'

const PromotionalImages: React.FC = () => {
  const { data: images, isLoading, error } = usePromotionalImage();

  if (isLoading) return <Spinner />
  if (error) return <Error message={error.message} />

  return (
    <>
      {images?.map(({id, imageUrl, description} : Interfaces.PromotionalImage) => <PromotionalImage key={id} imageUrl={imageUrl} description={description} />)}
    </>
  );
};

export default PromotionalImages;