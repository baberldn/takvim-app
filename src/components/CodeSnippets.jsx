import { useState } from 'react'
import { snippets, snippetCategories } from '../data/snippets'

export function CodeSnippets() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedSnippet, setExpandedSnippet] = useState(null)
  const [copiedId, setCopiedId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesCategory = selectedCategory === 'all' || snippet.category === selectedCategory
    const matchesSearch = searchQuery === '' ||
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.code.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCopy = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  const toggleExpand = (id) => {
    setExpandedSnippet(expandedSnippet === id ? null : id)
  }

  const getSnippetsByCategory = () => {
    if (selectedCategory !== 'all') {
      return [{ category: selectedCategory, snippets: filteredSnippets }]
    }

    return snippetCategories.map((cat) => ({
      category: cat,
      snippets: filteredSnippets.filter((s) => s.category === cat)
    })).filter((group) => group.snippets.length > 0)
  }

  const groupedSnippets = getSnippetsByCategory()

  return (
    <div className="code-snippets">
      <div className="snippets-header">
        <div className="snippets-title">
          <h2>Kod Örnekleri</h2>
          <p>Hazır kod parçaları - kopyala ve kullan</p>
        </div>
        <div className="snippets-stats">
          <div className="stat-item">
            <span className="stat-number">{snippets.length}</span>
            <span className="stat-label">Snippet</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{snippetCategories.length}</span>
            <span className="stat-label">Kategori</span>
          </div>
        </div>
      </div>

      <div className="snippets-controls">
        <div className="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Kod ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        <div className="category-filters">
          <button
            className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            Tümü
          </button>
          {snippetCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {searchQuery && (
        <div className="search-results-info">
          {filteredSnippets.length} sonuç bulundu
        </div>
      )}

      <div className="snippets-content">
        {groupedSnippets.map((group) => (
          <div key={group.category} className="snippet-group">
            <h3 className="group-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              {group.category}
              <span className="group-count">{group.snippets.length}</span>
            </h3>

            <div className="snippets-list">
              {group.snippets.map((snippet) => (
                <div
                  key={snippet.id}
                  className={`snippet-card ${expandedSnippet === snippet.id ? 'expanded' : ''}`}
                >
                  <div className="snippet-header" onClick={() => toggleExpand(snippet.id)}>
                    <div className="snippet-info">
                      <h4>{snippet.title}</h4>
                      <p>{snippet.description}</p>
                    </div>
                    <div className="snippet-actions">
                      <button
                        className={`copy-btn ${copiedId === snippet.id ? 'copied' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCopy(snippet.code, snippet.id)
                        }}
                      >
                        {copiedId === snippet.id ? (
                          <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Kopyalandı
                          </>
                        ) : (
                          <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            Kopyala
                          </>
                        )}
                      </button>
                      <button className="expand-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          {expandedSnippet === snippet.id ? (
                            <polyline points="18 15 12 9 6 15" />
                          ) : (
                            <polyline points="6 9 12 15 18 9" />
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>

                  {expandedSnippet === snippet.id && (
                    <div className="snippet-code-wrapper">
                      <div className="code-header">
                        <span className="code-lang">JavaScript / JSX</span>
                        <button
                          className={`copy-btn small ${copiedId === snippet.id ? 'copied' : ''}`}
                          onClick={() => handleCopy(snippet.code, snippet.id)}
                        >
                          {copiedId === snippet.id ? 'Kopyalandı!' : 'Kopyala'}
                        </button>
                      </div>
                      <pre className="snippet-code">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredSnippets.length === 0 && (
        <div className="no-results">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          <h3>Sonuç bulunamadı</h3>
          <p>Farklı bir arama terimi deneyin</p>
        </div>
      )}
    </div>
  )
}
