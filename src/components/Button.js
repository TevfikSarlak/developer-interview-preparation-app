import React from "react";

export default function Button ({text, onClick}){
    return (
        <div>
            <button className="flex flex-row justify-center items-center px-5 py-3 bg-grayishBlue text-white font-semibold
            hover:bg-darkBlue active:opacity-5 shadow-lg hover:shodow-none mt-6 mb-12 mx-auto rounded-full" onClick={onClick}>
                {text}
            </button>
        </div>
    )
}