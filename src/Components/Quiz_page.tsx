import { useState } from "react";
import Progress from "./Progress";
import Question_Page from "./Question_page";

export default function Quiz_Page() {
  const question = {
    questions: [
      {
        id: 1,
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Beijing"],
        correctAnswer: "Tokyo",
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
      },
      {
        id: 3,
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
      },
      {
        id: 4,
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "8"],
        correctAnswer: "6",
      },
      {
        id: 5,
        question: "Who wrote Romeo and Juliet?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
        correctAnswer: "William Shakespeare",
      },
      {
        id: 6,
        question: "What is the highest mountain in the Philippines?",
        options: ["Mount Pulag", "Mount Apo", "Mount Mayon"],
        correctAnswer: "Mount Apo",
      },
      {
        id: 7,
        question:
          "Which national hero of the Philippines wrote the famous novels Noli Me Tángere and El Filibusterismo?",
        options: ["Andres Bonifacio", "Apolinario Mabini", "Dr. Jose Rizal"],
        correctAnswer: "Dr. Jose Rizal",
      },
      {
        id: 8,
        question:
          "Known for its symmetric conical shape, which active volcano is located in the province of Albay, Bicol?",
        options: ["Taal Volcano", "Mount Pinatubo", "Mount Mayon"],
        correctAnswer: "Mount Mayon",
      },
      {
        id: 9,
        question:
          "What is the oldest city in the Philippines, established by Miguel López de Legazpi in 1565?",
        options: ["Manila", "Cebu City", "Vigan"],
        correctAnswer: "Cebu City",
      },
      {
        id: 10,
        question:
          "Which famous natural wonder in Palawan was named one of the New 7 Wonders of Nature?",
        options: [
          "Tubbataha Reefs",
          "Puerto Princesa Subterranean River",
          "Kayangan Lake",
        ],
        correctAnswer: "Puerto Princesa Subterranean River",
      },
    ],
  };

  const orderedQuestions = [...question.questions].sort((a, b) => a.id - b.id);
  const [currentQuestionId, setCurrentQuestionId] = useState(
    orderedQuestions[0].id,
  );
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [results, setResults] = useState<(boolean | null)[]>(
    Array(question.questions.length).fill(null),
  );
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const score = results.filter((result) => result === true).length;
  const currentQuestionIndex = orderedQuestions.findIndex(
    (item) => item.id === currentQuestionId,
  );
  const activeQuestion = orderedQuestions[currentQuestionIndex];

  function submitAnswer() {
    if (
      isQuizFinished ||
      !selectedAnswer ||
      results[currentQuestionIndex] !== null
    )
      return;
    const isCorrect = selectedAnswer === activeQuestion.correctAnswer;
    setResults((previous) =>
      previous.map((result, index) =>
        index === currentQuestionIndex ? isCorrect : result,
      ),
    );
    setSelectedAnswer("");
    const nextQuestion = orderedQuestions[currentQuestionIndex + 1];
    if (!nextQuestion) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestionId(nextQuestion.id);
    }
  }

  return (
    <main
      className="quiz-main"
      aria-labelledby={isQuizFinished ? "result-heading" : "question-heading"}
    >
      <div className="quiz-shell">
        <Progress results={results} />
        {isQuizFinished ? (
          <section className="quiz-result" aria-live="polite">
            <div className="confetti" aria-hidden="true">
              {Array.from({ length: 48 }, (_, index) => (
                <i
                  key={index}
                  style={{
                    left: `${(index * 37) % 100}%`,
                    backgroundColor: [
                      "var(--teal)",
                      "var(--red)",
                      "var(--ink)",
                      "#fff4d6",
                    ][index % 4],
                    animationDelay: `${(index % 12) * 0.09}s`,
                    animationDuration: `${2.5 + (index % 5) * 0.25}s`,
                  }}
                />
              ))}
            </div>
            <p className="question-category">ALL DONE. STAY CURIOUS!</p>
            <h2 id="result-heading">Quiz complete!</h2>
            <p className="result-score">
              {score} <span>/ {question.questions.length}</span>
            </p>
            <p>Your final score</p>
            <p className="result-encouragement">
              Every question is a chance to grow. Keep learning, stay curious,
              and give it another go!
            </p>
            <a className="start-button try-again-button" href="./">
              Try Again
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
              </svg>
            </a>
          </section>
        ) : (
          <Question_Page
            key={activeQuestion.id}
            question={activeQuestion.question}
            options={activeQuestion.options}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={question.questions.length}
            selectedAnswer={selectedAnswer}
            onSelect={setSelectedAnswer}
            onSubmit={submitAnswer}
          />
        )}
      </div>
      <p className="quiz-note">A little challenge. A lot of fun.</p>
    </main>
  );
}
