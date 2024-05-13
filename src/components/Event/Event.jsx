import { Link } from 'react-router-dom';

const Event = ({ event }) => {
  return (
    <>
      <li>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </li>
      <div>
        <Link to="/registration">
          <button>Register</button>
        </Link>
        <Link to="/participants">
          <button>View</button>
        </Link>
      </div>
    </>
  );
};

export default Event;
