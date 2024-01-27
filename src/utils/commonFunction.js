export const formatNumber = (num, digitAfterDot = 1) => {
    if (num < 1000) {
        return num.toString();
    } else if (num < 1000000) {
        return (num / 1000).toFixed(digitAfterDot) + 'K';
    } else if (num < 1000000000) {
        return (num / 1000000).toFixed(digitAfterDot) + 'M';
    } else {
        return (num / 1000000000).toFixed(digitAfterDot) + 'B';
    }
}

export const timeAgo = (publishedAt) => {
    if (!publishedAt) return ''
    const publishedDate = new Date(publishedAt);
    const currentDate = new Date();
    const diffInSeconds = Math.floor((currentDate - publishedDate) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = 2592000;
    const secondsInYear = 31536000;

    if (diffInSeconds < secondsInMinute) {
        return 'just now';
    } else if (diffInSeconds < secondsInHour) {
        return `${Math.floor(diffInSeconds / secondsInMinute)} minutes ago`;
    } else if (diffInSeconds < secondsInDay) {
        return `${Math.floor(diffInSeconds / secondsInHour)} hours ago`;
    } else if (diffInSeconds < secondsInMonth) {
        return `${Math.floor(diffInSeconds / secondsInDay)} days ago`;
    } else if (diffInSeconds < secondsInYear) {
        return `${Math.floor(diffInSeconds / secondsInMonth)} months ago`;
    } else {
        return `${Math.floor(diffInSeconds / secondsInYear)} years ago`;
    }
}
