import { useState } from 'react'
import { flashcards, flashcardCategories } from '../data/flashcards'

export function Flashcards({ userProgress, onUpdateProgress }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [showStudyMode, setShowStudyMode] = useState(false)

  const learnedCards = userProgress?.learnedFlashcards || []

  const filteredCards = selectedCategory === 'all'
    ? flashcards
    : flashcards.filter((card) => card.category === selectedCategory)

  const currentCard = filteredCards[currentIndex]

  const isCardLearned = (cardId) => learnedCards.includes(cardId)

  const toggleLearned = (cardId) => {
    const newLearned = isCardLearned(cardId)
      ? learnedCards.filter((id) => id !== cardId)
      : [...learnedCards, cardId]

    onUpdateProgress({
      ...userProgress,
      learnedFlashcards: newLearned
    })
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleNext = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length)
  }

  const handlePrev = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  const startStudyMode = () => {
    setShowStudyMode(true)
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  const exitStudyMode = () => {
    setShowStudyMode(false)
  }

  const getProgress = () => {
    const total = filteredCards.length
    const learned = filteredCards.filter((card) => isCardLearned(card.id)).length
    return { total, learned, percentage: Math.round((learned / total) * 100) || 0 }
  }

  const progress = getProgress()

  const getCategoryStats = (category) => {
    const cards = category === 'all' ? flashcards : flashcards.filter((c) => c.category === category)
    const learned = cards.filter((card) => isCardLearned(card.id)).length
    return { total: cards.length, learned }
  }

  if (showStudyMode && currentCard) {
    return (
      <div className="flashcards-study-mode">
        <div className="study-header">
          <button className="exit-study-btn" onClick={exitStudyMode}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="study-progress">
            <span>{currentIndex + 1} / {filteredCards.length}</span>
            <div className="study-progress-bar">
              <div
                className="study-progress-fill"
                style={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }}
              />
            </div>
          </div>
          <span className="study-category">{selectedCategory === 'all' ? 'Tümü' : selectedCategory}</span>
        </div>

        <div className="study-content">
          <div
            className={`flashcard-flip ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
          >
            <div className="flashcard-inner">
              <div className="flashcard-front">
                <span className="flip-hint">Cevabı görmek için tıkla</span>
                <p className="flashcard-question">{currentCard.front}</p>
                <span className="flashcard-category-tag">{currentCard.category}</span>
              </div>
              <div className="flashcard-back">
                <span className="flip-hint">Soruyu görmek için tıkla</span>
                <p className="flashcard-answer">{currentCard.back}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="study-actions">
          <button className="study-nav-btn" onClick={handlePrev} disabled={filteredCards.length <= 1}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Önceki
          </button>

          <button
            className={`learned-btn ${isCardLearned(currentCard.id) ? 'learned' : ''}`}
            onClick={() => toggleLearned(currentCard.id)}
          >
            {isCardLearned(currentCard.id) ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Öğrenildi
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                Öğrendim
              </>
            )}
          </button>

          <button className="study-nav-btn" onClick={handleNext} disabled={filteredCards.length <= 1}>
            Sonraki
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flashcards">
      <div className="flashcards-header">
        <div className="flashcards-title">
          <h2>Flashcards</h2>
          <p>Kavramları öğrenmek için kartları çevir</p>
        </div>
        <div className="flashcards-stats">
          <div className="stat-item">
            <span className="stat-number">{learnedCards.length}</span>
            <span className="stat-label">Öğrenilen</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{flashcards.length}</span>
            <span className="stat-label">Toplam</span>
          </div>
        </div>
      </div>

      <div className="flashcards-controls">
        <button className="start-study-btn" onClick={startStudyMode}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Çalışmaya Başla
        </button>
      </div>

      <div className="category-cards">
        <div
          className={`category-card ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          <div className="category-card-icon all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
          <h4>Tümü</h4>
          <p>{getCategoryStats('all').learned} / {getCategoryStats('all').total}</p>
        </div>

        {flashcardCategories.map((category) => {
          const stats = getCategoryStats(category)
          return (
            <div
              key={category}
              className={`category-card ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              <div className="category-card-progress">
                <svg viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                    strokeDasharray={`${(stats.learned / stats.total) * 100} 100`}
                    strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                  />
                </svg>
                <span className="progress-text">{Math.round((stats.learned / stats.total) * 100) || 0}%</span>
              </div>
              <h4>{category}</h4>
              <p>{stats.learned} / {stats.total} kart</p>
            </div>
          )
        })}
      </div>

      <div className="flashcards-list">
        <h3>
          {selectedCategory === 'all' ? 'Tüm Kartlar' : selectedCategory}
          <span className="list-count">({filteredCards.length} kart)</span>
        </h3>
        <div className="cards-grid">
          {filteredCards.map((card, index) => (
            <div
              key={card.id}
              className={`mini-card ${isCardLearned(card.id) ? 'learned' : ''}`}
              onClick={() => {
                setCurrentIndex(index)
                startStudyMode()
              }}
            >
              {isCardLearned(card.id) && (
                <div className="learned-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
              <p className="mini-card-question">{card.front}</p>
              <span className="mini-card-category">{card.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
