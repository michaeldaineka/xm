import React from 'react';
import Header from '../Header';
import {shallow, ShallowWrapper} from 'enzyme'

describe('Header component', () => {
    let component: ShallowWrapper;
    beforeAll(() => {
        component = shallow(<Header/>);
    })

    it('Header component appears', () => {
        expect(component.length).toBe(1);
    })

    it('Header component renders a logo', () => {
        expect(component.find('[data-test-id="logo"]').length).toBe(1)
    })
})
