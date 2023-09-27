import EventItem from "./EventItem";
import classes from './eventList.module.css';

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
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
