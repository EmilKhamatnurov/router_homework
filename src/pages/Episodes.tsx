import { FunctionComponent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import episodes from '../assets/episode.json';
import GridArea from '../components/GridArea/GridArea';
import Item from '../components/Item/Item';
interface EpisodesProps {}

const Episodes: FunctionComponent<EpisodesProps> = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleItemClick = (item: { id: number; name: string }) => {
		navigate(`${location.pathname}/${item.id}`, { state: item });
	};

	return (
		<GridArea>
			{episodes?.map(item => (
				<Item item={item} onClick={handleItemClick} />
			))}
		</GridArea>
	);
};

export default Episodes;
