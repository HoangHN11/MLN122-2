import { useState, useEffect, useRef } from 'react';

/* ═══ ASSETS ══════════════════════════════════════════ */
const PORTRAITS = {
  an: '/images/Main character.png',
  ba_hoa: '/images/Canh 1.png',
  lan: '/images/Canh 2.png',
  co_binh: '/images/Canh 3.png',
  ong_sau: '/images/Canh 4.png',
  ong_phuc: '/images/Canh 5.png',
  anh_khang: '/images/Canh 6.png',
  anh_quan: '/images/Canh 7.png',
};

const SCENARIOS = [
  {
    id: 1,
    title: 'Chọn mô hình phát triển ban đầu',
    npc: 'Bà Hòa',
    npcRole: 'đại diện góc nhìn Nhà nước định hướng phát triển',
    npcPortrait: 'ba_hoa',
    bg: '/images/Canh 1.png',
    question: '“Tỉnh Minh Phúc đang có cơ hội phát triển lớn. Theo anh, chúng ta nên chọn con đường nào để vừa tăng trưởng vừa không bỏ lại người dân phía sau?”',
    choices: [
      {
        id: 'A',
        text: 'Giao gần hết đất cho doanh nghiệp tư nhân lớn để tăng trưởng thật nhanh',
        impact: { growth: 15, equity: -10, trust: -5 }
      },
      {
        id: 'B',
        text: 'Giữ mô hình sản xuất nhỏ lẻ cũ để tránh rủi ro',
        impact: { growth: -15, equity: 5, trust: 0 }
      },
      {
        id: 'C',
        text: 'Phát triển mô hình kết hợp: Nhà nước đầu tư hạ tầng, doanh nghiệp tham gia, hợp tác xã và người dân cùng vào chuỗi',
        impact: { growth: 10, equity: 10, trust: 10 }
      },
    ]
  },
  {
    id: 2,
    title: 'Khi sản xuất tăng nhanh, mâu thuẫn giữa lợi nhuận và quyền lợi lao động bắt đầu xuất hiện. Lan, đại diện cho công nhân, đang tìm câu trả lời từ bạn về cách bảo vệ người lao động.',
    npc: 'Lan',
    npcRole: 'đại diện người lao động',
    npcPortrait: 'lan',
    bg: '/images/Gemini_Generated_Image_btgtp1btgtp1btgt_waifu2x_art_noise3_scale.png',
    question: '“Công nhân tụi em tăng ca nhiều, lương còn thấp, điều kiện làm việc chưa ổn. Tỉnh sẽ ưu tiên giữ lợi nhuận cho doanh nghiệp hay bảo vệ quyền lợi người lao động?”',
    choices: [
      { id: 'A', text: 'Ưu tiên doanh nghiệp để giữ môi trường đầu tư', impact: { growth: 10, equity: -15, trust: -10 } },
      { id: 'B', text: 'Ép doanh nghiệp tăng lương mạnh ngay lập tức', impact: { growth: -10, equity: 10, trust: -5 } },
      { id: 'C', text: 'Tổ chức đối thoại, tăng lương theo lộ trình, cải thiện an toàn lao động, gắn thêm thưởng theo năng suất', impact: { growth: 5, equity: 10, trust: 15 } },
    ]
  },
  {
    id: 3,
    title: 'Một đợt thiên tai bất ngờ làm gián đoạn nguồn cung, đẩy giá cả leo thang. Cô Bình, đại diện cho người dân, đang lo lắng và chờ xem tỉnh sẽ phản ứng như thế nào.',
    npc: 'Cô Bình',
    npcRole: 'đại diện người dân và người tiêu dùng',
    npcPortrait: 'co_binh',
    bg: '/images/Canh 3.png',
    question: '“Giá gạo, rau tăng nhanh quá, những người thu nhập thấp bắt đầu không xoay nổi. Không biết Tỉnh sẽ để thị trường tự điều chỉnh hay có can thiệp?”',
    choices: [
      { id: 'A', text: 'Ép giá cứng toàn bộ hàng thiết yếu', impact: { growth: -10, equity: 5, trust: -10 } },
      { id: 'B', text: 'Để thị trường tự quyết hoàn toàn', impact: { growth: 5, equity: -15, trust: -10 } },
      { id: 'C', text: 'Tôn trọng giá thị trường nhưng dùng hàng dự trữ, trợ giá đúng nhóm cần hỗ trợ và kiểm tra đầu cơ', impact: { growth: 5, equity: 10, trust: 10 } },
    ]
  },
  {
    id: 4,
    title: 'Sau một giai đoạn tăng trưởng, ngân sách tỉnh bắt đầu dồi dào hơn. Ông Sáu, đại diện cho người dân sản xuất nhỏ, đặt câu hỏi về việc phân phối thành quả có công bằng hay không.',
    npc: 'Ông Sáu',
    npcRole: 'đại diện người dân sản xuất nhỏ và hợp tác xã',
    npcPortrait: 'ong_sau',
    bg: '/images/Gemini_Generated_Image_fx70hpfx70hpfx70_waifu2x_art_noise3_scale.png',
    question: '“Tỉnh thu ngân sách cao hơn rồi. Thành quả này sẽ chủ yếu quay lại phục vụ dân, hay chỉ đổ vào những dự án nhìn đẹp trên báo cáo?”',
    choices: [
      { id: 'A', text: 'Dồn tiền vào các dự án biểu tượng để tạo hình ảnh tăng trưởng', impact: { growth: 10, equity: -15, trust: -10 } },
      { id: 'B', text: 'Chia đều như nhau cho tất cả mọi người', impact: { growth: -10, equity: 5, trust: -5 } },
      { id: 'C', text: 'Vừa tái đầu tư sản xuất, vừa đầu tư giáo dục, y tế, hạ tầng và hỗ trợ đúng nhóm yếu thế', impact: { growth: 10, equity: 15, trust: 10 } },
    ]
  },
  {
    id: 5,
    title: 'Một dự án lớn liên quan đến đất công xuất hiện, đi kèm với cơ hội tăng trưởng nhanh. Ông Phúc, đại diện cho lợi ích nhóm, đang đưa ra một đề nghị đầy cám dỗ.',
    npc: 'Ông Phúc',
    npcRole: 'đại diện nguy cơ lợi ích nhóm',
    npcPortrait: 'ong_phuc',
    bg: '/images/Gemini_Generated_Image_pqfvhapqfvhapqfv_waifu2x_art_noise3_scale.png',
    question: '“Có một doanh nghiệp quen muốn nhận khu đất công này. Nếu làm nhanh thì tỉnh có tiền và có thành tích ngay. Anh có muốn ký duyệt luôn không?”',
    choices: [
      { id: 'A', text: 'Phê duyệt nhanh để đẩy tốc độ phát triển', impact: { growth: 10, equity: -10, trust: -15 } },
      { id: 'B', text: 'Hoãn lại vô thời hạn để tránh rủi ro', impact: { growth: -10, equity: 0, trust: -5 } },
      { id: 'C', text: 'Công khai thông tin, đấu thầu minh bạch, giám sát độc lập và xử lý đúng pháp luật', impact: { growth: 5, equity: 10, trust: 15 } },
    ]
  },
  {
    id: 6,
    title: 'Nhiều nhà đầu tư nước ngoài bắt đầu quan tâm đến Minh Phúc. Anh Khang, đại diện nhà đầu tư, đang chờ bạn lựa chọn giữa lợi ích ngắn hạn và phát triển bền vững.',
    npc: 'Anh Khang',
    npcRole: 'đại diện nhà đầu tư nước ngoài',
    npcPortrait: 'anh_khang',
    bg: '/images/Canh 6.png',
    question: '“Tôi có thể mang vốn lớn vào tỉnh rất nhanh. Nhưng anh muốn một dự án kiếm lời sớm, hay một dự án công nghệ tốt hơn, đào tạo lao động và gắn với phát triển lâu dài?”',
    choices: [
      { id: 'A', text: 'Chọn dự án vốn lớn nhất, miễn là tăng trưởng nhanh', impact: { growth: 15, equity: -5, trust: -10 } },
      { id: 'B', text: 'Hạn chế gần hết FDI để tránh phụ thuộc', impact: { growth: -15, equity: 5, trust: 0 } },
      { id: 'C', text: 'Chọn dự án công nghệ tốt, có đào tạo lao động, liên kết doanh nghiệp trong nước và hạn chế lệ thuộc', impact: { growth: 10, equity: 10, trust: 10 } },
    ]
  },
  {
    id: 7,
    title: 'Căng thẳng lao động đã lên đến đỉnh điểm và bùng phát thành đình công. Anh Quân, Chủ tịch công đoàn, cần bạn đưa ra quyết định để ổn định tình hình.',
    npc: 'Anh Quân',
    npcRole: 'Chủ tịch công đoàn',
    npcPortrait: 'anh_quan',
    bg: '/images/Canh 7.png',
    question: '“Ông ơi, đình công đã nổ ra rồi. Nếu xử lý sai, mâu thuẫn sẽ còn lớn hơn. Anh muốn dập nhanh cho yên chuyện, nhượng bộ một bên, hay ngồi vào bàn hòa giải để giải quyết tận gốc?”',
    choices: [
      { id: 'A', text: 'Dùng biện pháp cứng để dập đình công nhanh', impact: { growth: 0, equity: -10, trust: -15 } },
      { id: 'B', text: 'Chấp nhận toàn bộ yêu cầu của một phía để hạ nhiệt', impact: { growth: -10, equity: 5, trust: -5 } },
      { id: 'C', text: 'Hòa giải theo luật, có thương lượng và đặt lợi ích chung của tỉnh lên trên', impact: { growth: 5, equity: 10, trust: 15 } },
    ]
  },
];

/* ═══ COMPONENTS ══════════════════════════════════════ */

function StatBar({ label, value, color }) {
  return (
    <div className="game-stat-item">
      <div className="game-stat-label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="game-stat-bar-bg">
        <div
          className="game-stat-bar-fill"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function GearOfEra() {
  const [phase, setPhase] = useState('intro');
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [stats, setStats] = useState({ growth: 50, equity: 50, trust: 50 });
  const [showResult, setShowResult] = useState(false);
  const [lastImpact, setLastImpact] = useState(null);
  const [endingStep, setEndingStep] = useState('summary');

  const isGoodEnding = stats.growth >= 65 && stats.equity >= 60 && stats.trust >= 60;

  const scenario = SCENARIOS[currentScenarioIdx];

  const handleChoice = (choice) => {
    const newStats = {
      growth: Math.min(100, Math.max(0, stats.growth + choice.impact.growth)),
      equity: Math.min(100, Math.max(0, stats.equity + choice.impact.equity)),
      trust: Math.min(100, Math.max(0, stats.trust + choice.impact.trust)),
    };
    setStats(newStats);
    setLastImpact(choice.impact);
    setShowResult(true);
  };

  const nextScenario = () => {
    setShowResult(false);
    if (currentScenarioIdx < SCENARIOS.length - 1) {
      setCurrentScenarioIdx(currentScenarioIdx + 1);
      setPhase('scenario_intro');
    } else {
      setPhase('end');
      setEndingStep('summary');
    }
  };

  return (
    <div className="gear-game-container">
      <style>{`
        .gear-game-container {
          position: relative;
          width: 100%;
          height: 100vh;
          background: #000;
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }
        .game-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          z-index: 10;
        }
        .game-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 2s ease;
        }
        .game-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
          z-index: 2;
        }
        .game-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #FFD700;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(255,215,0,0.3);
        }
        .lesson-title {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .lesson-text {
          font-size: 1.8rem;
          max-width: 800px;
          line-height: 1.6;
          color: #fff;
          margin-bottom: 3rem;
          font-weight: 500;
          text-align: center;
        }
        .game-desc {
          font-size: 2rem;
          max-width: 800px;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: #e0e0e0;
        }
        .game-btn {
          padding: 1rem 3rem;
          background: #FFD700;
          color: #000;
          border: none;
          border-radius: 50px;
          font-family: "Arial", sans-serif;
          font-weight: 500;
          font-size: 1.1rem;
          letter-spacing: 0.2px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .game-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(255,215,0,0.4);
        }
        .game-stats-panel {
          position: absolute;
          top: 2rem;
          left: 2rem;
          width: 250px;
          z-index: 20;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(10px);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .game-stat-item {
          margin-bottom: 1rem;
        }
        .game-stat-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
          color: rgba(255,255,255,0.7);
        }
        .game-stat-bar-bg {
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .game-stat-bar-fill {
          height: 100%;
          transition: width 1s ease;
        }
        .npc-container {
          position: absolute;
          bottom: 0;
          left: -10%;
          height: 80vh;
          z-index: 5;
        }
        .npc-img {
          height: 100%;
          width: auto;
          filter: drop-shadow(0 0 50px rgba(0,0,0,0.5));
        }
        .dialogue-box {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: 50%;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          padding: 2rem;
          z-index: 15;
        }
        .npc-name {
          font-weight: 800;
          color: #FFD700;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }
        .dialogue-text {
          font-size: 1.1rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        .choice-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .choice-btn {
          background: #fff;
          color: #000;
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          text-align: left;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.95rem;
          line-height: 1.3;
        }
        .choice-btn:hover {
          background: #FFD700;
          transform: translateX(10px);
        }
        .impact-popup {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.8);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .impact-card {
          background: #111;
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid #FFD700;
          max-width: 500px;
          text-align: center;
        }
        .impact-title {
          font-size: 2rem;
          color: #FFD700;
          margin-bottom: 1.5rem;
        }
        .impact-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .impact-plus { color: #4ade80; }
        .impact-minus { color: #f87171; }
      `}</style>

      <div className="game-bg" style={{ backgroundImage: `url(${scenario.bg})` }} />

      {phase === 'intro' && (
        <div className="game-overlay" style={{ backgroundImage: 'url(https://sf-static.upanhlaylink.com/img/image_20260422fc331d30b25ab2c35076ec0b7259dbcc.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ background: 'rgba(0,0,0,0.5)', position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <h1 className="game-title">Giới thiệu game</h1>
            <p className="game-desc">
              Người chơi vào vai một nhân vật có quyền ra quyết định phát triển kinh tế cho một địa phương đang chuyển mình.
              Mỗi lựa chọn đều tác động đến <span style={{ color: '#FFD700' }}>ba mặt</span>:
            </p>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '6rem' }}>
              <p>Tăng trưởng kinh tế</p>
              <p>Công bằng xã hội</p>
              <p>Niềm tin xã hội / ổn định lâu dài</p>
            </div>
            <button className="game-btn" onClick={() => setPhase('role')} style={{ marginTop: '2rem' }}>Tiếp tục</button>
          </div>
        </div>
      )}

      {phase === 'role' && (
        <div className="game-overlay" style={{ backgroundImage: 'url(https://sf-static.upanhlaylink.com/img/image_20260422fc331d30b25ab2c35076ec0b7259dbcc.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ background: 'rgba(0,0,0,0.6)', position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <h1 className="game-title">Game Nhập Vai</h1>
            <p className="game-desc">
              Bạn sẽ nhập vai An, Phó Chủ tịch phụ trách kinh tế của tỉnh hư cấu Minh Phúc, và đưa ra những quyết định quan trọng để dẫn dắt tỉnh phát triển.
              Mỗi lựa chọn của bạn sẽ ảnh hưởng trực tiếp đến tăng trưởng kinh tế, công bằng xã hội và niềm tin xã hội/ổn định lâu dài.
            </p>
            <button className="game-btn" onClick={() => setPhase('scenario_intro')} style={{ marginTop: '4rem' }}>
              Bắt đầu chơi <span style={{ background: '#000', color: '#FFD700', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>➔</span>
            </button>
          </div>
        </div>
      )}

      {phase === 'scenario_intro' && (
        <div className="game-overlay" style={{ backgroundImage: 'url(https://sf-static.upanhlaylink.com/img/image_20260422fc331d30b25ab2c35076ec0b7259dbcc.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ background: 'rgba(0,0,0,0.6)', position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <h1 className="game-title">Tình huống {scenario.id}</h1>
            <p className="game-desc" style={{ fontSize: '1.5rem', marginBottom: '4rem' }}>
              {scenario.id === 1 ? 'Minh Phúc đang đứng trước bước ngoặt lớn khi dòng vốn và cơ hội đầu tư bắt đầu đổ về. Bà Hòa, đại diện cho định hướng của Nhà nước, đang chờ quyết định của bạn để xác định con đường phát triển lâu dài.' : scenario.title}
            </p>
            <button className="game-btn" onClick={() => setPhase('gameplay')} style={{ marginTop: '2rem' }}>Nhấn để tiếp tục</button>
          </div>
        </div>
      )}

      {phase === 'gameplay' && (
        <>
          <div className="game-bg" style={{ backgroundImage: currentScenarioIdx === 0 ? 'url(/images/Gemini_Generated_Image_fl41g0fl41g0fl41_waifu2x_art_noise3_scale.png)' : `url(${scenario.bg})` }} />
          <div className="game-vignette" />
          <div className="game-stats-panel">
            <StatBar label="Tăng trưởng kinh tế" value={stats.growth} color="#ef4444" />
            <StatBar label="Công bằng xã hội" value={stats.equity} color="#22c55e" />
            <StatBar label="Niềm tin xã hội" value={stats.trust} color="#eab308" />
          </div>

          <div className="npc-container" style={{ left: '-10%', bottom: '0', height: '90vh' }}>
            <img src={PORTRAITS[scenario.npcPortrait] || PORTRAITS.ba_hoa} alt={scenario.npc} className="npc-img" style={{ height: '100%' }} onError={(e) => e.target.src = '/images/Main character.png'} />
          </div>

          <div className="dialogue-box" style={{ right: '5%', bottom: '15%', width: '45%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '2rem' }}>
            <div className="npc-name" style={{ fontSize: '1.6rem', color: '#fff', fontWeight: '800', marginBottom: '0.5rem' }}>{scenario.npc}</div>
            <p className="dialogue-text" style={{ fontSize: '1.2rem', lineHeight: '1.5', color: '#fff', marginBottom: '2rem' }}>{scenario.question}</p>
            <div className="choice-list">
              {scenario.choices.map((c) => (
                <button 
                  key={c.id} 
                  className="choice-btn" 
                  onClick={() => handleChoice(c)}
                  style={{ background: '#fff', color: '#000', marginBottom: '0.8rem', padding: '1rem 1.5rem', borderRadius: '15px', border: 'none', fontWeight: 'bold', textAlign: 'left', cursor: 'pointer' }}
                >
                  <span style={{ marginRight: '0.5rem' }}>{c.id}.</span> {c.text}
                </button>
              ))}
            </div>
          </div>

          {showResult && (
            <div className="impact-popup">
              <div className="impact-card">
                <h2 className="impact-title">Quyết định đã đưa ra</h2>
                <div style={{ marginBottom: '2rem' }}>
                  <div className="impact-item">
                    <span>Tăng trưởng kinh tế:</span>
                    <span className={lastImpact.growth >= 0 ? 'impact-plus' : 'impact-minus'}>
                      {lastImpact.growth >= 0 ? '+' : ''}{lastImpact.growth}%
                    </span>
                  </div>
                  <div className="impact-item">
                    <span>Công bằng xã hội:</span>
                    <span className={lastImpact.equity >= 0 ? 'impact-plus' : 'impact-minus'}>
                      {lastImpact.equity >= 0 ? '+' : ''}{lastImpact.equity}%
                    </span>
                  </div>
                  <div className="impact-item">
                    <span>Niềm tin xã hội:</span>
                    <span className={lastImpact.trust >= 0 ? 'impact-plus' : 'impact-minus'}>
                      {lastImpact.trust >= 0 ? '+' : ''}{lastImpact.trust}%
                    </span>
                  </div>
                </div>
                <button className="game-btn" style={{ margin: '0 auto' }} onClick={nextScenario}>Tiếp tục hành trình</button>
              </div>
            </div>
          )}
        </>
      )}

      {phase === 'end' && (
        <>
          {endingStep === 'summary' ? (
            <div className="game-overlay" style={{ backgroundImage: `url(${isGoodEnding ? '/images/Gemini_Generated_Image_fl41g0fl41g0fl41_waifu2x_art_noise3_scale.png' : '/images/Gemini_Generated_Image_f3e02ef3e02ef3e0_waifu2x_art_noise3_scale.png'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="game-vignette" />
              <div style={{ background: 'rgba(0,0,0,0.6)', position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', zIndex: 5 }}>
                <h1 className="game-title" style={{ color: isGoodEnding ? '#4ade80' : '#f87171', fontSize: '2.5rem' }}>
                  {isGoodEnding ? '“PHÁT TRIỂN CÓ ĐỊNH HƯỚNG”' : '“TĂNG TRƯỞNG LỆCH HƯỚNG”'}
                </h1>
                
                <div style={{ width: '350px', margin: '2rem 0' }}>
                  <StatBar label="Tăng trưởng kinh tế" value={stats.growth} color="#ef4444" />
                  <StatBar label="Công bằng xã hội" value={stats.equity} color="#22c55e" />
                  <StatBar label="Niềm tin xã hội / ổn định lâu dài" value={stats.trust} color="#eab308" />
                </div>

                <div className="dialogue-box" style={{ position: 'relative', bottom: 'auto', right: 'auto', width: '80%', maxWidth: '800px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                    {isGoodEnding 
                      ? "Sau 5 năm, kinh tế Minh Phúc tăng trưởng ổn định, doanh nghiệp phát triển bền vững, người lao động có việc làm tốt hơn và các nhóm yếu thế vẫn được hỗ trợ. Tỉnh cũng cải thiện rõ rệt về y tế, giáo dục, giao thông và quản lý minh bạch hơn, giúp người dân tin rằng thành quả phát triển thuộc về số đông."
                      : "Sau 5 năm, Minh Phúc có thể tăng trưởng nhanh nhưng nền kinh tế phát triển lệch hướng, doanh nghiệp nhỏ suy yếu, khoảng cách giàu nghèo gia tăng và người dân dần mất niềm tin. Tỉnh cũng trở nên bất ổn hơn khi đình công, ô nhiễm và nghi ngờ về sự thiếu minh bạch trong quản lý ngày càng lớn."
                    }
                  </p>
                </div>

                <button className="game-btn" style={{ margin: '0 auto' }} onClick={() => setEndingStep('lesson')}>Xem bài học rút ra</button>
              </div>
            </div>
          ) : (
            <div className="game-overlay" style={{ backgroundImage: `url(${isGoodEnding ? '/images/Gemini_Generated_Image_fl41g0fl41g0fl41_waifu2x_art_noise3_scale.png' : '/images/Gemini_Generated_Image_f3e02ef3e02ef3e0_waifu2x_art_noise3_scale.png'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="game-vignette" />
              <div style={{ background: 'rgba(0,0,0,0.7)', position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <h2 className="lesson-title" style={{ color: isGoodEnding ? '#4ade80' : '#f87171' }}>Bài học rút ra</h2>
                <div style={{ width: '100px', height: '2px', background: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}></div>
                <p className="lesson-text">
                  {isGoodEnding 
                    ? "Muốn phát triển đúng định hướng xã hội chủ nghĩa, cần kết hợp động lực của thị trường với vai trò điều tiết của Nhà nước, gắn tăng trưởng kinh tế với công bằng xã hội."
                    : "Nếu chỉ chạy theo lợi nhuận, tốc độ hoặc điều hành cực đoan, bỏ qua vai trò điều tiết của Nhà nước và sự hài hòa lợi ích, thì tăng trưởng sẽ không tạo ra phát triển bền vững."
                  }
                </p>
                <div style={{ width: '100px', height: '2px', background: 'rgba(255,255,255,0.5)', marginBottom: '3rem' }}></div>
                <button className="game-btn" style={{ margin: '0 auto' }} onClick={() => window.location.reload()}>Chơi lại từ đầu</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}