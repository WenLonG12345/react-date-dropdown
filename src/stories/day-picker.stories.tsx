import React from 'react';
import DayPicker from '../components/day-picker'
import type {StoryObj} from '@storybook/react';

export default {
  title: "Day Picker",
  component: DayPicker,
}

export const Default: StoryObj<typeof DayPicker> = {
  render: (args) => <DayPicker {...args} onDayChange={(val) => console.log(val)}/>,
  args: {
    placeholder: 'DD',
  },
  argTypes: {
    selectStyle: {control: 'object', description: 'style for <select/>'},
    optionStyle: {control: 'object', description: 'style for <option/>'},
    year: {control: 'number', defaultValue: '1991', description: "Default year - 1991. Used to calculate number of days"},
  }
};