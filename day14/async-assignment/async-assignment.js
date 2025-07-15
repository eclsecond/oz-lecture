

function start() {
    const inputNum = document.getElementById("timerInput");

    //if (isNaN(inputNum) || inputNum < 0 || inputNum > 10) {
    //alert("Invalid input! Enter a number between 1 and 10");
    //return;
    //}

    let num = parseInt(inputNum.value, 10);
    if (isNaN(num) || num < 0 || num > 10) {
        alert("Invalid input! Enter a number between 1 and 10");
        inputNum.value = "";
        return;
    }
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay.textContent = `타이머 시작: ${num}초`;
    
    const timer = setInterval(() => {
        if (num <= 0) {
        clearInterval(timer);
        timerDisplay.textContent = "타이머 종료!";
        return;
        }
        timerDisplay.textContent = `남은 시간: ${num--}초`;
    }, 1000);
    inputNum.value = ""; // 입력창 초기화
    
    inputNum.focus(); // 입력창에 포커스

    inputNum.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            start();
        }
    });

    inputNum.addEventListener("input", function () {
        if (inputNum.value === "") {
            timerDisplay.textContent = "";
        }
    });
    inputNum.addEventListener("blur", function () {
        if (inputNum.value === "") {
            timerDisplay.textContent = "";
        }
    }
    );
    

}

startTimer.addEventListener("click", start);