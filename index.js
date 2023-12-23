(function() {
    let startBtn = document.querySelector('.start');
    let stopBtn = document.querySelector('.stop');
    let resetBtn = document.querySelector('.reset');

    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let secound = document.querySelector('.secound');

    let counter;
    let timer;

    resetBtn.addEventListener('click', () => {
        hours.value = "";
        minutes.value = "";
        secound.value = "";

        clearInterval(counter);

        startBtn.style.display = "block";
        stopBtn.style.display = "none";
    });


    startBtn.addEventListener('click', () => {
        if (hours.value == 0 && minutes.value == 0 && secound.value == 0) return;
        else {
            stopBtn.style.display = "block";
            startBtn.style.display = "none";

            timer = Number(hours.value) * 60 * 60 + Number(minutes.value) * 60 + Number(secound.value);

            counter = setInterval(() => {
                timer--;

                hours.value = (Math.floor(timer / 3600) < 10) ? '0' + Math.floor(timer / 3600) : Math.floor(timer / 3600);

                let min = timer - (hours.value * 3600);
                minutes.value = (Math.floor((min) / 60) < 10) ? '0' + Math.floor((min) / 60) : Math.floor((min) / 60);

                let sec = min - (minutes.value * 60);
                secound.value = (Math.floor(sec) < 10) ? '0' + Math.floor(sec) : Math.floor(sec);

                if (timer == 0) {
                    clearInterval(counter);
                    hours.value = "";
                    minutes.value = "";
                    secound.value = "";
                }
            }, 1000);
        }
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(counter);
        startBtn.style.display = "initial";
        stopBtn.style.display = "none";
    })
})()