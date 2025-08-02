// app/dashboard/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { mockTenders, mockCategories } from "@/lib/data/mockTenders"
import { 
  Search, 
  Filter, 
  Bell,
  User,
  Heart,
  Share2,
  MapPin,
  Clock,
  TrendingUp,
  Building2,
  Monitor,
  GraduationCap,
  Truck,
  UtensilsCrossed,
  Menu,
  Home,
  BarChart3,
  Settings,
  LogOut,
  Eye,
  Bookmark
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 100])
  const [minAiScore, setMinAiScore] = useState(70)
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [savedTenders, setSavedTenders] = useState<string[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const categoryIcons = {
    construction: <Building2 className="h-4 w-4" />,
    it: <Monitor className="h-4 w-4" />,
    medical: <Heart className="h-4 w-4" />,
    education: <GraduationCap className="h-4 w-4" />,
    transport: <Truck className="h-4 w-4" />,
    food: <UtensilsCrossed className="h-4 w-4" />
  }

  const regions = ["Алматы", "Астана", "Шымкент", "Актобе", "Караганда", "Атырау"]

  const filteredTenders = mockTenders.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tender.category)
    const matchesPrice = tender.amount >= priceRange[0] * 1000000 && tender.amount <= priceRange[1] * 1000000
    const matchesAiScore = tender.aiScore >= minAiScore
    const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(tender.region)
    
    return matchesSearch && matchesCategory && matchesPrice && matchesAiScore && matchesRegion
  })

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId))
    }
  }

  const handleRegionChange = (region: string, checked: boolean) => {
    if (checked) {
      setSelectedRegions([...selectedRegions, region])
    } else {
      setSelectedRegions(selectedRegions.filter(r => r !== region))
    }
  }

  const toggleSavedTender = (tenderId: string) => {
    if (savedTenders.includes(tenderId)) {
      setSavedTenders(savedTenders.filter(id => id !== tenderId))
    } else {
      setSavedTenders([...savedTenders, tenderId])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Tender24AI
              </Link>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Поиск тендеров по названию или организации..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
                <span className="ml-2 hidden md:block">Алмас</span>
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? 'w-80' : 'w-0 overflow-hidden'
        }`}>
          <div className="p-6 space-y-6">
            {/* Quick Stats */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Быстрая статистика</h3>
              <div className="grid grid-cols-2 gap-3">
                <Card className="p-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{filteredTenders.length}</div>
                    <div className="text-xs text-gray-500">найдено</div>
                  </div>
                </Card>
                <Card className="p-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{savedTenders.length}</div>
                    <div className="text-xs text-gray-500">сохранено</div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Categories Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Категории</h3>
              <div className="space-y-2">
                {mockCategories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                    />
                    <Label htmlFor={category.id} className="flex items-center space-x-2 text-sm">
                      {categoryIcons[category.id as keyof typeof categoryIcons]}
                      <span>{category.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {category.activeCount}
                      </Badge>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Сумма контракта (млн ₸)</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{priceRange[0]} млн</span>
                  <span>{priceRange[1]} млн</span>
                </div>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* AI Score Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Минимальный AI Score</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>50</span>
                  <span className="font-medium">{minAiScore}</span>
                  <span>100</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={minAiScore}
                  onChange={(e) => setMinAiScore(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Regions */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Регионы</h3>
              <div className="space-y-2">
                {regions.map((region) => (
                  <div key={region} className="flex items-center space-x-2">
                    <Checkbox
                      id={region}
                      checked={selectedRegions.includes(region)}
                      onCheckedChange={(checked) => handleRegionChange(region, checked as boolean)}
                    />
                    <Label htmlFor={region} className="text-sm">
                      {region}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setSelectedCategories([])
                setSelectedRegions([])
                setPriceRange([0, 100])
                setMinAiScore(70)
                setSearchQuery("")
              }}
            >
              Очистить фильтры
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Results Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Активные тендеры</h1>
                <p className="text-gray-600">
                  Найдено {filteredTenders.length} тендеров по вашим критериям
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="ai-score">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-score">По AI Score</SelectItem>
                    <SelectItem value="amount">По сумме</SelectItem>
                    <SelectItem value="deadline">По дедлайну</SelectItem>
                    <SelectItem value="date">По дате</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Tenders Grid */}
          <div className="grid gap-6">
            {filteredTenders.map((tender) => (
              <Card key={tender.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-3xl font-bold text-gray-900">{tender.aiScore}</span>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">AI Score</span>
                          <Badge 
                            variant={tender.aiScore >= 90 ? 'default' : tender.aiScore >= 80 ? 'secondary' : 'outline'}
                            className={tender.aiScore >= 90 ? 'bg-green-100 text-green-800' : ''}
                          >
                            {tender.recommendation === 'participate' ? 'Рекомендуется' : 'Рассмотреть'}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight mb-3">
                        <Link href={`/tender/${tender.id}`} className="hover:text-blue-600">
                          {tender.title}
                        </Link>
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSavedTender(tender.id)}
                        className={savedTenders.includes(tender.id) ? 'text-red-500' : 'text-gray-400'}
                      >
                        <Heart className={`h-4 w-4 ${savedTenders.includes(tender.id) ? 'fill-current' : ''}`} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Сумма контракта
                      </div>
                      <div className="font-bold text-lg">₸{tender.amount.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Прогноз маржи
                      </div>
                      <div className="font-bold text-lg text-green-600">
                        {tender.marginPrediction.min}-{tender.marginPrediction.max}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Ожидаемая прибыль
                      </div>
                      <div className="font-bold text-lg">
                        ₸{(tender.expectedProfit.min / 1000000).toFixed(1)}-{(tender.expectedProfit.max / 1000000).toFixed(1)}М
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Вероятность выигрыша
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={tender.winProbability} className="flex-1 h-2" />
                        <span className="text-sm font-medium">{tender.winProbability}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {tender.participantsCount} участников
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {tender.riskLevel === 'low' ? 'низкий' : tender.riskLevel === 'medium' ? 'средний' : 'высокий'} риск
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ID: {tender.id}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/tender/${tender.id}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Анализировать
                        </Button>
                      </Link>
                      <Button 
                        size="sm"
                        className="bg-black text-white hover:bg-gray-800"
                      >
                        Подать заявку
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {filteredTenders.length > 0 && (
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Загрузить еще тендеры
              </Button>
            </div>
          )}

          {/* No Results */}
          {filteredTenders.length === 0 && (
            <div className="text-center py-12">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Тендеры не найдены
              </h3>
              <p className="text-gray-600 mb-4">
                Попробуйте изменить критерии поиска или очистить фильтры
              </p>
              <Button variant="outline">
                Очистить все фильтры
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
