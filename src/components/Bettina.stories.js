import React from "react";
import Bettina from "./Bettina";

export default {
  component: Bettina,
  title: "Bettina",
};

const Template = (args) => <Bettina {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Bettina",
    state: "BETTINA_Button",
  },
};
