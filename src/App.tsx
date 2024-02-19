import LayoutEvenOneColumn from './Layout/LayoutEvenOneColumn';
import Header from './components/Header';
import PageRoutes from './routes';

export default function App() {
  return (
    <LayoutEvenOneColumn>
      <Header />
      <PageRoutes />
    </LayoutEvenOneColumn>
  );
}
