import { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/EvenetList";
import EventSearch from "../../components/events/EventSearch";

const EventsPage = () => {
  const router = useRouter();
  const evnets = getAllEvents();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }
  
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={evnets}/>
    </Fragment>
  );
};

export default EventsPage;
