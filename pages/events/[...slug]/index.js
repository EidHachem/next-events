import EventList from "@/components/events/event-list"
import ResultsTitle from "@/components/events/results-title/results-title"
import Button from "@/components/ui/button"
import ErrorAlert from "@/components/ui/error-alert/error-alert"
import { getFilteredEvents } from "@/dummy-data"
import { useRouter } from "next/router"
import React from "react"

const FilteredEvents = () => {
  const router = useRouter()

  const filteredData = router.query.slug

  if (!filteredData) {
    return <p className="center">Loading...</p>
  }

  const [filteredYear, filteredMonth] = filteredData

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  console.log(numMonth)

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter, Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  )
}

export default FilteredEvents
