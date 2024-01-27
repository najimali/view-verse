import React from 'react';

const VideoDescription = ({ data, setShowMoreDescription }) => {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;

    const renderText = (line) => {
        const words = line.split(' ');
        return words.map((word, index) => {
            if (word.match(urlRegex)) {
                return (
                    <a href={word} key={index} className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                        {word}
                    </a>
                );
            } else {
                return <React.Fragment key={index}>{word} </React.Fragment>;
            }
        });
    };
    const lines = data.split('\n');
    return (
        <div className="h-100 mt-2 px-2 py-4 bg-zinc-100 shadow space-y-2 rounded-md"
            onClick={() => setShowMoreDescription(prev => !prev)}
        >
            {lines.map((line, index) => (
                <p key={index} className="text-sm text-gray-700">
                    {renderText(line)}
                </p>
            ))}
        </div>
    );
};

export default VideoDescription;