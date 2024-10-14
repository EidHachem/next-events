import EventList from "@/components/events/event-list"
import { getFeaturedEvents } from "@/dummy-data"
import React from "react"

const HomePage = () => {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  )
}

export default HomePage
