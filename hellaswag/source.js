const questionLabel = document.getElementById("question-label")
const idLabel = document.getElementById("id-label")
const descriptionLabel = document.getElementById("description-label")
const answerChoices = Array.from(document.querySelectorAll(".choice"))

let correctAnswer = 0

for (let i = 0; i < 4; i++) {
	answerChoices[i].addEventListener("click", function() { validateAnswer(i) })
}

function type(element, text) {
    new Typed(element, {
        strings: [text],
        typeSpeed: 0,
        backSpeed: 0,
        cursorChar: ""
    })
}

function prepareQuestion(scene) {
    type(questionLabel, scene.activity_label)
    type(idLabel, "#" + scene.ind)
    type(descriptionLabel, scene.ctx)
	for (let i = 0; i < 4; i++) {
        type(answerChoices[i], scene.endings[i])
	}
	correctAnswer = scene.label
}

function validateAnswer(answer) {
	if (answer == correctAnswer) {
		prepareQuestion(scenes[Math.floor(Math.random() * scenes.length)])
	}
}

prepareQuestion(scenes[Math.floor(Math.random() * scenes.length)])
