import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getEvent, getLoading } from '../../redux/events/selectors';
import { fetchEvent } from '../../redux/events/operations';

import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack';
import Title from '../../components/Title/Title';
import ParticipantsList from '../../components/ParticipantsList/ParticipantsList';
import SearchBar from '../../components/SearchBar/SearchBar';

const ParticipantsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector(getEvent);
  const loading = useSelector(getLoading);
  const [filteredParticipants, setFilteredParticipants] = useState([]);

  useEffect(() => {
    dispatch(fetchEvent(id));
  }, [dispatch, id]);

  useEffect(() => {
    setFilteredParticipants(event?.participants || []);
  }, [event]);

  const title = event ? event.title : '';

  const handleSearch = searchTerm => {
    if (!searchTerm) {
      setFilteredParticipants(event?.participants || []);
      return;
    }
    const filtered = event.participants.filter(
      participant =>
        participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredParticipants(filtered);
  };

  return (
    <main>
      {loading && <div>Loading...</div>}
      {event !== null && (
        <>
          <Title text={`"${title}" participants`} />
          <ButtonBack />
          <SearchBar onSearch={handleSearch} />
          <ParticipantsList participants={filteredParticipants} />
        </>
      )}
    </main>
  );
};

export default ParticipantsPage;
