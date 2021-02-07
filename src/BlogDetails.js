import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
  // pomoci useParams dostanu parametr id z url
  const {id} = useParams()
  const {data: blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`)
  
  const history = useHistory()
  const [isDeleting, setIsDeleting] = useState(false) 

  const handleClickDelete = () => {
    setIsDeleting(true)
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setIsDeleting(false)
      history.push('/')
    })
  }

  return (
    <div className='blog-details'>
      {isLoading && <div className='loading'>Nahrávám...</div>}
      {error && <div className='loading'>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Autor: {blog.author}</p>
          <div>{blog.body}</div>
          {!isDeleting && <button onClick={handleClickDelete}>Smazat</button>}
          {isDeleting && <button disabled>Mažu...</button>}
        </article>
      )}
    </div>
  )
}

export default BlogDetails

