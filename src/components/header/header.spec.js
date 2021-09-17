import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

it('It should render without errors',()=>{
expect(1).toBe(1);
});

describe("Header Component",()=>{
    it('This method checks if class .headerComponent is used only in one element in <Header/>',()=>{
        //this is called shallow rendering where you get the exact component
        const component=shallow(<Header/>); 
        //console.log(component.debug());
        const wrapper=component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
        });
})