import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    toast({
      title: "Заявка отправлена!",
      description: `Спасибо, ${data.name}! Мы свяжемся с вами в ближайшее время.`,
    });
    
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">АвтоСервис</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" onClick={() => scrollToSection('home')}>Главная</Button>
            <Button variant="ghost" onClick={() => scrollToSection('services')}>Услуги</Button>
            <Button variant="ghost" onClick={() => scrollToSection('prices')}>Цены</Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')}>О нас</Button>
            <Button variant="ghost" onClick={() => scrollToSection('contacts')}>Контакты</Button>
          </nav>

          <Button onClick={() => scrollToSection('booking')}>Записаться</Button>
        </div>
      </header>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Профессиональный ремонт и обслуживание автомобилей
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Более 15 лет опыта, современное оборудование и квалифицированные мастера. 
                Гарантия на все виды работ.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('booking')}>
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Записаться онлайн
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">гарантия</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/e774dd25-46d7-444c-856a-632f89347ab3/files/19e5629a-68e9-4b98-96fe-0622d5571283.jpg" 
                alt="Автосервис" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию автомобилей любых марок
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Wrench', title: 'Техническое обслуживание', description: 'ТО-1, ТО-2, замена масла, фильтров, свечей' },
              { icon: 'Settings', title: 'Ремонт двигателя', description: 'Диагностика и ремонт любой сложности' },
              { icon: 'CircleSlash', title: 'Тормозная система', description: 'Замена колодок, дисков, прокачка тормозов' },
              { icon: 'Gauge', title: 'Подвеска и рулевое', description: 'Замена амортизаторов, сайлентблоков, рулевых тяг' },
              { icon: 'Zap', title: 'Электрика', description: 'Диагностика и ремонт электрооборудования' },
              { icon: 'Wind', title: 'Кондиционирование', description: 'Заправка и ремонт систем кондиционирования' },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Цены на услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { service: 'Замена масла и фильтров', price: 'от 2 500 ₽' },
              { service: 'Диагностика двигателя', price: 'от 1 500 ₽' },
              { service: 'Замена тормозных колодок', price: 'от 3 000 ₽' },
              { service: 'Замена амортизаторов', price: 'от 4 500 ₽' },
              { service: 'Замена свечей зажигания', price: 'от 1 200 ₽' },
              { service: 'Заправка кондиционера', price: 'от 2 000 ₽' },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-foreground">{item.service}</div>
                    <div className="text-primary font-bold">{item.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              * Точная стоимость определяется после диагностики автомобиля
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/e774dd25-46d7-444c-856a-632f89347ab3/files/cec5b3e9-1999-4fc0-8601-249da1ca9330.jpg" 
                alt="Команда" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">О нас</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Наш автосервис работает с 2009 года и за это время завоевал доверие 
                  тысяч автовладельцев. Мы специализируемся на ремонте и обслуживании 
                  автомобилей всех марок и моделей.
                </p>
                <p>
                  В нашей команде работают только квалифицированные специалисты 
                  с многолетним опытом работы. Мы используем современное оборудование 
                  и оригинальные запчасти или качественные аналоги.
                </p>
                <p>
                  Гарантируем высокое качество работ, соблюдение сроков и индивидуальный 
                  подход к каждому клиенту. На все виды работ предоставляется гарантия.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Сертифицированные мастера</div>
                    <div className="text-sm text-muted-foreground">Регулярное обучение и повышение квалификации</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Современное оборудование</div>
                    <div className="text-sm text-muted-foreground">Новейшая диагностическая техника</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Гарантия качества</div>
                    <div className="text-sm text-muted-foreground">На все работы и запчасти</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Записаться на сервис</h2>
            <p className="text-lg text-muted-foreground">
              Выберите удобное время, и мы свяжемся с вами для подтверждения
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" name="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="example@mail.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="car">Марка и модель автомобиля</Label>
                  <Input id="car" name="car" placeholder="Toyota Camry" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Тип услуги</Label>
                  <Select name="service" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="to">Техническое обслуживание</SelectItem>
                      <SelectItem value="diagnostic">Диагностика</SelectItem>
                      <SelectItem value="engine">Ремонт двигателя</SelectItem>
                      <SelectItem value="brakes">Тормозная система</SelectItem>
                      <SelectItem value="suspension">Подвеска и рулевое</SelectItem>
                      <SelectItem value="electric">Электрика</SelectItem>
                      <SelectItem value="ac">Кондиционирование</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Предпочтительная дата</Label>
                    <Input id="date" name="date" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Предпочтительное время</Label>
                    <Select name="time" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="13:00">13:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Опишите проблему или желаемые работы"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Мы всегда на связи и готовы ответить на ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold mb-2 text-foreground">Телефон</div>
                <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                <div className="text-muted-foreground">+7 (999) 765-43-21</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold mb-2 text-foreground">Адрес</div>
                <div className="text-muted-foreground">г. Москва,</div>
                <div className="text-muted-foreground">ул. Автомобильная, 123</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold mb-2 text-foreground">Режим работы</div>
                <div className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</div>
                <div className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" className="h-6 w-6 text-primary" />
              <span className="font-bold text-primary">АвтоСервис</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 АвтоСервис. Все права защищены.
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Phone" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
