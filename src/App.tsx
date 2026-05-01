/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Languages, 
  BookOpen,
  ChevronRight,
  Camera,
  Layout,
  ExternalLink,
  Presentation
} from "lucide-react";

type View = "intro" | "homework";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("intro");
  const [profileImage, setProfileImage] = useState<string | null>("input_file_0.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#020617] text-slate-200 pb-20 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-white">YZ.CHEN</span>
            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest leading-none">Portfolio 2026</span>
          </div>
          
          <div className="flex bg-slate-900 p-1 rounded-full border border-white/10 shadow-lg">
            <button
              onClick={() => setCurrentView("intro")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${
                currentView === "intro" ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-slate-100"
              }`}
            >
              <User size={16} /> 個人介紹
            </button>
            <button
              onClick={() => setCurrentView("homework")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${
                currentView === "homework" ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-slate-100"
              }`}
            >
              <Layout size={16} /> 資訊課功課
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {currentView === "intro" ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Intro Content */}
            <header className="pt-40 pb-16 px-6 bg-[#020617] border-b border-white/5">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="relative group">
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-48 h-48 rounded-2xl bg-slate-900 border-4 border-slate-800 shadow-2xl overflow-hidden relative cursor-pointer active:scale-95 transition-all"
                  >
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700">
                        <User size={64} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-lg">
                        <Camera size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div className="space-y-1">
                    <h1 className="text-4xl font-bold text-white">陳翊蓁</h1>
                    <p className="text-lg text-blue-400 font-medium">國立高雄科技大學 航海科學生</p>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5"><MapPin size={16} className="text-blue-400" /> 高雄市, 台灣</span>
                    <span className="flex items-center gap-1.5 text-blue-400"><Mail size={16} /> a111182137@nkust.edu.tw</span>
                  </div>
                  <p className="text-slate-400 max-w-xl italic border-l-4 border-blue-900/50 pl-4 py-1">
                    「抱有熱忱、開朗」—— 我相信積極的態度是航向成功的唯一羅盤。
                  </p>
                </div>
              </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
              {/* 學歷與經歷 */}
              <Section title="學歷背景" icon={<GraduationCap size={20}/>}>
                <div className="space-y-6">
                  <TimelineItem 
                    title="國立高雄科技大學 (NKUST)"
                    subtitle="進修部 航海科"
                    date="2022 - 至今"
                    description="專注於航行技術、船舶避碰、以及現代海事法規之學習。在學期間積極參與實驗室專題與專業技能訓練。"
                  />
                </div>
              </Section>

              <Section title="工作經歷" icon={<Briefcase size={20}/>}>
                <div className="space-y-6">
                  <TimelineItem 
                    title="海事相關實務培訓"
                    subtitle="專業實習 / 專案人員"
                    date="2023 - 2024"
                    description="參與校內外安排之海事實務演練，學習基礎船舶維護、物資管理與航行日誌處理。在團隊合作中擔任溝通協調角色。"
                  />
                  <TimelineItem 
                    title="行政與文書支援"
                    subtitle="短期助理 / 專員"
                    date="2022 - 2023"
                    description="負責各類行政報表整理、文件建檔與數位化作業。具備高效的工作自動化流程處理能力。"
                  />
                </div>
              </Section>

              {/* 語言與證照 */}
              <div className="grid md:grid-cols-2 gap-16">
                <Section title="語言能力" icon={<Languages size={20}/>}>
                  <div className="space-y-4 pt-2">
                    <ProgressBar label="繁體中文" percent={100} />
                    <ProgressBar label="英文" percent={70} />
                  </div>
                </Section>
                <Section title="專業證照" icon={<Award size={20}/>}>
                  <div className="space-y-4 pt-2">
                    <TimelineItem 
                      title="STCW 基本安全訓練" 
                      subtitle="國際海事組織 (IMO) 標準"
                      date="2024 發證"
                      description="包含個人生存技術、防火及基礎滅火、基本急救、個人安全及社會責任。"
                    />
                    <TimelineItem 
                      title="船舶滅火與救生合格證" 
                      subtitle="交通部航港局"
                      date="2024 發證"
                      description="專業海事人員必備證書，具備海上緊急事故處理與救生艇操作能力。"
                    />
                    <TimelineItem 
                      title="辦公室軟體應用證照" 
                      subtitle="TQC+ 數位設計與辦公軟體"
                      date="2023 發證"
                      description="精通 Word、Excel 及 PowerPoint 實務操作，具備高效能文書處理能力。"
                    />
                  </div>
                </Section>
              </div>

              {/* 自傳 */}
              <Section title="個人自傳" icon={<BookOpen size={20}/>}>
                <div className="bg-slate-900 p-10 rounded-[2rem] border border-white/5 shadow-2xl leading-8 text-slate-400 space-y-4">
                  <p>我是目前就讀於國立高雄科技大學航海科的陳翊蓁。這份專業不僅讓我領略了大海的壯闊，更教會了我責任與細心。我的個性隨和、開朗，對於感興趣的事物總是充滿熱忱，並願意投入大量的時間與精力去研究與學習。</p>
                  <p>在學習航海技能之餘，我也對數位文書處理與簡報設計有著濃厚的興趣。我認為一份出色的報告不僅需要準確的數據，更需要清晰且富有美感的呈現細節，這也是我努力在資訊課程中實踐的目標。</p>
                </div>
              </Section>
            </main>
          </motion.div>
        ) : (
          <motion.div
            key="homework"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-40 max-w-5xl mx-auto px-6"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-2">資訊課功課</h2>
              <p className="text-slate-400 text-lg">這裡記錄了我所有的課程作品與專案作品集</p>
            </div>

            <div className="grid gap-12">
              {/* 第一個作業：苗栗旅遊行程表 */}
              <HomeworkCard 
                title="苗栗海線五人 4天3夜 旅遊規劃"
                tag="行程規劃 / Excel 應用"
                description="這是我第一份資訊課作業，練習使用表格整理旅遊資訊、時間分配與預算控管。"
              >
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl">
                  <div className="bg-slate-900 p-4 border-b border-white/5 flex justify-between items-center">
                    <span className="font-bold text-slate-200 flex items-center gap-2"><Presentation size={18} className="text-blue-400" /> 行程明細表</span>
                    <span className="text-xs text-slate-500">總預算人均：$9,850</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-900/50 text-slate-400 font-medium">
                        <tr>
                          <th className="px-6 py-4">日期 / 時間</th>
                          <th className="px-6 py-4">類別</th>
                          <th className="px-6 py-4">行程項目</th>
                          <th className="px-6 py-4 text-right">預估花費</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <ItineraryRow date="4/3 11:30" type="交通" label="租車 (7人座 4天)" cost="$2,400" />
                        <ItineraryRow date="4/3 14:30" type="景點" label="後龍好望角、過港隧道" cost="$0" />
                        <ItineraryRow date="4/4 14:00" type="景點" label="飛牛牧場 (門票+點心)" cost="$450" />
                        <ItineraryRow date="4/5 11:30" type="食" label="午餐：大鼎夏荷牛肉麵" cost="$350" />
                        <ItineraryRow date="4/5 14:00" type="購物" label="垂坤食品 (伴手禮)" cost="$500" />
                        <ItineraryRow date="4/6 10:30" type="景點" label="天空之城 (門票+午餐)" cost="$600" />
                      </tbody>
                    </table>
                  </div>
                </div>
              </HomeworkCard>

              {/* 第二個作業：PPT 簡報展示 */}
              <HomeworkCard 
                title="課程投影片作品展現"
                tag="簡報設計 / PPT"
                description="這是我在資訊課製作的專業 PPT 簡報展示。您可以直接在下方預覽投影片內容。"
              >
                <div className="mt-6 relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_0_50px_rgba(37,99,235,0.1)] border-4 border-slate-800">
                  {/* 使用 iframe 嵌入 PPT */}
                  <iframe 
                    src="https://docs.google.com/presentation/d/1FqPWKMSBRL0KSr3r1q2qWzz6AOtrTok_JEBEMd-WaYw/embed?start=false&loop=false&delayms=3000" 
                    frameBorder="0" 
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <ExternalLink size={12} />
                  <span>提示：點擊右下角圖示可開起全螢幕觀看</span>
                </div>
              </HomeworkCard>

              {/* 第三個作業：Tripo3D 作品 */}
              <a 
                href="https://studio.tripo3d.ai/workspace/generate/ce9f924c-9362-402e-9833-435038acbdac" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <HomeworkCard 
                  title="Tripo3D 建模實作：3D 角色模型"
                  tag="3D 建模 / Tripo AI"
                  description="這是利用 Tripo AI 產出的 3D 模型作品。點擊下方區塊可直接跳轉至 Tripo3D 平台查看完整模型。"
                >
                  <div className="mt-6 relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border-4 border-white transition-transform group-hover:scale-[1.01]">
                    {/* 預覽畫面蓋板 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/20 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                          <ExternalLink size={32} />
                        </div>
                        <p className="text-white font-bold tracking-widest text-sm bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm">點擊進入 3D 空間</p>
                      </div>
                    </div>
                    {/* 可以放一張 3D 模型的預覽圖 (如果有) */}
                    <img 
                      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop" 
                      alt="3D Space Preview" 
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                </HomeworkCard>
              </a>

              {/* 結尾標語 */}
              <div className="py-20 text-center">
                <div className="inline-block px-8 py-4 rounded-3xl bg-blue-600/5 border border-blue-500/10">
                  <p className="text-slate-400 font-medium">作品持續更新中... 敬請期待後續更多專案內容</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="text-center py-10 text-slate-600 text-[10px] uppercase tracking-widest border-t border-white/5 mt-20">
        © 2026 陳翊蓁 (YZ.CHEN) Portfolio · Created with Passion
      </footer>
    </div>
  );
}

function Section({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-900/30 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/10">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function TimelineItem({ title, subtitle, date, description }: { title: string, subtitle: string, date: string, description?: string }) {
  return (
    <div className="relative pl-8 border-l border-slate-800 pb-2">
      <div className="absolute left-[-5.5px] top-1.5 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
      <div className="space-y-1 mb-1">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h3 className="text-xl font-bold text-slate-100">{title}</h3>
          <span className="px-2 py-0.5 bg-white/5 text-slate-400 text-[10px] font-semibold rounded border border-white/5">{date}</span>
        </div>
        <p className="text-blue-400 font-medium text-sm">{subtitle}</p>
      </div>
      {description && <p className="text-slate-400 text-sm leading-relaxed">{description}</p>}
    </div>
  );
}

function ProgressBar({ label, percent }: { label: string, percent: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-medium text-slate-400">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
        />
      </div>
    </div>
  );
}

function HomeworkCard({ title, tag, description, children }: { title: string, tag: string, description: string, children?: React.ReactNode }) {
  return (
    <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-blue-400 bg-blue-900/40 px-3 py-1 rounded-full uppercase tracking-widest border border-blue-500/20">{tag}</span>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{title}</h3>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>
        <button className="p-3 bg-white/5 text-slate-500 rounded-2xl hover:bg-blue-600 hover:text-white transition-all border border-white/10">
          <ExternalLink size={20} />
        </button>
      </div>
      {children}
    </div>
  );
}

function PlaceholderCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-white/5 border-2 border-dashed border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-4">
      <div className="w-16 h-16 bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center text-slate-700">
        <Presentation size={32} />
      </div>
      <div>
        <h4 className="font-bold text-slate-300">{title}</h4>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function ItineraryRow({ date, type, label, cost }: { date: string, type: string, label: string, cost: string }) {
  return (
    <tr className="hover:bg-white/5 transition-colors">
      <td className="px-6 py-4 text-slate-500 font-mono text-[10px]">{date}</td>
      <td className="px-6 py-4">
        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${type === "食" ? "bg-orange-900/30 text-orange-400 border-orange-500/20" : type === "交通" ? "bg-blue-900/30 text-blue-400 border-blue-500/20" : "bg-green-900/30 text-green-400 border-green-500/20"}`}>
          {type}
        </span>
      </td>
      <td className="px-6 py-4 font-medium text-slate-200">{label}</td>
      <td className="px-6 py-4 text-right font-mono text-blue-400">{cost}</td>
    </tr>
  );
}
