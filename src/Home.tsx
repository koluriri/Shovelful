import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        <Link to={`/speech/`}>しゃべる</Link>
      </div>
    </>
  );
};

export default Home;
