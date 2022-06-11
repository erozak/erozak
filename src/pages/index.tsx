import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-primary text-primary">
      <a
        className="flex"
        href="https://github.com/erozak"
        target="_self"
      >
        <h1 className="text-2xl">@erozak</h1>
      </a>
    </div>
  );
};

export default Home;
