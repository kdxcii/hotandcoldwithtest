import React from 'react';

import { shallow } from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
	it('Should Render Without Crashing', () => {
		shallow(<StatusSection auralStatus="" guesses={[]}/>);
	});
});