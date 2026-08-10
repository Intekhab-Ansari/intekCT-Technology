"use client";

import React from "react";
import { motion } from "framer-motion";

export const GlowingGridBg: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050A18]">
      {/* Top Center Main Cyan Glow Orb */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00F2FE]/15 via-[#0099FF]/5 to-transparent blur-[120px] rounded-full" />
      
      {/* Bottom Right Secondary Glow Orb */}
      <div className="absolute top-[40%] -right-32 w-[600px] h-[600px] bg-radial from-[#00F2FE]/10 to-transparent blur-[140px] rounded-full" />

      {/* Middle Left Subtle Glow Orb */}
      <div className="absolute top-[70%] -left-32 w-[500px] h-[500px] bg-radial from-[#263238]/40 to-transparent blur-[130px] rounded-full" />

      {/* Animated Subtle Cyan Grid Lines */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-cyan-grid opacity-30"
      />

      {/* Radial vignette fade for dark depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050A18_100%)]" />
    </div>
  );
};
