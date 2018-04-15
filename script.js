window.onload = function() {
    let quiz = {
        "HTML": "This markup language is used for making web pages.",
        "Swift": "This language is used for building iOS apps.",
        "Java": "This object-oriented language powers Android applications.",
        "JavaScript": "This scripting language runs in the web browser.",
        "CSS": "This language adds style to an HTML page.",
        "C#": "This language is used for scripts in the game engine Unity.",
        "FORTRAN": "This early language was used for numeric computing.",
        "C++": "This language is the object-oriented version of its predecessor, C.",
        "C": "This early language allows the programmer to manipulate computer memory.",
        "Python": "This versatile language is good for scientific analysis and is also the name of a snake.",
    };
    
    let app = document.querySelector("#app");
    let result = document.querySelector("#result");
    
    let correctAnswers = 0;
    let counter = 1;
    
    for (let answer in quiz) {
        let question = quiz[answer];
        console.log(counter);
        let id = "answer" + counter;
        let resultId = "result" + counter;
        let html = `<p>${question}<br/><input type='text' id='${id}' />`;
        html += `<span id='${resultId}'></span><p>`;
        app.insertAdjacentHTML("beforeend", html);
        
        let element = document.querySelector(`#${id}`);
        let resultElement = document.querySelector(`#${resultId}`);
        
        element.addEventListener('change', e => {
            if (element.value.toLowerCase() == answer.toLowerCase()) {
                if (element.classList.contains("incorrect")) {
                    element.classList.remove("incorrect");
                }
                element.classList.add("correct");
                
                if (resultElement.classList.contains("incorrect")) {
                    resultElement.classList.remove("incorrect");
                }
                resultElement.classList.add("correct");
                resultElement.innerHTML = "Correct!";
                
                if (correctAnswers < 10) {
                    correctAnswers++;
                }
            } else {
                if (element.classList.contains("correct")) {
                    element.classList.remove("correct");
                }
                element.classList.add("incorrect");
                
                if (resultElement.classList.contains("correct")) {
                    resultElement.classList.remove("correct");
                }
                resultElement.classList.add("incorrect");
                resultElement.innerHTML = "Incorrect!";
            }
            if (correctAnswers === 1) {
                result.innerHTML = `${correctAnswers} answer correct!`;
            } else {
                result.innerHTML = `${correctAnswers} answers correct!`;
            }
            
        });
        
        counter++;
    }

}