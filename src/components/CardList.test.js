import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList.js";

it("expect to render CardList component", () => {
	const mockRobots = [
		{
			id: 1,
			name: "John Snow",
			username: "JohnJohn",
			email: "John@gmail.com",
		},
	];
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
