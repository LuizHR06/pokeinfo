import { render, screen } from "@testing-library/react"
import { BackToTopButton } from "../BackToTopButton"

describe('BackToTopButton', () => {
  it('should render the button correctly', () => {
    render(<BackToTopButton />)
  
    expect(screen.getByTestId('BackToTopButton')).toBeInTheDocument()
  })
})