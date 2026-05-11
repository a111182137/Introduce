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
  Presentation,
  Filter,
  ChevronDown,
  Monitor
} from "lucide-react";

type View = "intro" | "homework";
type Category = "all" | "travel" | "video" | "3d" | "cert";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("intro");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [profileImage, setProfileImage] = useState<string | null>("https://lh3.googleusercontent.com/d/1sh1tdAAvVACwYrqfWc33wTZgeU_M4OGe");
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
            <header className="pt-40 pb-16 px-6 bg-[#020617] border-b border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
              </div>
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
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
              <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                <Section title="學歷背景" icon={<GraduationCap size={20}/>}>
                  <div className="space-y-6">
                    <TimelineItem 
                      title="國立高雄科技大學 (NKUST)"
                      subtitle="進修部 航海科"
                      date="2022 - 至今"
                      description="專注於航行技術、船舶避碰、以及現代海事法規之學習。"
                    />
                  </div>
                </Section>

                <Section title="工作經歷" icon={<Briefcase size={20}/>}>
                  <div className="space-y-6">
                    <TimelineItem 
                      title="豐彩嫩Q仙草"
                      subtitle="老闆"
                      date="2022.09 - 至今"
                      description="負責洗碗、接待客人及完成訂單。"
                    />
                    <TimelineItem 
                      title="航運技術系辦公室"
                      subtitle="工讀生"
                      date="2023 - 至今"
                      description="負責文書整理、環境整理及協助系務助理。"
                    />
                    <TimelineItem 
                      title="丹丹漢堡"
                      subtitle="工讀生"
                      date="2024.07 - 2024.08"
                      description="負責環境整理、裝飲料、給餐、醃製炸雞及清理煎台。"
                    />
                  </div>
                </Section>
              </div>

              {/* 技能與語言 - 更加協調的排版 */}
              <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                <Section title="電腦技能" icon={<Monitor size={20}/>}>
                  <div className="space-y-8 pt-2">
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">辦公應用軟體</h4>
                      <div className="grid grid-cols-1 gap-2">
                        <SkillBadge label="Microsoft Word" />
                        <SkillBadge label="Microsoft Excel" />
                        <SkillBadge label="Microsoft Powerpoint" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">專案與協作工具</h4>
                      <div className="grid grid-cols-1 gap-2">
                        <SkillBadge label="Google Workspace" />
                        <SkillBadge label="Notion / 作業管理" />
                      </div>
                    </div>
                  </div>
                </Section>

                <Section title="語言與特質" icon={<Languages size={20}/>}>
                  <div className="space-y-8 pt-2">
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">語言能力</h4>
                      <div className="space-y-4">
                        <ProgressBar label="繁體中文 (Native)" percent={100} />
                        <ProgressBar label="英文 (Intermediate)" percent={70} />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">個人特質</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">熱忱積極</span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">細心負責</span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">團隊協作</span>
                      </div>
                    </div>
                  </div>
                </Section>
              </div>

              {/* 專業證照 - 獨立大區塊展現視覺震撼 */}
              <Section title="海事專業證照" icon={<Award size={20}/>}>
                <div className="bg-slate-900/30 rounded-[3rem] p-4 md:p-8 border border-white/5 shadow-inner">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CertBadge label="基安 (Basic Safety)" />
                    <CertBadge label="救難艇操縱 (PSCRB)" />
                    <CertBadge label="進階滅火 (Advanced Fire)" />
                    <CertBadge label="助理級航行 (Watchkeeping)" />
                    <CertBadge label="保全意識 (Security Awareness)" />
                    <CertBadge label="保全職責 (Security Duties)" />
                    <CertBadge label="醫療急救 (Medical First Aid)" />
                    <CertBadge label="RORO及油貨 (Special Cargo)" />
                    <CertBadge label="辦公軟體應用 (TQC+)" />
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">符合 STCW 國際海事公約標準資歷書</p>
                  </div>
                </div>
              </Section>

              {/* 自傳 */}
              <Section title="個人自傳" icon={<BookOpen size={20}/>}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] opacity-10 group-hover:opacity-20 transition duration-500 blur-lg"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl leading-8 text-slate-300 space-y-6">
                    <p className="text-lg font-medium text-white italic opacity-80 mb-6">「航向理想的樣子，是我不斷前行的動力。」</p>
                    <p>您好，我是 <span className="text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">陳翊蓁</span>。目前就讀國立高雄科技大學航海科，對於此科目抱有高度熱忱，正在努力學習成為一個優秀的航海人員。平常的興趣是拍照還有畫畫，雖然都沒有很專精，但是做這些事會讓我很快心，目前有一台底片相機，帶著它出去紀錄風景很有趣。</p>
                    <p>而未來也想上船工作，所以目前也在學習更多的知識，還有補足自身的短處。現在也於系辦工讀，提升自己的文書能力。期望自己未來能活成自己理想中的樣子。</p>
                  </div>
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">資訊課功課</h2>
                <p className="text-slate-400 text-lg">這裡記錄了我所有的課程作品與專案作品集</p>
              </div>

              <div className="relative group">
                <div className="flex items-center gap-3 bg-slate-900 border border-white/10 px-4 py-2.5 rounded-2xl shadow-xl">
                  <Filter size={18} className="text-blue-400" />
                  <select 
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value as Category)}
                    className="bg-transparent text-sm font-bold text-slate-200 outline-none cursor-pointer appearance-none pr-8"
                  >
                    <option value="all" className="bg-slate-900 text-slate-200">全部作品 (ALL)</option>
                    <option value="travel" className="bg-slate-900 text-slate-200">旅遊專區 (TRAVEL)</option>
                    <option value="video" className="bg-slate-900 text-slate-200">數位影音 (VIDEOS)</option>
                    <option value="3d" className="bg-slate-900 text-slate-200">3D 模型 (3D MODELS)</option>
                    <option value="cert" className="bg-slate-900 text-slate-200">專業證照 (CERTS)</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 text-slate-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-12">
              {/* 第一個作業：苗栗旅遊行程表 */}
              {(activeCategory === "all" || activeCategory === "travel") && (
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
              )}

              {/* 第二個作業：PPT 簡報展示 */}
              {(activeCategory === "all" || activeCategory === "travel") && (
                <HomeworkCard 
                  title="課程投影片作品展現"
                  tag="簡報設計 / PPT"
                  description="這是我在資訊課製作的專業 PPT 簡報展示。您可以直接在下方預覽投影片內容。"
                >
                  <div className="mt-6 relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_0_50px_rgba(37,99,235,0.1)] border-4 border-slate-800">
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
              )}

              {/* 第三個作業：新 PPT 簡報展示 */}
              {(activeCategory === "all" || activeCategory === "travel") && (
                <HomeworkCard 
                  title="數位科技應用：進階簡報作品"
                  tag="簡報設計 / 數位科技"
                  description="這是我的第二份專業簡報作品，展示了在數位科技應用課程中的進階設計技巧。"
                >
                  <div className="mt-6 relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_0_50px_rgba(37,99,235,0.1)] border-4 border-slate-800">
                    <iframe 
                      src="https://drive.google.com/file/d/1MOmWjmVOIPuQrwlZ5t84UqHt9VSXxnfD/preview" 
                      frameBorder="0" 
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <ExternalLink size={12} />
                    <span>提示：此為 Google Drive 預覽模式，可直接線上閱讀</span>
                  </div>
                </HomeworkCard>
              )}

              {/* 第四個作業：PPT 簡報展示 */}
              {(activeCategory === "all" || activeCategory === "travel") && (
                <HomeworkCard 
                  title="數位科技應用：專題簡報作品"
                  tag="簡報設計 / 數位科技"
                  description="這是我在數位科技課程中的另一份專題作品，展示了對特定主題的深入研究與簡報設計成果。"
                >
                  <div className="mt-6 relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_0_50px_rgba(37,99,235,0.1)] border-4 border-slate-800">
                    <iframe 
                      src="https://docs.google.com/presentation/d/1NNmQjZx8jMwg7PVWxGlGED5l97qohMqaZehRa2VCPIM/embed?start=false&loop=false&delayms=3000" 
                      frameBorder="0" 
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <ExternalLink size={12} />
                    <span>提示：此投影片可直接線上切換分頁</span>
                  </div>
                </HomeworkCard>
              )}

              {/* 第五個作業：內容影片展示 */}
              {(activeCategory === "all" || activeCategory === "video") && (
                <HomeworkCard 
                  title="數位科技應用：影音專案作品"
                  tag="影音編輯 / 數位內容"
                  description="這是我的數位影音專案作品，展示了在資訊課程中對於多媒體內容的整合與呈現。"
                >
                  <div className="mt-6 relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_0_50px_rgba(37,99,235,0.1)] border-4 border-slate-800">
                    <iframe 
                      src="https://drive.google.com/file/d/135OLd4RETd4vvbA85EuTUZf48RhA7k0U/preview" 
                      frameBorder="0" 
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <ExternalLink size={12} />
                    <span>提示：此為影片預覽，點擊播放即可觀看</span>
                  </div>
                </HomeworkCard>
              )}

              {/* 第六個作業：進階影音作品展示 */}
              {(activeCategory === "all" || activeCategory === "video") && (
                <HomeworkCard 
                  title="數位科技應用：進階影音專案"
                  tag="影音編輯 / 創意製作"
                  description="這是另一個影音創作專案，展示了不同的後製技巧與視覺呈現風格。"
                >
                  <div className="mt-6 relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_0_50px_rgba(37,99,235,0.1)] border-4 border-slate-800">
                    <iframe 
                      src="https://drive.google.com/file/d/1qBzoiYqvMohOKjDkLHQ54W2RkDe7nPd2/preview" 
                      frameBorder="0" 
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <ExternalLink size={12} />
                    <span>提示：點擊播放即可開始觀看影片內容</span>
                  </div>
                </HomeworkCard>
              )}

              {/* 第七個作業：Tripo3D 作品 */}
              {(activeCategory === "all" || activeCategory === "3d") && (
                <>
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
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/20 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                              <ExternalLink size={32} />
                            </div>
                            <p className="text-white font-bold tracking-widest text-sm bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm">點擊進入 3D 空間</p>
                          </div>
                        </div>
                        <img 
                          src="https://lh3.googleusercontent.com/d/1k63pEsRqSHeTSvXESPRYPoY3m-wPKDyv" 
                          alt="3D Space Preview" 
                          className="w-full h-full object-cover opacity-50"
                        />
                      </div>
                    </HomeworkCard>
                  </a>

                  {/* 3D 模型原圖比對 */}
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">原圖比對 Reference</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/20 to-transparent"></div>
                    </div>
                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 p-4 shadow-2xl">
                      <img 
                        src="https://lh3.googleusercontent.com/d/1oIE2Q536mZf409IMuixjRXEwAvja4XOP" 
                        alt="Original Comparison" 
                        className="w-full rounded-2xl shadow-lg border border-white/5"
                      />
                      <p className="mt-4 text-center text-sm text-slate-400 italic">建模參考原圖：展現 AI 對於平面圖像轉化為 3D 結構的解析能力</p>
                    </div>
                  </div>
                </>
              )}

              {/* 第八個項目：專業證照總覽 */}
              {(activeCategory === "all" || activeCategory === "cert") && (
                <HomeworkCard 
                  title="國家級與國際海事專業證照"
                  tag="專業資歷 / STCW"
                  description="在學期間積極取得各項海事專業證照，包含 STCW 國際公約規定之各項基本與進階訓練合格證書。"
                >
                  <div className="mt-8 bg-slate-950/50 rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <CertItemSimple label="基安 (Basic Safety Training)" />
                        <CertItemSimple label="救難艇操縱 (PSCRB)" />
                        <CertItemSimple label="進階滅火 (Advanced Fire Fighting)" />
                        <CertItemSimple label="助理級航行 (Navigational Watch)" />
                      </div>
                      <div className="space-y-3">
                        <CertItemSimple label="保全意識 (Security Awareness)" />
                        <CertItemSimple label="保全職責 (Security Duties)" />
                        <CertItemSimple label="醫療急救 (Medical First Aid)" />
                        <CertItemSimple label="RORO及油貨 (Special Cargo)" />
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                      <div className="p-3 bg-blue-600 rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                        <Award className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold">海事人員資歷完整性</h4>
                        <p className="text-xs text-slate-500">所有證書均符合交通部航港局與 IMO 國際海事組織標準</p>
                      </div>
                    </div>
                  </div>
                </HomeworkCard>
              )}

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

function CertBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 bg-slate-900 px-4 py-3 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group hover:bg-slate-800/50 hover:-translate-y-1">
      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"></div>
      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{label}</span>
    </div>
  );
}

function SkillBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 bg-slate-900/50 px-4 py-3 rounded-xl border border-white/5 hover:bg-slate-800 transition-colors group">
      <ChevronRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
      <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{label}</span>
    </div>
  );
}

function CertItemSimple({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-2xl border border-white/5">
      <ChevronRight className="text-blue-500" size={14} />
      <span className="text-sm text-slate-300 font-medium">{label}</span>
    </div>
  );
}

function Section({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="space-y-6 group/section">
      <div className="flex items-center gap-4 transition-transform duration-500 group-hover/section:translate-x-1">
        <div className="w-12 h-12 bg-blue-900/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/10 group-hover/section:bg-blue-600 group-hover/section:text-white group-hover/section:border-blue-500 transition-all duration-300 shadow-lg">
          {icon}
        </div>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
          <div className="h-1 w-8 bg-blue-600 rounded-full scale-x-0 group-hover/section:scale-x-100 transition-transform origin-left duration-500"></div>
        </div>
      </div>
      <div className="pl-2">
        {children}
      </div>
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
