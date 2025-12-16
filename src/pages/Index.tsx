import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedArtist, setSelectedArtist] = useState<string>('all');

  const genres = ['all', 'Hip-Hop', 'R&B', 'Pop', 'Electronic', 'Indie'];
  
  const artists = [
    {
      id: 1,
      name: 'Александр Волков',
      genre: 'Hip-Hop',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      achievements: 'Золотой альбом 2023, 50M+ стримов'
    },
    {
      id: 2,
      name: 'Мария Светлова',
      genre: 'Pop',
      image: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&h=400&fit=crop',
      achievements: 'Платиновый сингл, MTV Europe Award'
    },
    {
      id: 3,
      name: 'DARKWAVES',
      genre: 'Electronic',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
      achievements: 'Топ-10 Beatport, 30M+ стримов'
    },
    {
      id: 4,
      name: 'Виктория Крылова',
      genre: 'R&B',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      achievements: 'Лучший дебют 2024'
    }
  ];

  const releases = [
    {
      id: 1,
      title: 'Midnight Dreams',
      artist: 'Александр Волков',
      genre: 'Hip-Hop',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      year: 2024
    },
    {
      id: 2,
      title: 'Звёздная Пыль',
      artist: 'Мария Светлова',
      genre: 'Pop',
      cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
      year: 2024
    },
    {
      id: 3,
      title: 'Neon Nights',
      artist: 'DARKWAVES',
      genre: 'Electronic',
      cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
      year: 2023
    },
    {
      id: 4,
      title: 'Soul Revival',
      artist: 'Виктория Крылова',
      genre: 'R&B',
      cover: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop',
      year: 2024
    },
    {
      id: 5,
      title: 'Urban Poetry',
      artist: 'Александр Волков',
      genre: 'Hip-Hop',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      year: 2023
    },
    {
      id: 6,
      title: 'Summer Waves',
      artist: 'Мария Светлова',
      genre: 'Pop',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      year: 2024
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

  const filteredReleases = releases.filter(release => {
    const genreMatch = selectedGenre === 'all' || release.genre === selectedGenre;
    const artistMatch = selectedArtist === 'all' || release.artist === selectedArtist;
    return genreMatch && artistMatch;
  });

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
            <button onClick={() => scrollToSection('releases')} className="text-foreground/80 hover:text-primary transition-colors">Релизы</button>
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
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <section id="releases" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">Каталог релизов</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Послушайте наши последние работы
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Filter" size={20} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Жанр:</span>
            </div>
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedGenre(genre)}
              >
                {genre === 'all' ? 'Все' : genre}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex items-center gap-2">
              <Icon name="User" size={20} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Артист:</span>
            </div>
            {['all', ...new Set(artists.map(a => a.name))].map((artist) => (
              <Button
                key={artist}
                variant={selectedArtist === artist ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedArtist(artist)}
              >
                {artist === 'all' ? 'Все' : artist}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {filteredReleases.map((release) => (
              <Card key={release.id} className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={release.cover} 
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1 text-sm">{release.title}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{release.artist}</p>
                  <Badge variant="outline" className="text-xs">{release.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
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
