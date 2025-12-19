import { useState } from 'react'
import { tasks } from '../data/tasks'
import { courses } from '../data/courses'

export function Tasks({ userProgress, onUpdateProgress }) {
  const [selectedTask, setSelectedTask] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const completedLessons = userProgress?.completedLessons || []

  const getCompletedWeeks = () => {
    const weeks = []
    courses.forEach((week) => {
      const allLessonsCompleted = week.lessons.every((lesson) =>
        completedLessons.includes(lesson.id)
      )
      if (allLessonsCompleted) {
        weeks.push(week.week)
      }
    })
    return weeks
  }

  const completedWeeks = getCompletedWeeks()

  const isTaskUnlocked = (task) => {
    return completedWeeks.includes(task.weekRequired)
  }

  const isTaskCompleted = (taskId) => {
    return userProgress?.completedTasks?.includes(taskId) || false
  }

  const toggleTaskComplete = (taskId) => {
    const completedTasks = userProgress?.completedTasks || []
    const isCompleted = completedTasks.includes(taskId)

    const newCompleted = isCompleted
      ? completedTasks.filter((id) => id !== taskId)
      : [...completedTasks, taskId]

    onUpdateProgress({ ...userProgress, completedTasks: newCompleted })
  }

  const getFilteredTasks = () => {
    switch (activeFilter) {
      case 'unlocked':
        return tasks.filter((t) => isTaskUnlocked(t))
      case 'completed':
        return tasks.filter((t) => isTaskCompleted(t.id))
      case 'locked':
        return tasks.filter((t) => !isTaskUnlocked(t))
      default:
        return tasks
    }
  }

  const filteredTasks = getFilteredTasks()

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Kolay':
        return '#22c55e'
      case 'Orta':
        return '#f59e0b'
      case 'Zor':
        return '#ef4444'
      case 'İleri':
        return '#8b5cf6'
      default:
        return '#6b7280'
    }
  }

  const stats = {
    total: tasks.length,
    unlocked: tasks.filter((t) => isTaskUnlocked(t)).length,
    completed: userProgress?.completedTasks?.length || 0,
  }

  return (
    <div className="tasks">
      <div className="tasks-header">
        <div className="tasks-title">
          <h2>Proje Görevleri</h2>
          <p>Her hafta sonunda yapılacak mini projeler</p>
        </div>
        <div className="tasks-stats">
          <div className="stat-item">
            <span className="stat-number">{stats.unlocked}</span>
            <span className="stat-label">Açık</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.completed}</span>
            <span className="stat-label">Tamamlanan</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Toplam</span>
          </div>
        </div>
      </div>

      <div className="tasks-filters">
        {[
          { id: 'all', label: 'Tümü' },
          { id: 'unlocked', label: 'Açık' },
          { id: 'completed', label: 'Tamamlanan' },
          { id: 'locked', label: 'Kilitli' },
        ].map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="tasks-grid">
        {filteredTasks.map((task) => {
          const unlocked = isTaskUnlocked(task)
          const completed = isTaskCompleted(task.id)

          return (
            <div
              key={task.id}
              className={`task-card ${!unlocked ? 'locked' : ''} ${completed ? 'completed' : ''}`}
              onClick={() => setSelectedTask(task)}
            >
              {!unlocked && (
                <div className="task-lock-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>Hafta {task.weekRequired}</span>
                </div>
              )}

              <div className="task-header">
                <span
                  className="task-difficulty"
                  style={{ background: getDifficultyColor(task.difficulty) }}
                >
                  {task.difficulty}
                </span>
                <span className="task-week">Hafta {task.weekRequired}+</span>
              </div>

              <h3 className="task-title">{task.title}</h3>
              <p className="task-description">{task.description}</p>

              <div className="task-meta">
                <span className="task-time">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {task.estimatedTime}
                </span>
                <span className="task-objectives">
                  {task.objectives.length} hedef
                </span>
              </div>

              {completed && (
                <div className="task-completed-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Tamamlandı
                </div>
              )}
            </div>
          )
        })}
      </div>

      {filteredTasks.length === 0 && (
        <div className="tasks-empty">
          <p>Bu kategoride görev bulunmuyor.</p>
        </div>
      )}

      {selectedTask && (
        <div className="task-modal-overlay" onClick={() => setSelectedTask(null)}>
          <div className="task-modal" onClick={(e) => e.stopPropagation()}>
            <div className="task-modal-header">
              <div className="task-modal-badges">
                <span
                  className="task-difficulty"
                  style={{ background: getDifficultyColor(selectedTask.difficulty) }}
                >
                  {selectedTask.difficulty}
                </span>
                <span className="task-week-badge">Hafta {selectedTask.weekRequired}+</span>
              </div>
              <button className="task-modal-close" onClick={() => setSelectedTask(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="task-modal-body">
              <h2>{selectedTask.title}</h2>
              <p className="task-modal-desc">{selectedTask.description}</p>

              <div className="task-modal-time">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Tahmini süre: {selectedTask.estimatedTime}
              </div>

              <div className="task-section">
                <h4>Öğrenme Hedefleri</h4>
                <ul>
                  {selectedTask.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div className="task-section">
                <h4>Gereksinimler</h4>
                <ul className="requirements-list">
                  {selectedTask.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="task-section design-section">
                <h4>Tasarım Detayları</h4>
                <div className="design-grid">
                  <div className="design-item">
                    <h5>Renkler</h5>
                    <ul>
                      {selectedTask.designSpecs.colors.map((color, i) => (
                        <li key={i}>{color}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="design-item">
                    <h5>Layout</h5>
                    <p>{selectedTask.designSpecs.layout}</p>
                  </div>
                  <div className="design-item">
                    <h5>Tipografi</h5>
                    <p>{selectedTask.designSpecs.typography}</p>
                  </div>
                </div>
              </div>

              <div className="task-section">
                <h4>İpuçları</h4>
                <ul className="hints-list">
                  {selectedTask.hints.map((hint, i) => (
                    <li key={i}>{hint}</li>
                  ))}
                </ul>
              </div>

              <div className="task-section bonus-section">
                <h4>Bonus Özellikler</h4>
                <div className="bonus-tags">
                  {selectedTask.bonusFeatures.map((bonus, i) => (
                    <span key={i} className="bonus-tag">{bonus}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="task-modal-footer">
              {!isTaskUnlocked(selectedTask) && (
                <div className="task-locked-warning">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>Bu görevi tamamlamak için önce Hafta {selectedTask.weekRequired} derslerini bitirin</span>
                </div>
              )}
              <button
                className={`task-complete-btn ${isTaskCompleted(selectedTask.id) ? 'completed' : ''} ${!isTaskUnlocked(selectedTask) ? 'disabled' : ''}`}
                onClick={() => isTaskUnlocked(selectedTask) && toggleTaskComplete(selectedTask.id)}
                disabled={!isTaskUnlocked(selectedTask)}
              >
                {isTaskCompleted(selectedTask.id) ? 'Tamamlandı ✓' : 'Tamamlandı Olarak İşaretle'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
