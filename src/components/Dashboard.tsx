"use client";
import { motion, Variants } from "framer-motion";
import { Building2, Ruler, Gavel, HardHat, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // <--- IMPORT

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
};

export default function Dashboard() {
  const { t } = useLanguage(); // <--- HOOK

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {/* CARD 1 */}
      <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
        <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
           <Building2 size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{t('serv_1_title')}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {t('serv_1_desc')}
        </p>
        <div className="border-t border-slate-100 pt-4 mt-auto">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wide">{t('serv_1_tag')}</p>
        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div variants={itemVariants} className="bg-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group text-white">
        <div className="w-12 h-12 bg-white/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
           <Ruler size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">{t('serv_2_title')}</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {t('serv_2_desc')}
        </p>
        <div className="border-t border-slate-700 pt-4 mt-auto">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-wide">{t('serv_2_tag')}</p>
        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
           <HardHat size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{t('serv_3_title')}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {t('serv_3_desc')}
        </p>
        <div className="border-t border-slate-100 pt-4 mt-auto">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-wide">{t('serv_3_tag')}</p>
        </div>
      </motion.div>

      {/* CARD 4 */}
      <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
        <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
           <Gavel size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{t('serv_4_title')}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {t('serv_4_desc')}
        </p>
        <div className="border-t border-slate-100 pt-4 mt-auto">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-wide">{t('serv_4_tag')}</p>
        </div>
      </motion.div>

    </motion.div>
  );
}