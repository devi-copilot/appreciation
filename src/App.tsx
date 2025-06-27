import { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useTranslation } from 'react-i18next'
import './App.css'

const defaultMessages = [
  'Thank you for your hard work!',
  'You are a valuable member of our team!',
  'Your dedication is truly appreciated!',
]

function App() {
  const [employeeId, setEmployeeId] = useState('')
  const [message, setMessage] = useState('')
  const [selectedSticker, setSelectedSticker] = useState<string | null>(null)
  const [appreciationLog, setAppreciationLog] = useState<{from: string, to: string, msg: string}[]>([])
  const { transcript, listening } = useSpeechRecognition()
  const { t, i18n } = useTranslation()

  const stickers = [
    '/src/assets/stickers/1.png',
    '/src/assets/stickers/2.png',
    '/src/assets/stickers/3.png',
  ]

  const handleStickerSelect = (sticker: string) => {
    setSelectedSticker(sticker)
  }

  const handleDefaultMessage = (msg: string) => {
    setMessage(msg)
  }

  const handleVoiceToText = () => {
    SpeechRecognition.startListening({ continuous: false })
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  const handleSendAppreciation = () => {
    // For demo, assume current user is employee 12345
    if (employeeId && (message || transcript)) {
      setAppreciationLog([
        ...appreciationLog,
        { from: '12345', to: employeeId, msg: message || transcript }
      ])
      setMessage('')
      setSelectedSticker(null)
    }
  }

  return (
    <div className="app-bg">
      <h1>{t('Employee Appreciation')}</h1>
      <div className="main-content" style={{ display: 'flex', width: '100%', maxWidth: 1200 }}>
        <div style={{ flex: 2 }}>
          <div className="search-section">
            <input
              type="text"
              placeholder={t('Enter Employee ID')}
              value={employeeId}
              onChange={e => setEmployeeId(e.target.value)}
            />
          </div>
          <div className="default-messages">
            {defaultMessages.map((msg, idx) => (
              <button key={idx} onClick={() => handleDefaultMessage(msg)}>{t(msg)}</button>
            ))}
          </div>
          <textarea
            className="message-box"
            placeholder={t('Write your appreciation message...')}
            value={message || transcript}
            onChange={e => setMessage(e.target.value)}
            rows={4}
          />
          <div className="controls">
            <button onClick={handleVoiceToText}>{listening ? t('Listening...') : t('Voice to Text')}</button>
            <select onChange={handleLanguageChange} className="lang-select">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
            <button style={{ background: '#fda085', color: '#fff' }} onClick={handleSendAppreciation}>
              Appreciate
            </button>
          </div>
          <div className="stickers">
            {stickers.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`sticker-${idx}`}
                className={`sticker ${selectedSticker === src ? 'selected' : ''}`}
                onClick={() => handleStickerSelect(src)}
              />
            ))}
          </div>
          <div className="summary">
            <h2>{t('Preview')}</h2>
            <p><b>{t('Employee ID')}:</b> {employeeId}</p>
            <p><b>{t('Message')}:</b> {message || transcript}</p>
            {selectedSticker && <img src={selectedSticker} alt="Selected Sticker" className="sticker-preview" />}
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: 32, background: '#fffbe6', borderRadius: 12, padding: 16, minHeight: 300, boxShadow: '0 2px 8px rgba(253,160,133,0.15)' }}>
          <h2 style={{ color: '#fda085' }}>Recent Appreciations</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {appreciationLog.length === 0 && <li style={{ color: '#888' }}>No appreciations yet.</li>}
            {appreciationLog.map((log, idx) => (
              <li key={idx} style={{ marginBottom: 16, textAlign: 'left' }}>
                <span style={{ fontWeight: 500, color: '#fda085' }}>Employee {log.from}</span> appreciated <span style={{ fontWeight: 500, color: '#f6d365' }}>Employee {log.to}</span><br />
                <span style={{ color: '#222' }}>{log.msg}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
