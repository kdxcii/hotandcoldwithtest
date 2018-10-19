import React from 'react';

import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Should Render without Crashing', () => {
		shallow(<GuessCount />);
	});
	it('Should tell you how many guesses have been made', () => {
		let value = 5;
		let wrapper = shallow(<GuessCount guessCount={value}/>);

		expect(wrapper.text()).toEqual(`You\'ve made ${value} guesses!`);
	})
});