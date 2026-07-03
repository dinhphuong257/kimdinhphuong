export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  location: {
    city: string;
    country: string;
    countryCode: string;
  };
  avatar: string;
  email: string;
  website: string;
  portfolio: string;
  socialLinks: SocialLink[];
  about: string[];
  skills: string[];
  tools: string[];
}

export const profileData: ProfileData = {
  name: "Kim Đình Phương",
  title: "3rd Year Logistics Student",
  tagline: "I'm a Logistics student at Can Tho University of Technology.",
  location: {
    city: "Can Tho",
    country: "Vietnam",
    countryCode: "vn",
  },
  avatar: "/avatar 2.jpg",
  email: "kimdinhphuong205@gmail.com",
  website: "https://kimdinhphuong.dev",
  portfolio: "@kimdinhphuong",
  socialLinks: [
    { platform: "Facebook", url: "https://www.facebook.com/dinhphuongkim250705/", label: "dinhphuongkim250705" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/dinhphuongkim/", label: "dinhphuongkim" },
    { platform: "Instagram", url: "https://www.instagram.com/dinhphuongkim/", label: "@dinhphuongkim" },
    { platform: "TikTok", url: "https://www.tiktok.com/@dinhphuongkim", label: "@dinhphuongkim" },
    { platform: "GitHub", url: "https://github.com/kimdinhphuong", label: "@kimdinhphuong" },
  ],
  about: [
    "I'm a third-year Logistics student at Can Tho University of Technology, based in Can Tho, Vietnam. I'm passionate about supply chain management and logistics optimization.",
    "Currently studying logistics and supply chain management with a focus on sustainable transportation solutions and warehouse management systems.",
    "My academic journey has equipped me with knowledge in inventory management, transportation planning, and logistics strategy. I'm eager to apply these skills in real-world scenarios.",
    "I believe in the power of efficient logistics to drive business success and create value for customers. My approach combines analytical thinking with practical problem-solving.",
    "When I'm not studying, you can find me exploring Can Tho's vibrant river culture, reading about supply chain innovations, or working on logistics case studies.",
  ],
  skills: [
    "Supply Chain Management",
    "Inventory Planning",
    "Logistics Optimization",
    "Transportation Management",
    "Warehouse Operations",
    "Data Analysis",
    "Project Management",
    "Strategic Planning",
    "Cost Analysis",
    "Process Improvement",
  ],
  tools: [
    "Microsoft Excel",
    "SAP ERP",
    "Tableau",
    "Power BI",
    "AutoCAD",
    "WMS Software",
    "Google Analytics",
    "Microsoft Project",
    "Notion",
    "Slack",
  ],
};
