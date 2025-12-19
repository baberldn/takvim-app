import { useState } from 'react';

export function Login({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isRegister) {
      if (!formData.name.trim()) {
        setError('Lütfen adınızı girin');
        return;
      }
      if (!formData.email.trim()) {
        setError('Lütfen e-posta adresinizi girin');
        return;
      }
      if (formData.password.length < 4) {
        setError('Şifre en az 4 karakter olmalı');
        return;
      }

      const users = JSON.parse(localStorage.getItem('takvim-users') || '[]');
      if (users.find((u) => u.email === formData.email)) {
        setError('Bu e-posta zaten kayıtlı');
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      users.push(newUser);
      localStorage.setItem('takvim-users', JSON.stringify(users));
      onLogin(newUser);
    } else {
      if (!formData.email.trim() || !formData.password) {
        setError('Lütfen tüm alanları doldurun');
        return;
      }

      const users = JSON.parse(localStorage.getItem('takvim-users') || '[]');
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (!user) {
        setError('E-posta veya şifre hatalı');
        return;
      }

      onLogin(user);
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <h1>Takvim</h1>
          <p>{isRegister ? 'Hesap oluşturun' : 'Hesabınıza giriş yapın'}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {isRegister && (
            <div className="form-field">
              <label>Ad Soyad</label>
              <input
                type="text"
                placeholder="Adınızı girin"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          )}

          <div className="form-field">
            <label>E-posta</label>
            <input
              type="email"
              placeholder="ornek@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-field">
            <label>Şifre</label>
            <input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="login-btn">
            {isRegister ? 'Kayıt Ol' : 'Giriş Yap'}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isRegister ? 'Zaten hesabınız var mı?' : 'Hesabınız yok mu?'}
            <button
              type="button"
              className="switch-btn"
              onClick={() => {
                setIsRegister(!isRegister);
                setError('');
              }}
            >
              {isRegister ? 'Giriş Yap' : 'Kayıt Ol'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
