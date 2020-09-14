import React, {useEffect, useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {createPosts} from "../../redux/actions/posts";
import Posts from "./Posts";

const Todo = (props,{posts}) =>{
    const [value,setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value );
    };
    const addItems = () =>{
     props.createPosts(value)
        setValue('')
    }
    useEffect(()=>{

    },[value])

    return (
        <div>
            <TextField  value={value} label="List" type="text" variant="outlined" onChange={handleChange} />
            <Button disabled={!value.trim()&&true} variant="contained" color="primary" onClick={addItems}>Primary</Button>
            <Posts />

        </div>
    )
}

const mapDispatchToProps = {
createPosts:createPosts
}
const mapToStateProps = state=>{
    console.log(state)
    return {
        posts:state.posts.posts
    }
}
export default connect(mapToStateProps,mapDispatchToProps)(Todo)

// npm install @material-ui/core
//npm install @material-ui/icons