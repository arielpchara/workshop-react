import React, { useState, ChangeEvent } from 'react'
import { InputStyled } from './InputStyled'

export interface InputProps {
  defaultValue?: string,
  onChange?: (value: string) => void
  color?: string
}

export const Input:React.FC<InputProps> = ({
  defaultValue,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => 
    setValue(event.currentTarget.value)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if( value && event.key === 'Enter' && onChange ) {
      onChange(value)
      setValue('')
    }
  }

  return (
    <InputStyled
      {...rest}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      value={value}
    />
  )
}