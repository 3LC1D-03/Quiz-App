type OptionPageProps = {
  options: string[]
  selectedAnswer: string
  onSelect: (answer: string) => void
}

export default function Option_Page({ options, selectedAnswer, onSelect }: OptionPageProps) {
  return (
    <fieldset className="quiz-options">
      <legend>Choose one answer</legend>
      {options.map((option) => (
        <label className="quiz-option" key={option}>
          <input type="radio" name="quiz-answer" value={option} checked={selectedAnswer === option} onChange={() => onSelect(option)} required />
          <span>{option}</span>
        </label>
      ))}
    </fieldset>
  )
}
