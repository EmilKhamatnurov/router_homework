import { FunctionComponent } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import characters from '../assets/characters.json';
import GridArea from '../components/GridArea/GridArea';
import Item from '../components/Item/Item';

interface ChaptersProps {}

const Chapters: FunctionComponent<ChaptersProps> = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleItemClick = (item: { id: number; name: string }) => {
		navigate(`${location.pathname}/${item.id}`, { state: item });
	};

	return (
		<GridArea>
			{characters?.map(item => (
				<Item item={item} onClick={handleItemClick} />
			))}
			<Outlet />
		</GridArea>
	);
};

export default Chapters;
