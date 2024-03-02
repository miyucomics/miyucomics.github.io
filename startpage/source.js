const input = document.getElementById("input")
input.addEventListener("keydown", event => {
	if (event.key === "Enter") parse(input.value)
})

const parse = string => {
	window.open("https://www.google.com", "_self")
}

const colors = {
	Productivity: "#f38ba8",
	Information: "#89b4fa",
	Social: "#a6e3a1",
	Personal: "#f9e2af",
	undecided: "#cba6f7",
	unknown: "#f5e0dc"
}
const bookmarks = {
	Productivity: {
		Classroom: "https://classroom.google.com",
		Drive: "https://drive.google.com",
		Docs: "https://docs.google.com",
		Slides: "https://slides.google.com"
	},
	Information: {
		"ChatGPT": "https://chat.openai.com",
		"Perplexity": "https://www.perplexity.ai",
		"Wikiwand": "https://www.wikiwand.com/en/Wikiwand",
		"Wolfram Alpha": "https://www.wolframalpha.com"
	},
	Social: {
		Discord: "https://www.discord.com/channels/@me",
		Reddit: "https://www.reddit.com",
		YouTube: "https://www.youtube.com"
	},
	Personal: {
		GitHub: "https://www.github.com/miyucomics"
	},
	undecided: {},
	unknown: {}
}

const bookmarkContainer = document.getElementById("bookmarks")
for (const [category, links] of Object.entries(bookmarks)) {
	const bookmark = document.createElement("div")
	bookmark.classList.add("bookmark")
	const title = document.createElement("h1")
	title.textContent = category
    title.style.color = colors[category]
	const linkList = document.createElement("ul")
	for (const [name, src] of Object.entries(links)) {
		const item = document.createElement("li")
		item.classList.add("link")
		const link = document.createElement("a")
		link.classList.add("link")
		link.textContent = name
		link.href = src
		item.appendChild(link)
		linkList.appendChild(item)
	}
	bookmark.appendChild(title)
	bookmark.appendChild(linkList)
	bookmarkContainer.appendChild(bookmark)
}
