import { Metadata } from "next";
import ToolsPageClient from "@/components/pages/ToolsPageClient";

export const metadata: Metadata = {
  title: "Logistics Tools & Utilities | Kim Đình Phương",
  description: "Interactive tools for logistics, warehousing, and supply chain planning including EOQ calculators, inventory turn calculations and fill rate estimation.",
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
