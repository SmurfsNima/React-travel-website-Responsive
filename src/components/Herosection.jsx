
import "./Herosection.css";
import "../App.css";
const Hero = () => {
  return (
    <div className="hero-container">
     
      <h1>ماجراجویی های نامحدود با ما!</h1>
      <p>شروع سفری خاطره انگیز به مقصد بعدی ...</p>
      <div className="hero-btns">
        <button className="btns btn btn--outline btn--large">
          شروع کار
        </button>

        <button className="btns btn btn--primary btn--large">
          مشاهده ‍پیش نمایش <i className="far fa-play-circle" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
