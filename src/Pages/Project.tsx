import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { Delete, Get } from '../config/helpers/apiMethods';

const Project = () => {

    const [list, setList] = useState<any>([]);

    const navigate = useNavigate();

    const deletePost = (id:any) => {
        Delete(`posts/${id}`)
        .then(() => {
            console.log("Post Deleted Successfully")
        }).catch((err) => {
            console.log(err)
        })
    }

    const getData = () => {
        Get('posts')
            .then((res) => {
                setList([...res.data])
            }).catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(()=> {getData()}, []); 
    return (
        <div className='p-5'>
            <h3>Project List</h3>
            <button onClick={()=>{navigate('/add')}}>Add</button>
            {list.map((x: any, i: any) => 
            <div className='p-5' style={{border:"1px solid black"}}>
                <h2>{x.title}</h2>
                <p>{x.body}</p>
                <Button onClick={()=>deletePost(x.id)}variant="outlined" className='mx-2' startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button onClick={() => {navigate(`/add/${x.id}`);}} variant="contained" className='mx-2' endIcon={<EditIcon />}>
                    Edit
                </Button>

            </div>
            )}
            <div>
            </div>
        </div>
    )
}

export default Project