import React from "react";
import Article from "./Article";

function ArticleList({posts}){

    const info = posts.map((post)=>{
        return(
            <div key = {post.id}>
             <Article title = {post.title} date = {post.date} preview = {post.preview}/>
            </div>
        )
    })

    return(
        <main>{info}</main>
    )
}

export default ArticleList;