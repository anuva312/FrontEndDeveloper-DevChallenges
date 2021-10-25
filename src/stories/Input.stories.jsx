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
    fullWidth: {
      control: { type: "boolean" },
    },
    ismultiline: {
      control: { type: "boolean" },
    },

    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
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
export const SmallSized = Template.bind({});
SmallSized.args = {
  label: "Label",
  placeholder: "Placeholder",
  size: "sm",
};
export const MediumSized = Template.bind({});
MediumSized.args = {
  label: "Label",
  placeholder: "Placeholder",
  size: "md",
};
export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Label",
  placeholder: "Placeholder",
  fullWidth: true,
};
export const Muiltiline = Template.bind({});
Muiltiline.args = {
  label: "Label",
  placeholder: "Placeholder",
  ismultiline: true,
  rows: "4",
};
