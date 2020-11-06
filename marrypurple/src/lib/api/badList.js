import client from './client';
import qs from 'qs';

export const writeBad = ({ _id, reason }) => client.post('/api/badBoard', { _id, reason });

export const readBad = ({ bad_id }) => client.get(`/api/badBoard/${bad_id}`);

export const listBad = ({ user_nick, reason }) => {
    const queryString = qs.stringify({
        user_nick,
        reason
    });
    return client.get(`/api/badBoard?${queryString}`);
}