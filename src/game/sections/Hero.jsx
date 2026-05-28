const SLIDE_SRC = "/1.png";

export default function Hero() {
  return (
    <section className="home-slide" id="home">
      <img
        className="home-slide-image"
        src={SLIDE_SRC}
        alt="Slide 1"
      />
    </section>
  );
}
