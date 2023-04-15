import React from "react";

export const ResultButton = ({text, onClick}) => {
    return (
        <div>
            <button className="flex flex-row justify-end items-center px-5 py-3 bg-grayishBlue text-white font-semibold
            hover:bg-darkBlue active:opacity-5 shadow-lg hover:shodow-none my-6 mx-auto rounded-full" onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

