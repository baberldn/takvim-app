import { useState } from 'react';
import { courses } from '../data/courses';

const DAYS = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
const CATEGORIES = [
  { id: 'ders', name: 'Ders Çalışma', color: '#667eea' },
  { id: 'gorev', name: 'Proje/Görev', color: '#22c55e' },
  { id: 'tekrar', name: 'Tekrar', color: '#f59e0b' },
  { id: 'kisisel', name: 'Kişisel', color: '#9C27B0' },
  { id: 'diger', name: 'Diğer', color: '#607D8B' },
];

// Tüm dersleri düz liste olarak al
const allLessons = courses.flatMap(week =>
  week.lessons.map(lesson => ({
    ...lesson,
    weekNumber: week.week,
    weekTitle: week.title
  }))
);

function getWeekDates(date) {
  const current = new Date(date);
  const dayOfWeek = current.getDay();
  const monday = new Date(current);
  monday.setDate(current.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    weekDates.push(d);
  }
  return weekDates;
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

export function Calendar({ events, onAddEvent, onEditEvent, onDeleteEvent }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '09:00',
    category: 'ders',
    lessonId: '',
  });

  const weekDates = getWeekDates(currentDate);

  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const openAddForm = (date) => {
    setSelectedEvent(null);
    setFormData({
      title: '',
      description: '',
      date: formatDate(date),
      time: '09:00',
      category: 'ders',
      lessonId: '',
    });
    setShowForm(true);
  };

  const openEditForm = (event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title,
      description: event.description || '',
      date: event.date,
      time: event.time,
      category: event.category,
      lessonId: event.lessonId || '',
    });
    setShowForm(true);
  };

  const handleLessonSelect = (lessonId) => {
    const lesson = allLessons.find(l => l.id === lessonId);
    if (lesson) {
      setFormData({
        ...formData,
        lessonId,
        title: lesson.title,
        description: `Hafta ${lesson.weekNumber}: ${lesson.weekTitle}\nSüre: ${lesson.duration}`,
      });
    } else {
      setFormData({
        ...formData,
        lessonId: '',
        title: '',
        description: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (selectedEvent) {
      onEditEvent({ ...selectedEvent, ...formData });
    } else {
      onAddEvent({
        id: Date.now().toString(),
        ...formData,
      });
    }
    setShowForm(false);
  };

  const handleDelete = () => {
    if (selectedEvent && confirm('Bu etkinliği silmek istediğinize emin misiniz?')) {
      onDeleteEvent(selectedEvent.id);
      setShowForm(false);
    }
  };

  const getEventsForDate = (date) => {
    const dateStr = formatDate(date);
    return events.filter((e) => e.date === dateStr).sort((a, b) => a.time.localeCompare(b.time));
  };

  const getCategoryColor = (categoryId) => {
    return CATEGORIES.find((c) => c.id === categoryId)?.color || '#607D8B';
  };

  const isToday = (date) => {
    const today = new Date();
    return formatDate(date) === formatDate(today);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={goToPreviousWeek} className="nav-btn">← Önceki</button>
        <button onClick={goToToday} className="today-btn">Bugün</button>
        <button onClick={goToNextWeek} className="nav-btn">Sonraki →</button>
      </div>

      <div className="week-grid">
        {weekDates.map((date, index) => (
          <div key={index} className={`day-column ${isToday(date) ? 'today' : ''}`}>
            <div className="day-header">
              <span className="day-name">{DAYS[index]}</span>
              <span className="day-date">{date.getDate()}/{date.getMonth() + 1}</span>
            </div>
            <div className="day-events">
              {getEventsForDate(date).map((event) => (
                <div
                  key={event.id}
                  className="event-card"
                  style={{ borderLeftColor: getCategoryColor(event.category) }}
                  onClick={() => openEditForm(event)}
                >
                  <span className="event-time">{event.time}</span>
                  <span className="event-title">{event.title}</span>
                </div>
              ))}
              <button className="add-event-btn" onClick={() => openAddForm(date)}>
                + Ekle
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent ? 'Etkinliği Düzenle' : 'Yeni Etkinlik'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Kategori</label>
                <div className="category-options">
                  {CATEGORIES.map((cat) => (
                    <label
                      key={cat.id}
                      className={`category-option ${formData.category === cat.id ? 'selected' : ''}`}
                      style={{ '--cat-color': cat.color }}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={formData.category === cat.id}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value, lessonId: '' })}
                      />
                      {cat.name}
                    </label>
                  ))}
                </div>
              </div>

              {(formData.category === 'ders' || formData.category === 'tekrar') && (
                <div className="form-group">
                  <label>Ders Seçin</label>
                  <select
                    className="lesson-select"
                    value={formData.lessonId}
                    onChange={(e) => handleLessonSelect(e.target.value)}
                  >
                    <option value="">-- Ders seçin --</option>
                    {courses.map((week) => (
                      <optgroup key={week.week} label={`Hafta ${week.week}: ${week.title}`}>
                        {week.lessons.map((lesson) => (
                          <option key={lesson.id} value={lesson.id}>
                            {lesson.id} - {lesson.title}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-group">
                <label>Açıklama</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detaylar..."
                  rows={3}
                />
              </div>

              <div className="form-actions">
                {selectedEvent && (
                  <button type="button" className="delete-btn" onClick={handleDelete}>
                    Sil
                  </button>
                )}
                <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                  İptal
                </button>
                <button type="submit" className="submit-btn">
                  {selectedEvent ? 'Güncelle' : 'Ekle'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
