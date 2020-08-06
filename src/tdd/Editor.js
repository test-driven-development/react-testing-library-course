import React, {useState} from 'react'

export function Editor() {
  const [isSaving, setIsSaving] = useState(false)
  function handleSubmit(e) {
    e.preventDefault()
    setIsSaving(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" />

      <label htmlFor="content">Content</label>
      <textarea id="content" />

      <label htmlFor="tags">Tags</label>
      <input id="tags" />

      <button type="submit" disabled={isSaving}>
        Submit
      </button>
    </form>
  )
}
