export const formatTime = (ticks) => {
    const hours = Math.floor((ticks / 360000));
    const minutes = Math.floor(ticks / 6000);
    const seconds = Math.floor((ticks % 6000) / 100);
    const milliseconds = Math.floor(ticks % 100);
    return {hours, minutes, seconds, milliseconds };
};

export const pad = (num) => num.toString().padStart(2, '0');
