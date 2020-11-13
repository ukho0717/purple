import client from "./client";

export const chatUser = () => client.get("/api/chat");
export const getChatUser = id => client.get(`/api/chat/${id}`)