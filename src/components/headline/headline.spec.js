import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';

import { findByTestAttribute } from '../../../utils';

const setUp=(props={})=>{
    const component = shallow(<Headline {...props}/>);
    return component;
};

describe('Headline Component',()=>{
    describe("Have Props",()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                header:'Test Header',
                desc:'Test Desc'
            };
            wrapper=setUp(props);
        })

        it('Should Render Without Errors',()=>{
            //console.log(component.debug());
            const component = findByTestAttribute(wrapper, "HeadlineComponent");
            expect(component.length).toBe(1);
            });

            it('Should Render a H1',()=>{
                //console.log(component.debug());
                const h1 = findByTestAttribute(wrapper, "header");
                expect(h1.length).toBe(1);
                });

                it('Should Render a desc',()=>{
                    //console.log(component.debug());
                    const desc = findByTestAttribute(wrapper, "desc");
                    expect(desc.length).toBe(1);
                    });
    });

    describe("Have No Props",()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setUp();
        })

        it('Should Not Render',()=>{
            //console.log(component.debug());
            const component = findByTestAttribute(wrapper, "HeadlineComponent");
            expect(component.length).toBe(0);
            });
    });
})