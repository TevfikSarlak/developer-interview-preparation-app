import React, { useState, useEffect, createContext } from "react";
import { TestHTMLQuestions } from '../testData/TestHTMLQuestions';
import { TestCSSQuestions } from '../testData/TestCSSQuestions';
import { TestJavaScriptQuestions } from '../testData/TestJavaScriptQuestions';
import { TestReactQuestions } from '../testData/TestReactQuestions';
import { ResultDisplay } from "../components/ResultDisplay";
import { ResultButton } from "../components/ResultButton";


export const InterviewContext = createContext("");


export default function TestInterviewQuestions(props) {
  const dataTestHTML = TestHTMLQuestions ;
  const dataTestCSS =  TestCSSQuestions ;
  const dataTestJavaScript =  TestJavaScriptQuestions ;
  const dataTestReact = TestReactQuestions ;

  const topicTest = props.topicOfQuestions;

  const [filteredQuestions, setFilteredQuestions] = useState(dataTestHTML);
  const [selectedOption, setSelectedOption] = useState(Array(filteredQuestions.length).fill(null));
  const [resultShown, setResultShown] = useState(false)


  


  useEffect(() => {
    const myTestData = dataArranger(topicTest);
    console.log(myTestData);
    const randomizeQuestions = myTestData.sort(() => Math.random() - 0.5)

    const filteredQuestions = randomizeQuestions.slice(0, props.countOfQuestions)
    setFilteredQuestions(filteredQuestions);
  }, [props.countOfQuestions, props.topicOfQuestions, props.typeOfQuestions, props.button]);

  const dataArranger = (topicTest) => {
    let dataTest = [];
    if (topicTest === 'HTML') {
      dataTest = dataTestHTML;
    } else if (topicTest === 'CSS') {
      dataTest = dataTestCSS;
    } else if (topicTest === 'JavaScript') {
      dataTest = dataTestJavaScript;
    } else if (topicTest === 'ReactJS') {
      dataTest = dataTestReact;
    }
    return dataTest ; 
  };

  function checkHandler (event, index) {
      const updatedOptions = [...selectedOption];
      updatedOptions[index] = event.target.value;
      setSelectedOption(updatedOptions);
    };
  
    useEffect(() => {
        setSelectedOption(Array(filteredQuestions.length).fill(null));
      }, [props.button, props.typeOfQuestions, props.countOfQuestions, props.topicOfQuestions]);
      

    const answerControl =() => {
        let checkArray = filteredQuestions.map(question => question.answer);
        let correctAnswer = 0;
        let option = selectedOption
    
        // Check if filteredQuestions and selectedOption have the same length
        if (checkArray.length === option.length) {
          for (let i = 0; i < checkArray.length; i++) {
            if (checkArray[i] === option[i]) {
              correctAnswer += 1;
            }
          }
        } else {
          console.warn('Warning: filteredQuestions and selectedOption have different lengths.');
          // You can also throw an error or show an error message to the user, depending on your specific use case.
        }
        console.log(checkArray)
        console.log(option)
    
        return `You have got ${correctAnswer} correct questions`
      }
      
      
  
   

  
  const listQuestions = filteredQuestions.map((question, index) => (
    <ol key={question.id} className="bg-white rounded-lg font-mont text-slate-700 leading-loose flex flex-col justify-start
    space-y-10 my-1 p-6 mx-8 md:mx-48 shadow-xl ">
      <p><span className="font-semibold text-left underline leading-loose">Question:</span> {question.question}</p>
      
        
       <div className="text-left ml-8 md:ml-24 mb-16 justify-items-center">
        <div className="space-x-1 items-center space-y-3">
            <input type="radio"  
                   name={`question-${index}`} 
                   value="a" className="text-left space-x-1 h-4 w-4 custom-radio" 
                   onChange={(event)=>checkHandler(event,index)} 
                   checked={selectedOption[index]==="a"}/>
            <label>a. {question.choices.a}</label>
        </div>
        <div className="space-x-1">
            <input type="radio"  
                   name={`question-${index}`} 
                   value="b" className="text-left space-x-1 h-4 w-4 custom-radio" 
                   onChange={(event)=>checkHandler(event,index)} 
                   checked={selectedOption[index]==="b"}/>
            <label>b. {question.choices.b}</label>
        </div>
        <div className="space-x-1">
            <input type="radio"  
                   name={`question-${index}`} 
                   value="c" className="text-left space-x-1 h-4 w-4 custom-radio"
                   onChange={(event)=>checkHandler(event,index)} 
                   checked={selectedOption[index]==="c"}/>
            <label>c. {question.choices.c}</label>
        </div>
        <div className="space-x-1 mb-16">
            <input type="radio"  
                   name={`question-${index}`} 
                   value="d" className="text-left space-x-1 h-4 w-4 custom-radio"
                   onChange={(event)=>checkHandler(event,index)} 
                   checked={selectedOption[index]==="d"}/>
            <label>d. {question.choices.d}</label>
        </div>
    </div>
      
    </ol>
  ));

  return (
        
        <div>
        <InterviewContext.Provider value={{ filteredQuestions, selectedOption }}>
        {props.button  && (
            <ul className="mt-8 mx-auto leading-3 space-y-4">
            {listQuestions}
            </ul>
        )}
        {!resultShown && (<ResultButton text="&#9989; Check Your Answers &#10060;" onClick={()=> setResultShown(prev => !prev)} />)}
        {resultShown && (<ResultDisplay />)}
        
        </InterviewContext.Provider>
    </div>
  
      
  );
}  