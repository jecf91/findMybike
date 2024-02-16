import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../../slices/bikes/fetchBikes';
import { AppDispatch } from '../../store/store';
import {
  selectBikes,
  selectError,
  selectStatus,
} from '../../slices/bikes/bikeSlice';
import Table from '../../components/Table';
import Loader from '../../components/Loader';
import Feedback from '../../components/Feedback';

const Bikes = () => {
  const fetchBikesDispatch = useDispatch<AppDispatch>();

  const bikes = useSelector(selectBikes);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (status === 'idle') {
      fetchBikesDispatch(
        fetchBikes(
          'page=1&per_page=10&location=Berlin&distance=10&stolenness=proximity'
        )
      );
    }
  }, []);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'failed' && error) {
    return <Feedback status="error" message={error} />;
  }

  return <Table bikes={bikes} />;
};

export default Bikes;
