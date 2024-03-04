import Link from "next/link";


const HomePage = () => {
  return (
    <div>
      <h1>HEllo from homepage</h1>
      <Link href="/register"><button>register</button></Link>
    </div>
  );
};

export default HomePage;
