import client from "./client";

export const chatUser = () => client.get("/api/chat");