"use client";

import Image from "next/image";
import { profileData } from "@/data/profile";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPageClient() {
    const { language } = useLanguage();
    const isVi = language === 'vi';

    const aboutTextEn = profileData.about;
    const aboutTextVi = [
        "Xin chào, mình là Kim Đình Phương, sinh viên năm 3 chuyên ngành Quản lý chuỗi cung ứng và Logistics tại trường Đại học Kỹ thuật Công nghệ Cần Thơ.",
        "Mình có niềm đam mê đặc biệt với việc tối ưu hóa quy trình phân phối và kết hợp công nghệ vào trong kho thuật toán thực tiễn.",
        "Là người luôn tìm kiếm và cải tiến để các dự án hoàn thành tốt và đạt hiệu quả về chi phí chuyên nghiệp nhất.",
        "Tôi tin vào sức mạnh của logistics hiệu quả để thúc đẩy thành công của doanh nghiệp và tạo ra giá trị cho khách hàng. Phương pháp tiếp cận của tôi kết hợp tư duy phân tích với giải quyết vấn đề thực tế.",
        "Khi không học tập, bạn có thể tìm thấy tôi khám phá văn hóa sông nước nhộn nhịp của Cần Thơ, đọc về những đổi mới trong chuỗi cung ứng, hoặc làm việc trên các tình huống nghiên cứu logistics điển hình."
    ];
    
    const currentAbout = isVi ? aboutTextVi : aboutTextEn;

    return (
        <>
            <div className="max-w-6xl mx-auto py-0 px-0 sm:py-4 sm:px-4 lg:py-6 lg:px-6 lg:pr-6 min-h-screen">
                <div className="bg-white sm:rounded-2xl shadow-sm sm:border border-slate-200 p-5 sm:p-6 lg:p-8">
                    {/* Header */}
                    <Reveal direction="down" delay={100}>
                        <header className="mb-10">
                            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">{isVi ? "Giới thiệu" : "About Me"}</h1>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                {isVi ? "Tìm hiểu thêm về nền tảng, kỹ năng và động lực của tôi." : "Learn more about my background, skills, and what drives me."}
                            </p>
                        </header>
                    </Reveal>

                {/* Profile section */}
                <Reveal direction="up" delay={200}>
                    <section className="mb-14">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-center">
                            {/* Avatar */}
                            <div className="flex-shrink-0 transition-transform duration-500 hover:scale-105">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-slate-50/80 shadow-md relative">
                                    <Image
                                        src={profileData.avatar}
                                        alt={profileData.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                                <div className="flex items-center gap-2 mb-2">
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{profileData.name}</h2>
                                    <svg className="w-6 h-6 md:w-7 md:h-7 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                                        <title>Verified</title>
                                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 011.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-lg md:text-xl text-slate-500">{isVi ? "Sinh viên Quản lý chuỗi cung ứng & Logistics" : profileData.title}</p>
                            </div>
                        </div>
                    </section>
                </Reveal>

                {/* Biography */}
                <Reveal direction="up" delay={300}>
                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            {isVi ? "Tiểu sử" : "Biography"}
                            <span className="inline-block w-8 h-px bg-indigo-600 ml-2"></span>
                        </h2>
                        <div className="prose prose-slate max-w-none space-y-4">
                            {currentAbout.map((paragraph, idx) => (
                                <p key={idx} className="text-slate-600 leading-relaxed text-justify-pretty">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                </Reveal>

                {/* Skills */}
                <Reveal direction="up" delay={400}>
                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            {isVi ? "Kỹ năng" : "Skills"}
                            <span className="inline-block w-8 h-px bg-indigo-600 ml-2"></span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {profileData.skills.map((skill, index) => (
                                <div
                                    key={skill}
                                    className="px-4 py-3 bg-indigo-50 border border-indigo-100 hover:border-indigo-300 hover:bg-indigo-100 rounded-xl text-center transition-all hover:-translate-y-0.5 hover:shadow-sm duration-200"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <span className="text-sm font-semibold text-indigo-700">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </Reveal>

                {/* Tools */}
                <Reveal direction="up" delay={500}>
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            {isVi ? "Công cụ tôi sử dụng" : "Tools I Use"}
                            <span className="inline-block w-8 h-px bg-indigo-600 ml-2"></span>
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {profileData.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 hover:bg-indigo-600 duration-200"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </section>
                </Reveal>
                </div>
            </div>
        </>
    );
}