import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import useTracking from "./useTracking";

const Home = () => {
  useTracking();

  return (
    <>
      <nav>
        <h1>
          <Logo />
          Shovelful
        </h1>
      </nav>
      <div className="hero">
        <div className="illust">
          <img src="/img/illust.svg" />
        </div>
        <div className="copy">
          <h2>
            声が出せないときでも
            <br />
            通話できる！
          </h2>
          <p className="lead">
            操作はエンター（スマホの場合は改行）だけ。
            <br />
            <strong>リアルタイムな音声読み上げ</strong>により
            <br />
            <strong>普通の会話と同じ</strong>ようなスピードで通話ができる！
          </p>
          <small>
            ※通話で使用するにはSoundflowerなどの仮想オーディオデバイスの設定が必要な場合があります。
          </small>
          <Link to={`/speech/`} className="speech-btn">
            しゃべる→
          </Link>
        </div>
      </div>
      <footer>
        つくったひと:{" "}
        <a href="//twitter.com/koluriri" target="_blank" rel="noreferrer">
          @koluriri
        </a>
      </footer>
    </>
  );
};

export default Home;
