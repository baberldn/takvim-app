import { useState, useRef } from 'react'
import { courses } from '../data/courses'

export function Lessons({ user, userProgress, onUpdateProgress, lessonNotes, onAddNote, onDeleteNote, onEditNote }) {
  const [expandedWeek, setExpandedWeek] = useState(1)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [noteText, setNoteText] = useState('')
  const [noteFile, setNoteFile] = useState(null)
  const [editingNote, setEditingNote] = useState(null)
  const [editText, setEditText] = useState('')
  const [editFile, setEditFile] = useState(null)
  const fileInputRef = useRef(null)
  const editFileInputRef = useRef(null)

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

  const getLessonNotes = (lessonId) => {
    return lessonNotes?.filter((note) => note.lessonId === lessonId) || []
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Convert file to base64 for localStorage storage
      const reader = new FileReader()
      reader.onloadend = () => {
        setNoteFile({
          name: file.name,
          type: file.type,
          size: file.size,
          data: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddNote = () => {
    if (!noteText.trim() && !noteFile) return

    onAddNote({
      lessonId: selectedLesson.id,
      text: noteText,
      file: noteFile
    })

    setNoteText('')
    setNoteFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const startEditNote = (note) => {
    setEditingNote(note.id)
    setEditText(note.text || '')
    setEditFile(note.file || null)
  }

  const cancelEditNote = () => {
    setEditingNote(null)
    setEditText('')
    setEditFile(null)
    if (editFileInputRef.current) {
      editFileInputRef.current.value = ''
    }
  }

  const handleEditFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditFile({
          name: file.name,
          type: file.type,
          size: file.size,
          data: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const saveEditNote = () => {
    if (!editText.trim() && !editFile) return

    onEditNote(editingNote, {
      text: editText,
      file: editFile
    })

    cancelEditNote()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
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

              {/* Notes Section */}
              <div className="lesson-notes-section">
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Notlar ({getLessonNotes(selectedLesson.id).length})
                </h4>

                {/* Add Note Form */}
                <div className="add-note-form">
                  <textarea
                    placeholder="Not ekle..."
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    rows={3}
                  />
                  <div className="note-form-actions">
                    <div className="file-upload-wrapper">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.zip"
                        style={{ display: 'none' }}
                      />
                      <button
                        type="button"
                        className="file-upload-btn"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                        </svg>
                        Dosya Ekle
                      </button>
                      {noteFile && (
                        <span className="selected-file">
                          {noteFile.name}
                          <button onClick={() => setNoteFile(null)}>×</button>
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      className="add-note-btn"
                      onClick={handleAddNote}
                      disabled={!noteText.trim() && !noteFile}
                    >
                      Not Ekle
                    </button>
                  </div>
                </div>

                {/* Notes List */}
                <div className="notes-list">
                  {getLessonNotes(selectedLesson.id).length === 0 ? (
                    <p className="no-notes">Henüz not eklenmemiş.</p>
                  ) : (
                    getLessonNotes(selectedLesson.id).map((note) => (
                      <div key={note.id} className={`note-card ${editingNote === note.id ? 'editing' : ''}`}>
                        {editingNote === note.id ? (
                          // Edit Mode
                          <div className="note-edit-form">
                            <textarea
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              rows={3}
                              placeholder="Not metni..."
                            />
                            <div className="note-edit-actions">
                              <div className="file-upload-wrapper">
                                <input
                                  type="file"
                                  ref={editFileInputRef}
                                  onChange={handleEditFileChange}
                                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.zip"
                                  style={{ display: 'none' }}
                                />
                                <button
                                  type="button"
                                  className="file-upload-btn"
                                  onClick={() => editFileInputRef.current?.click()}
                                >
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                  </svg>
                                  Dosya
                                </button>
                                {editFile && (
                                  <span className="selected-file">
                                    {editFile.name}
                                    <button onClick={() => setEditFile(null)}>×</button>
                                  </span>
                                )}
                              </div>
                              <div className="edit-buttons">
                                <button className="cancel-edit-btn" onClick={cancelEditNote}>
                                  İptal
                                </button>
                                <button
                                  className="save-edit-btn"
                                  onClick={saveEditNote}
                                  disabled={!editText.trim() && !editFile}
                                >
                                  Kaydet
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // View Mode
                          <>
                            <div className="note-header">
                              <div className="note-author">
                                <div className="note-avatar">
                                  {note.authorName.charAt(0).toUpperCase()}
                                </div>
                                <div className="note-meta">
                                  <span className="note-author-name">{note.authorName}</span>
                                  <span className="note-date">
                                    {formatDate(note.createdAt)}
                                    {note.updatedAt && ' (düzenlendi)'}
                                  </span>
                                </div>
                              </div>
                              {note.authorId === user.id && (
                                <div className="note-actions">
                                  <button
                                    className="note-edit-btn"
                                    onClick={() => startEditNote(note)}
                                    title="Notu düzenle"
                                  >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                  </button>
                                  <button
                                    className="note-delete-btn"
                                    onClick={() => onDeleteNote(note.id)}
                                    title="Notu sil"
                                  >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <polyline points="3 6 5 6 21 6" />
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                  </button>
                                </div>
                              )}
                            </div>
                            {note.text && <p className="note-text">{note.text}</p>}
                            {note.file && (
                              <div className="note-file">
                                <a href={note.file.data} download={note.file.name} className="file-download">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="12" y1="18" x2="12" y2="12" />
                                    <polyline points="9 15 12 18 15 15" />
                                  </svg>
                                  <span className="file-info">
                                    <span className="file-name">{note.file.name}</span>
                                    <span className="file-size">{formatFileSize(note.file.size)}</span>
                                  </span>
                                </a>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))
                  )}
                </div>
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
