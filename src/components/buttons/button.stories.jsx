import React from 'react';
import { Button } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Button',
  argTypes: {
    text: { control: 'text' },
    isDisabled: { control: 'boolean' },
    shadow: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    textColor: {
      control: { type: 'select', options: ['primary', 'disable', 'secondary'] },
    },
    border: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args} />;

export const primaryButton = Template.bind({});
primaryButton.args = {
  text: 'primary',
  backgroundColor: 'primary',
  textColor: 'primary',
  shadow: true,
  border: false
};

export const secondaryButton = Template.bind({});
secondaryButton.args = {
  text: 'Secondary',
  backgroundColor: 'secondary',
  textColor: 'secondary',
  shadow: true,
  border: false
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  text: 'Disabled',
  backgroundColor: 'disable',
  textColor: 'disable',
  shadow: false,
  isDisabled: true,
  border: true
};
