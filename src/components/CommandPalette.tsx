"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, Home, User, Briefcase, FileText, Mail, Download, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type CommandItem = {
  id: string;
  icon: React.ReactNode;
  label: Record<"vi" | "en", string>;
  action: () => void;
  section: "navigate" | "action";
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const router = useRouter();
  const { language, setLanguage } = useLanguage();

  const commands: CommandItem[] = [
    { id: "home", icon: <Home size={18} />, label: { vi: "Trang chủ", en: "Home" }, action: () => router.push("/"), section: "navigate" },
    { id: "about", icon: <User size={18} />, label: { vi: "Thông tin & Tiểu sử", en: "About & Bio" }, action: () => router.push("/about"), section: "navigate" },
    { id: "projects", icon: <Briefcase size={18} />, label: { vi: "Dự án", en: "Projects" }, action: () => router.push("/projects"), section: "navigate" },
    { id: "blog", icon: <FileText size={18} />, label: { vi: "Bài viết", en: "Blog" }, action: () => router.push("/blog"), section: "navigate" },
    { id: "contact", icon: <Mail size={18} />, label: { vi: "Liên hệ", en: "Contact" }, action: () => router.push("/contact"), section: "navigate" },
    { 
      id: "cv", 
      icon: <Download size={18} />, 
      label: { vi: "Tải CV", en: "Download CV" }, 
      action: () => {
        window.open("/cv/kim-dinh-phuong-cv.pdf", "_blank");
      }, 
      section: "action" 
    },
    {
      id: "lang",
      icon: <Globe size={18} />,
      label: { vi: "Switch to English", en: "Đổi sang Tiếng Việt" },
      action: () => setLanguage(language === "vi" ? "en" : "vi"),
      section: "action"
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label[language as "vi" | "en"].toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Update selected index when filtered results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation within the palette
  useEffect(() => {
    if (!isOpen) return;

    const handlePaletteKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            setIsOpen(false);
          }
          break;
      }
    };

    document.addEventListener("keydown", handlePaletteKeydown);
    return () => document.removeEventListener("keydown", handlePaletteKeydown);
  }, [isOpen, filteredCommands, selectedIndex]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[9999]"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[15vh] pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 pointer-events-auto"
            >
              {/* Search Input */}
              <div className="flex items-center px-4 py-4 border-b border-slate-100 dark:border-slate-800">
                <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={language === "vi" ? "Tìm kiếm trang hoặc lệnh..." : "Search pages or commands..."}
                  className="flex-1 bg-transparent border-none outline-none text-slate-800 dark:text-slate-200 placeholder-slate-400 text-lg"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="flex gap-1 ml-3 shrink-0">
                  <kbd className="px-2 py-1 text-[10px] font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 rounded-md">ESC</kbd>
                </div>
              </div>

              {/* Results List */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-10 text-center text-slate-500 text-sm">
                    {language === "vi" ? "Không tìm thấy kết quả." : "No results found."}
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredCommands.map((cmd, index) => {
                      const isSelected = index === selectedIndex;
                      return (
                         <div
                          key={cmd.id}
                          className={`flex items-center px-4 py-3 rounded-xl cursor-default transition-colors ${
                            isSelected 
                              ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400" 
                              : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                          }`}
                          onMouseEnter={() => setSelectedIndex(index)}
                          onClick={() => {
                            cmd.action();
                            setIsOpen(false);
                          }}
                        >
                          <div className={`mr-3 ${isSelected ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"}`}>
                            {cmd.icon}
                          </div>
                          <span className="font-medium text-sm">
                            {cmd.label[language as "vi" | "en"]}
                          </span>
                          
                          {isSelected && (
                            <span className="ml-auto flex items-center gap-1 text-[10px] text-indigo-400">
                              <kbd className="px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/50">↵</kbd>
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
