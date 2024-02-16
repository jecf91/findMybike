import LayoutEvenOneColumn from './Layout/LayoutEvenOneColumn';
import Header from './components/Header';
import Bikes from './pages/bikes';

export default function App() {
  return (
    <LayoutEvenOneColumn>
      <Header />
      <Bikes />
    </LayoutEvenOneColumn>
  );
}
