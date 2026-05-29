const SLIDE_SRC = "/home-chapter-3.jpg";

export default function Hero() {
  return (
    <section className="home-slide" id="home">
      <img
        className="home-slide-image"
        src={SLIDE_SRC}
        alt="Chủ nghĩa duy vật lịch sử - Giai cấp và dân tộc"
      />
    </section>
  );
}
