import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import { shallow } from 'enzyme';


describe('Rendering', () => {

    it('real rendering renders without crashing', () => {
        const div = document.createElement('container');
        ReactDOM.render(<Game />, div);
    });

    it('shallow rendering renders without crashing', () => {
        //See http://airbnb.io/enzyme/docs/api/shallow.html
        shallow(<Game />);
    });

});
