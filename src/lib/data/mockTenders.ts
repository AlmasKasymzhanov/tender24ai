// src/lib/data/mockTenders.ts

import { Tender, Category, DashboardStats } from '@/types/tender';

export const mockCategories: Category[] = [
  {
    id: 'construction',
    name: 'Строительство и ремонт',
    icon: '🏗️',
    avgMargin: 22,
    riskLevel: 'medium',
    activeCount: 342,
    totalValue: 2450000000
  },
  {
    id: 'it',
    name: 'IT и телекоммуникации',
    icon: '💻',
    avgMargin: 35,
    riskLevel: 'low',
    activeCount: 156,
    totalValue: 890000000
  },
  {
    id: 'medical',
    name: 'Медицина и фармацевтика',
    icon: '🏥',
    avgMargin: 28,
    riskLevel: 'low',
    activeCount: 89,
    totalValue: 670000000
  },
  {
    id: 'education',
    name: 'Образование',
    icon: '🎓',
    avgMargin: 30,
    riskLevel: 'low',
    activeCount: 124,
    totalValue: 450000000
  },
  {
    id: 'transport',
    name: 'Транспорт и логистика',
    icon: '🚛',
    avgMargin: 15,
    riskLevel: 'medium',
    activeCount: 78,
    totalValue: 1200000000
  },
  {
    id: 'food',
    name: 'Продукты питания',
    icon: '🍽️',
    avgMargin: 12,
    riskLevel: 'low',
    activeCount: 203,
    totalValue: 380000000
  }
];

export const mockTenders: Tender[] = [
  {
    id: '1',
    title: 'Поставка медицинского оборудования для городской больницы №1',
    customer: {
      name: 'ГКП «Городская больница №1»',
      rating: 4.8,
      paymentHistory: 'excellent',
      inn: '123456789012',
      region: 'Алматы'
    },
    amount: 15750000,
    category: 'medical',
    region: 'Алматы',
    deadline: '2025-03-15',
    publishDate: '2025-02-01',
    status: 'active',
    aiScore: 94,
    marginPrediction: { min: 22, max: 28, confidence: 87 },
    expectedProfit: { min: 3465000, max: 4410000 },
    roi: 185,
    competitionLevel: 3,
    participantsCount: 3,
    riskLevel: 'low',
    winProbability: 78,
    requirements: ['Медицинская лицензия', 'Опыт 3+ лет', 'Сертификат ISO'],
    executionPeriod: 90,
    location: 'г. Алматы, ул. Толе би, 95',
    distanceFromUser: 12,
    recommendation: 'participate',
    insights: [
      'Идеальное соответствие вашему профилю',
      'Низкая конкуренция в данной категории',
      'Заказчик имеет отличную репутацию'
    ],
    warnings: []
  },
  {
    id: '2',
    title: 'Разработка и внедрение системы электронного документооборота',
    customer: {
      name: 'Акимат Нур-Султана',
      rating: 4.2,
      paymentHistory: 'good',
      inn: '987654321098',
      region: 'Нур-Султан'
    },
    amount: 28500000,
    category: 'it',
    region: 'Нур-Султан',
    deadline: '2025-02-20',
    publishDate: '2025-01-28',
    status: 'ending_soon',
    aiScore: 76,
    marginPrediction: { min: 30, max: 40, confidence: 92 },
    expectedProfit: { min: 8550000, max: 11400000 },
    roi: 240,
    competitionLevel: 7,
    participantsCount: 8,
    riskLevel: 'medium',
    winProbability: 45,
    requirements: ['Опыт госпроектов', 'Команда 10+ разработчиков', 'Портфолио CRM'],
    executionPeriod: 180,
    location: 'г. Нур-Султан, пр. Мангилик Ел, 8',
    distanceFromUser: 450,
    recommendation: 'consider',
    insights: [
      'Высокая маржинальность проекта',
      'Долгосрочный контракт с возможностью продления',
      'Опыт работы с госсектором - преимущество'
    ],
    warnings: [
      'Высокая конкуренция - 8 участников',
      'Сложные технические требования'
    ]
  },
  {
    id: '3',
    title: 'Капитальный ремонт школьного здания',
    customer: {
      name: 'КГУ «Школа-гимназия №15»',
      rating: 3.9,
      paymentHistory: 'average',
      inn: '456789123456',
      region: 'Шымкент'
    },
    amount: 45200000,
    category: 'construction',
    region: 'Шымкент',
    deadline: '2025-04-10',
    publishDate: '2025-02-02',
    status: 'new',
    aiScore: 58,
    marginPrediction: { min: 15, max: 20, confidence: 73 },
    expectedProfit: { min: 6780000, max: 9040000 },
    roi: 125,
    competitionLevel: 5,
    participantsCount: 12,
    riskLevel: 'high',
    winProbability: 32,
    requirements: ['Строительная лицензия', 'Опыт школьных объектов', 'СРО'],
    executionPeriod: 120,
    location: 'г. Шымкент, ул. Казыбек би, 123',
    distanceFromUser: 720,
    recommendation: 'skip',
    insights: [
      'Большой объем работ',
      'Возможность субподряда'
    ],
    warnings: [
      'Заказчик задерживал платежи в прошлом',
      'Очень высокая конкуренция',
      'Низкая рентабельность'
    ]
  },
  {
    id: '4',
    title: 'Поставка продуктов питания для детских садов',
    customer: {
      name: 'Управление образования г. Алматы',
      rating: 4.5,
      paymentHistory: 'excellent',
      inn: '789123456789',
      region: 'Алматы'
    },
    amount: 12300000,
    category: 'food',
    region: 'Алматы',
    deadline: '2025-03-01',
    publishDate: '2025-01-30',
    status: 'active',
    aiScore: 82,
    marginPrediction: { min: 10, max: 15, confidence: 95 },
    expectedProfit: { min: 1230000, max: 1845000 },
    roi: 95,
    competitionLevel: 4,
    participantsCount: 6,
    riskLevel: 'low',
    winProbability: 65,
    requirements: ['Пищевая лицензия', 'Сертификаты качества', 'Холодильный транспорт'],
    executionPeriod: 365,
    location: 'г. Алматы, ул. Шевченко, 90',
    distanceFromUser: 8,
    recommendation: 'participate',
    insights: [
      'Стабильный долгосрочный контракт',
      'Надежный заказчик с отличной репутацией',
      'Возможность повторных контрактов'
    ],
    warnings: []
  },
  {
    id: '5',
    title: 'Закупка автомобилей для муниципальных служб',
    customer: {
      name: 'Акимат г. Караганды',
      rating: 4.0,
      paymentHistory: 'good',
      inn: '321654987321',
      region: 'Караганда'
    },
    amount: 67800000,
    category: 'transport',
    region: 'Караганда',
    deadline: '2025-03-25',
    publishDate: '2025-02-01',
    status: 'active',
    aiScore: 71,
    marginPrediction: { min: 12, max: 18, confidence: 85 },
    expectedProfit: { min: 8136000, max: 12204000 },
    roi: 155,
    competitionLevel: 6,
    participantsCount: 9,
    riskLevel: 'medium',
    winProbability: 52,
    requirements: ['Дилерский договор', 'Сервисная сеть', 'Гарантия 3 года'],
    executionPeriod: 45,
    location: 'г. Караганда, пр. Бухар-жырау, 34',
    distanceFromUser: 250,
    recommendation: 'consider',
    insights: [
      'Крупный заказ с хорошей маржой',
      'Быстрая поставка - преимущество',
      'Возможность долгосрочного сервиса'
    ],
    warnings: [
      'Средняя конкуренция',
      'Требуется крупный оборотный капитал'
    ]
  }
];

export const mockDashboardStats: DashboardStats = {
  totalTenders: 1247,
  totalValue: 8420000000,
  avgAiScore: 73,
  highMarginCount: 423,
  newToday: 28,
  endingSoon: 67
};