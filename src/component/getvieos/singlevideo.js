import { api } from "../../api/api"

export const singlevideo = async(id)=>{
    let {data} = await api.get(`/allvideo/${id}`)
    return data
}