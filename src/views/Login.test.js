import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login'

test('should render login form', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  )
  const inputEmail = screen.getByTestId('input-email')
  const inputPass = screen.getByTestId('input-email')
  expect(inputEmail).toBeInTheDocument()
  expect(inputPass).toBeInTheDocument()
})

test('should render login action button', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  )
  const button = screen.getByTestId('login-button')
  expect(button).toBeDefined()
  expect(button).toBeDisabled()
})
