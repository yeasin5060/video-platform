import { api } from "../../api/api";

export const relatedVideo = async({tage =[], id})=>{
    const querystring = tage.map((tag)=>{
        return `tage_like= ${tag}`
    }).join("&") + `&id_ne=${id}` + '&_limit=5';
    const {data} = await api.get(`/allvideo/?${querystring}`)
    return data
}