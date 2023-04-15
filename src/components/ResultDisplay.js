import React, { useContext, useState } from "react";
import { InterviewContext } from "./TestInterviewQuestions";

export const ResultDisplay = () => {
  const { filteredQuestions, selectedOption } = useContext(InterviewContext);

  const resultOfQuestions = filteredQuestions.map((question, index) => {
    const isCorrect = selectedOption[index] === question.answer;
   

    return (
      <ol
        key={question.id}
        className={`"bg-white rounded-lg font-mont text-slate-700 leading-loose flex flex-col  justify-start space-y-10 my-1 p-6 mx-8 md:mx-48 shadow-xl 
        ${
            isCorrect ? "bg-lime-100" : "bg-red-100"
          }`}
      >
        <p >
         <div>
         <h1
                className={`font-bold font-mont text-white border-2 bg-grayishBlue inline-flex 
                px-7 py-3 mb-4 items-center justify-between rounded-lg `}
                >
                {isCorrect ? (
                    <span>
                    ✅ Correct{" "}
                    <span role="img" aria-label="Happy Smiley">
                        😃
                    </span>
                    </span>
                ) : (
                    <span>
                    ❌ Wrong{" "}
                    <span role="img" aria-label="Unhappy Smiley">
                        😞
                    </span>
                    </span>
                )}
                </h1>

          </div>
          <span className="font-semibold text-left underline leading-loose">
            Question:
          </span>{" "}
          {question.question}
        </p>

        {isCorrect ? (
          ""
        ) : (
          <p>
            <span className="font-semibold text-left underline leading-loose">
              Given Answer:
            </span>{" "}
            {question.choices[selectedOption[index]]}
          </p>
        )}
        <p>
          <span className="font-semibold text-left underline leading-loose">
            Correct Answer:
          </span>{" "}
          {question.choices[question.answer]}
        </p>
      </ol>
    );
  });

  return (
    <ul className="mt-8 mx-auto leading-3 space-y-4">{resultOfQuestions}</ul>
  );
};
