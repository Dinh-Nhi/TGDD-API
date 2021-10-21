import axios from 'axios';

const baseUrl = 'http://localhost:8080/admin/all-orders?page=';

export const getData = async (currentPage) => {
    try {
        const {data} = await axios.get(baseUrl +  currentPage);
        return data;
    } catch (error) {
        throw error;
    }
}