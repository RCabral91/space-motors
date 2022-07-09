import loading from '../../assets/loading.gif';

interface ILoadingGifProps {
  show: boolean;
  amount?: number;
}

const LoadingGif: React.FC<ILoadingGifProps> = ({ show, amount = 1 }) =>
  show ? (
    <div className="container">
      <div className="row row-cols-4 g-3">
        {[...Array(amount)].map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="col">
            <img src={loading} alt="Space Motors" />
          </div>
        ))}
      </div>
    </div>
  ) : null;

export default LoadingGif;
