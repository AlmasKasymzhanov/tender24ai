// app/tender/[id]/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { mockTenders } from "@/lib/data/mockTenders"
import Link from "next/link"
import { useParams } from "next/navigation"
import { 
  ArrowLeft,
  Heart,
  Share2,
  Download,
  ExternalLink,
  MapPin,
  Clock,
  Calendar,
  Building2,
  Users,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Zap,
  Eye,
  FileText,
  Target,
  DollarSign,
  BarChart3,
  Shield,
  Award
} from "lucide-react"

export default function TenderDetailPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("overview")
  const [isSaved, setIsSaved] = useState(false)
  const [tender, setTender] = useState(mockTenders[0])
  
  useEffect(() => {
    // Находим тендер по ID или берем первый
    const foundTender = mockTenders.find(t => t.id === params.id) || mockTenders[0]
    setTender(foundTender)
  }, [params.id])
  
  const aiInsights = {
    recommendation: {
      action: "УЧАСТВУЙТЕ",
      confidence: 94,
      reasoning: "Идеальное соответствие вашему профилю. Низкая конкуренция + высокая маржа.",
      risks: "Semantic анализ не выявил скрытых требований."
    },
    competition: {
      level: "Низкая",
      participants: 3,
      maxParticipants: 10,
      avgBidders: 7,
      winProbability: tender.winProbability
    },
    financial: {
      contractValue: tender.amount,
      estimatedCosts: tender.amount * 0.75,
      marginRange: tender.marginPrediction,
      profitRange: tender.expectedProfit,
      roi: 185
    },
    customer: {
      name: tender.customer.name,
      rating: tender.customer.rating,
      paymentHistory: "Отличная",
      onTimePayment: 94,
      avgPaymentDelay: 2,
      riskLevel: "Низкий"
    },
    timeline: {
      publishDate: "2025-01-20",
      deadline: "2025-02-15",
      daysLeft: 14,
      executionPeriod: tender.executionPeriod,
      keyDates: [
        { date: "2025-01-25", event: "Техническое совещание", status: "upcoming" },
        { date: "2025-02-10", event: "Срок подачи вопросов", status: "upcoming" },
        { date: "2025-02-15", event: "Дедлайн подачи заявок", status: "critical" }
      ]
    }
  }

  const requirements = [
    { category: "Технические требования", items: ["Медицинское оборудование класса IIa", "Сертификация РК", "Гарантия 24 месяца"] },
    { category: "Документы", items: ["Лицензия на медицинскую деятельность", "Сертификат соответствия", "Техническое описание"] },
    { category: "Квалификация", items: ["Опыт поставок в медицинские учреждения", "Не менее 3 успешных контрактов", "Положительные отзывы"] }
  ]

  const competitors = [
    { name: "МедТехКаз", probability: 35, strength: "Низкие цены", weakness: "Качество сервиса" },
    { name: "Евразия Мед", probability: 28, strength: "Опыт работы", weakness: "Высокие цены" },
    { name: "Неизвестный участник", probability: 15, strength: "Неизвестно", weakness: "Новичок в сфере" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Назад к списку
                </Button>
              </Link>
              <div className="text-sm text-gray-500">
                ID: {tender.id} • Опубликован 20 января 2025
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsSaved(!isSaved)}
                className={isSaved ? 'text-red-500' : 'text-gray-400'}
              >
                <Heart className={`h-4 w-4 mr-2 ${isSaved ? 'fill-current' : ''}`} />
                {isSaved ? 'Сохранено' : 'Сохранить'}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Поделиться
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Скачать ТЗ
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {tender.title}
                </h1>
                <div className="flex items-center space-x-6 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    {tender.customer.name}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {tender.region}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {aiInsights.timeline.daysLeft} дней до дедлайна
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {tender.aiScore}
                </div>
                <div className="text-sm text-gray-500 mb-3">AI Score</div>
                <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                  {tender.recommendation === 'participate' ? 'Рекомендуется' : 'Рассмотреть'}
                </Badge>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">₸{tender.amount.toLocaleString()}</div>
                <div className="text-sm text-gray-500">Сумма контракта</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {tender.marginPrediction.min}-{tender.marginPrediction.max}%
                </div>
                <div className="text-sm text-gray-500">Прогноз маржи</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{tender.participantsCount}/{aiInsights.competition.maxParticipants}</div>
                <div className="text-sm text-gray-500">Участников</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{tender.winProbability}%</div>
                <div className="text-sm text-gray-500">Вероятность</div>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-green-800 text-lg mb-2">
                    ИИ Рекомендация: {aiInsights.recommendation.action}
                  </h3>
                  <p className="text-green-700 mb-3">
                    {aiInsights.recommendation.reasoning}
                  </p>
                  <p className="text-green-600 text-sm">
                    {aiInsights.recommendation.risks}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">
                    {aiInsights.recommendation.confidence}%
                  </div>
                  <div className="text-sm text-green-600">Уверенность</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="requirements">Требования</TabsTrigger>
            <TabsTrigger value="competition">Конкуренты</TabsTrigger>
            <TabsTrigger value="risks">Риски</TabsTrigger>
            <TabsTrigger value="documents">Документы</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Financial Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Финансовый анализ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Стоимость контракта:</span>
                    <span className="font-bold">₸{aiInsights.financial.contractValue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ожидаемые затраты:</span>
                    <span className="font-bold">₸{aiInsights.financial.estimatedCosts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Прогноз прибыли:</span>
                    <span className="font-bold text-green-600">
                      ₸{(aiInsights.financial.profitRange.min / 1000000).toFixed(1)}-{(aiInsights.financial.profitRange.max / 1000000).toFixed(1)}М
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-bold text-blue-600">{aiInsights.financial.roi}%</span>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {aiInsights.financial.marginRange.min}-{aiInsights.financial.marginRange.max}%
                    </div>
                    <div className="text-sm text-gray-500">Ожидаемая маржа</div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    Анализ заказчика
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Рейтинг надежности:</span>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-green-600 mr-2">
                        {aiInsights.customer.rating}
                      </div>
                      <span className="text-sm text-gray-500">/10</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Платежная дисциплина:</span>
                      <span className="font-medium">{aiInsights.customer.paymentHistory}</span>
                    </div>
                    <Progress value={aiInsights.customer.onTimePayment} className="h-2" />
                    <div className="text-sm text-gray-500 text-right">
                      {aiInsights.customer.onTimePayment}% платежей вовремя
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Средняя задержка:</span>
                    <span className="font-medium">{aiInsights.customer.avgPaymentDelay} дня</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Уровень риска:</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {aiInsights.customer.riskLevel}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Временная шкала
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.timeline.keyDates.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'critical' ? 'bg-red-500' : 
                        item.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <div className="font-medium">{item.event}</div>
                        <div className="text-sm text-gray-500">{item.date}</div>
                      </div>
                      <Badge variant={item.status === 'critical' ? 'destructive' : 'default'}>
                        {item.status === 'critical' ? 'Критично' : 'Предстоит'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requirements" className="space-y-6">
            {requirements.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="competition" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Анализ конкуренции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{aiInsights.competition.participants}</div>
                      <div className="text-sm text-gray-500">Текущих участников</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{aiInsights.competition.avgBidders}</div>
                      <div className="text-sm text-gray-500">Среднее по категории</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{aiInsights.competition.level}</div>
                      <div className="text-sm text-gray-500">Уровень конкуренции</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-semibold">Известные участники:</h4>
                    {competitors.map((competitor, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{competitor.name}</div>
                          <div className="text-sm text-gray-600">
                            Сильные стороны: {competitor.strength}
                          </div>
                          <div className="text-sm text-gray-600">
                            Слабые стороны: {competitor.weakness}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">{competitor.probability}%</div>
                          <div className="text-sm text-gray-500">вероятность</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risks" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Положительные факторы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Низкая конкуренция (3 из 10 участников)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Надежный заказчик с рейтингом 9.2/10</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Высокая прогнозируемая маржа 22-28%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Соответствие вашему профилю 97%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-600">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Потенциальные риски
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <span>Сжатые сроки поставки (90 дней)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <span>Требования к сертификации могут затянуться</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <span>Возможны дополнительные участники</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Документация тендера
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Техническое задание", size: "2.4 MB", type: "PDF" },
                    { name: "Спецификация оборудования", size: "1.8 MB", type: "PDF" },
                    { name: "Форма заявки", size: "156 KB", type: "DOC" },
                    { name: "Проект договора", size: "892 KB", type: "PDF" }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-blue-500" />
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-gray-500">{doc.type} • {doc.size}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Скачать
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            <Award className="h-5 w-5 mr-2" />
            Подать заявку
          </Button>
          <Button variant="outline" size="lg">
            <Eye className="h-5 w-5 mr-2" />
            Следить за тендером
          </Button>
          <Button variant="outline" size="lg">
            <BarChart3 className="h-5 w-5 mr-2" />
            Скачать анализ
          </Button>
        </div>
      </div>
    </div>
  )
}
