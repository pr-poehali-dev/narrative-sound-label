import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  
  const artists = [
    {
      id: 1,
      name: 'Александр Волков',
      genre: 'Hip-Hop',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/b51fe4be-fd77-4ae9-8df9-b1dc18bf9c6f.jpg',
      achievements: 'Золотой альбом 2023, 50M+ стримов'
    },
    {
      id: 2,
      name: 'Мария Светлова',
      genre: 'Pop',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/a58224a3-ba6e-4b93-84fc-7a2d4b103329.jpg',
      achievements: 'Платиновый сингл, MTV Europe Award'
    },
    {
      id: 3,
      name: 'DARKWAVES',
      genre: 'Electronic',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/18c6ee13-28f2-4aa4-ad13-4ae43c2d84a4.jpg',
      achievements: 'Топ-10 Beatport, 30M+ стримов'
    },
    {
      id: 4,
      name: 'Виктория Крылова',
      genre: 'R&B',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/67967e3d-30f6-403f-8b52-30e4d192e0c2.jpg',
      achievements: 'Лучший дебют 2024'
    },
    {
      id: 5,
      name: 'Даниил Соколов',
      genre: 'Indie',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/4a962a39-5775-4dec-84f9-d3ae07e64b7a.jpg',
      achievements: 'Лучший альтернативный проект 2023'
    },
    {
      id: 6,
      name: 'Егор «TRAPKID»',
      genre: 'Hip-Hop',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/6a85cc4a-6385-4c67-a667-1175d0a1d62a.jpg',
      achievements: '100M+ стримов, Топ-5 чарты'
    },
    {
      id: 7,
      name: 'Анна Лазарева',
      genre: 'Pop',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/ad35a8f8-539b-4d13-a88f-f39dd219ec83.jpg',
      achievements: '3x Платина, Золотой Граммофон'
    },
    {
      id: 8,
      name: 'Максим Орлов',
      genre: 'R&B',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/e84810a6-0308-4c04-9191-d2ef8f8447d4.jpg',
      achievements: 'Soul Music Award 2024'
    },
    {
      id: 9,
      name: 'NEON PULSE',
      genre: 'Electronic',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/fd3b8ac1-3542-4172-afb7-9881424b55bc.jpg',
      achievements: 'Топ-3 Beatport Techno'
    },
    {
      id: 10,
      name: 'Кристина Белова',
      genre: 'Hip-Hop',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/d810481f-1c3e-4a3b-adbf-97dfa4a64eb8.jpg',
      achievements: 'Прорыв года 2024, 40M+ стримов'
    },
    {
      id: 11,
      name: 'Артём Звездин',
      genre: 'Pop',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/8a061fa6-b606-450f-918a-0946c826931e.jpg',
      achievements: '80M+ стримов, Золотая пластинка'
    },
    {
      id: 12,
      name: 'София Романова',
      genre: 'R&B',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/1555a89b-d2a9-4e1c-933f-14f8c81a1764.jpg',
      achievements: 'Jazz Voices Award, 20M+ стримов'
    },
    {
      id: 13,
      name: 'DJ SOLAR',
      genre: 'Electronic',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/69237fb9-2dc1-4bc1-be94-8399b3f87846.jpg',
      achievements: 'Resident Ibiza, 60M+ стримов'
    },
    {
      id: 14,
      name: 'Иван Громов',
      genre: 'Indie',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/1358d43c-f14c-42c3-8e53-be33d74fe755.jpg',
      achievements: 'Rock Awards 2023, 30M+ стримов'
    },
    {
      id: 15,
      name: 'Елена Морская',
      genre: 'Pop',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/6a950593-d97f-4523-8cec-9214a352d052.jpg',
      achievements: '2x Платина, MTV Award'
    },
    {
      id: 16,
      name: 'Павел Летов',
      genre: 'Indie',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/de56dcba-98ca-4844-b47c-52abc57a2e13.jpg',
      achievements: 'Лучший bedroom pop проект'
    },
    {
      id: 17,
      name: 'Алиса Кедрова',
      genre: 'R&B',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/cf052556-7e5e-4f45-ad61-68f0aa705bee.jpg',
      achievements: 'Neo-Soul Artist 2024'
    },
    {
      id: 18,
      name: 'BEATMAKER',
      genre: 'Hip-Hop',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/e96fe7b9-bf08-4fa1-854c-08780b2bad77.jpg',
      achievements: 'Продюсер года, 120M+ стримов'
    },
    {
      id: 19,
      name: 'Вероника Лайт',
      genre: 'Electronic',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/5f6665cb-315b-4768-812e-6f6a56ff3cb9.jpg',
      achievements: 'Future Pop Award, 55M+ стримов'
    },
    {
      id: 20,
      name: 'AMBIENT',
      genre: 'Electronic',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/b71339bd-4e1c-468b-a889-bbdd20488fe1.jpg',
      achievements: 'Experimental Music Prize'
    },
    {
      id: 21,
      name: 'Николай «DRILLKID»',
      genre: 'Hip-Hop',
      image: 'https://cdn.poehali.dev/projects/82a4c57e-e259-48b5-9166-26a417c258d5/files/49904673-2a02-4897-8e12-a27c3a956584.jpg',
      achievements: 'Street Music Award, 70M+ стримов'
    }
  ];



  const services = [
    {
      icon: 'Mic2',
      title: 'Студия звукозаписи',
      description: 'Профессиональная запись и сведение треков с опытными звукорежиссёрами'
    },
    {
      icon: 'Users',
      title: 'Продюсирование',
      description: 'Полное сопровождение артиста от идеи до релиза трека'
    },
    {
      icon: 'Radio',
      title: 'Продвижение',
      description: 'Размещение на всех цифровых платформах и радиостанциях'
    },
    {
      icon: 'Video',
      title: 'Видеопродакшн',
      description: 'Создание клипов и визуального контента для артистов'
    },
    {
      icon: 'Briefcase',
      title: 'Менеджмент',
      description: 'Организация выступлений, туров и работы с медиа'
    },
    {
      icon: 'TrendingUp',
      title: 'Развитие карьеры',
      description: 'Стратегическое планирование и построение успешной карьеры'
    }
  ];



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Narrative Sound</h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground/80 hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('artists')} className="text-foreground/80 hover:text-primary transition-colors">Артисты</button>

            <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contact')}>Бесплатное прослушивание</Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="text-primary border-primary px-4 py-2">Музыкальный лейбл</Badge>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-fade-in">
            Narrative Sound
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Мы создаём музыкальные истории, которые остаются в сердцах миллионов слушателей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
              Записаться на прослушивание
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('artists')} className="text-lg px-8">
              Наши артисты
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Известных артистов</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Золотых записей</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг для развития музыкальной карьеры
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="artists" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши артисты</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Талантливые музыканты, создающие хиты
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {artists.map((artist) => (
              <Card key={artist.id} className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{artist.genre}</Badge>
                  <h4 className="text-xl font-semibold mb-2">{artist.name}</h4>
                  <p className="text-sm text-muted-foreground">{artist.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">Бесплатное прослушивание</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Приходите на прослушивание и начните свою музыкальную карьеру
          </p>
          
          <Card className="bg-card border-border p-8">
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input type="tel" placeholder="+7 (999) 123-45-67" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Жанр</label>
                <Input placeholder="Hip-Hop, Pop, R&B..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Расскажите о себе</label>
                <Textarea placeholder="Опыт, достижения, ссылки на работы..." rows={4} />
              </div>
              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <div className="flex justify-center gap-8 mb-6">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="text-primary" />
                <span>Москва, ул. Музыкальная, 15</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon">
                <Icon name="Instagram" />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Youtube" />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Music" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Narrative Sound. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;