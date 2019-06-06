import React from 'react'
import TestRenderer from 'react-test-renderer';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { Dashboard } from '../../pages'

const feature = loadFeature('./src/test/feature/counter.feature')

defineFeature(feature, test=>{
    test("Initial value",({given,when,then})=>{
        var testInstance;
        given("mount counter",()=>{
            const testRender = TestRenderer.create(<Dashboard />)
            testInstance = testRender.root;
        })

        when("Initialy",()=>{
            // Initialy no operation
        })

        then("show 0",()=>{
            const divInstance = testInstance.findByProps({id: 'count-label'})
            expect(divInstance.props.children).toBe(0)
        })
    })

    test("clicking decrement" , ({given,when,then})=>{
        var testInstance;
        given('mount counter', ()=>{
            const testRender = TestRenderer.create(<Dashboard />)
            testInstance = testRender.root;
        })

        when("clicking -",()=>{
            const buttonInstance = testInstance.findByProps({ id: '-'})
            buttonInstance.props.onClick();
        })

        then("showing -1",()=>{
            const divInstance = testInstance.findByProps({ id: 'count-label' });
            expect(divInstance.props.children).toBe(-1);
        })
    })

    test("clicking increment", ({given,when,then})=>{
        var testInstance;
        given("mount counter",()=>{
            const testRender = TestRenderer.create(<Dashboard/>)
            testInstance = testRender.root;
        })

        when("clicking +",()=>{
            const buttonInstance = testInstance.findByProps({id: '+'})
            buttonInstance.props.onClick();
        })
        then("showing 1",()=>{
            const divInstance = testInstance.findByProps({ id: 'count-label'});
            expect(divInstance.props.children).toBe(1)
        })
    })
})