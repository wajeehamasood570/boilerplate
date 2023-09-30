import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Get, Post, Put } from '../config/helpers/apiMethods';

const Addproject = () => {

    const [model,setModel] = useState<any>({});
    const baseApi = "https://jsonplaceholder.typicode.com/posts";
    const params = useParams();
    
    const getPostById = () => {
        Get(`posts/${params.id}`)
          .then((res) => {
            console.log(res);
            setModel({ ...res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    
    
    const updatePost = () => {
        Put(`posts/${params.id}`, model)
        .then((res)=>{
            console.log("Post Updated Successfully ==>", res.data);
            setModel({...res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }



    const submitData = () => {
        model.userId = 11;
        Post('posts', model)
        .then((res)=>{
            console.log("data add", res.data);
            // setModel({...res.data})
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(() => {
        if (params.id) {
          getPostById();
        }
      }, []);

    return (
        <div className='p-3'>
            <h2>Addproject
            </h2>
            <input  
            value={model.title}
            onChange={(e)=>setModel({...model, title:e.target.value})} type='text' placeholder='Title' />
            <br/>
            <textarea 
            value={model.body}
            onChange={(e)=>setModel({...model, body:e.target.value})} placeholder='body'></textarea>
            <br/>
            <div>
                {params.id ? (
            <button onClick={()=>{updatePost()}}>Update</button>
            ) : (
            <button onClick={()=>{submitData()}}>Submit</button>
            )}
            </div>
        </div>
    )
}

export default Addproject