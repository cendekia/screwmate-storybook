import React from "react";

import { HomePage } from "./HomePage";

export default {
  title: "Screwmate/Layout",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const HomeLayout = Template.bind({});

HomeLayout.args = {};