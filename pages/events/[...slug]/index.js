import EventList from "@/components/events/event-list"
import ResultsTitle from "@/components/events/results-title/results-title"
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
    return <p>Invalid filter, Please adjust your values!</p>
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found!</p>
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
