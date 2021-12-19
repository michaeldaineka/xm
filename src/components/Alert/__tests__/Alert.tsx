import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme'
import Alert from '../Alert'

describe('Alert component', () => {
    let component: ShallowWrapper;
    beforeAll(() => {
        component = shallow(<Alert/>);
    })

    it('Alert component appears', () => {
        expect(component.length).toBe(1);
    })

})
