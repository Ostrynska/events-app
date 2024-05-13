import { Link } from 'react-router-dom';

const Event = ({ event }) => {
  return (
    <li>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <div>
        <Link to={`${event._id}/registration`}>
          <button>Register</button>
        </Link>
        <Link to={`/${event._id}/participants`}>
          <button>View</button>
        </Link>
      </div>
    </li>
  );
};

export default Event;
