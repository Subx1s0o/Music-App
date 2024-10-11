import { motion } from "framer-motion";

const MusicBars = () => (
  <div className="absolute top-1/2 left-1/2 flex gap-1 items-center transform -translate-x-1/2 -translate-y-1/2">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="w-[2px] bg-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, height: ["10px", "20px", "10px"] }}
        transition={{
          opacity: { duration: 0.5 },
          height: {
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: i * 0.1,
          },
        }}
      />
    ))}
  </div>
);

export default MusicBars;
