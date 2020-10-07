import * as React from 'react'
import './button.pcss'

const Button = ({message = 'Hello world'}) => (
    <button>{message}</button>
)

export default Button