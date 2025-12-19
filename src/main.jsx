import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Örnek kullanıcıları oluştur
const defaultUsers = [
  { id: '1', name: 'Yunus', email: 'yunus@gmail.com', password: '123' },
  { id: '2', name: 'Beril', email: 'beril@gmail.com', password: '123' },
  { id: '3', name: 'Gamze', email: 'gamze@gmail.com', password: '123' },
]

const existingUsers = JSON.parse(localStorage.getItem('takvim-users') || '[]')
if (existingUsers.length === 0) {
  localStorage.setItem('takvim-users', JSON.stringify(defaultUsers))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
