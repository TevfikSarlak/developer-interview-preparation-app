import React, { useState, useEffect } from "react";
import { HTMLQuestions } from '../data/HTMLQuestions';
import { CSSQuestions } from '../data/CSSQuestions';
import { JavaScriptQuestions } from '../data/JavaScriptQuestions';
import { ReactQuestions } from '../data/ReactQuestions';

// InterviewQuestions component
export default function InterviewQuestions(props) {
  const dataHTML = HTMLQuestions;
  const dataCSS = CSSQuestions;
  const dataJavaScript = JavaScriptQuestions;
  const dataReact = ReactQuestions;

  const topic = props.topicOfQuestions;

  const [isShown, setIsShown] = useState(Array(props.countOfQuestions).fill(false));
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    // Randomize and filter questions based on props
    const myData = dataMaker(topic);
    const randomizeQuestions = myData.sort(() => Math.random() - 0.5)
    const filteredQuestions = randomizeQuestions.slice(0,props.countOfQuestions)
    setFilteredQuestions(filteredQuestions);
  }, [props.countOfQuestions, props.topicOfQuestions, props.typeOfQuestions, props.button]); 

  const dataMaker = (topic) => {
    let data = [];

    // Set data based on topic
    if(topic==='HTML'){
      data = dataHTML;
    } if (topic === 'CSS'){
      data = dataCSS;
    } if (topic === 'JavaScript'){
      data = dataJavaScript;
    } if (topic === "ReactJS"){
      data = dataReact;
    }

    return data;
  }
  
  const handleToggleAnswer = (index) => {
    // Toggle answer visibility
    const updatedIsShown = [...isShown];
    updatedIsShown[index] = !updatedIsShown[index];
    setIsShown(updatedIsShown);
  }

  useEffect(()=>{
    // Reset answer visibility when props change
    setIsShown(Array(props.countOfQuestions).fill(false))
  },[props.button, props.countOfQuestions, props.topicOfQuestions, props.typeOfQuestions])

  const listQuestions = filteredQuestions.map((question, index) => (
    <ol key={question.id} className="bg-white rounded-lg font-mont text-slate-700 leading-loose flex flex-col justify-start
    space-y-10 my-1 p-6 mx-8 md:mx-48 shadow-xl ">
      <p><span className="font-semibold text-left underline leading-loose">Question:</span> {question.question}</p>
      {isShown[index] && (<p className="text-left"><span className="font-semibold text-left underline leading-loose">Answer:</span> {question.answer}</p>)}
      <div className="flex justify-end md:mr-3 mr-1">
        <button
          onClick={() => handleToggleAnswer(index)}
          className={`${
            isShown[index] ? "bg-lime-400" : "bg-lightRed "
          } font-mont font-semibold text-white px-5 py-1 rounded-lg hover:opacity-75 active:translate-y-1`}
        >
          {isShown[index] ? "Hide Answer" : "Show Answer"}
        </button>
      </div>
    </ol>
  ));

  return (
    props.button && (
      <ul className="mt-8 mx-auto leading-3 space-y-4">
        {listQuestions}
      </ul>
    )
  );
}
