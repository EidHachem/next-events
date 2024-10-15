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

  it("renders a list", () => {
    render(<HomePage />)

    const list = screen.getByRole("list")

    expect(list).toBeInTheDocument()
  })

  it("renders homepage unchanged", () => {
    const { container } = render(<HomePage />)
    expect(container).toMatchSnapshot()
  })
})
