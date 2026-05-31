const SLIDE_SRC = "/home-chapter-3.jpg";

export default function Hero() {
  return (
    <section className="home-slide" id="home">
      <div className="home-slide-frame">
        <img
          className="home-slide-image"
          src={SLIDE_SRC}
          alt="Chủ nghĩa duy vật lịch sử - Giai cấp và dân tộc"
        />
        <a
          className="home-slide-hotspot home-slide-hotspot-theory"
          href="#ton-tai"
          aria-label="Bắt đầu học ngay"
        />
        <a
          className="home-slide-hotspot home-slide-hotspot-loto"
          href="#loto"
          aria-label="Lô Tô liền"
        />
      </div>
    </section>
  );
}
