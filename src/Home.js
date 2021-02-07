import React from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {

  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {isLoading && <div className='loading'>Nahrávám...</div>}
      {error && <div className='loading'>{error}</div>}
      {blogs && <BlogList blogs={blogs} title='Přečti si nějaké moudro'/>}
    </div>
  )
}

export default Home
