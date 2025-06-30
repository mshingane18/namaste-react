const useFilteredResList = (restaurantList) => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    setFilteredRestaurant(restaurantList || []);
  }, [restaurantList]);

  return filteredRestaurant;
};
