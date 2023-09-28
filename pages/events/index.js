import { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EvenetList";
import EventSearch from "../../components/events/EventSearch";

const EventsPage = () => {
  const evnets = getAllEvents();
  return (
    <Fragment>
      <EventSearch />
      <EventList items={evnets}/>
    </Fragment>
  );
};

export default EventsPage;
