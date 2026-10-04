import Option_Page from './Option_page'

type QuestionPageProps = {
  question: string
  options: string[]
  questionNumber: number
  totalQuestions: number
  selectedAnswer: string
  onSelect: (answer: string) => void
  onSubmit: () => void
}

export default function Question_Page({ question, options, questionNumber, totalQuestions, selectedAnswer, onSelect, onSubmit }: QuestionPageProps) {
  return (
    <form className="quiz-question" onSubmit={(event) => { event.preventDefault(); onSubmit() }}>
      <div aria-live="polite" aria-atomic="true">
        <p className="question-counter">Question <strong>{questionNumber}</strong> of {totalQuestions}</p>
        <div className="question-panel">
          <p className="question-category">GENERAL KNOWLEDGE</p>
          <h2 id="question-heading">{question}</h2>
        </div>
      </div>
      <Option_Page options={options} selectedAnswer={selectedAnswer} onSelect={onSelect} />
      <div className="quiz-actions">
        <p id="answer-hint">{selectedAnswer ? 'Ready? Submit your answer.' : 'Choose an answer to continue.'}</p>
        <button className="start-button next-button" type="submit" disabled={!selectedAnswer} aria-describedby="answer-hint">
          {questionNumber === totalQuestions ? 'Finish Quiz' : 'Next'} <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  )
}
