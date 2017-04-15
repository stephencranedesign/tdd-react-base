import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import App from '../src/App';

describe('App', () => {
  let props,
    element;

    describe('some basic stuff', () => {
	    beforeEach('set up', () => {
	        props = {};
	        element = shallow(<App />);
	    });

	    it('should have a class named app', () => {
	    	expect(element.prop('className')).to.equal('app');
	    });
	})
});