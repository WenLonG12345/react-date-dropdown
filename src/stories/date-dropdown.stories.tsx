import React from 'react';
import DateDropdown, {IDateDropdown} from '../components/date-dropdown'
import type {StoryObj} from '@storybook/react';

export default {
  title: "Date Dropdown",
  component: DateDropdown,
}

export const Default: StoryObj<typeof DateDropdown> = {
  render: (args) => <DateDropdown {...args}/>,
  argTypes: {
    onDateChange: {action: 'onDateChange'}
  }
};
