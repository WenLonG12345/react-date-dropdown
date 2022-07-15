import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
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
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/L5pyPLReVeueLXcxX8hak9/Strateos?node-id=42%3A2772',
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/L5pyPLReVeueLXcxX8hak9/Strateos?node-id=42%3A2939',
  },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
Large.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/L5pyPLReVeueLXcxX8hak9/Strateos?node-id=42%3A2640',
  },
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
Small.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/L5pyPLReVeueLXcxX8hak9/Strateos?node-id=42%3A2784',
  },
};
