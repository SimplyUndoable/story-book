import React from 'react'
import Button from './index.tsx'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: "'Button component', decorators: [withKnobs]"}

export const button = () => {
  const message = text('Text', 'Click here now!')
  return <Button message={message}></Button>
}