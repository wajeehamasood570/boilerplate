import axios from "axios";

export const apiHandle = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        Authorization:`Bearer`
    }
})

export const Get = (endpoint:string,id?:string|number) =>{
   return apiHandle.get(`${endpoint}/${id?id:''}`)
}
export const Post = (endpoint:string, id?:string|number) =>{
    return apiHandle.post(`${endpoint}/${id?id:''}`)
}
export const Put = (endpoint:string, id?:string|number) =>{
    return apiHandle.put(`${endpoint}/`)
}
export const Delete = (endpoint:string, id?:string|number) =>{
    return apiHandle.delete(`${endpoint}/`)
}
