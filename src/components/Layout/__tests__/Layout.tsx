import React from 'react';
import Header from '../../Header';
import Layout from '../Layout'
import Route from 'react-router-dom'
import {shallow, ShallowWrapper} from 'enzyme'

describe('Layout component', () => {
    let component: ShallowWrapper;
    beforeAll(() => {
        component = shallow(<Layout/>);
    })

    it('Layout component appears', () => {
        expect(component.length).toBe(1);
    })

    it('Layout component renders a Header component', () => {
        expect(component.find(Header).length).toBe(1)
    })

    it('Layout component renders at least one Route component', () => {
        expect(component.find('Route').length).not.toBe(0)
    })
})
