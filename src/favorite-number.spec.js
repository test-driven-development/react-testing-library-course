import React from 'react'
import {render} from '@testing-library/react'
// noinspection ES6PreferShortImport
import {FavoriteNumber} from './favorite-number'

test('renders', () => {
  const {getByLabelText} = render(<FavoriteNumber />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
