import './scss/Banner.scss';
import bannerImg from './bannerimg.png';
import polygonImg from './polygon.png';
import bitpandaImg from './bitpanda.png';
import coindeskImg from './coindesk.png';
import tronImg from './tron.png';
import mapboxImg from './mapbox.png';
import Button from '../Button/Button';
import PlayIcon from '../../icons/playButton';

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner__text">
        <h1>
          Join the <span>Crypto</span> Revolution Start <span>Trading</span>{' '}
          Today
        </h1>
        <p>
          The crypto trading revolution has transformed the way we invest,
          trade, and store value. With its decentralized and transparent nature,
          cryptocurrencies offer a more secure and accessible alternative to
          traditional financial systems.
        </p>
      </div>

      <img src={bannerImg} alt="Screen" />
      <div className="banner__buttons">
        <Button type="square">Get Started</Button>
        <Button type="transparent" Icon={PlayIcon}>
          How it work
        </Button>
      </div>

      <div className="banner__partners">
        <img src={polygonImg} alt="Polygon" />
        <img src={bitpandaImg} alt="BitPanda" />
        <img src={coindeskImg} alt="CoinDesk" />
        <img src={mapboxImg} alt="MapBox" />
        <img src={tronImg} alt="Tron" />
      </div>
    </div>
  );
};
