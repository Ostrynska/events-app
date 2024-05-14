import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvent } from '../../redux/events/selectors';
import { fetchEvent } from '../../redux/events/operations';
import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack';
import Title from '../../components/Title/Title';

const ParticipantsPage = () => {
  const event = useSelector(getEvent);
  console.log(event);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvent(id));
  }, [dispatch, id]);

  console.log(fetchEvent(id));

  return (
    <main>
      <ButtonBack />
      <Title text={`"${event.title}" participants`} />
    </main>
  );
};

export default ParticipantsPage;
