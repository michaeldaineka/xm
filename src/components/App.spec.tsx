import { shallow } from 'enzyme'
import React from 'react'
import { render } from '../utils/tests/App/AppWrapper'
import App from './App'

describe('App component', () => {
    it('App component appears', () => {
        const component = shallow(render(<App />))
        expect(component.length).toBe(1)
    })
})
