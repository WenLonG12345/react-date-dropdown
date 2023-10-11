import React from 'react';
import DateDropdown, { IDateDropdown } from '../components/date-dropdown';
import type { StoryObj } from '@storybook/react';

export default {
  title: 'Date Dropdown',
  component: DateDropdown,
};

export const Default: StoryObj<typeof DateDropdown> = {
  render: (args) => <DateDropdown {...args} />,
  argTypes: {
    onDateChange: {
      action: 'onDateChange',
      description: 'Required. Callback for date change: Format: YYYY-MM-DD',
    },
    defaultDate: {
      type: 'string',
      description: 'Default date: Format: YYYY-MM-DD',
    },
    selectPlaceholder: {
      control: 'object',
      description: 'Placeholder for select input',
    },
    yearStart: { type: 'number' },
    yearEnd: { type: 'number' },
    language: {
      options: ['EN', 'CN', 'BM'],
      control: { type: 'select' },
      description: 'Language for Month Strings',
    },
    arrayMonthList: {
      control: 'text',
      description: 'Language for Month Strings',
    },
  },
};
