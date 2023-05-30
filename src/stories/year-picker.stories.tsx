import React from 'react';
import YearPicker from '../components/year-picker'
import type {StoryObj} from '@storybook/react';

export default {
  title: "Year Picker",
  component: YearPicker,
}

export const Default: StoryObj<typeof YearPicker> = {
  render: (args) => <YearPicker {...args} onYearChange={(val) => console.log(val)}/>,
  args: {
  }
};