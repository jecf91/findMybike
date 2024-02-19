import Feedback from '../../components/Feedback';

const NotFound = () => {
  return (
    <div>
      <Feedback status="error" message="404 - Page not found" />
    </div>
  );
};

export default NotFound;
