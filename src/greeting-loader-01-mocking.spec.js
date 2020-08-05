/* eslint-disable testing-library/prefer-wait-for */
import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import {GreetingLoader} from './greeting-loader-01-mocking'

jest.mock('./api')
test('loads greetings on click', async () => {
  const loadGreeting = jest.fn()
  loadGreeting.mockResolvedValueOnce({data: {greeting: 'DUMMY_GREETING'}})
  const {getByLabelText, getByText} = render(
    <GreetingLoader loadGreeting={loadGreeting} />,
  )
  const nameInput = getByLabelText(/name/i)
  const greetingDiv = getByLabelText(/greeting/i)
  const loadButton = getByText(/load/i)
  nameInput.value = 'Mary'
  fireEvent.click(loadButton)
  expect(loadGreeting).toHaveBeenCalledWith('Mary')
  expect(loadGreeting).toHaveBeenCalledTimes(1)
  await wait(() => expect(greetingDiv).toHaveTextContent('DUMMY_GREETING'))
})
