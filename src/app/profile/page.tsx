// app/profile/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { mockTenders, mockCategories } from "@/lib/data/mockTenders"
import Link from "next/link"
import { 
  ArrowLeft,
  Heart,
  Settings,
  BarChart3,
  Bell,
  User,
  Eye,
  Trash2,
  Edit,
  Calendar,
  TrendingUp,
  Award,
  Clock,
  Building2,
  MapPin,
  Download,
  Share2,
  Target,
  Zap,
  CheckCircle,
  AlertTriangle,
  Monitor,
  GraduationCap,
  Truck,
  UtensilsCrossed,
  Save
} from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("favorites")
  const [savedTenders, setSavedTenders] = useState<string[]>([])
  const [userSettings, setUserSettings] = useState({
    name: "Алмас Касымжанов",
    company: "ТОО «МедТехПоставка»",
    email: "almas@medtech.kz",
    phone: "+7 777 123 45 67",
    categories: ["medical", "education"],
    regions: ["Алматы", "Астана"],
    minAiScore: 80,
    budgetMin: 1,
    budgetMax: 50,
    notifications: {
      newTenders: true,
      deadlines: true,
      priceChanges: false,
      weeklyReport: true
    }
  })

  // Симуляция загрузки сохраненных тендеров из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedTenders')
    if (saved) {
      setSavedTenders(JSON.parse(saved))
    } else {
      // Демо данные
      setSavedTenders(['tender-001', 'tender-002'])
    }
  }, [])

  const categoryIcons = {
    construction: <Building2 className="h-4 w-4" />,
    it: <Monitor className="h-4 w-4" />,
    medical: <Heart className="h-4 w-4" />,
    education: <GraduationCap className="h-4 w-4" />,
    transport: <Truck className="h-4 w-4" />,
    food: <UtensilsCrossed className="h-4 w-4" />
  }

  const savedTendersList = mockTenders.filter(tender => savedTenders.includes(tender.id))

  const userStats = {
    totalViewed: 156,
    totalSaved: savedTenders.length,
    totalAnalyzed: 28,
    avgAiScore: 78,
    successRate: 65,
    totalProfit: 12500000
  }

  const recentActivity = [
    { date: "2025-01-25", action: "Просмотр тендера", tender: "Поставка оборудования", type: "view" },
    { date: "2025-01-24", action: "Сохранение в избранное", tender: "Медицинские расходники", type: "save" },
    { date: "2025-01-24", action: "Скачивание анализа", tender: "IT оборудование", type: "download" },
    { date: "2025-01-23", action: "Подача заявки", tender: "Учебные материалы", type: "bid" }
  ]

  const removeSavedTender = (tenderId: string) => {
    const updated = savedTenders.filter(id => id !== tenderId)
    setSavedTenders(updated)
    localStorage.setItem('savedTenders', JSON.stringify(updated))
  }

  const updateSettings = () => {
    // Симуляция сохранения настроек
    localStorage.setItem('userSettings', JSON.stringify(userSettings))
    alert('Настройки сохранены!')
  }

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setUserSettings(prev => ({
        ...prev,
        categories: [...prev.categories, categoryId]
      }))
    } else {
      setUserSettings(prev => ({
        ...prev,
        categories: prev.categories.filter(cat => cat !== categoryId)
      }))
    }
  }

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
                  Назад к тендерам
                </Button>
              </Link>
              <div className="text-xl font-semibold text-gray-900">Профиль</div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Настройки
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Hero */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{userSettings.name}</h1>
                    <p className="text-blue-100 text-lg mb-1">{userSettings.company}</p>
                    <p className="text-blue-200">{userSettings.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">{userStats.avgAiScore}</div>
                  <div className="text-blue-200">Средний AI Score</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card className="text-center p-4">
            <Eye className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{userStats.totalViewed}</div>
            <div className="text-sm text-gray-500">Просмотрено</div>
          </Card>
          <Card className="text-center p-4">
            <Heart className="h-6 w-6 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{userStats.totalSaved}</div>
            <div className="text-sm text-gray-500">Сохранено</div>
          </Card>
          <Card className="text-center p-4">
            <BarChart3 className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{userStats.totalAnalyzed}</div>
            <div className="text-sm text-gray-500">Анализов</div>
          </Card>
          <Card className="text-center p-4">
            <Target className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{userStats.successRate}%</div>
            <div className="text-sm text-gray-500">Успешность</div>
          </Card>
          <Card className="text-center p-4">
            <Award className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-500">Выиграно</div>
          </Card>
          <Card className="text-center p-4">
            <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">₸{(userStats.totalProfit / 1000000).toFixed(1)}М</div>
            <div className="text-sm text-gray-500">Прибыль</div>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
            <TabsTrigger value="analytics">Статистика</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
            <TabsTrigger value="activity">История</TabsTrigger>
          </TabsList>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Избранные тендеры ({savedTenders.length})
              </h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Экспорт
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>

            {savedTendersList.length > 0 ? (
              <div className="space-y-4">
                {savedTendersList.map((tender) => (
                  <Card key={tender.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-2xl font-bold text-gray-900">{tender.aiScore}</span>
                            <Badge className="bg-green-100 text-green-800">
                              {tender.recommendation === 'participate' ? 'Рекомендуется' : 'Рассмотреть'}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Сохранено: 24 янв
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            <Link href={`/tender/${tender.id}`} className="hover:text-blue-600">
                              {tender.title}
                            </Link>
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center">
                              <Building2 className="h-4 w-4 mr-1" />
                              {tender.customer.name}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {tender.region}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {tender.executionPeriod} дней
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                                Сумма
                              </div>
                              <div className="font-bold">₸{tender.amount.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                                Маржа
                              </div>
                              <div className="font-bold text-green-600">
                                {tender.marginPrediction.min}-{tender.marginPrediction.max}%
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                                Вероятность
                              </div>
                              <div className="font-bold text-blue-600">{tender.winProbability}%</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <Link href={`/tender/${tender.id}`}>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              Открыть
                            </Button>
                          </Link>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => removeSavedTender(tender.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Удалить
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Нет сохраненных тендеров
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Добавьте тендеры в избранное для быстрого доступа
                  </p>
                  <Link href="/dashboard">
                    <Button>
                      Перейти к тендерам
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Активность по месяцам</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { month: "Январь 2025", views: 45, saved: 8, analyzed: 12 },
                      { month: "Декабрь 2024", views: 38, saved: 6, analyzed: 9 },
                      { month: "Ноябрь 2024", views: 42, saved: 7, analyzed: 11 }
                    ].map((month, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{month.month}</span>
                          <span className="text-gray-500">{month.views} просмотров</span>
                        </div>
                        <Progress value={(month.views / 50) * 100} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{month.saved} сохранено</span>
                          <span>{month.analyzed} анализов</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Категории интересов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockCategories.map((category) => (
                      <div key={category.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {categoryIcons[category.id as keyof typeof categoryIcons]}
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={Math.random() * 100} className="w-20 h-2" />
                          <span className="text-sm text-gray-500">
                            {Math.floor(Math.random() * 20 + 5)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Результативность</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">12</div>
                    <div className="text-sm text-gray-500">Выигранных тендеров</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">₸45.2М</div>
                    <div className="text-sm text-gray-500">Общая сумма контрактов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">24%</div>
                    <div className="text-sm text-gray-500">Средняя маржа</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">65%</div>
                    <div className="text-sm text-gray-500">Процент побед</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Личная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name" 
                      value={userSettings.name}
                      onChange={(e) => setUserSettings(prev => ({...prev, name: e.target.value}))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input 
                      id="company" 
                      value={userSettings.company}
                      onChange={(e) => setUserSettings(prev => ({...prev, company: e.target.value}))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={userSettings.email}
                      onChange={(e) => setUserSettings(prev => ({...prev, email: e.target.value}))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      value={userSettings.phone}
                      onChange={(e) => setUserSettings(prev => ({...prev, phone: e.target.value}))}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle>Предпочтения</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Label>Интересующие категории</Label>
                    {mockCategories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={userSettings.categories.includes(category.id)}
                          onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                        />
                        <Label htmlFor={category.id} className="flex items-center space-x-2">
                          {categoryIcons[category.id as keyof typeof categoryIcons]}
                          <span>{category.name}</span>
                        </Label>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Минимальный AI Score</Label>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={userSettings.minAiScore}
                        onChange={(e) => setUserSettings(prev => ({...prev, minAiScore: parseInt(e.target.value)}))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>50</span>
                        <span className="font-medium">{userSettings.minAiScore}</span>
                        <span>100</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Бюджет от (млн ₸)</Label>
                      <Input 
                        type="number"
                        value={userSettings.budgetMin}
                        onChange={(e) => setUserSettings(prev => ({...prev, budgetMin: parseInt(e.target.value)}))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Бюджет до (млн ₸)</Label>
                      <Input 
                        type="number"
                        value={userSettings.budgetMax}
                        onChange={(e) => setUserSettings(prev => ({...prev, budgetMax: parseInt(e.target.value)}))}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Уведомления</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { key: 'newTenders', label: 'Новые тендеры в ваших категориях', icon: <Bell className="h-4 w-4" /> },
                    { key: 'deadlines', label: 'Напоминания о дедлайнах', icon: <Clock className="h-4 w-4" /> },
                    { key: 'priceChanges', label: 'Изменения цен в сохраненных тендерах', icon: <TrendingUp className="h-4 w-4" /> },
                    { key: 'weeklyReport', label: 'Еженедельный отчет по активности', icon: <BarChart3 className="h-4 w-4" /> }
                  ].map((notification) => (
                    <div key={notification.key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {notification.icon}
                        <span>{notification.label}</span>
                      </div>
                      <Checkbox
                        checked={userSettings.notifications[notification.key as keyof typeof userSettings.notifications]}
                        onCheckedChange={(checked) => 
                          setUserSettings(prev => ({
                            ...prev,
                            notifications: {
                              ...prev.notifications,
                              [notification.key]: checked as boolean
                            }
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button onClick={updateSettings} size="lg">
                <Save className="h-4 w-4 mr-2" />
                Сохранить настройки
              </Button>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Последняя активность</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'view' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'save' ? 'bg-red-100 text-red-600' :
                        activity.type === 'download' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {activity.type === 'view' && <Eye className="h-4 w-4" />}
                        {activity.type === 'save' && <Heart className="h-4 w-4" />}
                        {activity.type === 'download' && <Download className="h-4 w-4" />}
                        {activity.type === 'bid' && <Award className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-sm text-gray-600">{activity.tender}</div>
                      </div>
                      <div className="text-sm text-gray-500">{activity.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
