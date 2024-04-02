import axios from "axios";

const BASE_URL = "http://127.0.0.1:8083";

export const getTradeDetailsList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getTradeDetailsList`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTradeDetails = async (data) => {
  try {
    const response = await axios
      .post(`${BASE_URL}/createTrade`, data)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
      return response
  } catch (error) {
    throw error;
  }
  
};
