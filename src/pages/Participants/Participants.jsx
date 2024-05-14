import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvent, getLoading } from '../../redux/events/selectors';
import { fetchEvent } from '../../redux/events/operations';
import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack';
import Title from '../../components/Title/Title';
import ParticipantsList from '../../components/ParticipantsList/ParticipantsList';

const ParticipantsPage = () => {
  const event = useSelector(getEvent);
  const loading = useSelector(getLoading);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvent(id));
  }, [dispatch, id]);

  const title = event ? event.title : '';

  return (
    <main>
      {loading && <div>Loading...</div>}
      {event !== null && (
        <>
          <Title text={`"${title}" participants`} />
          <ButtonBack />
          <ParticipantsList participants={event.participants} />
        </>
      )}
    </main>
  );
};

export default ParticipantsPage;
