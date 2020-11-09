import client from "./client";

export const matchingList = () => client.post("/api/match");

export const findPassedUser = () => client.get("/api/match/back");

export const pass = ({id}) => client.patch("/api/match/pass",{id});

export const like = ({id}) => client.patch("/api/match/like",{id});

export const superlike = ({id}) => client.patch("/api/match/super",{id});
