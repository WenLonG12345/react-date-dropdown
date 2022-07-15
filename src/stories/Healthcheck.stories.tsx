import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Healthcheck } from './Healthcheck';

export default {
  title: 'Example/Healthcheck',
  component: Healthcheck,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Healthcheck>;

const Template: ComponentStory<typeof Healthcheck> = () => <Healthcheck />;

export const CheckStatus = Template.bind({});
CheckStatus.args = {};

CheckStatus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const checkButton = await canvas.getByRole('button', {
    name: /Healthcheck/i,
  });
  await expect(canvas.getByTestId('loading')).not.toBeVisible();
  await userEvent.click(checkButton);
  await expect(canvas.getByTestId('loading')).toBeVisible();
};
