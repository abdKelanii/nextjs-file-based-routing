import EventItem from "./EventItem";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          location={event.location}
          date={event.location}
          title={event.title}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
