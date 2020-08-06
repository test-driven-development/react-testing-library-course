import React from 'react'
import {render} from '@testing-library/react'
import {ErrorBoundary} from './error-boundary'
import {reportError} from './api'

jest.mock('./api')
let spyInstance
beforeAll(() => {
  spyInstance = jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  spyInstance.mockRestore()
})

afterEach(() => {
  jest.restoreAllMocks()
})

const dummyError = new Error('dummy')

function ThrowError({shouldThrow}) {
  if (shouldThrow) throw dummyError
}

test('calls error boundary', () => {
  reportError.mockResolvedValueOnce({success: true})
  const {rerender} = render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>,
  )

  rerender(
    <ErrorBoundary>
      <ThrowError shouldThrow={true} />
    </ErrorBoundary>,
  )

  expect(reportError).toHaveBeenCalledTimes(1)
  expect(reportError).toHaveBeenCalledWith(expect.any(Error), expect.anything())
  expect(console.error).toHaveBeenCalledTimes(2)
})
