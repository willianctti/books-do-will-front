import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const API = 'http://localhost:8080/books'

const fetchData = async () => {
  const response = await axios.get(API);
  return response.data;
}

export function useUserRestaurantData() {
  const query = useQuery({
    queryKey: ['data'],
    queryFn: fetchData
  });


  return {
    ...query,
    data: query.data
  };
}