import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

const setUp=(props={})=>{
    //this is called shallow rendering where you get the exact component
    const component=shallow(<Header {...props}/>); 
    return component;
};

describe("Header Component",()=>{
    let component;
    //beforeEach function runs before running all test functions
    beforeEach(()=>{
        component=setUp();
    });

    it('A simple test example',()=>{
        expect(1).toBe(1);
        });

    it('This method checks if class .headerComponent is used only in one element in <Header/>',()=>{
        //console.log(component.debug());
        const wrapper=component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
        });
})