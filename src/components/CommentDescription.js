import React from 'react';

const CommentDescription = ({ data }) => {
    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

    const formattedData = data.replace(/<br>/g, '\n').replace(/&amp;/g, '&');

    return (
        <div className="w-9/12 mt-2 px-2 py-4 bg-zinc-100 shadow space-y-2 rounded-md">
            {renderHTML(formattedData)}
        </div>
    );
};

export default CommentDescription;
