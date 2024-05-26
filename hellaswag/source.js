const questionLabel = document.getElementById("question-label")
const idLabel = document.getElementById("id-label")
const descriptionLabel = document.getElementById("description-label")
const answerChoiceContainers = Array.from(document.querySelectorAll(".choice"))
const answerChoices = Array.from(document.querySelectorAll(".choice > p"))

let correctAnswer = 0

for (let i = 0; i < 4; i++) {
	answerChoiceContainers[i].addEventListener("click", function() { validateAnswer(i) })
}

function prepareQuestion(scene) {
	questionLabel.innerText = scene.activity_label
	idLabel.innerText = "#" + scene.ind
	descriptionLabel.innerText = scene.ctx
	for (let i = 0; i < 4; i++) {
		answerChoiceContainers[i].style.borderColor = "#9399b2"
		answerChoices[i].innerText = scene.endings[i]
	}
	correctAnswer = scene.label
}

function validateAnswer(answer) {
	if (answer == correctAnswer) {
		prepareQuestion(scenes[Math.floor(Math.random() * scenes.length)])
	} else {
		answerChoiceContainers[answer].style.borderColor = "#f38ba8"
	}
}

prepareQuestion(scenes[Math.floor(Math.random() * scenes.length)])
