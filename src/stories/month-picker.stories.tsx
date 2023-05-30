import React from 'react';
import MonthPicker from '../components/month-picker'
import type {StoryObj} from '@storybook/react';

export default {
  title: "Month Picker",
  component: MonthPicker,
}

export const Default: StoryObj<typeof MonthPicker> = {
  render: (args) => <MonthPicker {...args} onMonthChange={(val) => console.log(val)}/>,
  args: {
  }
};