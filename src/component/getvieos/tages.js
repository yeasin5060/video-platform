import { api } from "../../api/api"

export const tages = async()=>{
    let {data} = await api.get("/tages")
    return data
}