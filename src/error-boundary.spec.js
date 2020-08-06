import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import {ErrorBoundary} from './error-boundary'
import {reportError} from './api'

jest.mock('./api')

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  console.error.mockRestore()
  jest.restoreAllMocks()
})

function ThrowError({shouldThrow}) {
  if (shouldThrow) throw new Error('dummy')
  return null
}

test('calls error boundary', () => {
  reportError.mockResolvedValueOnce({success: true})
  const {
    rerender,
    getByText,
    getByRole,
    queryByRole,
    queryByText,
  } = render(<ThrowError />, {wrapper: ErrorBoundary})

  rerender(<ThrowError shouldThrow={true} />)

  expect(reportError).toHaveBeenCalledTimes(1)
  expect(reportError).toHaveBeenCalledWith(expect.any(Error), expect.anything())
  expect(console.error).toHaveBeenCalledTimes(2)

  expect(getByRole('alert').textContent).toMatchInlineSnapshot(
    `"There was a problem."`,
  )

  console.error.mockClear()
  reportError.mockClear()

  rerender(<ThrowError />)

  fireEvent.click(getByText(/try again/i))

  expect(reportError).not.toHaveBeenCalled()
  expect(console.error).not.toHaveBeenCalled()
  expect(queryByRole('alert')).not.toBeInTheDocument()
  expect(queryByText(/try again/i)).not.toBeInTheDocument()
})
