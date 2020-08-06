/* eslint-disable testing-library/prefer-explicit-assert */
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {Editor} from './Editor'
import {savePost} from './api'

jest.mock('./api')
test('Editor is a form with title, content, tags and submit button', () => {
  savePost.mockResolvedValueOnce()
  const user = {id: 'user'}
  const post = {
    title: 'title',
    content: 'content',
    tags: ['tag1', 'tag2'],
  }

  const {getByLabelText, getByText} = render(<Editor user={user} />)

  getByLabelText(/title/i).value = post.title
  getByLabelText(/content/i).value = post.content
  getByLabelText(/tags/i).value = post.tags.join(',')
  const submitButton = getByText(/submit/i)

  fireEvent.click(submitButton)
  expect(submitButton).toBeDisabled()
  expect(savePost).toHaveBeenCalledWith({...post, authorId: user.id})
})
