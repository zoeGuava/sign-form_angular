import { InputSpec, ErrorStyles } from './form-spec';

export const INPUT_DATA: InputSpec[] = [
  {
    id: 'first-name',
    name: 'First Name',
    type: 'text',
    value: 'default value',
    error: false,
    errorMsg: 'First Name cannot be empty'
  },
  {
    id: 'last-name',
    name: 'Last Name',
    type: 'text',
    value: 'default value',
    error: false,
    errorMsg: 'Last Name cannot be empty'
  },
  {
    id: 'email',
    name: 'Email',
    type: 'email',
    value: 'default value',
    error: false,
    errorMsg: 'Email cannot be empty'
  },
  {
    id: 'password',
    name: 'Password',
    type: 'password',
    value: 'default value',
    error: false,
    errorMsg: 'Password cannot be empty'
  }
]

export const ERROR_STYLES: ErrorStyles = {
  icon: 'absolute right-0 mr-4 mt-4 p-3 icon-error bg-no-repeat',
  input: 'border-primary-red text-primary-red focus:border-primary-red',
  msg: 'block'
}