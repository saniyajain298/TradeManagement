import axios from "axios";

const BASE_URL = "http://127.0.0.1:8083";

export const getOrderList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getOrderList`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createOrder = async (data) => {
    data = {
        "tradeDetails": {
            "id": data
        }
    }
    try {
      const response = await axios
        .post(`${BASE_URL}/createOrder`, data)
        .then((res) => {
          console.log(res.data);
          return res.data;
        });
        return response
    } catch (error) {
      throw error;
    }
    
  };