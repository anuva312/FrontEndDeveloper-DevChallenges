import React from "react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["default", "outline", "text"],
      control: { type: "radio" },
    },
    disableShadow: {
      control : {type : "boolean"}
    },
    disabled: {
      control : {type : "boolean"}
    },
    size:{
      options: ["sm","md","lg"],
      control : {type : "radio"}
    },
    color: {
      options: ["default", "primary", "secondary", "danger"],
      control: { type: "radio" },
    },
    startIcon : {
      options: ["delete", "visibility", "search", "shoppingCart","lock"],
      control: { type: "radio" },
    },
    endIcon : {
      options: ["delete", "visibility", "search", "shoppingCart","lock"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  children: "Default",
};
export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: "Default",
};
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Default",
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  color : "primary",
  children : "Default",
  disableShadow : true,
}

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "default",
  children: "Disabled",
  disabled : true,
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Default",
};
export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Default",
};
export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  children: "Default",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Default",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  children: "Default",
};
export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Default",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  color : "primary",
  startIcon : "shoppingCart",
  children: "Default",
}

export const EndIcon = Template.bind({});
EndIcon.args = {
  color : "primary",
  endIcon : "shoppingCart",
  children: "Default",
}
