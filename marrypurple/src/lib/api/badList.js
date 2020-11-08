import client from './client';
// import qs from 'qs';

export const badWrite = ({ _id, reason }) => client.post('/api/badBoard', { _id, reason });

export const badRead = bad_id => client.get(`/api/badBoard/${bad_id}`);

// export const listBad = ({ user_nick, reason }) => {
//     const queryString = qs.stringify({
//         user_nick,
//         reason
//     });
//     return client.get(`/api/badBoard?${queryString}`);
// }

export const badList = () => client.get('/api/badBoard');