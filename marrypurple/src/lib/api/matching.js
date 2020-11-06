import client from "./client";

export const matchingList = () => client.post("/api/match");
