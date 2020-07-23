import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import * as td from 'testdouble'
import * as tdJest from 'testdouble-jest'

global.td = td
tdJest(td, jest)

afterEach(() => {
  td.reset()
})
