//Stateful component testing tryout

import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton.js";

describe("CounterButton component testing", () => {
	it("shallow render", () => {
		const mockColor = "red";
		const wrapper = shallow(<CounterButton color={mockColor} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("increment correctly", () => {
		const wrapper = shallow(<CounterButton />);

		wrapper.find("[id='counter']").simulate("click");
		expect(wrapper.state()).toEqual({ count: 2 });
	});

	it("test props", () => {
		const mockColor = "red";
		const wrapper = shallow(<CounterButton color={mockColor} />);

		expect(wrapper.props().color).toEqual("red");
	});
});
