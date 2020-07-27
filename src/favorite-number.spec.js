import React from 'react'
import ReactDom from 'react-dom'
import {getQueriesForElement} from '@testing-library/react'
// noinspection ES6PreferShortImport
import {FavoriteNumber} from './favorite-number'

function render(ui) {
  const container = document.createElement('div')
  ReactDom.render(ui, container)
  const queries = getQueriesForElement(container)
  return {container, ...queries}
}

test('renders', () => {
  const {getByLabelText} = render(<FavoriteNumber />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
