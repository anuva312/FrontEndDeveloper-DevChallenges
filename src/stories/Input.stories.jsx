import React from "react";

import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    color: {
      control: { type: "color" },
    },
    helperText: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    error: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    inherit_width: {
      control: { type: "boolean" },
    },
    startIcon: {
      options: ["delete", "visibility", "search", "shoppingCart", "lock"],
      control: { type: "radio" },
    },
    endIcon: {
      options: ["delete", "visibility", "search", "shoppingCart", "lock"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
};

export const Error = Template.bind({});
Error.args = {
  label: "Label",
  placeholder: "Placeholder",
  error: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: true,
};
export const HelperText = Template.bind({});
HelperText.args = {
  label: "Label",
  placeholder: "Placeholder",
  helperText: "Some helper text here!",
};
export const HelperTextError = Template.bind({});
HelperTextError.args = {
  label: "Label",
  placeholder: "Placeholder",
  helperText: "Some helper text here!",
  error: true,
};
