import React, {useState} from 'react'
import {Redirect} from 'react-router'
import {savePost} from './api'

export function Editor({user}) {
  const [isSaving, setIsSaving] = useState(false)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const {title, content, tags} = e.target.elements
    const post = {
      authorId: user.id,
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map(t => t.trim()),
    }
    setIsSaving(true)
    savePost(post).then(() => setShouldRedirect(true))
  }

  if (shouldRedirect) return <Redirect to="/" />

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" />

      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" />

      <label htmlFor="tags">Tags</label>
      <input id="tags" name="tags" />

      <button type="submit" disabled={isSaving}>
        Submit
      </button>
    </form>
  )
}
