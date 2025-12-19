import { useState } from 'react'
import { Calendar } from './components/Calendar'
import { Login } from './components/Login'
import { Sidebar } from './components/Sidebar'
import { Lessons } from './components/Lessons'
import { Tasks } from './components/Tasks'
import { Quizzes } from './components/Quizzes'
import { Resources } from './components/Resources'
import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'

function App() {
  const [user, setUser] = useLocalStorage('takvim-user', null)
  const [events, setEvents] = useLocalStorage('takvim-events', [])
  const [userProgress, setUserProgress] = useLocalStorage('takvim-progress', {})
  const [lessonNotes, setLessonNotes] = useLocalStorage('takvim-lesson-notes', [])
  const [currentPage, setCurrentPage] = useState('lessons')

  const handleLogin = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
  }

  const handleAddEvent = (event) => {
    setEvents([...events, { ...event, userId: user.id }])
  }

  const handleEditEvent = (updatedEvent) => {
    setEvents(events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)))
  }

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((e) => e.id !== eventId))
  }

  const handleUpdateProgress = (progress) => {
    setUserProgress({
      ...userProgress,
      [user.id]: progress,
    })
  }

  const handleAddNote = (note) => {
    setLessonNotes([...lessonNotes, { ...note, id: Date.now().toString(), authorId: user.id, authorName: user.name, createdAt: new Date().toISOString() }])
  }

  const handleDeleteNote = (noteId) => {
    setLessonNotes(lessonNotes.filter((n) => n.id !== noteId))
  }

  const handleEditNote = (noteId, updatedData) => {
    setLessonNotes(lessonNotes.map((n) =>
      n.id === noteId
        ? { ...n, ...updatedData, updatedAt: new Date().toISOString() }
        : n
    ))
  }

  const userEvents = user ? events.filter((e) => e.userId === user.id) : []
  const currentUserProgress = user ? userProgress[user.id] || {} : {}

  if (!user) {
    return <Login onLogin={handleLogin} />
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'calendar':
        return (
          <Calendar
            events={userEvents}
            onAddEvent={handleAddEvent}
            onEditEvent={handleEditEvent}
            onDeleteEvent={handleDeleteEvent}
          />
        )
      case 'lessons':
        return (
          <Lessons
            user={user}
            userProgress={currentUserProgress}
            onUpdateProgress={handleUpdateProgress}
            lessonNotes={lessonNotes}
            onAddNote={handleAddNote}
            onDeleteNote={handleDeleteNote}
            onEditNote={handleEditNote}
          />
        )
      case 'tasks':
        return (
          <Tasks
            userProgress={currentUserProgress}
            onUpdateProgress={handleUpdateProgress}
          />
        )
      case 'quizzes':
        return (
          <Quizzes
            userProgress={currentUserProgress}
            onUpdateProgress={handleUpdateProgress}
          />
        )
      case 'resources':
        return <Resources />
      default:
        return null
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1>React Native Eğitim</h1>
        </div>
        <div className="header-right">
          <div className="user-info">
            <div className="user-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="user-name">{user.name}</span>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Çıkış
          </button>
        </div>
      </header>
      <div className="app-container">
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App
