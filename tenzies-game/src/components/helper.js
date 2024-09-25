export const formatTime = (ticks) => {
    const hrs = Math.floor((ticks / 360000));
    const mins = Math.floor(ticks / 6000);
    const secs = Math.floor((ticks % 6000) / 100);
    const ms = Math.floor(ticks % 100) * 10;
    return {hrs, mins, secs, ms};
};

export const pad = (num, digits = 2) => num.toString().padStart(digits, '0');
