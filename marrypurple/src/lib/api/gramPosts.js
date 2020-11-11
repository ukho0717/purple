import client from './client';

export const gramWrite = ({ InstaImage, content }) => client.post('/api/posts', { InstaImage, content });

export const gramRead = gram_id => client.get(`/api/posts/${gram_id}`);

export const gramList = () => client.get('/api/posts');

export const gramLiktList = () => client.get('/api/posts/like');