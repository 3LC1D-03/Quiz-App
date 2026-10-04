type ProgressProps = { results: (boolean | null)[] }

export default function Progress({ results }: ProgressProps) {
  const submitted = results.filter((result) => result !== null).length
  return (
    <div className="quiz-progress" aria-label={`Quiz progress: ${submitted} of ${results.length} answers submitted`}>
      <span className="progress-label">Progress</span>
      <ol className="progress-circles" aria-label="Questions">
        {results.map((result, index) => {
          const status = result === null ? 'unanswered' : result ? 'correct' : 'wrong'
          return (
            <li key={index} className={`progress-circle progress-${status}`} aria-label={`Question ${index + 1}: ${status}`} />
          )
        })}
      </ol>
    </div>
  )
}
