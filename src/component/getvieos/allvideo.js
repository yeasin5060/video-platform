import { api } from "../../api/api"

export const allVideo = async({tage, searchs})=>{
    let querystring = ''
    if(tage.length > 0){
        querystring += tage.length > 0 && tage.map((tag)=>{
            return `tage_like=${tag.title}`
        }).join("&") + "&"
    }
    if(searchs){
        querystring += `q=${searchs}`
    }
    let {data} = await api.get(`/allvideo/?${querystring}`)
    console.log(querystring);
    return data
}
