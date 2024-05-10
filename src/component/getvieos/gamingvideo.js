import { api } from "../../api/api";

export const gamingVideo = async()=>{
    let {data} = await api.get("/gamingvideo")
    return data
}