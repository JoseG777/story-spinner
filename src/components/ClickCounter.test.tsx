import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ClickCounter from './ClickCounter'

test('increments count when clicked', async () => {
  render(<ClickCounter />)

  const button = screen.getByRole('button', { name: /count is 0/i })
  await userEvent.click(button)

  expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
})
