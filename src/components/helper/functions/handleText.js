import React from "react";

const handleFromatText = (text) => {
    return text.split('\n').map(str => <>{str}<br/></>)
}

const handleLimitedText = (text, count) => {
    let newText = text.slice(0, count) + (text.length > count ? "..." : "");
    return handleFromatText(newText)
}

export { handleFromatText, handleLimitedText }