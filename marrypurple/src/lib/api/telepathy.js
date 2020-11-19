import client from "./client";

export const telepathyMun = ({mun, ans}) => client.patch("/api/telepathy",{mun, ans});
export const telepathyAns = () => client.get("/api/telepathy/ans");
