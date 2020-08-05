import React from 'react'
import user from '@testing-library/user-event'
import {render} from '@testing-library/react'
import {FavoriteNumber} from './favorite-number'

test('invalid value shows error message', () => {
  const {getByLabelText, getByRole, rerender, debug} = render(
    <FavoriteNumber />,
  )
  const input = getByLabelText(/favorite number/i)
  user.type(input, '10')
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
  debug()
  rerender(<FavoriteNumber max={11} />)
  user.type(input, '10')
  debug()
})
