import EventList from "@/components/events/event-list"
import EventSearch from "@/components/events/event-search"
import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/router"

const EventsPage = () => {
  const router = useRouter()
  const events = getAllEvents()

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  )
}

export default EventsPage
