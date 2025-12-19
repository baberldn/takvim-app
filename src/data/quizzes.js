export const quizzes = [
  // Hafta 1
  {
    id: 'quiz-1.1',
    lessonId: '1.1',
    title: 'Giriş & Kurulum Testi',
    description: 'React Native kurulumu ve temel kavramlar',
    questions: [
      {
        id: 'q1.1-1',
        question: 'React Native hangi dili kullanır?',
        options: ['Java', 'Swift', 'JavaScript', 'Kotlin'],
        correctAnswer: 2
      },
      {
        id: 'q1.1-2',
        question: 'Expo nedir?',
        options: [
          'Bir programlama dili',
          'React Native için geliştirme platformu',
          'Bir veritabanı',
          'Bir tasarım aracı'
        ],
        correctAnswer: 1
      },
      {
        id: 'q1.1-3',
        question: 'Hot Reload ne işe yarar?',
        options: [
          'Uygulamayı yeniden başlatır',
          'Kodu değiştirdiğinizde anında güncelleme sağlar',
          'Veritabanını temizler',
          'Cache\'i siler'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-1.2',
    lessonId: '1.2',
    title: 'Core Components Testi',
    description: 'Temel React Native bileşenleri',
    questions: [
      {
        id: 'q1.2-1',
        question: 'React Native\'de temel görünüm bileşeni hangisidir?',
        options: ['<div>', '<View>', '<Container>', '<Box>'],
        correctAnswer: 1
      },
      {
        id: 'q1.2-2',
        question: 'Metin göstermek için hangi bileşen kullanılır?',
        options: ['<p>', '<span>', '<Text>', '<Label>'],
        correctAnswer: 2
      },
      {
        id: 'q1.2-3',
        question: 'FlatList ne için kullanılır?',
        options: [
          'Resim göstermek',
          'Uzun listeler için optimize edilmiş liste bileşeni',
          'Buton oluşturmak',
          'Animasyon yapmak'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-1.3',
    lessonId: '1.3',
    title: 'Styling & Flexbox Testi',
    description: 'Stil ve layout yönetimi',
    questions: [
      {
        id: 'q1.3-1',
        question: 'StyleSheet.create() ne için kullanılır?',
        options: [
          'Yeni bir sayfa oluşturmak',
          'Stil nesneleri oluşturmak ve optimize etmek',
          'Veritabanı bağlantısı kurmak',
          'API çağrısı yapmak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q1.3-2',
        question: 'Flexbox\'ta varsayılan flexDirection değeri nedir (React Native)?',
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
        correctAnswer: 1
      },
      {
        id: 'q1.3-3',
        question: 'justifyContent: "center" ne yapar?',
        options: [
          'Elemanları yatay eksende ortalar',
          'Elemanları ana eksen boyunca ortalar',
          'Elemanları sağa hizalar',
          'Elemanları üste hizalar'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-1.4',
    lessonId: '1.4',
    title: 'Platform-Specific Testi',
    description: 'Platform bazlı kod yazma',
    questions: [
      {
        id: 'q1.4-1',
        question: 'Platform.OS ne döndürür?',
        options: [
          'Cihaz modelini',
          '"ios" veya "android" string değeri',
          'Ekran boyutunu',
          'Batarya seviyesini'
        ],
        correctAnswer: 1
      },
      {
        id: 'q1.4-2',
        question: 'SafeAreaView ne için kullanılır?',
        options: [
          'Güvenli veri saklamak',
          'iOS\'ta notch ve home indicator alanından kaçınmak',
          'Şifre saklamak',
          'Ağ güvenliği sağlamak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q1.4-3',
        question: 'Platform-specific dosya uzantısı hangisidir?',
        options: [
          '.mobile.js',
          '.ios.js ve .android.js',
          '.native.js',
          '.platform.js'
        ],
        correctAnswer: 1
      }
    ]
  },
  // Hafta 2
  {
    id: 'quiz-2.1',
    lessonId: '2.1',
    title: 'React Navigation Testi',
    description: 'Sayfa yönetimi ve navigasyon',
    questions: [
      {
        id: 'q2.1-1',
        question: 'Stack Navigator ne için kullanılır?',
        options: [
          'Tab menüsü oluşturmak',
          'Drawer menüsü oluşturmak',
          'Sayfa geçişleri için yığın yapısı oluşturmak',
          'Modal göstermek'
        ],
        correctAnswer: 2
      },
      {
        id: 'q2.1-2',
        question: 'navigation.navigate() ne yapar?',
        options: [
          'Uygulamayı kapatır',
          'Belirtilen ekrana geçiş yapar',
          'Veri kaydeder',
          'Stil uygular'
        ],
        correctAnswer: 1
      },
      {
        id: 'q2.1-3',
        question: 'Ekranlar arası veri aktarımı nasıl yapılır?',
        options: [
          'Global değişkenlerle',
          'route.params ile',
          'localStorage ile',
          'CSS ile'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-2.2',
    lessonId: '2.2',
    title: 'Tab & Drawer Testi',
    description: 'Alt menü ve yan menü navigasyonu',
    questions: [
      {
        id: 'q2.2-1',
        question: 'Bottom Tab Navigator ne oluşturur?',
        options: [
          'Üst menü',
          'Alt menü çubuğu',
          'Yan menü',
          'Popup menü'
        ],
        correctAnswer: 1
      },
      {
        id: 'q2.2-2',
        question: 'Drawer Navigator ne oluşturur?',
        options: [
          'Alt menü',
          'Yandan açılan menü',
          'Üst menü',
          'Floating buton'
        ],
        correctAnswer: 1
      },
      {
        id: 'q2.2-3',
        question: 'Nested navigators ne demek?',
        options: [
          'Tek navigator kullanmak',
          'Navigator içinde navigator kullanmak',
          'Navigator kullanmamak',
          'Sadece Stack kullanmak'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-2.3',
    lessonId: '2.3',
    title: 'Custom Components Testi',
    description: 'Yeniden kullanılabilir bileşenler',
    questions: [
      {
        id: 'q2.3-1',
        question: 'Props nedir?',
        options: [
          'Component\'in iç durumu',
          'Parent\'tan child\'a aktarılan veriler',
          'CSS stilleri',
          'API yanıtları'
        ],
        correctAnswer: 1
      },
      {
        id: 'q2.3-2',
        question: 'Reusable component ne demek?',
        options: [
          'Sadece bir kez kullanılan bileşen',
          'Farklı yerlerde tekrar kullanılabilen bileşen',
          'Silinmiş bileşen',
          'Gizli bileşen'
        ],
        correctAnswer: 1
      },
      {
        id: 'q2.3-3',
        question: 'children prop ne için kullanılır?',
        options: [
          'Renk belirlemek',
          'Component içine yerleştirilen içeriği almak',
          'ID belirlemek',
          'Animasyon yapmak'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-2.4',
    lessonId: '2.4',
    title: 'Animasyonlar Testi',
    description: 'React Native animasyonları',
    questions: [
      {
        id: 'q2.4-1',
        question: 'Animated API ne için kullanılır?',
        options: [
          'Veri saklamak',
          'Performanslı animasyonlar oluşturmak',
          'API çağrısı yapmak',
          'Stil oluşturmak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q2.4-2',
        question: 'Animated.timing() ne yapar?',
        options: [
          'Zamanı gösterir',
          'Zamana dayalı animasyon oluşturur',
          'Saati ayarlar',
          'Gecikme ekler'
        ],
        correctAnswer: 1
      },
      {
        id: 'q2.4-3',
        question: 'useNativeDriver: true ne sağlar?',
        options: [
          'Daha yavaş animasyon',
          'Native thread\'de çalışarak performans artışı',
          'Daha renkli animasyon',
          'Ses efekti'
        ],
        correctAnswer: 1
      }
    ]
  },
  // Hafta 3
  {
    id: 'quiz-3.1',
    lessonId: '3.1',
    title: 'AsyncStorage Testi',
    description: 'Yerel veri saklama',
    questions: [
      {
        id: 'q3.1-1',
        question: 'AsyncStorage ne için kullanılır?',
        options: [
          'Anlık mesajlaşma',
          'Kalıcı yerel veri depolama',
          'Görüntü işleme',
          'Ses kaydetme'
        ],
        correctAnswer: 1
      },
      {
        id: 'q3.1-2',
        question: 'AsyncStorage.setItem() ne döndürür?',
        options: [
          'String',
          'Number',
          'Promise',
          'Object'
        ],
        correctAnswer: 2
      },
      {
        id: 'q3.1-3',
        question: 'AsyncStorage hangi veri tipini saklar?',
        options: [
          'Sadece number',
          'Sadece string',
          'Sadece object',
          'Her türlü veri'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-3.2',
    lessonId: '3.2',
    title: 'API Entegrasyonu Testi',
    description: 'Backend ile iletişim',
    questions: [
      {
        id: 'q3.2-1',
        question: 'fetch() fonksiyonu ne döndürür?',
        options: ['String', 'Object', 'Promise', 'Array'],
        correctAnswer: 2
      },
      {
        id: 'q3.2-2',
        question: 'async/await ne için kullanılır?',
        options: [
          'CSS animasyonları',
          'Asenkron işlemleri senkron gibi yazmak',
          'Veritabanı oluşturmak',
          'Component oluşturmak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q3.2-3',
        question: 'Loading state ne için kullanılır?',
        options: [
          'Veri yüklenirken kullanıcıya bilgi vermek',
          'Uygulamayı hızlandırmak',
          'Cache\'lemek',
          'Stil uygulamak'
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'quiz-3.3',
    lessonId: '3.3',
    title: 'State Management Testi',
    description: 'Global state yönetimi',
    questions: [
      {
        id: 'q3.3-1',
        question: 'useState hook\'u ne döndürür?',
        options: [
          'Sadece state değeri',
          'Sadece setter fonksiyonu',
          'State değeri ve setter fonksiyonu içeren dizi',
          'Bir promise'
        ],
        correctAnswer: 2
      },
      {
        id: 'q3.3-2',
        question: 'Context API ne için kullanılır?',
        options: [
          'Stil oluşturmak',
          'Prop drilling\'den kaçınarak global state paylaşmak',
          'Animasyon yapmak',
          'API çağrısı yapmak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q3.3-3',
        question: 'useReducer ne zaman tercih edilir?',
        options: [
          'Basit state için',
          'Karmaşık state mantığı için',
          'Stil için',
          'Navigasyon için'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-3.4',
    lessonId: '3.4',
    title: 'Forms & Validation Testi',
    description: 'Form oluşturma ve doğrulama',
    questions: [
      {
        id: 'q3.4-1',
        question: 'TextInput bileşeni ne için kullanılır?',
        options: [
          'Metin göstermek',
          'Kullanıcıdan metin girişi almak',
          'Buton oluşturmak',
          'Resim göstermek'
        ],
        correctAnswer: 1
      },
      {
        id: 'q3.4-2',
        question: 'KeyboardAvoidingView ne işe yarar?',
        options: [
          'Klavyeyi gizlemek',
          'Klavye açıldığında içeriği yukarı kaydırmak',
          'Klavye rengini değiştirmek',
          'Klavyeyi devre dışı bırakmak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q3.4-3',
        question: 'Form validation ne zaman yapılmalı?',
        options: [
          'Sadece submit\'te',
          'Hem anlık hem submit\'te',
          'Hiçbir zaman',
          'Sadece sayfa yüklendiğinde'
        ],
        correctAnswer: 1
      }
    ]
  },
  // Hafta 4
  {
    id: 'quiz-4.1',
    lessonId: '4.1',
    title: 'Cihaz Özellikleri Testi',
    description: 'Kamera, galeri ve konum',
    questions: [
      {
        id: 'q4.1-1',
        question: 'expo-image-picker ne için kullanılır?',
        options: [
          'Resim düzenlemek',
          'Kamera veya galeriden resim seçmek',
          'Resim filtrelemek',
          'Resim sıkıştırmak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q4.1-2',
        question: 'Konum izni neden gerekli?',
        options: [
          'Uygulama hızı için',
          'Kullanıcı gizliliği ve güvenliği için',
          'Tasarım için',
          'Cache için'
        ],
        correctAnswer: 1
      },
      {
        id: 'q4.1-3',
        question: 'Cihaz özelliklerine erişim async midir?',
        options: [
          'Hayır, senkron',
          'Evet, asenkron (Promise tabanlı)',
          'Bazen',
          'Cihaza göre değişir'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-4.2',
    lessonId: '4.2',
    title: 'Bildirimler Testi',
    description: 'Push ve local notifications',
    questions: [
      {
        id: 'q4.2-1',
        question: 'Local notification ile push notification farkı nedir?',
        options: [
          'Renk farkı',
          'Local cihazda, push sunucudan tetiklenir',
          'Ses farkı',
          'Fark yoktur'
        ],
        correctAnswer: 1
      },
      {
        id: 'q4.2-2',
        question: 'Push notification için ne gerekli?',
        options: [
          'Sadece uygulama',
          'Backend sunucu ve push servisi',
          'Sadece internet',
          'Sadece izin'
        ],
        correctAnswer: 1
      },
      {
        id: 'q4.2-3',
        question: 'Bildirim izni ne zaman istenmeli?',
        options: [
          'Uygulama açıldığında hemen',
          'Kullanıcı ilgili özelliği kullanmak istediğinde',
          'Hiçbir zaman',
          'Rastgele'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-4.3',
    lessonId: '4.3',
    title: 'Build & Deploy Testi',
    description: 'Uygulama yayınlama',
    questions: [
      {
        id: 'q4.3-1',
        question: 'EAS Build ne için kullanılır?',
        options: [
          'Kod yazmak',
          'Expo uygulamalarını build etmek',
          'Test yazmak',
          'Tasarım yapmak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q4.3-2',
        question: 'App Store\'a yüklemek için ne gerekli?',
        options: [
          'Sadece APK',
          'Apple Developer hesabı ve sertifikalar',
          'Sadece kaynak kod',
          'Sadece icon'
        ],
        correctAnswer: 1
      },
      {
        id: 'q4.3-3',
        question: 'APK ve AAB farkı nedir?',
        options: [
          'Aynı şey',
          'AAB Google Play için optimize edilmiş format',
          'APK daha yeni',
          'Sadece boyut farkı'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'quiz-4.4',
    lessonId: '4.4',
    title: 'Final Proje Testi',
    description: 'Tüm konuların değerlendirmesi',
    questions: [
      {
        id: 'q4.4-1',
        question: 'Performans optimizasyonu için ne yapılmalı?',
        options: [
          'Daha fazla console.log eklemek',
          'Gereksiz re-render\'ları önlemek ve memo kullanmak',
          'Daha fazla state eklemek',
          'Inline stil kullanmak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q4.4-2',
        question: 'try-catch bloğu ne için kullanılır?',
        options: [
          'Döngü oluşturmak',
          'Hata yakalama ve yönetimi',
          'Stil uygulamak',
          'Navigasyon yapmak'
        ],
        correctAnswer: 1
      },
      {
        id: 'q4.4-3',
        question: 'React Native ile hangi platformlar için uygulama geliştirebilirsiniz?',
        options: [
          'Sadece iOS',
          'Sadece Android',
          'iOS ve Android',
          'Sadece Web'
        ],
        correctAnswer: 2
      }
    ]
  }
]
