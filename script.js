const second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');

let running = false;

const make2digit = count => {
    if(count.length < 2){
        count = '0' + count;
    }
    return count;
};


const runClock = () => {
    setInterval(() => {
        if (running) {
            second.innerText = String(parseInt(second.innerText) + 1);
            second.innerText = make2digit(second.innerText);
            if (second.innerText == 60) {
                second.innerText = '00';
                minute.innerText = String(parseInt(minute.innerText) + 1);
                minute.innerText = make2digit(minute.innerText);
                if (minute.innerText == 60) {
                    minute.innerText = '00';
                    hour.innerText = String(parseInt(hour.innerText) + 1);
                    hour.innerText = make2digit(hour.innerText);
                }
            }
        }
    }, 1000);
};

const resetClock = () => {
    second.innerText = '00';
    minute.innerText = '00';
    hour.innerText = '00';
};

startBtn.addEventListener('click', () => {
    resetClock();
    if (startBtn.innerText != 'Restart') {
        runClock();
    }
    startBtn.innerText = 'Restart';
    pauseBtn.innerText = 'Pause';
    running = true;
});

pauseBtn.addEventListener('click', () => {
    if (running) {
        // Pause
        running = false;
        pauseBtn.innerText = 'Resume';
    } else {
        // Resume
        running = true;
        pauseBtn.innerText = 'Pause';
    }
});
