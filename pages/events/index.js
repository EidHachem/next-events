import EventList from "@/components/events/event-list"
import EventSearch from "@/components/events/event-search"
import { getAllEvents } from "@/dummy-data"

const EventsPage = () => {
  const events = getAllEvents()

  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  )
}

export default EventsPage
