import client from './client';

export const userList = () => client.get('/api/worldcup');