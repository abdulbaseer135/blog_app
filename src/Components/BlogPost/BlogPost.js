import React from 'react';
import './BlogPost.css'

const BlogPost = ({ title, author,name, description,url,image,publishedAt}) => {
    
    const date = new Date(publishedAt).toLocaleString();
    

  return (
    <div className="blogpost-main">
        
        <div className="blogpost">
          <div className="image-container">
            <img src={image} alt="image" />
            <p className='source'>{name}</p>
          </div>
            <h2>{title.slice(0, 60)}...</h2>
             <p className="author">By {author}</p>
            <p>{description.slice(0, 200)}...</p>
            <div className='read-date'>
                <button>
                    <a target="_blank" href={url}>Read More</a>
                </button>
                <p>{date}</p>
            </div>
        </div>
      
    </div>
   
  );
};

export default BlogPost;


