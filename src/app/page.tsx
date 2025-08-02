"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { mockTenders, mockCategories, mockDashboardStats } from "@/lib/data/mockTenders"
import Link from "next/link"
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  Clock, 
  MapPin, 
  Award, 
  ArrowRight,
  Star,
  CheckCircle,
  Brain,
  Cpu,
  Shield,
  Network,
  Lock,
  Database,
  Zap,
  Building2,
  Monitor,
  Heart,
  GraduationCap,
  Truck,
  UtensilsCrossed
} from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("overview")
  const [email, setEmail] = useState("")

  const filteredTenders = mockTenders.filter(tender => 
    (selectedCategory === "all" || tender.category === selectedCategory) &&
    (searchQuery === "" || tender.title.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const categoryIcons = {
    construction: <Building2 className="h-6 w-6 text-orange-600" />,
    it: <Monitor className="h-6 w-6 text-blue-600" />,
    medical: <Heart className="h-6 w-6 text-red-600" />,
    education: <GraduationCap className="h-6 w-6 text-green-600" />,
    transport: <Truck className="h-6 w-6 text-purple-600" />,
    food: <UtensilsCrossed className="h-6 w-6 text-yellow-600" />
  }

  const technicalFeatures = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Предиктивная аналитика маржи",
      technical: "Ensemble модели (Random Forest + XGBoost) обучены на 100K+ исторических контрактов",
      simple: "ИИ изучил тысячи завершённых тендеров и теперь точно предсказывает вашу прибыль ещё до подачи заявки"
    },
    {
      icon: <Cpu className="h-8 w-8 text-green-600" />,
      title: "Семантический анализ требований",
      technical: "BERT-подобные трансформеры + Named Entity Recognition для извлечения критических условий",
      simple: "ИИ читает техзадание как опытный юрист и моментально находит скрытые требования, которые могут убить маржу"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Риск-скоринг заказчиков",
      technical: "Graph Neural Networks анализируют связи между заказчиками, поставщиками и историю платежей",
      simple: "Система знает какие организации задерживают оплату, даже если они впервые объявляют тендер"
    },
    {
      icon: <Network className="h-8 w-8 text-purple-600" />,
      title: "Конкурентная разведка",
      technical: "Clustering алгоритмы + Market Basket Analysis выявляют паттерны участия конкурентов",
      simple: "ИИ знает стратегии ваших конкурентов и подсказывает где у вас больше шансов выиграть"
    }
  ]

  const securityFeatures = [
    { title: "Zero-Trust Architecture", desc: "Многофакторная аутентификация на всех уровнях" },
    { title: "Data Sovereignty", desc: "Все данные хранятся в дата-центрах РК" },
    { title: "AES-256 шифрование", desc: "End-to-end защита всех передаваемых данных" },
    { title: "99.9% uptime SLA", desc: "Гарантированная доступность системы" }
  ]

  const integrations = [
    { title: "Banking APIs", desc: "Прямая интеграция с банковскими CRM и кредитным скорингом" },
    { title: "Business Intelligence", desc: "Power BI / Tableau коннекторы и custom dashboard" },
    { title: "Notification Engine", desc: "Telegram/WhatsApp боты с персонализированными уведомлениями" },
    { title: "Excel Integration", desc: "Экспорт отчётов с макросами анализа" }
  ]

  const testimonials = [
    {
      name: "Газиз Нұрланұлы",
      company: "ТОО «ЕдуТех»",
      text: "Semantic анализ требований — прорыв! ИИ сразу показал что в тендере на интерактивные доски есть скрытое требование 'совместимость с Linux'. Конкуренты не заметили, мы выиграли единственными.",
      rating: 5
    },
    {
      name: "Абылай Серикович", 
      company: "КазНефтьСервис",
      text: "Risk-scoring заказчиков спас бизнес. Система показала что новый подрядчик в Атырау связан с компанией, которая обанкротилась 2 года назад. Избежали контракта на 180 млн с высоким риском.",
      rating: 5
    },
    {
      name: "Асем Кайратқызы",
      company: "МедТехПоставка",
      text: "Наконец-то понимаю какие больницы платят вовремя. AI-скоринг заказчиков спас от 3 потенциально проблемных контрактов на 25 млн. ROI системы окупился за первый месяц.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Tender24AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600">Войти</Button>
              <Link href="/dashboard">
                <Button className="bg-black text-white hover:bg-gray-800">Начать работу</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Умный анализ тендеров с ИИ
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Находите прибыльные тендеры, анализируйте риски и принимайте решения на основе данных
          </p>
          
          {/* Interactive Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Поиск тендеров по ключевым словам или компании..."
                  className="pl-12 h-12 text-lg border-gray-200 focus:border-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 h-12 border-gray-200">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  {mockCategories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Link href="/dashboard">
                <Button className="bg-black text-white hover:bg-gray-800 h-12 px-8">
                  <Filter className="h-4 w-4 mr-2" />
                  Поиск
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="tenders">Тендеры</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-12">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {mockDashboardStats.totalTenders.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Активных тендеров</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        ₸{(mockDashboardStats.totalValue / 1000000000).toFixed(1)}млрд
                      </div>
                      <div className="text-sm text-gray-500">Общая стоимость</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {mockDashboardStats.avgAiScore}
                      </div>
                      <div className="text-sm text-gray-500">Средний AI Score</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-50 rounded-lg">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {mockDashboardStats.newToday}
                      </div>
                      <div className="text-sm text-gray-500">Новых сегодня</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Categories Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Категории рынка</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {mockCategories.map((category) => (
                  <Card 
                    key={category.id} 
                    className="border-gray-100 hover:shadow-lg transition-all cursor-pointer hover:border-gray-300"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                        {categoryIcons[category.id as keyof typeof categoryIcons] || <div className="w-6 h-6 bg-gray-400 rounded"></div>}
                      </div>
                      <div className="font-semibold text-sm mb-2 leading-tight">{category.name}</div>
                      <div className="text-xs text-gray-500 mb-3">{category.activeCount} контрактов</div>
                      <Badge 
                        variant="outline"
                        className="text-xs"
                      >
                        {category.avgMargin}% маржа
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tenders" className="mt-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Рекомендованные возможности
              </h2>
              <p className="text-gray-600">
                {filteredTenders.length} тендеров соответствуют вашим критериям
              </p>
            </div>

            <div className="space-y-6">
              {filteredTenders.slice(0, 3).map((tender) => (
                <Card key={tender.id} className="border-gray-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-4">
                        <CardTitle className="text-lg leading-tight mb-3">{tender.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {tender.customer.name}
                          </span>
                          <Badge variant="outline">{tender.region}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-3xl font-bold text-gray-900">{tender.aiScore}</span>
                          <span className="text-sm text-gray-400">/ 100</span>
                        </div>
                        <Badge 
                          variant={tender.recommendation === 'participate' ? 'default' : 'secondary'}
                          className="bg-black text-white"
                        >
                          {tender.recommendation === 'participate' ? 'Рекомендуется' : 'Рассмотреть'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Сумма контракта</div>
                        <div className="font-bold text-lg">₸{tender.amount.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Прогноз маржи</div>
                        <div className="font-bold text-lg text-green-600">
                          {tender.marginPrediction.min}-{tender.marginPrediction.max}%
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ожидаемая прибыль</div>
                        <div className="font-bold text-lg">
                          ₸{(tender.expectedProfit.min / 1000000).toFixed(1)}-{(tender.expectedProfit.max / 1000000).toFixed(1)}М
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Вероятность выигрыша</div>
                        <div className="flex items-center space-x-2">
                          <Progress value={tender.winProbability} className="flex-1 h-2" />
                          <span className="text-sm font-medium">{tender.winProbability}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <Badge variant="outline" className="text-xs">
                          {tender.participantsCount} участников
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {tender.riskLevel === 'low' ? 'низкий' : tender.riskLevel === 'medium' ? 'средний' : 'высокий'} риск
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {tender.executionPeriod} дней
                        </Badge>
                      </div>
                      <Link href={`/tender/${tender.id}`}>
                        <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                          Анализировать
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-12">
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Расширенная панель аналитики</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Получите глубокие инсайты с трендами рынка, анализом конкурентов и предиктивным моделированием
              </p>
              <Link href="/dashboard">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Изучить аналитику
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>

        {/* Live Demo */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Смотрите как работает ИИ
            </h2>
            <p className="text-xl text-gray-600">
              Реальный анализ тендера за 15 секунд
            </p>
          </div>

          <Card className="max-w-5xl mx-auto shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    Поставка медицинского оборудования для городской больницы №1
                  </CardTitle>
                  <p className="text-blue-100">
                    ГКП «Городская больница №1» • Алматы • ID: 247589
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-green-300">94</div>
                  <div className="text-sm text-blue-100">AI Score</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Сумма контракта</p>
                  <p className="text-3xl font-bold text-gray-900">₸15,750,000</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Прогноз маржи</p>
                  <Badge className="bg-green-100 text-green-800 text-xl px-4 py-2">
                    22-28%
                  </Badge>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Уровень риска</p>
                  <Badge className="bg-green-100 text-green-800 text-xl px-4 py-2">
                    Низкий
                  </Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Конкуренция</span>
                    <span className="text-gray-600">3 из 10 возможных участников</span>
                  </div>
                  <Progress value={30} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Репутация заказчика</span>
                    <span className="text-gray-600">9.2/10 (отличная)</span>
                  </div>
                  <Progress value={92} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Соответствие вашему профилю</span>
                    <span className="text-gray-600">97% (идеальное)</span>
                  </div>
                  <Progress value={97} className="h-3" />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <Zap className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800 text-lg mb-2">ИИ Рекомендация</h4>
                    <p className="text-green-700 leading-relaxed">
                      <strong>УЧАСТВУЙТЕ!</strong> Идеальное соответствие вашему профилю. 
                      Низкая конкуренция + высокая маржа. Заказчик платит вовремя в 94% случаев. 
                      Semantic анализ не выявил скрытых требований.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Features */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Технологические решения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Уникальные алгоритмы машинного обучения, которые дают конкурентное преимущество
            </p>
          </div>

          <div className="space-y-12">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="border-gray-100 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                      {feature.icon}
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-500 mb-1">Технически:</p>
                          <p className="text-gray-700 font-mono text-sm">{feature.technical}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Простыми словами:</p>
                          <p className="text-gray-700 leading-relaxed">{feature.simple}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise-безопасность
            </h2>
            <p className="text-xl text-gray-600">
              Банковский уровень защиты ваших данных и коммерческой информации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="border-gray-200 text-center p-6 bg-white">
                <CardContent className="p-0">
                  <Lock className="h-8 w-8 text-gray-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              <Database className="h-4 w-4 mr-2" />
              Соответствие 152-ФЗ и Закону РК о персональных данных
            </Badge>
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Интеграции
            </h2>
            <p className="text-xl text-gray-600">
              Подключается к вашей существующей IT-инфраструктуре
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{integration.title}</h3>
                      <p className="text-gray-600">{integration.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Истории успеха
            </h2>
            <p className="text-xl text-gray-600">
              Реальные результаты от специалистов по тендерам
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200 bg-white">
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center border-t border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Готовы увеличить прибыль от тендеров?
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к сотням успешных поставщиков, которые уже используют ИИ
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
            <Input
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12"
            />
            <Link href="/dashboard">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 h-12 px-6">
                Начать бесплатно
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 flex items-center justify-center gap-4">
            <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-1" /> Полностью бесплатно</span>
            <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-1" /> Без ограничений</span>
            <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-1" /> Без скрытых платежей</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Tender24AI</div>
              <p className="text-gray-400 leading-relaxed">
                AI-платформа для анализа государственных тендеров и максимизации прибыли поставщиков
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Возможности</li>
                <li>Технологии</li>
                <li>API</li>
                <li>Интеграции</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Документация</li>
                <li>Помощь</li>
                <li>Сообщество</li>
                <li>Статус системы</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tender24AI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
