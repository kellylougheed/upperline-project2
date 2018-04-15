window.onload = function() {
    let quiz = {
        "HTML": "This markup language is used for making web pages.",
        "Swift": "This language is used for building iOS apps.",
        "Java": "This object-oriented language powers Android applications.",
        "JavaScript": "This scripting language runs in the web browser.",
        "CSS": "This markup language adds style to an HTML page.",
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
        let html = `<p>${question}<br/><input type='text' id='${id}' /></p>`;
        app.insertAdjacentHTML("beforeend", html);
        
        let element = document.querySelector(`#${id}`);
        
        element.addEventListener('change', e => {
            if (element.value.toLowerCase() == answer.toLowerCase()) {
                // Change to edit classes
                element.style.backgroundColor = "green";
                element.insertAdjacentHTML(
                    "afterend", "<span class='correct'>Correct!</span>"
                );
                correctAnswers++;
            } else {
                // Change to edit classes
                element.style.backgroundColor = "red";
                element.insertAdjacentHTML(
                    "afterend", "<span class='incorrect'>Incorrect!</span>"
                );
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