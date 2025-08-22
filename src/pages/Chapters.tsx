import { FunctionComponent, useCallback, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import GridArea from '../components/GridArea/GridArea';
import Item from '../components/Item/Item';
import { useFetchData } from '../hooks/useFetchData';

interface ChaptersProps { }

const Chapters: FunctionComponent<ChaptersProps> = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [pageNumber, setPageNumber] = useState(1);
	const [chapters, isLoading, hasMore, error] = useFetchData('https://rickandmortyapi.com/api/character', pageNumber);

	const observer = useRef(null);

	const handleItemClick = (item: { id: number; name: string; }) => {
		navigate(`${location.pathname}/${item.id}`, { state: { item: item, filteredFields: ['image', 'url', 'episode'] }, });
	};

	const lastNodeRef = useCallback(
		node => {
			if (isLoading) return; // Если идет загрузка, то не делаем ничего
			if (observer.current) {
				observer.current.disconnect(); // Отключаем обсервер
			}

			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && hasMore) {
					console.log('### VISIBLE:', entries);
					setPageNumber(prev => prev + 1);
				}
			});

			if (node) {
				observer.current.observe(node);
			}
		},
		[isLoading, hasMore]
	);
	return (
		<GridArea>
			{chapters?.map((item, index) => {
				if (chapters.length === index + 1) {
					return <div key={index} ref={lastNodeRef}>
						<Item item={item} onClick={handleItemClick} />
					</div>;
				}
				else {
					return <Item item={item} onClick={handleItemClick} />;
				}
			})}
			<Outlet />
		</GridArea>
	);
};

export default Chapters;
