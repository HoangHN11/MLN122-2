import { useState } from "react";
const TOC_ITEMS = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "ton-tai",
    label: "Học Thuyết",
    children: [
      { id: "ton-tai", label: "Khái niệm và nguồn gốc" },
      { id: "tat-yeu", label: "Kết cấu xã hội - giai cấp" },
      { id: "mind-map-5-1-2", label: "Khái niệm và nguồn gốc giai cấp" },
      { id: "dau-tranh-giai-cap", label: "Khái niệm và tính tất yếu" },
      { id: "dau-tranh-giai-cap-2", label: "Tính khách quan" },
      { id: "luc-luong-tham-gia", label: "Lực lượng tham gia" },
      { id: "thuc-chat-dau-tranh", label: "Thực chất" },
      { id: "khong-phai-dau-tranh", label: "Không phải đấu tranh" },
      { id: "bieu-hien-dau-tranh", label: "Biểu hiện" },
      { id: "lien-minh-giai-cap", label: "Liên minh giai cấp" },
      { id: "dau-tranh-giai-cap-vo-san", label: "Đấu tranh vô sản" },
      { id: "hai-giai-doan-chinh", label: "Hai giai đoạn chính" },
      { id: "truoc-khi-gianh-chinh-quyen", label: "Trước khi giành chính quyền" },
      { id: "sau-khi-gianh-chinh-quyen", label: "Sau khi giành chính quyền" },
      { id: "nhiem-vu-chien-luoc", label: "Nhiệm vụ chiến lược" },
      { id: "ket-luan-vo-san", label: "Kết luận" },
      { id: "vi-du-thuc-tien", label: "Ví dụ thực tiễn" },
    ],
  },
  {
    id: "loto",
    label: "Lô Tô",
  },
  {
    id: "ai",
    label: "AI Usage",
  },
];

function TocLink({ id, label }) {
  return (
    <a className="toc-link" href={`#${id}`}>
      <span className="toc-dot" />
      <span className="toc-text">{label}</span>
    </a>
  );
}

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        type="button"
        className="toc-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="toc-panel"
      >
        {isOpen ? "Ẩn mục lục" : "Mục lục"}
      </button>

      <aside
        id="toc-panel"
        className={`toc-panel ${isOpen ? "" : "is-hidden"}`}
      >
        <div className="toc-header">
          <div className="toc-chip">Mục lục</div>
          <div className="toc-title">Nội dung</div>
          <div className="toc-subtitle">Chọn nhanh đến từng phần</div>
        </div>

        <nav className="toc-nav">
          {TOC_ITEMS.map((item) => {
            if (!item.children) {
              return <TocLink key={item.id} id={item.id} label={item.label} />;
            }

            return (
              <details className="toc-group" key={item.id} open>
                <summary className="toc-group-title">
                  <span className="toc-group-dot" />
                  <span>{item.label}</span>
                </summary>
                <div className="toc-group-items">
                  {item.children.map((child) => (
                    <TocLink key={child.id} id={child.id} label={child.label} />
                  ))}
                </div>
              </details>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
