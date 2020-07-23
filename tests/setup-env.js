import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import * as td from 'testdouble'

global.td = td
require('testdouble-jest')(td, jest)

afterEach(() => {
  td.reset()
})
