import { useState } from 'react'
import { courses } from '../data/courses'

export function Lessons({ userProgress, onUpdateProgress }) {
  const [expandedWeek, setExpandedWeek] = useState(1)
  const [selectedLesson, setSelectedLesson] = useState(null)

  const isLessonCompleted = (lessonId) => {
    return userProgress?.completedLessons?.includes(lessonId) || false
  }

  const getWeekProgress = (week) => {
    const weekData = courses.find((c) => c.week === week)
    if (!weekData) return 0
    const completed = weekData.lessons.filter((l) => isLessonCompleted(l.id)).length
    return Math.round((completed / weekData.lessons.length) * 100)
  }

  const toggleLessonComplete = (lessonId) => {
    const completedLessons = userProgress?.completedLessons || []
    const isCompleted = completedLessons.includes(lessonId)

    const newCompleted = isCompleted
      ? completedLessons.filter((id) => id !== lessonId)
      : [...completedLessons, lessonId]

    onUpdateProgress({ ...userProgress, completedLessons: newCompleted })
  }

  const totalProgress = () => {
    const totalLessons = courses.reduce((acc, week) => acc + week.lessons.length, 0)
    const completed = userProgress?.completedLessons?.length || 0
    return Math.round((completed / totalLessons) * 100)
  }

  return (
    <div className="lessons">
      <div className="lessons-header">
        <div className="lessons-title">
          <h2>React Native Eğitimi</h2>
          <p>4 Hafta - 16 Ders</p>
        </div>
        <div className="lessons-progress-card">
          <div className="progress-circle">
            <svg viewBox="0 0 36 36">
              <path
                className="progress-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="progress-fill"
                strokeDasharray={`${totalProgress()}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="progress-text">{totalProgress()}%</span>
          </div>
          <div className="progress-info">
            <span className="progress-label">Genel İlerleme</span>
            <span className="progress-detail">
              {userProgress?.completedLessons?.length || 0} / 16 ders tamamlandı
            </span>
          </div>
        </div>
      </div>

      <div className="weeks-container">
        {courses.map((weekData) => (
          <div key={weekData.week} className="week-card">
            <button
              className={`week-header ${expandedWeek === weekData.week ? 'expanded' : ''}`}
              onClick={() => setExpandedWeek(expandedWeek === weekData.week ? null : weekData.week)}
            >
              <div className="week-info">
                <span className="week-number">Hafta {weekData.week}</span>
                <h3 className="week-title">{weekData.title}</h3>
              </div>
              <div className="week-meta">
                <div className="week-progress-bar">
                  <div
                    className="week-progress-fill"
                    style={{ width: `${getWeekProgress(weekData.week)}%` }}
                  />
                </div>
                <span className="week-progress-text">{getWeekProgress(weekData.week)}%</span>
                <svg
                  className="week-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </button>

            {expandedWeek === weekData.week && (
              <div className="week-lessons">
                {weekData.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`lesson-card ${isLessonCompleted(lesson.id) ? 'completed' : ''}`}
                  >
                    <button
                      className="lesson-checkbox"
                      onClick={() => toggleLessonComplete(lesson.id)}
                    >
                      {isLessonCompleted(lesson.id) ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      )}
                    </button>

                    <div
                      className="lesson-content"
                      onClick={() => setSelectedLesson(selectedLesson?.id === lesson.id ? null : lesson)}
                    >
                      <div className="lesson-main">
                        <span className="lesson-id">{lesson.id}</span>
                        <h4 className="lesson-title">{lesson.title}</h4>
                        <span className="lesson-duration">{lesson.duration}</span>
                      </div>
                      <div className="lesson-topics">
                        {lesson.topics.map((topic, i) => (
                          <span key={i} className="topic-tag">{topic}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedLesson && (
        <div className="lesson-modal-overlay" onClick={() => setSelectedLesson(null)}>
          <div className="lesson-modal" onClick={(e) => e.stopPropagation()}>
            <div className="lesson-modal-header">
              <span className="lesson-modal-id">{selectedLesson.id}</span>
              <h3>{selectedLesson.title}</h3>
              <button className="lesson-modal-close" onClick={() => setSelectedLesson(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="lesson-modal-body">
              <p className="lesson-description">{selectedLesson.description}</p>
              <div className="lesson-modal-meta">
                <span className="lesson-modal-duration">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {selectedLesson.duration}
                </span>
              </div>
              <div className="lesson-modal-topics">
                <h4>Konular</h4>
                <ul>
                  {selectedLesson.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lesson-modal-footer">
              <button
                className={`lesson-complete-btn ${isLessonCompleted(selectedLesson.id) ? 'completed' : ''}`}
                onClick={() => toggleLessonComplete(selectedLesson.id)}
              >
                {isLessonCompleted(selectedLesson.id) ? 'Tamamlandı ✓' : 'Tamamlandı Olarak İşaretle'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
