import { addElement } from './http-api';

export const addMessageApi = (message) => {
  return addElement('/messages', message);
};
