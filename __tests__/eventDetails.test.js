import "@testing-library/jest-dom"
import EventsDetails from "@/pages/events/[eventId]"
import { render } from "@testing-library/react"
import { useRouter } from "next/router"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("EVENT DETAILS", () => {
  it("renders the events details page without crashing", () => {
    useRouter.mockImplementation(() => ({
      route: "/events/[eventId]",
      pathname: "/events/[eventId]",
      query: { eventId: 1 },
      asPath: "/events/1",
    }))

    const { container } = render(<EventsDetails />)
    expect(container).toBeInTheDocument()
    expect(container.firstChild).toBeInTheDocument()
  })
})
