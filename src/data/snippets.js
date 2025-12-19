export const snippets = [
  // Basic Components
  {
    id: 'snip-1',
    category: 'Temel Components',
    title: 'Basit Component Yapısı',
    description: 'Fonksiyonel component şablonu',
    code: `import { View, Text, StyleSheet } from 'react-native';

export function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Merhaba!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});`
  },
  {
    id: 'snip-2',
    category: 'Temel Components',
    title: 'TouchableOpacity Button',
    description: 'Tıklanabilir buton component\'i',
    code: `import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});`
  },
  {
    id: 'snip-3',
    category: 'Temel Components',
    title: 'TextInput Form',
    description: 'Kullanıcı girişi için input',
    code: `import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export function InputField({ placeholder, value, onChangeText, secureTextEntry }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, isFocused && styles.focused]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholderTextColor="#999"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  focused: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
});`
  },
  {
    id: 'snip-4',
    category: 'Temel Components',
    title: 'Image Component',
    description: 'Resim gösterme örnekleri',
    code: `import { Image, StyleSheet } from 'react-native';

// Local image
<Image
  source={require('./assets/image.png')}
  style={styles.image}
/>

// Remote image (URL)
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={styles.image}
  resizeMode="cover"
/>

// With placeholder and error handling
<Image
  source={{ uri: imageUrl }}
  style={styles.image}
  defaultSource={require('./assets/placeholder.png')}
  onError={(e) => console.log('Image error:', e.nativeEvent.error)}
/>

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});`
  },

  // Lists
  {
    id: 'snip-5',
    category: 'Listeler',
    title: 'FlatList Kullanımı',
    description: 'Performanslı liste render',
    code: `import { FlatList, View, Text, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

export function MyList() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={<Text>Liste boş</Text>}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});`
  },
  {
    id: 'snip-6',
    category: 'Listeler',
    title: 'SectionList Kullanımı',
    description: 'Gruplandırılmış liste',
    code: `import { SectionList, View, Text, StyleSheet } from 'react-native';

const DATA = [
  {
    title: 'Meyveler',
    data: ['Elma', 'Armut', 'Muz'],
  },
  {
    title: 'Sebzeler',
    data: ['Domates', 'Salatalık', 'Biber'],
  },
];

export function GroupedList() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});`
  },

  // State Management
  {
    id: 'snip-7',
    category: 'State Yönetimi',
    title: 'useState Hook',
    description: 'Temel state yönetimi',
    code: `import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  // Sayı artırma
  const increment = () => setCount(count + 1);

  // Önceki değere göre güncelleme
  const decrement = () => setCount(prev => prev - 1);

  // Array güncelleme
  const addItem = (item) => setItems([...items, item]);

  // Object state
  const [user, setUser] = useState({ name: '', age: 0 });
  const updateName = (newName) => setUser({ ...user, name: newName });

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Artır" onPress={increment} />
      <Button title="Azalt" onPress={decrement} />
    </View>
  );
}`
  },
  {
    id: 'snip-8',
    category: 'State Yönetimi',
    title: 'useEffect Hook',
    description: 'Side effect yönetimi',
    code: `import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Component mount olduğunda çalışır
  useEffect(() => {
    fetchData();
  }, []); // Boş array = sadece mount'ta

  // userId değiştiğinde çalışır
  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, [userId]); // Dependency array

  // Cleanup function
  useEffect(() => {
    const subscription = subscribeToData();

    return () => {
      // Unmount olduğunda çalışır
      subscription.unsubscribe();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Text>Yükleniyor...</Text>;

  return <Text>{JSON.stringify(data)}</Text>;
}`
  },
  {
    id: 'snip-9',
    category: 'State Yönetimi',
    title: 'useContext Hook',
    description: 'Global state paylaşımı',
    code: `import { createContext, useContext, useState } from 'react';

// Context oluştur
const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Kullanım
function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
      <Button title="Tema Değiştir" onPress={toggleTheme} />
    </View>
  );
}`
  },

  // Navigation
  {
    id: 'snip-10',
    category: 'Navigation',
    title: 'Stack Navigator Setup',
    description: 'Temel stack navigation kurulumu',
    code: `import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Detaya Git"
        onPress={() => navigation.navigate('Details', { itemId: 42 })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;

  return (
    <View>
      <Text>Item ID: {itemId}</Text>
      <Button title="Geri" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Ana Sayfa' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Detaylar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`
  },
  {
    id: 'snip-11',
    category: 'Navigation',
    title: 'Bottom Tab Navigator',
    description: 'Alt menü navigation',
    code: `import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}`
  },

  // API & Networking
  {
    id: 'snip-12',
    category: 'API & Networking',
    title: 'Fetch API Kullanımı',
    description: 'REST API çağrısı',
    code: `// GET request
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/users');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// POST request
const createUser = async (userData) => {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Post error:', error);
    throw error;
  }
};

// Custom hook for API
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}`
  },
  {
    id: 'snip-13',
    category: 'API & Networking',
    title: 'AsyncStorage Kullanımı',
    description: 'Yerel veri saklama',
    code: `import AsyncStorage from '@react-native-async-storage/async-storage';

// Veri kaydetme
const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Storage error:', e);
  }
};

// Veri okuma
const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Read error:', e);
  }
};

// Veri silme
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Remove error:', e);
  }
};

// Tüm verileri temizle
const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error('Clear error:', e);
  }
};

// Custom hook
function useStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    getData(key).then(data => {
      if (data !== null) setValue(data);
    });
  }, [key]);

  const setStoredValue = async (newValue) => {
    setValue(newValue);
    await storeData(key, newValue);
  };

  return [value, setStoredValue];
}`
  },

  // Animations
  {
    id: 'snip-14',
    category: 'Animasyonlar',
    title: 'Fade Animation',
    description: 'Basit opacity animasyonu',
    code: `import { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

export function FadeInView({ children, duration = 500 }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
}

// Fade in/out toggle
export function FadeToggle({ visible, children }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
}`
  },
  {
    id: 'snip-15',
    category: 'Animasyonlar',
    title: 'Scale & Spring Animation',
    description: 'Büyüme ve spring efekti',
    code: `import { useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

export function ScaleButton({ children, onPress }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

// Pulse animation
export function PulseView({ children }) {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
      {children}
    </Animated.View>
  );
}`
  },

  // Forms
  {
    id: 'snip-16',
    category: 'Formlar',
    title: 'Login Form',
    description: 'Tam login formu örneği',
    code: `import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email gerekli';
    } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {
      newErrors.email = 'Geçersiz email';
    }

    if (!password) {
      newErrors.password = 'Şifre gerekli';
    } else if (password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalı';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      await onLogin({ email, password });
    } catch (error) {
      Alert.alert('Hata', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, errors.email && styles.inputError]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        style={[styles.input, errors.password && styles.inputError]}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  inputError: { borderColor: 'red' },
  error: { color: 'red', marginBottom: 10, fontSize: 12 },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});`
  },

  // Platform Specific
  {
    id: 'snip-17',
    category: 'Platform',
    title: 'Platform Specific Code',
    description: 'iOS/Android farklı kod',
    code: `import { Platform, StyleSheet } from 'react-native';

// Platform check
if (Platform.OS === 'ios') {
  // iOS specific code
} else if (Platform.OS === 'android') {
  // Android specific code
}

// Platform.select
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  text: {
    fontFamily: Platform.select({
      ios: 'Helvetica',
      android: 'Roboto',
    }),
  },
});

// Platform version check
if (Platform.OS === 'android' && Platform.Version >= 21) {
  // Android 5.0+ specific code
}

// Platform specific file
// Button.ios.js ve Button.android.js
// import Button from './Button'; // Otomatik seçer`
  },
  {
    id: 'snip-18',
    category: 'Platform',
    title: 'Safe Area & Status Bar',
    description: 'Güvenli alan ve status bar',
    code: `import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// SafeAreaView kullanımı
export function Screen({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      {children}
    </SafeAreaView>
  );
}

// useSafeAreaInsets hook
export function ScreenWithInsets({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.container,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Android için status bar padding
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});`
  },

  // Utility Hooks
  {
    id: 'snip-19',
    category: 'Custom Hooks',
    title: 'useDebounce Hook',
    description: 'Arama input için debounce',
    code: `import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Kullanım
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearch) {
      // API çağrısı yap
      searchApi(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <TextInput
      value={searchTerm}
      onChangeText={setSearchTerm}
      placeholder="Ara..."
    />
  );
}`
  },
  {
    id: 'snip-20',
    category: 'Custom Hooks',
    title: 'useKeyboard Hook',
    description: 'Klavye durumu takibi',
    code: `import { useState, useEffect } from 'react';
import { Keyboard, Platform } from 'react-native';

function useKeyboard() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const showSubscription = Keyboard.addListener(showEvent, (e) => {
      setKeyboardVisible(true);
      setKeyboardHeight(e.endCoordinates.height);
    });

    const hideSubscription = Keyboard.addListener(hideEvent, () => {
      setKeyboardVisible(false);
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const dismissKeyboard = () => Keyboard.dismiss();

  return { keyboardVisible, keyboardHeight, dismissKeyboard };
}

// Kullanım
function MyForm() {
  const { keyboardVisible, dismissKeyboard } = useKeyboard();

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1 }}>
        {/* Form içeriği */}
      </View>
    </TouchableWithoutFeedback>
  );
}`
  }
];

export const snippetCategories = [
  'Temel Components',
  'Listeler',
  'State Yönetimi',
  'Navigation',
  'API & Networking',
  'Animasyonlar',
  'Formlar',
  'Platform',
  'Custom Hooks'
];
