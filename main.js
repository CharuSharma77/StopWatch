let minute = 0;
let second = 0;
let tie = 0;
let second_div = document.querySelector("#seconds");
let minute_div = document.querySelector("#minutes");
let start_button = document.querySelector("#start");
let pause_button = document.querySelector("#pause");
let stop_button = document.querySelector("#stop");


start_button.addEventListener("click",

    function start() {
        tie = setInterval(function () {
            second = second++;

            if (second < 60) {
                second = second + 1;
                console.log(second)
                second_div.innerHTML = second+" sec";

            }
            if (second == 60) {
                second = 0;
                second_div.innerHTML = second;
                minute = minute + 1;
                minute_div.innerHTML = minute+" min";
                hour_div.innerHTML = hour;
            }
        }, 1000);



    });

pause_button.addEventListener("click", function () {
    clearInterval(tie);
});

stop_button.addEventListener("click", function () {
    clearInterval(tie);
    minute = 0;
    second = 0;
    minute_div.innerHTML = minute;
    second_div.innerHTML = second;

});