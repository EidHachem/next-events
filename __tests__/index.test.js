import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import HomePage from "../pages/index"
import { useRouter } from "next/router"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("Home", () => {
  it("renders the home page when the user visits the website without crashing", () => {
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
    }))
    render(<HomePage />)
    const { container } = render(<HomePage />)
    expect(container).toBeInTheDocument()
  })

  it("renders a heading", () => {
    render(<HomePage />)

    const heading = screen.getByRole("heading", { level: 1 })

    expect(heading).toBeInTheDocument()
  })

  it("renders homepage unchanged", () => {
    const { container } = render(<HomePage />)
    expect(container).toMatchSnapshot()
  })
})
