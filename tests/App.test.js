import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('renders without crashing', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();
    });
});
