import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // กำหนด fallback สำหรับไลบรารีที่ไม่มีใน Node.js เช่น fs, path
    config.resolve.fallback = {
      fs: false, // ป้องกันข้อผิดพลาดที่เกี่ยวข้องกับ fs
      path: false, // ป้องกันข้อผิดพลาดที่เกี่ยวกับ path
    };
    // ส่งกลับ config ที่ถูกปรับปรุง
    return config;
  },

  // คุณสามารถเพิ่มตัวเลือกอื่นๆ ที่ต้องการใน next.config.js เช่น:
  reactStrictMode: true, // เปิดใช้งาน Strict Mode ของ React

  // ปรับแต่งการตั้งค่าคอมไพล์แบบอื่น ๆ ที่คุณต้องการ
};

export default nextConfig;
