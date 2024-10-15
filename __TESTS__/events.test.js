import "@testing-library/jest-dom"
import EventsPage from "@/pages/events"
import { render } from "@testing-library/react"
import { useRouter } from "next/router"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("EVENTS", () => {
  it("renders the Events page without crashing", () => {
    useRouter.mockImplementation(() => ({
      route: "/events",
      pathname: "/events",
      query: {},
      asPath: "/events",
    }))

    const { container } = render(<EventsPage />)
    expect(container).toBeInTheDocument()
    expect(container.firstChild).toBeInTheDocument()
  })
})
