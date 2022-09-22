import {useNavigate} from 'react-router-dom';
import {BackgroundImage, DirectoryItemBody, DirectoryItemContainer} from './directory-item.styles';



const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandled = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandled}>
      <BackgroundImage imageUrl={imageUrl}/>
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
