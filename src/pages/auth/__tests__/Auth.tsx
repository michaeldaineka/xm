import React from 'react';
import Auth from '../Auth';
import {shallow, ShallowWrapper} from 'enzyme'
import {render as renderWrapper} from 'utils/tests/App/AppWrapper';
import App from 'components/App';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Auth page', () => {
    let component: ShallowWrapper;
    beforeAll(() => {
        component = shallow(renderWrapper(<Router><Auth/></Router>));
    })

    it('Auth page appears', () => {
        expect(component.length).toBe(1);
    })
})
