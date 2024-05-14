import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://events-app-backend-9mbl.onrender.com/api/',
});

export const getEvents = async () => {
  const { data } = await instance.get('/events');
  return data;
};

export const getEventById = async id => {
  const { data } = await instance.get(`/events/${id}`);
  return data;
};

// console.log(getEventById('6642051c7cc2a521f7696f61'));
