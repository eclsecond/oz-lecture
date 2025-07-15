

    inputNum.addEventListener("change", function () {
        num = parseInt(inputNum.value, 10);
        if (isNaN(num) || num < 0 || num > 10) {
            alert("Invalid input! Enter a number between 1 and 10");
            inputNum.value = "";
            timerDisplay.textContent = "";
            return;
        }
        timerDisplay.textContent = `타이머 시작: ${num}초`;
    }
    );
    inputNum.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            start();
        }
    }
    );
    inputNum.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            start();
        }
    }
    );
    inputNum.addEventListener("paste", function (event) {
        const pastedData = event.clipboardData.getData("text");
        if (isNaN(pastedData) || pastedData < 0 || pastedData > 10) {
            alert("Invalid input! Enter a number between 1 and 10");
            inputNum.value = "";
            timerDisplay.textContent = "";
            event.preventDefault();
            return;
        }
        num = parseInt(pastedData, 10);
        timerDisplay.textContent = `타이머 시작: ${num}초`;
    }
    );
    inputNum.addEventListener("cut", function (event) {
        const cutData = inputNum.value;
        if (isNaN(cutData) || cutData < 0 || cutData > 10) {
            alert("Invalid input! Enter a number between 1 and 10");
            inputNum.value = "";
            timerDisplay.textContent = "";
            event.preventDefault();
            return;
        }
        num = parseInt(cutData, 10);
        timerDisplay.textContent = `타이머 시작: ${num}초`;
    }
    );
    inputNum.addEventListener("select", function () {
        const selectedText = inputNum.value.substring(inputNum.selectionStart, inputNum.selectionEnd);
        if (isNaN(selectedText) || selectedText < 0 || selectedText > 10) {
            alert("Invalid input! Enter a number between 1 and 10");
            inputNum.value = "";
            timerDisplay.textContent = "";
            return;
        }
        num = parseInt(selectedText, 10);
        timerDisplay.textContent = `타이머 시작: ${num}초`;
    }
    );
    inputNum.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        alert("Right-click is disabled on this input field.");
    }
    );
    inputNum.addEventListener("dblclick", function () {
        inputNum.value = "";
        timerDisplay.textContent = "";
        alert("Input cleared on double-click.");
    }
    );
    inputNum.addEventListener("focus", function () {
        inputNum.value = "";
        timerDisplay.textContent = "";
    }
    );
    inputNum.addEventListener("blur", function () {
        if (inputNum.value === "") {
            timerDisplay.textContent = "";
        }
    });
    inputNum.addEventListener("wheel", function (event) {
        event.preventDefault();
        alert("Mouse wheel scrolling is disabled on this input field.");
    }
    );
    inputNum.addEventListener("dragstart", function (event) {
        event.preventDefault();
        alert("Dragging is disabled on this input field.");
    }
    );
    inputNum.addEventListener("dragover", function (event) {
        event.preventDefault();
        alert("Dragging is disabled on this input field.");
    }
    );
    inputNum.addEventListener("drop", function (event) {
        event.preventDefault();
        alert("Dropping is disabled on this input field.");
    }
    );
    inputNum.addEventListener("compositionstart", function () {
        alert("Composition started.");
    }
    );
    inputNum.addEventListener("compositionend", function () {
        alert("Composition ended.");
    }
    );
    