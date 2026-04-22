import React from 'react';

const TOOLS = [
  {
    name: 'NotebookLM',
    purpose: 'Tóm tắt slide giáo trình của trường thành các từ khóa, ý chính.',
    human: 'Đối chiếu với giáo trình gốc. Biên tập lại thành câu thoại ngắn gọn. Tự biên soạn lại câu hỏi quiz để đảm bảo độ khó.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    )
  },
  {
    name: 'Antigravity',
    purpose: 'Gợi ý cú pháp, viết nhanh boilerplate code trong lúc lập trình.',
    human: 'Review toàn bộ logic. Cấu hình các thông số Three.js, xử lý các lỗi tương tác (click, hover, state).',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
  },
  {
    name: 'Gemini',
    purpose: 'Tạo hình ảnh, texture bề mặt (VD: vân gỗ, kim loại).',
    human: 'Dùng Photoshop cắt nền, chỉnh màu đồng bộ với thiết kế UI tổng thể của dự án.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    )
  }
];

export const AIUsagePage = () => {
  return (
    <div className="w-full min-h-screen bg-[#0d0705] text-[#ede6d6] pt-32 pb-24 px-6 md:px-12 relative overflow-y-auto flex justify-center">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1a120d] to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-[1000px] w-full relative z-10">
        
        {/* Part 3: Tool Breakdown */}
        <section className="pt-8">
          <div className="flex flex-col items-center gap-1 mb-10 text-center">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-wide mb-12">Bảng Phân Định Công Cụ AI</h1>
            <div className="w-24 h-[1px] bg-[#c9922a] mx-auto opacity-40 mb-6"></div>
          </div>

          <div className="space-y-6">
            {TOOLS.map((tool, idx) => (
              <div key={idx} className="bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.04)] rounded-[16px] p-6 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Name */}
                  <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left md:border-r border-[rgba(255,255,255,0.05)] pr-4">
                    <div className="text-[#c9922a] bg-[rgba(201,146,42,0.1)] p-3 rounded-full mb-3 inline-block border border-[rgba(201,146,42,0.2)]">
                      {tool.icon}
                    </div>
                    <h3 className="font-['Playfair_Display'] text-xl text-[#ede6d6] tracking-wide">{tool.name}</h3>
                  </div>
                  {/* Details */}
                  <div className="md:w-3/4 flex flex-col sm:flex-row gap-6 font-['Outfit'] font-light">
                    <div className="sm:w-1/2 bg-[rgba(0,0,0,0.2)] rounded-[12px] p-5 border border-[rgba(255,255,255,0.02)]">
                      <span className="text-[#7a6040] text-[10px] uppercase tracking-widest font-medium block mb-3">Vai trò của AI (Input thô)</span>
                      <p className="text-[#a39481] text-sm leading-relaxed">{tool.purpose}</p>
                    </div>
                    <div className="sm:w-1/2 bg-[rgba(201,146,42,0.05)] rounded-[12px] p-5 border border-[rgba(201,146,42,0.1)]">
                      <span className="text-[#c9922a] text-[10px] uppercase tracking-widest font-medium block mb-3 flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Sinh viên xử lý (Hoàn thiện)
                      </span>
                      <p className="text-[#ede6d6] text-sm leading-relaxed">{tool.human}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
