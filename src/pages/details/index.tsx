import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <h1>Case details</h1>
      <p>case id: {id}</p>
    </div>
  );
};

export default Details;
