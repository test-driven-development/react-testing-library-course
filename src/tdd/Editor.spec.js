import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {Editor} from './Editor'

test('Editor is a form with title, content, tags and submit button', () => {
  const {getByLabelText, getByText} = render(<Editor />)
  expect(getByLabelText(/title/i)).toBeInTheDocument()
  expect(getByLabelText(/content/i)).toBeInTheDocument()
  expect(getByLabelText(/tags/i)).toBeInTheDocument()
  const submitButton = getByText(/submit/i)
  expect(submitButton).toBeInTheDocument()

  fireEvent.click(submitButton)
  expect(submitButton).toBeDisabled()
})
