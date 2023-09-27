import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EvenetList";

const StartingPage = () => {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents}/>;
};

export default StartingPage;
