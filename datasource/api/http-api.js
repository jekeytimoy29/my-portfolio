import api from './axios-config';

export const addElement = async (url, element) => {
  try {
    const response = await api.post(url, element);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }

  return null;
};
