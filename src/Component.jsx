import React from 'react'
import Select, { defaultTheme } from 'react-select'

const options = [
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' }
  ]
const Component = () => (

  <Select options={options} />
  )
  export default Component;