import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  },
  argTypes: {
    disabled: {
      table: {
        disable: true,
      }
    },
  }
}
