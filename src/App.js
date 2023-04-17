import './App.css';
import InterviewQuestions from './components/InterviewQuestions';
import TestInterviewQuestions from './components/TestInterviewQuestions';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import { Footer } from './components/Footer';









function App() {

  const [topicOfQuestions, setTopicOfQuestions] = useState('HTML')
  const [typeOfQuestions, setTypeOfQuestions] = useState('Open-ended')
  const [countOfQuestions, setCountOfQuestions] = useState(3)
  const [button, setButton] = useState(false)
  const [finishButton, setFinishButton] = useState(false)

 useEffect(()=> {
  setTopicOfQuestions("HTML")
  setTypeOfQuestions("Open-ended")
  setCountOfQuestions(3)
  setButton(false)
  setFinishButton(false)
  
 },[finishButton])

  function topicHandler (event) {
    const topicOfQuestions = event.target.value
    setTopicOfQuestions(topicOfQuestions)
    
  }

  function typeHandler (event) {
    const typeOfQuestions = event.target.value
    setTypeOfQuestions(typeOfQuestions)
    
  }

  function countHandler (event) {
    const countOfQuestions = event.target.value
    if (countOfQuestions>30){
      alert("You choose too many questions! In interviews there is not so many questions.")
    }else {
    setCountOfQuestions(countOfQuestions)
    }
    
  }

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [finishButton]);


  function currentTest() {
    let currentPage

    if(typeOfQuestions === "Open-ended") {
      currentPage = <InterviewQuestions button={button}
                                        setButton={setButton}
                                        topicOfQuestions={topicOfQuestions}
                                        countOfQuestions={countOfQuestions}
                                        typeOfQuestions={typeOfQuestions} />
    } if(typeOfQuestions === "Multiple") {
      currentPage = <TestInterviewQuestions button={button}
                                            setButton={setButton}
                                            topicOfQuestions={topicOfQuestions}
                                            countOfQuestions={countOfQuestions}
                                            typeOfQuestions={typeOfQuestions} />
    }
    return currentPage
  }

  

 
  
 

  return (
    <div className="App">
      
         <Navbar topicOfQuestions={topicOfQuestions}
                 topicHandler={topicHandler}
                 typeOfQuestions={typeOfQuestions}
                 typeHandler={typeHandler}
                 countOfQuestions={countOfQuestions}
                 countHandler={countHandler} />   
          
        
        
         {!button ? (<Button text="Test me &#129299;" onClick={()=>setButton(prev=>!prev)} />) :
          (<h1 className='mt-4 font-semibold text-2xl text-grayishBlue underline font-mont'>&#128071;Here Comes Your Questions!&#128071;</h1>)}
         
         {currentTest()}
         
         {(!finishButton && button) && (<Button text="&#129308; Finish Test &#129307;" onClick={()=>setFinishButton(prev=>!prev)} />)}
         
        <Footer />
    </div>
  );
}

export default App;
