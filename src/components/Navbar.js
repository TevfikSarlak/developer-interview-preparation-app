import React from "react";

export default function Navbar(props) {
    return (
        <div>
            {/* Navbar header */}
            <div className="bg-grayishBlue flex flex-col font-mont mx-auto mt-0 pt-12 space-y-8 ">
                <h3 className="text-3xl md:text-6xl font-semibold text-white text-left ml-12 md:ml-24">
                    <span className="text-lightRed">Frontend Developer</span> 
                    <br></br><span className="text-lightBlue">Interview</span> preparation <span className="text-lime-400">helper.</span>
                </h3>
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent leading-loose bg-clip-text bg-gradient-to-r from-lime-300 to-red-700"> Get Ready? </h1>
                <p className="text-2xl md:text-3xl font-semibold text-white">Choose your test properties</p>
                <img className="h-72 w-72 mx-auto" src="./images/online-test.svg" alt="vector-logo"/>
                <p className="text-2xl md:text-3xl mx-auto font-semibold text-lime-300">and test yourself...</p>
            </div>

            {/* Navbar navigation */}
            <nav className="bg-grayishBlue font-mont flex flex-row px-8 mt-0 pt-32 pb-8 items-end justify-evenly space-x-4 text-white">
                {/* Topic of Questions */}
                <div>
                    <label className="text-white font-mont font-semibold">
                        Topic of Questions?
                    </label>
                    <div className="font-mont">
                        <select 
                            defaultValue="HTML" 
                            value={props.topicOfQuestions} 
                            onChange={props.topicHandler}
                            className="rounded-sm p-2 text-slate-700 hover:bg-gray-100 focus:outline-none "
                        >
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="ReactJS">ReactJS</option>
                        </select>
                    </div>
                </div>

                {/* Type of Questions */}
                <div>
                    <label className="text-white font-semibold ">
                        Type of Questions?
                    </label>
                    <div>
                        <select 
                            defaultValue="Open-ended" 
                            value={props.typeOfQuestions} 
                            onChange={props.typeHandler}
                            className="rounded-sm p-2 text-slate-700 hover:bg-gray-100 focus:outline-none "
                        >
                            <option value="Open-ended">Open-ended</option>
                            <option value="Multiple">Multiple Choice</option>
                        </select>
                    </div>
                </div> 

                {/* Count of Questions */}
                <div>
                    <label className="text-white font-semibold">
                        Count of Questions?
                    </label>
                    <div>
                        <input 
                            type="number" 
                            max="20"
                            min="1"
                            value={props.countOfQuestions} 
                            onChange={props.countHandler}
                            className="w-16 h-6 rounded-sm text-slate-700 pt-5 pb-4 mt-1 px-2 focus:outline-none" 
                        />
                    </div>
                </div>  
            </nav>
           
        </div>
    )
}
