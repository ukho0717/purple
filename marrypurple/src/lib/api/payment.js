import client from './client';

export const paymentUpdate = ({ user_id, premium }) => client.patch(`/api/payment/${premium}`);