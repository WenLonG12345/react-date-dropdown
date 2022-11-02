import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ReactComponent as ArrowDownIcon } from './assets/arrowDown.svg';
import { ReactComponent as EmailIcon } from './assets/email.svg';
import design from '../../.storybook/utils';

const icons = { ArrowDownIcon, EmailIcon, 'No icon': undefined };
const iconsSelect = {
  options: Object.keys(icons),
  mapping: icons,
  control: {
    type: 'select',
    labels: {
      ArrowDownIcon: 'Down Icon',
      EmailIcon: 'Email Icon',
      'No icon': 'No icon',
    },
  },
};

export default {
  title: 'Controls/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    IconLeft: iconsSelect,
    IconRight: iconsSelect,
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  loading: false,
  disabled: false,
  badge: false,
};

Primary.parameters = {
  ...design('3%3A210'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  loading: false,
  disabled: false,
  badge: false,
};
Secondary.parameters = {
  ...design('8%3A219'),
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
Large.parameters = {
  ...design('3%3A210'),
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
Small.parameters = {
  ...design('3%3A210'),
};
