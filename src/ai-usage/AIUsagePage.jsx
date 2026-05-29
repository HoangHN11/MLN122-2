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
    <div className="w-full min-h-screen bg-[#dce9f8] text-blue-950 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden flex justify-center">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,#eef6ff_0%,#dce9f8_42%,#c7daf3_100%)]" />
      <div className="absolute inset-x-0 top-0 h-56 pointer-events-none bg-[#f4f9ff]" />
      <div className="absolute left-1/2 top-24 h-[760px] w-[min(1180px,88vw)] -translate-x-1/2 rounded-[36px] border border-blue-200 bg-[#edf5ff] shadow-[0_28px_90px_rgba(15,45,105,0.22)] pointer-events-none" />
      <div className="max-w-[1000px] w-full relative z-10">
        
        {/* Part 3: Tool Breakdown */}
        <section className="pt-8">
          <div className="flex flex-col items-center gap-1 mb-10 text-center">
            <h1 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold tracking-wide mb-12 text-blue-950">Bảng Phân Định Công Cụ AI</h1>
            <div className="w-24 h-[2px] bg-blue-700 mx-auto opacity-50 mb-6"></div>
          </div>

          <div className="space-y-6">
            {TOOLS.map((tool, idx) => (
              <div key={idx} className="bg-white/88 backdrop-blur-md border border-white/80 rounded-[16px] p-6 shadow-[0_18px_48px_rgba(21,52,96,0.22)] ring-1 ring-blue-900/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Name */}
                  <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left md:border-r border-blue-200/80 pr-4">
                    <div className="text-blue-700 bg-blue-50 p-3 rounded-full mb-3 inline-block border border-blue-200">
                      {tool.icon}
                    </div>
                    <h3 className="font-['Montserrat'] text-xl text-blue-950 tracking-wide font-bold">{tool.name}</h3>
                  </div>
                  {/* Details */}
                  <div className="md:w-3/4 flex flex-col sm:flex-row gap-6 font-['Montserrat'] font-light">
                    <div className="sm:w-1/2 bg-white/70 rounded-[12px] p-5 border border-blue-100">
                      <span className="text-blue-700 text-[10px] uppercase tracking-widest font-bold block mb-3">Vai trò của AI (Input thô)</span>
                      <p className="text-slate-700 text-sm leading-relaxed">{tool.purpose}</p>
                    </div>
                    <div className="sm:w-1/2 bg-blue-50/85 rounded-[12px] p-5 border border-blue-200">
                      <span className="text-blue-800 text-[10px] uppercase tracking-widest font-bold block mb-3 flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Sinh viên xử lý (Hoàn thiện)
                      </span>
                      <p className="text-blue-950 text-sm leading-relaxed">{tool.human}</p>
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
