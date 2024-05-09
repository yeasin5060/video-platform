import { api } from "../../api/api"

export const allVideo = async()=>{
    let {data} = await api.get("/allvideo")
    return data
}