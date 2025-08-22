import { useEffect, useState } from 'react';

export const useFetchData = (query: string, page: number) => {
	const [fetchData, setFetchData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		fetch(`${query}?page=${page}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("data.results", data.results);
				if (data.results) {
					setFetchData(prev => {
						return [
							...prev, ...data.results
						];
					});
				}
				else {
					setFetchData(prev => {
						return [
							...prev,
						];
					});
				}
				setHasMore(data.results.length > 0);
				console.log("data", data);
				setIsLoading(false);
			})
			.catch(error => {
				console.log(error);
				setError(true);
				setIsLoading(false);
			});

	}, [page, query]);

	return [
		fetchData,
		isLoading,
		hasMore,
		error,
	];
};