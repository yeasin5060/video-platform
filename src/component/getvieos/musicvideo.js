import { api } from "../../api/api";

export const musicVideo =async ()=>{
    let {data} = await api.get("/musicvideo")
    return data
}