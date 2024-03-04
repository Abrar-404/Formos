import Link from 'next/link';
import Navbar from './components/Navbar/Navbar';
import HomeForm from './components/HomeForm/HomeForm';

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeForm></HomeForm>
      <Link href="/register">
        <button>register</button>
      </Link>
    </div>
  );
};

export default HomePage;
