import React from 'react'
import ReactDom from 'react-dom'
// noinspection ES6PreferShortImport
import {FavoriteNumber} from './favorite-number'

test('renders', () => {
  const div = document.createElement('div')
  ReactDom.render(<FavoriteNumber />, div)
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})
