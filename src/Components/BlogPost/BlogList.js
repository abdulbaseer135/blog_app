import React from 'react';
import BlogPost from './BlogPost';
import blogPosts from '../Data/BlogPostData.json'
import './BlogList.css'


const BlogList = () => {

  return (
    <>
    <div className="blog-post-heading">
      <h2>Blog Post</h2>
    </div>
    <div className='main'>
      {blogPosts.map(post => (
        <BlogPost key={post.id} name={post.source.name} title={post.title} url={post.url} image={post.urlToImage} author={post.author} description={post.description} publishedAt={post.publishedAt}/>
      ))}
    </div>
    </>
    
  );
};

export default BlogList;
