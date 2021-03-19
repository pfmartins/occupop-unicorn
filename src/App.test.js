import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('should render app container', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
  const appEl = screen.getByTestId(/app-container/i)
  expect(appEl).toBeInTheDocument()
})
