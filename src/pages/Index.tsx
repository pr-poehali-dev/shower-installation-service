import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [cabinType, setCabinType] = useState('standard');
  const [area, setArea] = useState([100]);
  const [additionalServices, setAdditionalServices] = useState({
    chemicals: false,
    warranty: false,
    parts: false
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculatePrice = () => {
    let basePrice = 0;
    if (cabinType === 'standard') basePrice = 15000;
    if (cabinType === 'premium') basePrice = 25000;
    if (cabinType === 'luxury') basePrice = 40000;

    const areaMultiplier = area[0] / 100;
    let total = basePrice + (basePrice * areaMultiplier * 0.3);

    if (additionalServices.chemicals) total += 5000;
    if (additionalServices.warranty) total += 8000;
    if (additionalServices.parts) total += 3000;

    return Math.round(total);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Droplets" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-montserrat font-bold text-foreground">AquaМастер</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`font-medium transition-colors ${activeSection === 'services' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className={`font-medium transition-colors ${activeSection === 'calculator' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                Калькулятор
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`font-medium transition-colors ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                Контакты
              </button>
            </div>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground leading-tight">
                Профессиональная установка душевых кабин
              </h1>
              <p className="text-xl text-muted-foreground">
                Качественный монтаж с гарантией, продажа запчастей и профессиональной химии
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection('calculator')}>
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Установок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-primary">5 лет</div>
                  <div className="text-sm text-muted-foreground mt-1">Гарантия</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="Droplets" size={200} className="text-primary/30" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Сертифицированные мастера</div>
                    <div className="text-sm text-muted-foreground">Опыт более 10 лет</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по установке и обслуживанию душевых систем
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat">Установка душевых</CardTitle>
                <CardDescription className="text-base">
                  Профессиональный монтаж любой сложности с гарантией качества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Стандартные кабины</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Премиум-системы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Индивидуальные проекты</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat">Гарантийное обслуживание</CardTitle>
                <CardDescription className="text-base">
                  Постгарантийный сервис и техническая поддержка 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1" size={18} />
                    <span>Гарантия до 5 лет</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1" size={18} />
                    <span>Бесплатная диагностика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1" size={18} />
                    <span>Срочный выезд мастера</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="ShoppingCart" className="text-accent" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat">Запчасти и химия</CardTitle>
                <CardDescription className="text-base">
                  Оригинальные комплектующие и профессиональные средства
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Запчасти всех брендов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Профессиональная химия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Доставка по городу</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Калькулятор стоимости
            </h2>
            <p className="text-xl text-muted-foreground">
              Рассчитайте примерную стоимость установки душевой кабины
            </p>
          </div>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat">Параметры установки</CardTitle>
              <CardDescription>Выберите тип кабины и дополнительные услуги</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="cabin-type" className="text-base font-medium">Тип душевой кабины</Label>
                <Select value={cabinType} onValueChange={setCabinType}>
                  <SelectTrigger id="cabin-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Стандартная (от 15 000 ₽)</SelectItem>
                    <SelectItem value="premium">Премиум (от 25 000 ₽)</SelectItem>
                    <SelectItem value="luxury">Люкс (от 40 000 ₽)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">Площадь ванной комнаты: {area[0]} м²</Label>
                <Slider
                  value={area}
                  onValueChange={setArea}
                  min={50}
                  max={200}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>50 м²</span>
                  <span>200 м²</span>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-medium">Дополнительные услуги</Label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="checkbox"
                      checked={additionalServices.chemicals}
                      onChange={(e) => setAdditionalServices({...additionalServices, chemicals: e.target.checked})}
                      className="w-5 h-5 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Профессиональная химия</div>
                      <div className="text-sm text-muted-foreground">Средства для ухода за душевой (+5 000 ₽)</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="checkbox"
                      checked={additionalServices.warranty}
                      onChange={(e) => setAdditionalServices({...additionalServices, warranty: e.target.checked})}
                      className="w-5 h-5 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Расширенная гарантия</div>
                      <div className="text-sm text-muted-foreground">Дополнительно 2 года гарантии (+8 000 ₽)</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="checkbox"
                      checked={additionalServices.parts}
                      onChange={(e) => setAdditionalServices({...additionalServices, parts: e.target.checked})}
                      className="w-5 h-5 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Комплект запчастей</div>
                      <div className="text-sm text-muted-foreground">Базовый набор для обслуживания (+3 000 ₽)</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Итоговая стоимость</div>
                    <div className="text-4xl font-montserrat font-bold text-primary">
                      {calculatePrice().toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                  <Button size="lg" className="text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Оформить заявку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">Свяжитесь с нами</CardTitle>
                <CardDescription>Заполните форму и мы перезвоним в течение 10 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Input id="message" placeholder="Опишите вашу задачу" />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-2xl font-montserrat font-bold text-primary">+7 (495) 123-45-67</div>
                      <div className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 22:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-lg font-medium">info@aquamaster.ru</div>
                      <div className="text-sm text-muted-foreground mt-1">Ответим в течение часа</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-lg font-medium">Москва, ул. Примерная, д. 123</div>
                      <div className="text-sm text-muted-foreground mt-1">Офис и шоурум</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Droplets" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-montserrat font-bold">AquaМастер</span>
              </div>
              <p className="text-white/70">
                Профессиональная установка душевых кабин с 2015 года
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li>Установка душевых</li>
                <li>Гарантийное обслуживание</li>
                <li>Запчасти и химия</li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@aquamaster.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-bold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-white/70">
                <li>Пн-Пт: 8:00 - 22:00</li>
                <li>Сб-Вс: 9:00 - 20:00</li>
                <li>Аварийная служба: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>© 2024 AquaМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}