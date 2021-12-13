import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../Layout';
import {BrowserRouter} from "react-router-dom";

test('Layout component renders', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
