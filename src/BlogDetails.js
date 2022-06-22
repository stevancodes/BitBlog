import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';



const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://62b1c2f4196a9e98703cb1fe.mockapi.io/blogs/' + id);
  console.log(id)


  const deleteBlog = () => {
    fetch(`https://62b1c2f4196a9e98703cb1fe.mockapi.io/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push("/")
    })
  }


  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <div className="inside-wrap">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
          </div>
          <button onClick={deleteBlog} className="blog-delete">Delete Blog</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails