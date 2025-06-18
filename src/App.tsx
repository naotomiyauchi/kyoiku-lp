import React, { useEffect, useState } from 'react';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Baby, 
  GraduationCap, 
  MessageCircle,
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
  Target,
  Lightbulb,
  CheckCircle,
  Clock,
  Star,
  Award,
  Zap,
  Shield,
  Calendar,
  User,
  Camera,
  Palette,
  Code,
  Globe
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const ProblemCard = ({ icon: Icon, text, delay = 0 }) => (
    <div 
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform transition-all duration-700 hover:scale-105 ${
        isVisible.problems ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
          <Icon className="w-6 h-6 text-red-500" />
        </div>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );

  const ReasonCard = ({ number, icon: Icon, title, description, delay = 0 }) => (
    <div 
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform transition-all duration-700 hover:scale-105 ${
        isVisible.reasons ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
          {number}
        </div>
        <div className="bg-gradient-to-r from-orange-100 to-blue-100 p-3 rounded-full">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const ServiceItem = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4 p-4">
      <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-x-hidden">
      {/* Header Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-orange-100/20"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            id="header"
            data-animate
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                想いが、<br />
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  しっかり伝わるHPに
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                合同会社Anfra
              </div>
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                教育への情熱を持つあなたと一緒に、<br />
                保護者の方に安心していただける、<br />
                伝わるHPを作り上げていきます
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center text-lg">
                <MessageCircle className="w-6 h-6 mr-3" />
                まずは無料相談から
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center text-lg">
                <Phone className="w-6 h-6 mr-3" />
                お電話での相談
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.problems ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            id="problems"
            data-animate
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              こんなお悩み、<span className="text-red-500">ありませんか？</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              しっかり教育現場のこと伝えたいのにWebで伝わらない...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProblemCard
              icon={Heart}
              text="保護者の方に安心していただきたい"
              delay={200}
            />
            <ProblemCard
              icon={Shield}
              text="教育現場のことをきちんとお伝えしたい"
              delay={400}
            />
            <ProblemCard
              icon={Users}
              text="HPは作りたいけど忙しくて作れていない"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.story ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            id="story"
            data-animate
          >
            <div className="inline-flex items-center px-6 py-3 bg-orange-100 rounded-full text-orange-600 font-medium mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              私たちの想い
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              私たちは、<span className="text-blue-600">教育者の想い</span>を大切にします
            </h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                教育への愛情を持つあなたと一緒に、<br />
                伝わるHPを作り上げていきたい。
              </p>
              <p className="text-2xl font-semibold text-blue-600">
                それが、Anfraの想いです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.reasons ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            id="reasons"
            data-animate
          >
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-600 font-medium mb-8">
              <Award className="w-5 h-5 mr-2" />
              選ばれる理由
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Anfraが選ばれる<span className="text-blue-600">3つの理由</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              教育業界に特化した私たちだからこそ、提供できる価値があります
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ReasonCard
              number="1"
              icon={User}
              title="本日、声をかけた私が最後まで担当します"
              description="窓口から制作、納品まで一貫して同じ担当者が対応。教育現場の想いを深く理解し、最後まで責任を持ってサポートします。"
              delay={200}
            />
            <ReasonCard
              number="2"
              icon={Palette}
              title="完全オリジナル設計（テンプレートなし）"
              description="あなたの教室・施設の個性と想いを反映した、世界に一つだけのオリジナルデザイン。テンプレートは一切使用しません。"
              delay={400}
            />
            <ReasonCard
              number="3"
              icon={Zap}
              title="一週間での超短納期実現"
              description="お急ぎの案件にも対応。ヒアリングから納品まで最短1週間で、質の高いHPをお届けします。"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.profile ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            id="profile"
            data-animate
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-orange-100 rounded-full text-orange-600 font-medium mb-8">
                <User className="w-5 h-5 mr-2" />
                代表者紹介
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                「教育者の想いに<span className="text-orange-500">寄り添いたい</span>」
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                    <img 
                      src="/3FC714DA-FE22-47E7-A0FF-9EEA340A70BC2023-03-11_23-06-53_138.jpeg" 
                      alt="宮内 直人" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">宮内 直人</h3>
                  <p className="text-gray-600">合同会社Anfra</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">なぜ教育業界特化なのか</h4>
                    <p className="text-gray-700 leading-relaxed">
                      教育に携わる方々の想いの強さに触れ、その想いがWebで十分に伝わっていない現状を目の当たりにしました。技術だけでなく、教育への理解と共感を持って、皆様の想いを形にしたい。それが私たちの使命です。
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p className="text-blue-800 font-medium italic">
                      「あなたの想いを聞かせてください。一緒に、保護者の方に安心していただけるHPを作りましょう。」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.service ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            id="service"
            data-animate
          >
            <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full text-green-600 font-medium mb-8">
              <Globe className="w-5 h-5 mr-2" />
              サービス内容
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="text-green-600">特別価格</span>でのスタート
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">10〜20万円</div>
                <div className="text-gray-600">完全オリジナルHP制作</div>
                <div className="text-sm text-gray-500 mt-2">※こちらのサイトからお問い合わせいただいた方限り</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">制作期間</span>
                  <span className="font-semibold text-blue-600">約1週間</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">支払い方法</span>
                  <span className="font-semibold text-blue-600">分割対応可</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700">アフターサポート</span>
                  <span className="font-semibold text-blue-600">1ヶ月無料</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">含まれるサービス</h3>
              
              <ServiceItem
                icon={MessageCircle}
                title="詳細ヒアリング"
                description="あなたの想いと教室の特色を深くお聞きします"
              />
              <ServiceItem
                icon={Palette}
                title="オリジナルデザイン"
                description="教室の雰囲気に合わせた完全オリジナル設計"
              />
              <ServiceItem
                icon={Code}
                title="レスポンシブ対応"
                description="スマホ・タブレット・PCすべてに最適化"
              />
              <ServiceItem
                icon={Camera}
                title="写真撮影サポート"
                description="必要に応じて撮影のアドバイスも実施"
              />
              <ServiceItem
                icon={Globe}
                title="SEO基本設定"
                description="検索されやすいサイト構造で制作"
              />
              <ServiceItem
                icon={Shield}
                title="セキュリティ対策"
                description="安全で信頼できるサイト運営をサポート"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Launch Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.launch ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            id="launch"
            data-animate
          >
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-600 font-medium mb-8">
              <Calendar className="w-5 h-5 mr-2" />
              新たな船出
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              <span className="text-blue-600">2025年7月1日</span>、新たな船出
            </h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-6 max-w-3xl mx-auto mb-12">
              <p>
                教育者様と一緒に成長していく<br />
                <span className="font-semibold text-orange-500">特別価格</span>でスタートします
              </p>
              <p className="text-lg text-gray-600">
                私たちも新しい挑戦の始まり。<br />
                だからこそ、一緒に歩んでいただける方を大切にしたい。<br />
                そんな想いを込めた特別価格でのご提供です。
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">立ち上げ記念特典</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">50%</div>
                  <div className="text-sm opacity-90">OFF</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1ヶ月</div>
                  <div className="text-sm opacity-90">無料サポート</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1週間</div>
                  <div className="text-sm opacity-90">超短納期</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            id="cta"
            data-animate
          >
            <h2 className="text-4xl font-bold mb-6">
              まずは無料相談から
            </h2>
            <p className="text-xl mb-8 opacity-90">
              あなたの想いを聞かせてください
            </p>
            <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
              無理な営業は一切いたしません。<br />
              まずはお気軽に、あなたの教室や施設への想いをお聞かせください。<br />
              一緒に想いを形にしましょう。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center text-lg">
                <MessageCircle className="w-6 h-6 mr-3" />
                無料相談を申し込む
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center text-lg">
                <Phone className="w-6 h-6 mr-3" />
                お電話でのご相談
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <Mail className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <h4 className="font-semibold mb-2">メール相談</h4>
                <p className="text-sm opacity-80">n_miyauchi.001@anfr-in.com</p>
                <p className="text-xs opacity-70 mt-1">24時間受付</p>
              </div>
              <div className="p-6">
                <Phone className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <h4 className="font-semibold mb-2">お電話</h4>
                <p className="text-sm opacity-80">090-8400-3970</p>
                <p className="text-xs opacity-70 mt-1">平日 9:00-18:00</p>
              </div>
              <div className="p-6">
                <MessageCircle className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <h4 className="font-semibold mb-2">オンライン相談</h4>
                <p className="text-sm opacity-80">Zoom・Teams対応</p>
                <p className="text-xs opacity-70 mt-1">全国どこでも</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">合同会社Anfra</h3>
            <p className="text-gray-400 mb-4">HP制作</p>
            <p className="text-sm text-gray-500">
              設立日：2025年7月1日<br />
              事業内容：教育業界特化のWebサイト制作・運用支援
            </p>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400">
              © 2025 合同会社Anfra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;