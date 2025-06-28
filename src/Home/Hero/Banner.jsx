import banner3 from "../../assets/images/banner/banner-03.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner3})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content ">
        <div className="max-w-md">
          <button className="btn btn-primary">Get Started</button>
          <h1 className="mb-5 text-5xl font-bold">
            HURRY!
            <br /> GET THE BEST
            <br /> VILLA FOR YOU
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
