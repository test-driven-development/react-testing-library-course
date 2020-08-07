/* eslint-disable testing-library/prefer-explicit-assert,testing-library/prefer-wait-for */
import React from 'react'
import {Redirect} from 'react-router'
import {render, fireEvent, wait} from '@testing-library/react'
import {Editor} from './Editor'
import {savePost} from './api'

jest.mock('react-router', () => {
  return {
    Redirect: jest.fn(() => null),
  }
})

jest.mock('./api')

test('Editor is a form with title, content, tags and submit button', async () => {
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

  await wait(() => expect(Redirect).toHaveBeenCalledWith({to: '/'}, {}))
  expect(Redirect).toHaveBeenCalledTimes(1)
})
