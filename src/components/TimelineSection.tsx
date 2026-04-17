"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

const timelineDataEn = [
  {
    id: 1,
    year: "Sep 2023",
    title: "Started University",
    description: "Began my journey majoring in Logistics and Supply Chain Management at Can Tho University of Technology.",
    icon: (
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v7" />
      </svg>
    )
  },
  {
    id: 2,
    year: "Mar 2024",
    title: "Academic Research",
    description: "Participated in research on optimizing local warehouse distribution routes, developing my analytical skills.",
    icon: (
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 3,
    year: "Oct 2024",
    title: "EcoFresh WMS",
    description: "Started developing warehouse management system tracking tools to monitor inventory in real-time.",
    icon: (
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 4,
    year: "2025 - Present",
    title: "Internship & Advanced Studies",
    description: "Seeking practical internships and expanding knowledge in sustainable logistics and global supply chain.",
    icon: (
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const timelineDataVi = [
  { ...timelineDataEn[0], year: "Thg 9 2023", title: "Nhập học Đại học", description: "Bắt đầu hành trình học chuyên ngành Quản lý chuỗi cung ứng & Logistics tại ĐH KTCN Cần Thơ." },
  { ...timelineDataEn[1], year: "Thg 3 2024", title: "Nghiên cứu học thuật", description: "Tham gia nghiên cứu tối ưu hóa tuyến đường phân phối kho bãi địa phương, cải thiện tư duy phân tích." },
  { ...timelineDataEn[2], year: "Thg 10 2024", title: "Hệ thống WMS EcoFresh", description: "Phát triển các công cụ theo dõi hệ thống kho bãi trực tuyến theo thời gian thực." },
  { ...timelineDataEn[3], year: "2025 - Hiện tại", title: "Thực tập & Chuyên sâu", description: "Tìm kiếm thực tập thực tế, mở rộng kiến thức logistics bền vững và chuỗi cung ứng toàn cầu." }
];

export default function TimelineSection() {
  const { language } = useLanguage();
  const timelineData = language === 'vi' ? timelineDataVi : timelineDataEn;

  return (
    <div className="mt-8 pt-8 border-t border-slate-100">
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">{language === 'vi' ? 'Tiến Trình Phát Triển' : 'Career Journey'}</h3>
        <p className="text-sm text-slate-500">{language === 'vi' ? 'Các cột mốc quan trọng trong học tập và cá nhân.' : 'Milestones in my educational and professional path.'}</p>
      </div>

      <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {timelineData.map((item, index) => (
          <Reveal key={item.id} direction="up" delay={index * 150} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-100">
              {item.icon}
            </div>
            
            {/* Timeline Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group-hover:border-indigo-100 relative">
              {/* Arrow */}
              <div className="absolute top-5 -left-2 md:left-auto md:group-even:-left-2 md:group-odd:-right-2 w-4 h-4 bg-white border-l border-t border-slate-100 md:group-odd:border-r md:group-odd:border-t-0 md:group-odd:-border-l md:group-even:border-l md:group-even:border-t rotate-[-45deg] md:group-odd:rotate-[135deg] group-hover:border-indigo-100 z-0"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                <time className="inline-block mt-1 sm:mt-0 text-[11px] font-semibold px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-md w-fit">
                  {item.year}
                </time>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}