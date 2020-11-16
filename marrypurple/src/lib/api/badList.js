import client from './client';
// import qs from 'qs';

export const badWrite = ({ _id, reason }) => client.post('/api/badBoard', { _id, reason });

export const badRead = bad_id => client.get(`/api/badBoard/${bad_id}`);

export const badList = () => client.get('/api/badBoard');