import { api } from "../../api/api";

export const lofiVideo =async ()=>{
    let {data} = await api.get("/lofivideo")
    return data
}