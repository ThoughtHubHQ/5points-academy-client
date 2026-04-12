"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[rgba(13,148,136,0.3)] blur-[80px] -z-10" />

      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-t-[#2dcdab] border-r-transparent border-b-[#0d514b] border-l-transparent rounded-full"
        />

        {/* Inner Pulsing Dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#2dcdab] rounded-full shadow-[0_0_15px_#2dcdab]"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-[#2dcdab] font-medium tracking-widest uppercase text-xs"
      >
        Preparing Excellence...
      </motion.p>
    </div>
  );
}
