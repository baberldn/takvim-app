export const resources = [
  {
    category: 'documentation',
    title: 'Dokümantasyon',
    icon: 'book',
    items: [
      {
        id: 'rn-docs',
        name: 'React Native Docs',
        description: 'Resmi React Native dokümantasyonu',
        url: 'https://reactnative.dev/docs/getting-started',
        tags: ['resmi', 'temel']
      },
      {
        id: 'expo-docs',
        name: 'Expo Docs',
        description: 'Expo platform dokümantasyonu',
        url: 'https://docs.expo.dev/',
        tags: ['expo', 'temel']
      },
      {
        id: 'react-docs',
        name: 'React Docs',
        description: 'React temel dokümantasyonu',
        url: 'https://react.dev/',
        tags: ['react', 'temel']
      },
      {
        id: 'rn-navigation',
        name: 'React Navigation',
        description: 'Navigasyon kütüphanesi dokümantasyonu',
        url: 'https://reactnavigation.org/docs/getting-started',
        tags: ['navigasyon']
      },
      {
        id: 'typescript-rn',
        name: 'TypeScript + RN',
        description: 'React Native ile TypeScript kullanımı',
        url: 'https://reactnative.dev/docs/typescript',
        tags: ['typescript']
      }
    ]
  },
  {
    category: 'icons',
    title: 'Icon Kütüphaneleri',
    icon: 'icons',
    items: [
      {
        id: 'expo-icons',
        name: 'Expo Vector Icons',
        description: '3000+ icon, Expo ile entegre',
        url: 'https://icons.expo.fyi/',
        tags: ['expo', 'popüler']
      },
      {
        id: 'react-native-vector-icons',
        name: 'React Native Vector Icons',
        description: 'En popüler icon kütüphanesi',
        url: 'https://oblador.github.io/react-native-vector-icons/',
        tags: ['popüler']
      },
      {
        id: 'phosphor-icons',
        name: 'Phosphor Icons',
        description: 'Esnek ve tutarlı icon seti',
        url: 'https://phosphoricons.com/',
        tags: ['modern']
      },
      {
        id: 'heroicons',
        name: 'Heroicons',
        description: 'Tailwind ekibinden güzel iconlar',
        url: 'https://heroicons.com/',
        tags: ['tailwind']
      },
      {
        id: 'feather-icons',
        name: 'Feather Icons',
        description: 'Minimalist ve şık iconlar',
        url: 'https://feathericons.com/',
        tags: ['minimalist']
      },
      {
        id: 'lucide',
        name: 'Lucide Icons',
        description: 'Feather fork, daha fazla icon',
        url: 'https://lucide.dev/',
        tags: ['modern', 'popüler']
      }
    ]
  },
  {
    category: 'animations',
    title: 'Animasyon Kütüphaneleri',
    icon: 'animation',
    items: [
      {
        id: 'reanimated',
        name: 'React Native Reanimated',
        description: 'Yüksek performanslı animasyonlar',
        url: 'https://docs.swmansion.com/react-native-reanimated/',
        tags: ['performans', 'popüler']
      },
      {
        id: 'lottie',
        name: 'Lottie React Native',
        description: 'After Effects animasyonlarını çalıştırın',
        url: 'https://github.com/lottie-react-native/lottie-react-native',
        tags: ['after effects', 'popüler']
      },
      {
        id: 'moti',
        name: 'Moti',
        description: 'Reanimated üzerine kurulu kolay animasyonlar',
        url: 'https://moti.fyi/',
        tags: ['kolay', 'modern']
      },
      {
        id: 'gesture-handler',
        name: 'Gesture Handler',
        description: 'Native gesture yönetimi',
        url: 'https://docs.swmansion.com/react-native-gesture-handler/',
        tags: ['gesture', 'temel']
      },
      {
        id: 'skia',
        name: 'React Native Skia',
        description: '2D grafik ve animasyonlar',
        url: 'https://shopify.github.io/react-native-skia/',
        tags: ['grafik', 'ileri']
      },
      {
        id: 'lottiefiles',
        name: 'LottieFiles',
        description: 'Ücretsiz Lottie animasyonları',
        url: 'https://lottiefiles.com/',
        tags: ['ücretsiz', 'kaynak']
      }
    ]
  },
  {
    category: 'ui-libraries',
    title: 'UI Kütüphaneleri',
    icon: 'ui',
    items: [
      {
        id: 'react-native-paper',
        name: 'React Native Paper',
        description: 'Material Design komponenetleri',
        url: 'https://reactnativepaper.com/',
        tags: ['material', 'popüler']
      },
      {
        id: 'native-base',
        name: 'NativeBase',
        description: 'Kapsamlı UI kit',
        url: 'https://nativebase.io/',
        tags: ['kapsamlı']
      },
      {
        id: 'tamagui',
        name: 'Tamagui',
        description: 'Universal UI kit, web + native',
        url: 'https://tamagui.dev/',
        tags: ['universal', 'modern']
      },
      {
        id: 'rn-elements',
        name: 'React Native Elements',
        description: 'Cross-platform UI toolkit',
        url: 'https://reactnativeelements.com/',
        tags: ['popüler']
      },
      {
        id: 'gluestack',
        name: 'Gluestack UI',
        description: 'Modern ve erişilebilir UI',
        url: 'https://gluestack.io/',
        tags: ['modern', 'erişilebilir']
      },
      {
        id: 'shoutem-ui',
        name: 'Shoutem UI',
        description: 'Özelleştirilebilir UI kit',
        url: 'https://shoutem.github.io/docs/ui-toolkit/introduction',
        tags: ['özelleştirilebilir']
      }
    ]
  },
  {
    category: 'state-management',
    title: 'State Yönetimi',
    icon: 'state',
    items: [
      {
        id: 'zustand',
        name: 'Zustand',
        description: 'Basit ve hızlı state yönetimi',
        url: 'https://zustand-demo.pmnd.rs/',
        tags: ['basit', 'popüler']
      },
      {
        id: 'redux-toolkit',
        name: 'Redux Toolkit',
        description: 'Redux modern yaklaşım',
        url: 'https://redux-toolkit.js.org/',
        tags: ['redux', 'popüler']
      },
      {
        id: 'jotai',
        name: 'Jotai',
        description: 'Atomic state yönetimi',
        url: 'https://jotai.org/',
        tags: ['atomic', 'modern']
      },
      {
        id: 'tanstack-query',
        name: 'TanStack Query',
        description: 'Server state yönetimi',
        url: 'https://tanstack.com/query/latest',
        tags: ['api', 'popüler']
      },
      {
        id: 'mobx',
        name: 'MobX',
        description: 'Reactive state yönetimi',
        url: 'https://mobx.js.org/',
        tags: ['reactive']
      },
      {
        id: 'legend-state',
        name: 'Legend State',
        description: 'Süper hızlı reactive state',
        url: 'https://legendapp.com/open-source/state/',
        tags: ['performans', 'modern']
      }
    ]
  },
  {
    category: 'forms',
    title: 'Form Yönetimi',
    icon: 'form',
    items: [
      {
        id: 'react-hook-form',
        name: 'React Hook Form',
        description: 'Performanslı form yönetimi',
        url: 'https://react-hook-form.com/',
        tags: ['popüler', 'performans']
      },
      {
        id: 'formik',
        name: 'Formik',
        description: 'Form builder ve validation',
        url: 'https://formik.org/',
        tags: ['popüler']
      },
      {
        id: 'yup',
        name: 'Yup',
        description: 'Schema validation',
        url: 'https://github.com/jquense/yup',
        tags: ['validation']
      },
      {
        id: 'zod',
        name: 'Zod',
        description: 'TypeScript-first validation',
        url: 'https://zod.dev/',
        tags: ['typescript', 'modern']
      }
    ]
  },
  {
    category: 'storage',
    title: 'Veri Saklama',
    icon: 'storage',
    items: [
      {
        id: 'async-storage',
        name: 'AsyncStorage',
        description: 'Basit key-value depolama',
        url: 'https://react-native-async-storage.github.io/async-storage/',
        tags: ['temel', 'basit']
      },
      {
        id: 'mmkv',
        name: 'MMKV',
        description: 'Süper hızlı key-value storage',
        url: 'https://github.com/mrousavy/react-native-mmkv',
        tags: ['performans', 'popüler']
      },
      {
        id: 'watermelondb',
        name: 'WatermelonDB',
        description: 'Reactive ve hızlı veritabanı',
        url: 'https://watermelondb.dev/',
        tags: ['veritabanı', 'reactive']
      },
      {
        id: 'realm',
        name: 'Realm',
        description: 'MongoDB mobile database',
        url: 'https://www.mongodb.com/docs/realm/sdk/react-native/',
        tags: ['veritabanı', 'mongodb']
      },
      {
        id: 'expo-secure-store',
        name: 'Expo SecureStore',
        description: 'Güvenli veri saklama',
        url: 'https://docs.expo.dev/versions/latest/sdk/securestore/',
        tags: ['güvenlik', 'expo']
      }
    ]
  },
  {
    category: 'networking',
    title: 'API & Networking',
    icon: 'network',
    items: [
      {
        id: 'axios',
        name: 'Axios',
        description: 'HTTP client',
        url: 'https://axios-http.com/',
        tags: ['popüler', 'http']
      },
      {
        id: 'ky',
        name: 'Ky',
        description: 'Modern fetch wrapper',
        url: 'https://github.com/sindresorhus/ky',
        tags: ['modern', 'hafif']
      },
      {
        id: 'socket-io',
        name: 'Socket.IO Client',
        description: 'Real-time WebSocket',
        url: 'https://socket.io/docs/v4/client-api/',
        tags: ['websocket', 'realtime']
      },
      {
        id: 'graphql-request',
        name: 'GraphQL Request',
        description: 'Minimal GraphQL client',
        url: 'https://github.com/jasonkuhrt/graphql-request',
        tags: ['graphql']
      },
      {
        id: 'apollo-client',
        name: 'Apollo Client',
        description: 'Tam özellikli GraphQL',
        url: 'https://www.apollographql.com/docs/react/',
        tags: ['graphql', 'kapsamlı']
      }
    ]
  },
  {
    category: 'testing',
    title: 'Test Araçları',
    icon: 'test',
    items: [
      {
        id: 'jest',
        name: 'Jest',
        description: 'JavaScript test framework',
        url: 'https://jestjs.io/',
        tags: ['unit test', 'popüler']
      },
      {
        id: 'testing-library',
        name: 'React Native Testing Library',
        description: 'Component testing',
        url: 'https://callstack.github.io/react-native-testing-library/',
        tags: ['component', 'popüler']
      },
      {
        id: 'detox',
        name: 'Detox',
        description: 'E2E testing',
        url: 'https://wix.github.io/Detox/',
        tags: ['e2e']
      },
      {
        id: 'maestro',
        name: 'Maestro',
        description: 'Kolay UI testing',
        url: 'https://maestro.mobile.dev/',
        tags: ['ui test', 'kolay']
      }
    ]
  },
  {
    category: 'dev-tools',
    title: 'Geliştirici Araçları',
    icon: 'tools',
    items: [
      {
        id: 'flipper',
        name: 'Flipper',
        description: 'Mobile debugging platform',
        url: 'https://fbflipper.com/',
        tags: ['debug', 'meta']
      },
      {
        id: 'reactotron',
        name: 'Reactotron',
        description: 'RN debugging desktop app',
        url: 'https://github.com/infinitered/reactotron',
        tags: ['debug']
      },
      {
        id: 'expo-dev-tools',
        name: 'Expo Dev Tools',
        description: 'Expo geliştirici araçları',
        url: 'https://docs.expo.dev/debugging/tools/',
        tags: ['expo', 'debug']
      },
      {
        id: 'why-did-you-render',
        name: 'Why Did You Render',
        description: 'Re-render debugging',
        url: 'https://github.com/welldone-software/why-did-you-render',
        tags: ['performans']
      }
    ]
  },
  {
    category: 'learning',
    title: 'Öğrenme Kaynakları',
    icon: 'learn',
    items: [
      {
        id: 'rn-express',
        name: 'React Native Express',
        description: 'Interaktif RN öğrenme',
        url: 'https://www.reactnative.express/',
        tags: ['ücretsiz', 'interaktif']
      },
      {
        id: 'expo-tutorial',
        name: 'Expo Tutorial',
        description: 'Resmi Expo eğitimi',
        url: 'https://docs.expo.dev/tutorial/introduction/',
        tags: ['expo', 'başlangıç']
      },
      {
        id: 'rn-school',
        name: 'React Native School',
        description: 'Video eğitimler',
        url: 'https://www.reactnativeschool.com/',
        tags: ['video']
      },
      {
        id: 'notjust-dev',
        name: 'notJust.dev',
        description: 'YouTube RN projeleri',
        url: 'https://www.youtube.com/@notjustdev',
        tags: ['youtube', 'proje']
      },
      {
        id: 'catalin-miron',
        name: 'Catalin Miron',
        description: 'Animasyon focused YouTube',
        url: 'https://www.youtube.com/@catalinmirondev',
        tags: ['youtube', 'animasyon']
      },
      {
        id: 'william-candillon',
        name: 'William Candillon',
        description: '"Can it be done in RN?" serisi',
        url: 'https://www.youtube.com/@wcandillon',
        tags: ['youtube', 'ileri']
      }
    ]
  },
  {
    category: 'templates',
    title: 'Şablonlar & Boilerplate',
    icon: 'template',
    items: [
      {
        id: 'ignite',
        name: 'Ignite',
        description: 'Infinite Red boilerplate',
        url: 'https://infinite.red/ignite',
        tags: ['popüler', 'kapsamlı']
      },
      {
        id: 'expo-template',
        name: 'Expo Templates',
        description: 'Resmi Expo şablonları',
        url: 'https://docs.expo.dev/more/create-expo/',
        tags: ['expo', 'resmi']
      },
      {
        id: 'obytes-starter',
        name: 'Obytes Starter',
        description: 'Production-ready starter',
        url: 'https://starter.obytes.com/',
        tags: ['production', 'modern']
      },
      {
        id: 'rn-boilerplate',
        name: 'RN Boilerplate',
        description: 'TypeScript + Navigation',
        url: 'https://github.com/thecodingmachine/react-native-boilerplate',
        tags: ['typescript']
      }
    ]
  }
]
