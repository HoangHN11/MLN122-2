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

const phanPhoiDauVao = [
  { id: 1, icon: 'mountain', text: 'Đất đai' },
  { id: 2, icon: 'banknote', text: 'Vốn' },
  { id: 3, icon: 'bookOpen', text: 'Giáo dục' },
  { id: 4, icon: 'briefcase', text: 'Việc làm' }
];

const phanPhoiDauRa = [
  { id: 1, icon: 'hardHat', text: 'Lao động', subtext: '(tiền lương)' },
  { id: 2, icon: 'trendingUp', text: 'Vốn', subtext: '(lợi nhuận)' },
  { id: 3, icon: 'shieldPlus', text: 'An sinh xã hội', subtext: '(phúc lợi)' }
];

export default function QuanHeSoHuu() {
  return (
    <>
      {/* Slide B: Quan hệ sở hữu */}
      <section id="quan-he-so-huu" className="slide-section">
        <div className="slide-inner page-section">
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#c62828', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            B) VỀ QUAN HỆ SỞ HỮU VÀ THÀNH<br/>PHẦN KINH TẾ
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
                <h1 className="pp-main-title">D.<br/>QUAN HỆ PHÂN PHỐI</h1>
                <p className="pp-sub-title">TRONG KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN</p>
              </div>
              
              <div className="pp-desc-col">
                <div className="pp-desc-pill">
                  Phân phối là cách xã hội chia nguồn lực và chia kết quả làm ra cho các chủ thể khác nhau.
                </div>
              </div>
            </div>

            <div className="pp-cards-row" style={{ marginTop: '-3rem' }}>
              <div className="pp-card">
                <h3 className="pp-card-title">PHÂN PHỐI ĐẦU VÀO</h3>
                <ul className="pp-card-list">
                  {phanPhoiDauVao.map((item) => (
                    <li key={item.id}>
                      <div className="pp-icon"><LucideIcon name={item.icon} /></div>
                      <div className="pp-text">{item.text}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pp-card">
                <h3 className="pp-card-title">PHÂN PHỐI ĐẦU RA</h3>
                <ul className="pp-card-list">
                  {phanPhoiDauRa.map((item) => (
                    <li key={item.id}>
                      <div className="pp-icon"><LucideIcon name={item.icon} /></div>
                      <div className="pp-text">
                        <span>{item.text}</span>
                        <span className="pp-sub">{item.subtext}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide: Ví dụ thực tiễn (phân phối) */}
      <section id="vi-du-phan-phoi" className="slide-section">
        <div className="slide-inner page-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-2.5rem' }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 900, color: '#c62828', textTransform: 'uppercase', marginBottom: '1.5rem', textAlign: 'center' }}>
            VÍ DỤ THỰC TIỄN
          </h2>
          <div style={{ width: '100%', maxWidth: '1000px', marginTop: '-1.5rem' }}>
            <img 
              src="/images/image_20260422afa31b1b578d49759a0495634978ad1c.jpg" 
              alt="Ví dụ thực tiễn" 
              style={{ width: '100%', display: 'block', mixBlendMode: 'multiply', opacity: 0.95 }}
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
          <div style={{ width: '80%', maxWidth: '1050px' }}>
            <img 
              src="/images/image_20260422f88807f56ec214c80bfa2eb8cbdfa555.jpg" 
              alt="Quan hệ giữa gắn tăng trưởng kinh tế với công bằng xã hội" 
              style={{ width: '100%', display: 'block', mixBlendMode: 'multiply', opacity: 0.95 }}
            />
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
    </>
  );
}
