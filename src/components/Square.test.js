import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Square from './Square';

describe('<Square />', () => {

    it('should render the props value', () => {
        const squareWrapper = shallow(<Square value={ 'X' } onClick={ () => void(0) }/>);
        expect(squareWrapper.text()).toBe('X');
    });

    it('should call the props callback when clicked', () => {
        const onButtonClick = sinon.spy();
        const squareWrapper = shallow(<Square value={ 'X' } onClick={ onButtonClick }/>);

        squareWrapper.simulate('click');

        expect(onButtonClick.calledOnce).toBe(true);
    });

});