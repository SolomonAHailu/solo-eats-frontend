import axios from "axios";

export const createOrder = async (order) => {
  try {
    const { data } = axios.post(
      "https://solo-eats-backend.onrender.com/api/orders/create",
      order
    );
    return data;
  } catch (error) {}
};

export const getNewOrderForCurrentUser = async () => {
  const { data } = await axios.get(
    "https://solo-eats-backend.onrender.com/api/orders/newOrderForCurrentUser"
  );
  return data;
};

export const pay = async (paymentId) => {
  try {
    const { data } = await axios.put(
      "https://solo-eats-backend.onrender.com/api/orders/pay",
      { paymentId }
    );
    return data;
  } catch (error) {}
};

export const trackOrderById = async (orderId) => {
  const { data } = await axios.get(
    "https://solo-eats-backend.onrender.com/api/orders/track/" + orderId
  );
  return data;
};

export const getAll = async (state) => {
  const { data } = await axios.get(
    `https://solo-eats-backend.onrender.com/api/orders/${state ?? ""}`
  );
  return data;
};

export const getAllStatus = async () => {
  const { data } = await axios.get(
    "https://solo-eats-backend.onrender.com/api/orders/allstatus"
  );
  return data;
};
