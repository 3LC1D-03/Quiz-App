import './App.css'
import Quiz_Page from './Components/Quiz_page'

function App() {
  const showQuiz = new URLSearchParams(window.location.search).get('screen') === 'quiz'
  return (
    <div className="welcome-page">
      <header className="site-header">
        <a className="wordmark" href="./" aria-label="Quiz App home">
          <span className="brand-icon" aria-hidden="true">Q</span>
          Quiz App<span className="brand-dot">.</span>
        </a>
        <span className="header-note">A little curiosity goes a long way.</span>
      </header>

      {showQuiz ? <Quiz_Page /> : <main className="welcome" aria-labelledby="welcome-heading">
        <div className="quiz-art" aria-hidden="true">
          <span className="spark spark-left">✳</span>
          <div className="back-card" />
          <div className="question-card">
            <span className="card-label">BIG IDEAS. LITTLE QUIZZES.</span>
            <span className="question-mark">?</span>
            <span className="card-dots"><i /><i /><i /></span>
          </div>
          <span className="check-sticker">✓</span>
          <span className="spark spark-right">✦</span>
        </div>

        <p className="eyebrow">READY, SET, THINK!</p>
        <h1 id="welcome-heading">Welcome to<br /><span>Front end Quiz!</span></h1>
        <p className="welcome-description">Big on curiosity? You're in the right place.<br />Give your brain a little playtime.</p>
        <a className="start-button" href="?screen=quiz">
          Start Quiz
        </a>
        <p className="small-note">A little challenge. A lot of fun.</p>
      </main>}

      <footer className="site-footer">
        <span>STAY CURIOUS.</span>
        <span className="footer-decoration" aria-hidden="true"><i /><i /><i /></span>
        <span>LET YOUR BRAIN PLAY.</span>
      </footer>
    </div>
  )
}

export default App
