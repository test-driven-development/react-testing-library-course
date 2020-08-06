/* eslint-disable testing-library/prefer-wait-for */
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {HiddenMessage} from './hidden-message'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => (props.in ? props.children : null),
  }
})

test('shows CSS transition message when clicked', () => {
  const message = 'dummy'
  const {getByText, queryByText} = render(
    <HiddenMessage>{message}</HiddenMessage>,
  )
  const toggleButton = getByText(/toggle/i)
  expect(queryByText(message)).not.toBeInTheDocument()

  fireEvent.click(toggleButton)
  expect(getByText(message)).toBeInTheDocument()

  fireEvent.click(toggleButton)
  expect(queryByText(message)).not.toBeInTheDocument()
})
