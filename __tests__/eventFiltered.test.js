import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { useRouter } from "next/router"
import FilteredEvents from "@/pages/events/[...slug]"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("EVENT FILTERED", () => {
  it("renders the events filtered page without crashing", () => {
    useRouter.mockImplementation(() => ({
      route: "/events/[...slug]",
      pathname: "/events/[...slug]",
      query: { date: "13-02-2024", sort: "asc" },
      asPath: "/events/13-02-2024/asc",
    }))

    const { container } = render(<FilteredEvents />)
    expect(container).toBeInTheDocument()
    expect(container.firstChild).toBeInTheDocument()
  })
})
