const LucideIcon = ({ name, className = "" }) => {
  const icons = {
    mountain: <path d="m8 3 4 8 5-5 5 15H2L8 3z" />,
    banknote: <><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></>,
    bookOpen: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
    briefcase: <><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
    hardHat: <><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" /><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" /><path d="M4 15v-3a6 6 0 0 1 6-6h0" /><path d="M14 6h0a6 6 0 0 1 6 6v3" /></>,
    trendingUp: <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>,
    shieldPlus: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M8 11h8" /><path d="M12 7v8" /></>
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32" height="32"
      viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className}
    >
      {icons[name] || <circle cx="12" cy="12" r="10" />}
    </svg>
  );
};

// Removed manual data arrays as they were replaced by images

export default function QuanHeSoHuu() {
  return (
    <>
      {/* Slide B: Quan hệ sở hữu */}
      <section id="quan-he-so-huu" className="slide-section">
        <div className="slide-inner page-section">
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#c62828', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            B) VỀ QUAN HỆ SỞ HỮU VÀ THÀNH<br />PHẦN KINH TẾ
          </h2>

          <div className="vh-grid">
            <div className="vh-text-col">
              <div className="vh-text-box" style={{ marginBottom: '1.5rem' }}>
                <p className="vh-main-text" style={{ fontWeight: 700 }}>
                  <span className="vh-text-black">Sở hữu được hiểu là quan hệ giữa con người với con người trong quá trình sản xuất và tái sản xuất xã hội trên cơ sở </span>
                  <span className="vh-highlight">chiếm hữu nguồn lực của quá trình sản xuất và kết quả lao động tương ứng </span>
                  <span className="vh-text-black">của quá trình sản xuất hay tái sản xuất ấy trong một điều kiện lịch sử nhất định.</span>
                </p>
                <p className="vh-source">
                  (Giáo trình Kinh tế chính trị Mác – Lênin, 2021, tr. 160)
                </p>
              </div>

              <div className="vh-bullets-section" style={{ marginTop: '0' }}>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#d34315', marginBottom: '0.8rem' }}>
                  Sở hữu gồm 3 yếu tố:
                </h4>
                <ul className="vh-bullets-list" style={{ marginBottom: '1.5rem' }}>
                  <li><strong>Chủ thể sở hữu</strong> (ai là người sở hữu)</li>
                  <li><strong>Đối tượng sở hữu</strong> (sở hữu cái gì)</li>
                  <li><strong>Lợi ích từ sở hữu</strong> (thu được gì từ tài sản)</li>
                </ul>

                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#d34315', marginBottom: '0.8rem' }}>
                  Mục đích của chủ sở hữu:
                </h4>
                <ul className="vh-bullets-list">
                  <li>Thực hiện và hưởng lợi từ tài sản sở hữu</li>
                </ul>
              </div>
            </div>

            <div className="vh-image-col">
              <img
                src="https://phunuvietnam.mediacdn.vn/media/news/f138f73e751c5c28f821e5ffb382e813/ktcs.jpg"
                alt="Quan hệ sở hữu và thành phần kinh tế"
                className="vh-image"
                style={{ borderRadius: '24px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slide: Nội dung sở hữu */}
      <section id="noi-dung-so-huu" className="slide-section">
        <div className="slide-inner page-section">
          <div className="nd-section" style={{ marginTop: 0 }}>
            <h2 className="nd-title">
              SỞ HỮU BAO HÀM NỘI DUNG KINH TẾ VÀ<br />NỘI DUNG PHÁP LÝ
            </h2>
            <div className="nd-grid">
              <div className="nd-col">
                <div className="nd-badge">VỀ NỘI DUNG KINH TẾ</div>
                <img
                  src="https://tapchikinhtetaichinh.vn/stores/news_dataimages/kttc/2025/10/23/on-dinh-kinh-te-vi-mo-nen-tang-cho-tang-truong-ben-vung-giai-doan-moi-fe31b5379ac3.png"
                  alt="Nội dung kinh tế"
                  className="nd-image"
                />
              </div>
              <div className="nd-col">
                <div className="nd-badge">VỀ NỘI DUNG PHÁP LÝ</div>
                <img
                  src="https://cdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2023/VTLA/231027/trach-nhiem-phap-ly.jpg"
                  alt="Nội dung pháp lý"
                  className="nd-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide C: Quản lý nền kinh tế */}
      <section id="quan-ly-kinh-te" className="slide-section">
        <div className="slide-inner page-section">
          <div className="ql-section" style={{ marginTop: 0 }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#c62828', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1.3 }}>
              C) VỀ QUAN HỆ QUẢN LÝ NỀN KINH TẾ
            </h2>

            <div className="ql-text-box" style={{ marginTop: '-1rem' }}>
              <ul className="ql-list">
                <li>
                  "Ở Việt Nam, nền kinh tế được quản lý bởi <strong>Nhà nước pháp quyền xã hội chủ nghĩa</strong> – tức là <strong>Nhà nước của nhân dân, do nhân dân và vì nhân dân</strong>, dưới sự lãnh đạo của <strong>Đảng Cộng sản Việt Nam</strong>."
                </li>
                <li>
                  "<strong>Đảng không trực tiếp điều hành kinh tế</strong>, nhưng đóng vai trò <strong>định hướng thông qua các đường lối, chiến lược và chính sách lớn</strong>, giúp nền kinh tế phát triển đúng hướng xã hội chủ nghĩa."
                </li>
              </ul>
            </div>

            <div className="ql-image-container" style={{ marginTop: '-3rem' }}>
              <div className="ql-img-wrapper">
                <img
                  src="https://sf-static.upanhlaylink.com/img/image_20260422a33c0ac44ebd09a9aadaa9271cd73a30.jpg"
                  alt="Quản lý nền kinh tế"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide D: Quan hệ phân phối */}
      <section id="quan-he-phan-phoi" className="slide-section">
        <div className="slide-inner page-section">
          <div className="pp-section" style={{ marginTop: 0 }}>
            <div className="pp-header-row">
              <div className="pp-title-col">
                <div className="pp-dots">
                  <span className="pp-dot red"></span>
                  <span className="pp-dot black"></span>
                </div>
                <h1 className="pp-main-title">D.<br />QUAN HỆ PHÂN PHỐI</h1>
                <p className="pp-sub-title">TRONG KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN</p>
              </div>

              <div className="pp-desc-col">
                <div className="pp-desc-pill">
                  <strong>Phân phối là cách xã hội chia nguồn lực và chia kết quả làm ra cho các chủ thể khác nhau.</strong>
                </div>
              </div>
            </div>

            <div className="pp-cards-row" style={{ marginTop: '-2rem' }}>
              <div className="pp-image-box">
                <img
                  src="https://sf-static.upanhlaylink.com/img/image_202604234d6526d8626bac646513706778eb1f9a.jpg"
                  alt="Phân phối đầu vào"
                  className="pp-main-img"
                />
              </div>

              <div className="pp-image-box right">
                <img
                  src="https://sf-static.upanhlaylink.com/img/image_20260423a215b87ceeeffa3446be19353cd805ff.jpg"
                  alt="Phân phối đầu ra"
                  className="pp-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide: Ví dụ thực tiễn (phân phối) */}
      <section id="vi-du-phan-phoi" className="slide-section">
        <div className="slide-inner page-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-3rem' }}>
          <div className="vdpp-header">
            <div className="vdpp-badge">
              <h3>ĐẦU VÀO</h3>
            </div>
          </div>

          <div className="vdpp-subtitle-bar">
            <p className="vdpp-subtitle-text">
              sinh viên ở thành phố và sinh viên ở nông thôn đều có thể tiếp cận cơ hội.
            </p>
          </div>

          <div className="vdpp-image-row">
            <div className="vdpp-img-left">
              <img
                src="https://huongnghiepcdm.edu.vn/wp-content/uploads/2024/06/sinh-vien-truong-dai-hoc-thuong-mai-2.jpg"
                alt="Sinh viên thành phố"
              />
            </div>

            <div className="vdpp-icon-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4298/4298288.png"
                alt="Education icon"
              />
            </div>

            <div className="vdpp-img-right">
              <img
                src="https://ctsv.ntt.edu.vn/wp-content/uploads/2023/07/Moi-nam-ty-le-thi-sinh-nhap-hoc-theo-phuong-thuc-xet-tuyen-hoc-ba-THPT-luon-o-muc-cao-1536x1024-1.jpg"
                alt="Sinh viên nông thôn"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slide: Ví dụ thực tiễn (Đầu ra) */}
      <section id="vi-du-dau-ra" className="slide-section">
        <div className="slide-inner page-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-3rem' }}>
          <div className="vdpp-header">
            <div className="vdpp-badge">
              <h3>ĐẦU RA</h3>
            </div>
          </div>

          <div className="vdo-grid">
            <div className="vdo-card">
              <div className="vdo-img-box">
                <img src="https://th.bing.com/th/id/R.7a88c52f1153304bd13cf054d6c11f1c?rik=ZgS84j%2fn4w9EyQ&riu=http%3a%2f%2fwww.tapchicongsan.org.vn%2fdocuments%2f20182%2f439360%2fnang-chat-luong-nhan-luc-det-may.jpg%2f0ac5530e-5f31-4ef2-8f75-b6a754ebc0c3%3ft%3d1564624644306&ehk=uWO%2fOGePQwNUzW2nbL12B3VrXD0XaEsfZyV%2bAYDhqXg%3d&risl=&pid=ImgRaw&r=0" alt="Công nhân" />
              </div>
              <div className="vdo-label-bar">
                <div className="vdo-label-title">Công nhân</div>
                <div className="vdo-label-sub">Lương theo công suất</div>
              </div>
            </div>

            <div className="vdo-card">
              <div className="vdo-img-box">
                <img src="https://media.istockphoto.com/id/1422431256/photo/successful-business-people-shaking-hands-businesspeople-handshake-for-teamwork-of-business.jpg?s=170667a&w=0&k=20&c=qZ6CHNPcrh3yYVui5ejy2sVM4l2mniAEWxcR2ApCYQk=" alt="Nhà đầu tư" />
              </div>
              <div className="vdo-label-bar">
                <div className="vdo-label-title">Nhà đầu tư</div>
                <div className="vdo-label-sub">Lợi nhuận theo vốn góp</div>
              </div>
            </div>

            <div className="vdo-card">
              <div className="vdo-img-box">
                <img src="https://images2.thanhnien.vn/Uploaded/dieutrangqc/2022_12_06/anh-trao-so-the-bhxh-2159.jpg" alt="Người khó khăn" />
              </div>
              <div className="vdo-label-bar">
                <div className="vdo-label-title">Người khó khăn</div>
                <div className="vdo-label-sub">BHYT, học bổng, trợ cấp</div>
              </div>
            </div>
          </div>

          <div className="vdo-illustration-container">
            <img
              src="https://sf-static.upanhlaylink.com/img/image_20260423e83811ce242ab9384fd6bd08098bfcd1.jpg"
              alt="Ví dụ gần gũi"
              className="vdo-illustration-img"
            />
          </div>
        </div>
      </section>

      {/* Slide Đ: Gắn tăng trưởng kinh tế với công bằng xã hội */}
      <section id="tang-truong-cong-bang" className="slide-section">
        <div className="slide-inner page-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-2.5rem' }}>
          <div style={{ width: '100%', maxWidth: '1050px', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#c62828', textTransform: 'uppercase', lineHeight: 1.3 }}>
              Đ) QUAN HỆ GIỮA GẮN TĂNG TRƯỞNG KINH TẾ<br />VỚI CÔNG BẰNG XÃ HỘI
            </h2>
          </div>
          <div style={{ width: '100%', maxWidth: '1050px' }}>
            <img
              src="/images/image_20260422f88807f56ec214c80bfa2eb8cbdfa555.jpg"
              alt="Quan hệ giữa gắn tăng trưởng kinh tế với công bằng xã hội"
              style={{ width: '100%', display: 'block', mixBlendMode: 'multiply', opacity: 0.95 }}
            />
          </div>
        </div>
      </section>
 
      {/* Slide: Mục tiêu */}
      <section id="muc-tieu-tang-truong" className="slide-section">
        <div className="slide-inner page-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-3rem' }}>
          <div className="mt-badge">
            <h3>MỤC TIÊU</h3>
          </div>

          <div className="mt-items-box">
            <div className="mt-item">
              <div className="mt-icon">
                <img src="https://sf-static.upanhlaylink.com/img/image_20260423c2c4e65acb7cd4ac976675f6e4691457.jpg" alt="Phát triển bền vững" />
              </div>
              <div className="mt-text">Phát triển<br/>bền vững</div>
            </div>

            <div className="mt-item">
              <div className="mt-icon">
                <img src="https://sf-static.upanhlaylink.com/img/image_20260423213ff5b70c860e9dfd0a7d802f029ef4.jpg" alt="Hài hòa" />
              </div>
              <div className="mt-text">Hài hòa</div>
            </div>

            <div className="mt-item">
              <div className="mt-icon">
                <img src="https://sf-static.upanhlaylink.com/img/image_20260423721577790ac7efb82a3fad78ad38d2b3.jpg" alt="Nhân văn" />
              </div>
              <div className="mt-text">Nhân văn</div>
            </div>
          </div>

          <div className="mt-footer-box">
            <div className="mt-footer-text">
              “THỰC HIỆN TIẾN BỘ VÀ CÔNG BẰNG XÃ HỘI NGAY TRONG TỪNG CHÍNH SÁCH”
            </div>
            <div className="mt-source">
              (Giáo trình Kinh tế chính trị Mác – Lênin, 2021, tr. 167)
            </div>
          </div>
        </div>
      </section>

      {/* Slide: Ví dụ thực tiễn (tăng trưởng) */}
      <section id="vi-du-tang-truong" className="slide-section">
        <div className="slide-inner page-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: '1050px', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
            <img
              src="/images/image_202604226d725fff4b80e351bf6f8de7dd38c87e.jpg"
              alt="Ví dụ thực tiễn phần Đ"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Slide: Mind Map Chương 5.1 - 5.1.3 */}
      <section id="mind-map-chuong-5" className="slide-section">
        <div className="slide-inner page-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '90%', maxWidth: '1025px', marginBottom: '1rem' }}>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 900,
              color: '#c62828',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginTop: '2rem',
              letterSpacing: '0.02em',
            }}>
              Mind Map 5.1.3
            </h2>
          </div>
          <div style={{ width: '80%', maxWidth: '1100px' }}>
            <img
              src="https://sf-static.upanhlaylink.com/img/image_20260423e9b30f746f8d1a85a5490a66a315aeea.jpg"
              alt="Mind Map Chương 5.1 - 5.1.3"
              style={{ width: '100%', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
