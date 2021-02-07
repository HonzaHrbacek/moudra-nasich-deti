import React, { useState} from 'react'
import { useHistory} from 'react-router-dom'

const Create = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Emulka')
  const [isUploading, setIsUploading] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = { title, body, author}

    setIsUploading(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newBlog),
    }).then(() => {
      setIsUploading(false)
      // history.go(-1) // jde nazpet o jeden krok v historii prohlizeni
      history.push('/') // presmeruje na homepage
    })
  }

  return (
    <div className='create'>
      <h2>Přidej nové moudro</h2>
      <form onSubmit={handleSubmit}>
        <label>Titulek</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label>Moudro</label>
        <textarea required rows="10" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Autor</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Emulka">Emulka</option>
          <option value="Tomulka">Tomulka</option>
        </select>
        {!isUploading && <button>Přidej moudro</button>}
        {isUploading && <button disabled>Nahrávám...</button>}
      </form>
    </div>
  )
}

export default Create
