/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
// noinspection ES6PreferShortImport
import {FavoriteNumber} from './favorite-number'

test('invalid value shows error message', () => {
  const {getByLabelText, getByRole} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  fireEvent.change(input, {target: {value: '10'}})
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})

test('renders', () => {
  const {getByLabelText} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
