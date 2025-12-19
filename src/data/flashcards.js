export const flashcards = [
  // React Native Temelleri
  {
    id: 'fc-1',
    category: 'Temel Kavramlar',
    front: 'React Native nedir?',
    back: 'JavaScript kullanarak iOS ve Android için native mobil uygulamalar geliştirmeye yarayan bir framework.'
  },
  {
    id: 'fc-2',
    category: 'Temel Kavramlar',
    front: 'JSX nedir?',
    back: 'JavaScript XML - JavaScript içinde HTML benzeri sözdizimi kullanmamızı sağlayan bir syntax extension.'
  },
  {
    id: 'fc-3',
    category: 'Temel Kavramlar',
    front: 'Expo nedir?',
    back: 'React Native için geliştirme sürecini kolaylaştıran, build ve deploy işlemlerini yöneten bir platform.'
  },
  {
    id: 'fc-4',
    category: 'Temel Kavramlar',
    front: 'Hot Reload vs Fast Refresh farkı?',
    back: 'Hot Reload: Sadece değişen kodu günceller. Fast Refresh: State\'i koruyarak componenti yeniden render eder.'
  },
  {
    id: 'fc-5',
    category: 'Temel Kavramlar',
    front: 'Native vs Hybrid uygulama farkı?',
    back: 'Native: Platform-specific dilde yazılır (Swift/Kotlin). Hybrid: Tek codebase ile birden fazla platform (React Native).'
  },

  // Components
  {
    id: 'fc-6',
    category: 'Components',
    front: '<View> ne işe yarar?',
    back: 'Web\'deki <div> gibi, temel container component. Flexbox layout için kullanılır.'
  },
  {
    id: 'fc-7',
    category: 'Components',
    front: '<Text> neden zorunlu?',
    back: 'React Native\'de metin sadece <Text> içinde gösterilebilir. Direkt string render edilemez.'
  },
  {
    id: 'fc-8',
    category: 'Components',
    front: 'FlatList vs ScrollView farkı?',
    back: 'FlatList: Lazy loading yapar, büyük listeler için performanslı. ScrollView: Tüm içeriği bir anda render eder.'
  },
  {
    id: 'fc-9',
    category: 'Components',
    front: 'TouchableOpacity ne yapar?',
    back: 'Dokunulduğunda opacity\'si azalarak görsel feedback veren, tıklanabilir wrapper component.'
  },
  {
    id: 'fc-10',
    category: 'Components',
    front: 'SafeAreaView ne işe yarar?',
    back: 'iOS\'ta notch, home indicator gibi sistem alanlarından kaçınarak içeriği güvenli alana yerleştirir.'
  },

  // Styling
  {
    id: 'fc-11',
    category: 'Styling',
    front: 'StyleSheet.create() avantajı?',
    back: 'Stilleri bir kez oluşturur ve cache\'ler. Her render\'da yeni obje oluşturmaktan kaçınır, performans artışı sağlar.'
  },
  {
    id: 'fc-12',
    category: 'Styling',
    front: 'RN\'de flexDirection default değeri?',
    back: 'column (Web CSS\'de row). Bu yüzden elemanlar varsayılan olarak dikey sıralanır.'
  },
  {
    id: 'fc-13',
    category: 'Styling',
    front: 'justifyContent vs alignItems?',
    back: 'justifyContent: Ana eksen (flexDirection yönü). alignItems: Çapraz eksen (dik yön).'
  },
  {
    id: 'fc-14',
    category: 'Styling',
    front: 'flex: 1 ne yapar?',
    back: 'Component\'in mevcut alanı tamamen kaplamasını sağlar. Birden fazla component\'te oran belirler.'
  },
  {
    id: 'fc-15',
    category: 'Styling',
    front: 'Dimensions API ne için?',
    back: 'Cihazın ekran genişlik ve yüksekliğini almak için kullanılır. Responsive tasarım için gerekli.'
  },

  // State & Props
  {
    id: 'fc-16',
    category: 'State & Props',
    front: 'State vs Props farkı?',
    back: 'State: Component\'in kendi içinde yönettiği değişebilir veri. Props: Parent\'tan gelen, değiştirilemez veri.'
  },
  {
    id: 'fc-17',
    category: 'State & Props',
    front: 'useState ne döndürür?',
    back: '[currentValue, setterFunction] - Mevcut değer ve onu güncelleyen fonksiyon içeren bir array.'
  },
  {
    id: 'fc-18',
    category: 'State & Props',
    front: 'useEffect dependency array boşsa?',
    back: 'Effect sadece component mount olduğunda (ilk render) çalışır. componentDidMount gibi.'
  },
  {
    id: 'fc-19',
    category: 'State & Props',
    front: 'useEffect cleanup function ne zaman çalışır?',
    back: 'Component unmount olduğunda veya dependency değiştiğinde (yeni effect çalışmadan önce).'
  },
  {
    id: 'fc-20',
    category: 'State & Props',
    front: 'Prop drilling nedir?',
    back: 'Props\'u birçok component seviyesinden geçirmek. Context API veya state management ile çözülür.'
  },

  // Navigation
  {
    id: 'fc-21',
    category: 'Navigation',
    front: 'Stack Navigator ne yapar?',
    back: 'Sayfaları üst üste yığar. navigate() ile yeni sayfa ekler, goBack() ile geri döner.'
  },
  {
    id: 'fc-22',
    category: 'Navigation',
    front: 'Tab Navigator türleri?',
    back: 'Bottom Tabs (alt menü), Top Tabs (üst tab bar), Material Bottom/Top Tabs (material design).'
  },
  {
    id: 'fc-23',
    category: 'Navigation',
    front: 'navigation.navigate() vs push() farkı?',
    back: 'navigate(): Aynı route varsa ona gider. push(): Her zaman yeni instance ekler (stack\'e).'
  },
  {
    id: 'fc-24',
    category: 'Navigation',
    front: 'Route params nasıl alınır?',
    back: 'route.params ile. Örnek: const { userId } = route.params;'
  },
  {
    id: 'fc-25',
    category: 'Navigation',
    front: 'Nested navigators ne demek?',
    back: 'Navigator içinde navigator kullanmak. Örn: Stack içinde Tab, Tab içinde Stack.'
  },

  // API & Data
  {
    id: 'fc-26',
    category: 'API & Data',
    front: 'fetch() ne döndürür?',
    back: 'Promise döndürür. async/await veya .then() ile kullanılır.'
  },
  {
    id: 'fc-27',
    category: 'API & Data',
    front: 'AsyncStorage özellikleri?',
    back: 'Key-value şeklinde string saklar. Asenkron çalışır. Şifrelenmemiş, hassas veri için uygun değil.'
  },
  {
    id: 'fc-28',
    category: 'API & Data',
    front: 'try-catch ne için kullanılır?',
    back: 'Hata yakalama. try bloğunda hata olursa catch bloğu çalışır. API çağrılarında önemli.'
  },
  {
    id: 'fc-29',
    category: 'API & Data',
    front: 'Loading state neden önemli?',
    back: 'Kullanıcıya veri yüklenirken feedback verir. UX için kritik. Boş ekran/hata önler.'
  },
  {
    id: 'fc-30',
    category: 'API & Data',
    front: 'JSON.stringify() vs JSON.parse()?',
    back: 'stringify: Object → String. parse: String → Object. AsyncStorage için gerekli.'
  },

  // Animations
  {
    id: 'fc-31',
    category: 'Animations',
    front: 'Animated API temel metodları?',
    back: 'Animated.timing(), Animated.spring(), Animated.decay() - Farklı animasyon türleri.'
  },
  {
    id: 'fc-32',
    category: 'Animations',
    front: 'useNativeDriver: true ne sağlar?',
    back: 'Animasyonları native thread\'de çalıştırır. 60fps performans. Sadece transform ve opacity için.'
  },
  {
    id: 'fc-33',
    category: 'Animations',
    front: 'Animated.Value nedir?',
    back: 'Animasyon değerini tutan özel bir class. useState yerine bunu kullanırız animasyonlarda.'
  },
  {
    id: 'fc-34',
    category: 'Animations',
    front: 'interpolate() ne işe yarar?',
    back: 'Bir değer aralığını başka bir aralığa dönüştürür. Örn: scroll 0-100 → opacity 0-1.'
  },
  {
    id: 'fc-35',
    category: 'Animations',
    front: 'LayoutAnimation ne yapar?',
    back: 'Layout değişikliklerini otomatik animasyonlar. configureNext() ile kullanılır.'
  },

  // Platform & Device
  {
    id: 'fc-36',
    category: 'Platform',
    front: 'Platform.OS değerleri?',
    back: '"ios", "android", "web" - Çalışılan platformu string olarak döndürür.'
  },
  {
    id: 'fc-37',
    category: 'Platform',
    front: 'Platform-specific dosya uzantısı?',
    back: '.ios.js ve .android.js - React Native otomatik olarak doğru dosyayı seçer.'
  },
  {
    id: 'fc-38',
    category: 'Platform',
    front: 'StatusBar nasıl özelleştirilir?',
    back: '<StatusBar barStyle="light-content" backgroundColor="#000" /> component\'i ile.'
  },
  {
    id: 'fc-39',
    category: 'Platform',
    front: 'Keyboard.dismiss() ne yapar?',
    back: 'Açık klavyeyi kapatır. TouchableWithoutFeedback ile sarılarak kullanılabilir.'
  },
  {
    id: 'fc-40',
    category: 'Platform',
    front: 'KeyboardAvoidingView ne işe yarar?',
    back: 'Klavye açıldığında içeriği yukarı kaydırarak input\'ların görünür kalmasını sağlar.'
  },

  // Performance
  {
    id: 'fc-41',
    category: 'Performance',
    front: 'React.memo() ne yapar?',
    back: 'Component\'i memoize eder. Props değişmediyse re-render önler.'
  },
  {
    id: 'fc-42',
    category: 'Performance',
    front: 'useMemo vs useCallback farkı?',
    back: 'useMemo: Değer memoize eder. useCallback: Fonksiyon memoize eder.'
  },
  {
    id: 'fc-43',
    category: 'Performance',
    front: 'FlatList optimizasyon props\'ları?',
    back: 'keyExtractor, getItemLayout, windowSize, maxToRenderPerBatch, initialNumToRender'
  },
  {
    id: 'fc-44',
    category: 'Performance',
    front: 'Neden inline style kötü?',
    back: 'Her render\'da yeni object oluşturur. StyleSheet.create() ile bir kez oluşturup referans verin.'
  },
  {
    id: 'fc-45',
    category: 'Performance',
    front: 'Image optimizasyonu nasıl?',
    back: 'resizeMode kullan, boyutları belirt, cache mekanizması kullan (FastImage gibi).'
  },

  // Build & Deploy
  {
    id: 'fc-46',
    category: 'Build & Deploy',
    front: 'EAS Build nedir?',
    back: 'Expo Application Services - Cloud\'da iOS ve Android build\'leri oluşturur.'
  },
  {
    id: 'fc-47',
    category: 'Build & Deploy',
    front: 'APK vs AAB farkı?',
    back: 'APK: Standart Android package. AAB: Google Play için optimize, daha küçük boyut.'
  },
  {
    id: 'fc-48',
    category: 'Build & Deploy',
    front: 'iOS build için ne gerekli?',
    back: 'Apple Developer hesabı ($99/yıl), macOS, Xcode, sertifikalar ve provisioning profiles.'
  },
  {
    id: 'fc-49',
    category: 'Build & Deploy',
    front: 'app.json/app.config.js ne içerir?',
    back: 'Uygulama adı, version, icon, splash screen, permissions, build ayarları.'
  },
  {
    id: 'fc-50',
    category: 'Build & Deploy',
    front: 'OTA update nedir?',
    back: 'Over-The-Air update - Store onayı olmadan JavaScript bundle güncellemesi yapabilme.'
  }
]

export const flashcardCategories = [
  'Temel Kavramlar',
  'Components',
  'Styling',
  'State & Props',
  'Navigation',
  'API & Data',
  'Animations',
  'Platform',
  'Performance',
  'Build & Deploy'
]
