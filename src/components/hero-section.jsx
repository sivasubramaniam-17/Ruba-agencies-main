import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight, Tv, Zap, Shield, Award } from "lucide-react";
import { Button } from "@mui/material";

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 10px rgba(59, 130, 246, 0.5)",
      "0 0 20px rgba(59, 130, 246, 0.7)",
      "0 0 10px rgba(59, 130, 246, 0.5)",
    ],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  };

  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden relative bg-[white]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-6">
            <motion.div variants={itemVariants} className="inline-block">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-4 py-1 border border-blue-500/20">
                <span className="text-sm font-medium text-blue-400">Authorized Tata Sky Service Provider</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Experience TV Like</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Never Before
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-lg">
              Premium Tata Sky installation, sales, and recharge services. Bringing entertainment to life with crystal
              clear HD channels and seamless connectivity.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                size="large"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              >
                Explore Packages <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="large" variant="outlined" className="border-slate-700 text-white hover:bg-slate-800">
                Contact Us
              </Button>
            </motion.div>

            <motion.div variants={containerVariants} className="flex flex-wrap gap-6 pt-6">
              {[
                { icon: Zap, text: "Quick Installation" },
                { icon: Shield, text: "Authorized Service" },
                { icon: Award, text: "Premium Support" },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-center gap-2">
                  <div className="bg-blue-500/20 p-1.5 rounded-full">
                    <item.icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-slate-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div animate={floatingAnimation} className="relative z-10">
              <motion.div
                animate={glowAnimation}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700"
              >
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
                  <Tv className="h-8 w-8 text-white" />
                </div>
                <img
                  src="/placeholder.svg"
                  width={500}
                  height={400}
                  alt="Tata Sky Set-top Box"
                  className="rounded-lg object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold text-white">Tata Sky HD+ Set-top Box</h3>
                  <p className="text-slate-400">Experience 4K quality with 500+ channels</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      ₹1,499
                    </span>
                    <Button size="small" className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
