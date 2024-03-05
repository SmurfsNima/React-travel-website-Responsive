import { Link } from "react-router-dom";

const Carditem = ({ src, text, path }) => {
  return (
    <>
      <li className="cards__item">
        <Link to={path} className="cards__item__link">
          <figure className="cards__item__pic-wrap">
            <img src={src} className="cards__item__img" alt="Travel" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};
export default Carditem;
