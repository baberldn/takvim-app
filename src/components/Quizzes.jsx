import { useState } from 'react'
import { quizzes } from '../data/quizzes'
import { courses } from '../data/courses'

export function Quizzes({ userProgress, onUpdateProgress }) {
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])

  const getQuizResult = (quizId) => {
    return userProgress?.quizResults?.[quizId]
  }

  const getLessonTitle = (lessonId) => {
    for (const week of courses) {
      const lesson = week.lessons.find((l) => l.id === lessonId)
      if (lesson) return lesson.title
    }
    return ''
  }

  const getQuizzesByWeek = () => {
    return courses.map((week) => ({
      week: week.week,
      title: week.title,
      quizzes: quizzes.filter((q) => q.lessonId.startsWith(`${week.week}.`))
    }))
  }

  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnswers([])
  }

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
  }

  const nextQuestion = () => {
    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      // Quiz tamamlandı
      const correctCount = newAnswers.reduce((count, answer, index) => {
        return answer === selectedQuiz.questions[index].correctAnswer ? count + 1 : count
      }, 0)

      const score = Math.round((correctCount / selectedQuiz.questions.length) * 100)

      // Sonucu kaydet
      const quizResults = userProgress?.quizResults || {}
      const existingResult = quizResults[selectedQuiz.id]

      // Sadece daha yüksek skor varsa güncelle
      if (!existingResult || score > existingResult.score) {
        onUpdateProgress({
          ...userProgress,
          quizResults: {
            ...quizResults,
            [selectedQuiz.id]: {
              score,
              correctCount,
              totalQuestions: selectedQuiz.questions.length,
              completedAt: new Date().toISOString()
            }
          }
        })
      }

      setShowResult(true)
    }
  }

  const closeQuiz = () => {
    setSelectedQuiz(null)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnswers([])
  }

  const getScoreColor = (score) => {
    if (score >= 80) return '#22c55e'
    if (score >= 60) return '#f59e0b'
    return '#ef4444'
  }

  const completedQuizzes = quizzes.filter((q) => getQuizResult(q.id)).length
  const quizzesByWeek = getQuizzesByWeek()

  return (
    <div className="quizzes">
      <div className="quizzes-header">
        <div className="quizzes-title">
          <h2>Testler</h2>
          <p>Her ders sonunda bilgilerinizi test edin</p>
        </div>
        <div className="quizzes-stats">
          <div className="stat-item">
            <span className="stat-number">{completedQuizzes}</span>
            <span className="stat-label">Tamamlanan</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{quizzes.length}</span>
            <span className="stat-label">Toplam</span>
          </div>
        </div>
      </div>

      {quizzesByWeek.map((weekData) => (
        <div key={weekData.week} className="quiz-week-section">
          <h3 className="quiz-week-title">
            <span className="week-number">Hafta {weekData.week}</span>
            <span className="week-name">{weekData.title}</span>
          </h3>

          <div className="quizzes-grid">
            {weekData.quizzes.map((quiz) => {
              const result = getQuizResult(quiz.id)
              const lessonTitle = getLessonTitle(quiz.lessonId)

              return (
                <div
                  key={quiz.id}
                  className={`quiz-card ${result ? 'completed' : ''}`}
                  onClick={() => startQuiz(quiz)}
                >
                  {result && (
                    <div className="quiz-score-badge" style={{ background: getScoreColor(result.score) }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>{result.score}%</span>
                    </div>
                  )}

                  <div className="quiz-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>

                  <div className="quiz-lesson-badge">{lessonTitle}</div>
                  <h3 className="quiz-title">{quiz.title}</h3>
                  <p className="quiz-description">{quiz.description}</p>

                  <div className="quiz-meta">
                    <span className="quiz-questions">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                      {quiz.questions.length} Soru
                    </span>
                    {result && (
                      <span className="quiz-result-text">
                        {result.correctCount}/{result.totalQuestions} Doğru
                      </span>
                    )}
                  </div>

                  {!result && (
                    <button className="start-quiz-btn">
                      Teste Başla
                    </button>
                  )}
                  {result && (
                    <button className="retry-quiz-btn">
                      Tekrar Dene
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Quiz Modal */}
      {selectedQuiz && (
        <div className="quiz-modal-overlay" onClick={closeQuiz}>
          <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
            {!showResult ? (
              <>
                <div className="quiz-modal-header">
                  <div className="quiz-progress">
                    <span className="quiz-progress-text">
                      Soru {currentQuestion + 1} / {selectedQuiz.questions.length}
                    </span>
                    <div className="quiz-progress-bar">
                      <div
                        className="quiz-progress-fill"
                        style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <button className="quiz-modal-close" onClick={closeQuiz}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <div className="quiz-modal-body">
                  <h3 className="quiz-question">
                    {selectedQuiz.questions[currentQuestion].question}
                  </h3>

                  <div className="quiz-options">
                    {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        className={`quiz-option ${selectedAnswer === index ? 'selected' : ''}`}
                        onClick={() => handleAnswer(index)}
                      >
                        <span className="option-letter">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="option-text">{option}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="quiz-modal-footer">
                  <button
                    className="quiz-next-btn"
                    onClick={nextQuestion}
                    disabled={selectedAnswer === null}
                  >
                    {currentQuestion < selectedQuiz.questions.length - 1 ? 'Sonraki Soru' : 'Testi Bitir'}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="quiz-result">
                  <div
                    className="result-score-circle"
                    style={{ '--score-color': getScoreColor(Math.round((answers.filter((a, i) => a === selectedQuiz.questions[i].correctAnswer).length / selectedQuiz.questions.length) * 100)) }}
                  >
                    <span className="result-score">
                      {Math.round((answers.filter((a, i) => a === selectedQuiz.questions[i].correctAnswer).length / selectedQuiz.questions.length) * 100)}%
                    </span>
                  </div>

                  <h3 className="result-title">
                    {Math.round((answers.filter((a, i) => a === selectedQuiz.questions[i].correctAnswer).length / selectedQuiz.questions.length) * 100) >= 80
                      ? 'Harika!'
                      : Math.round((answers.filter((a, i) => a === selectedQuiz.questions[i].correctAnswer).length / selectedQuiz.questions.length) * 100) >= 60
                      ? 'İyi!'
                      : 'Tekrar Dene'}
                  </h3>

                  <p className="result-text">
                    {selectedQuiz.questions.length} sorudan{' '}
                    <strong>{answers.filter((a, i) => a === selectedQuiz.questions[i].correctAnswer).length}</strong>{' '}
                    tanesini doğru cevapladınız.
                  </p>

                  <div className="result-summary">
                    {selectedQuiz.questions.map((q, index) => (
                      <div
                        key={q.id}
                        className={`result-item ${answers[index] === q.correctAnswer ? 'correct' : 'wrong'}`}
                      >
                        <span className="result-item-number">{index + 1}</span>
                        {answers[index] === q.correctAnswer ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="result-actions">
                    <button className="retry-btn" onClick={() => startQuiz(selectedQuiz)}>
                      Tekrar Dene
                    </button>
                    <button className="close-btn" onClick={closeQuiz}>
                      Kapat
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
