const input = document.getElementById("input")
input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.ctrlKey)
        parse(input.value)
    if (event.key === "Enter" && event.ctrlKey)
        alert(input.value)
})
input.addEventListener("keyup", _ => {
    Array.from(document.getElementsByClassName("link")).forEach(el => {
        el.classList.remove("searched")
        if (el.textContent.toLowerCase().startsWith(input.value) && input.value != "")
            el.classList.add("searched")
    })
})

const parse = string => {
    let [shortcut, ...query] = string.split(" ")
    switch (shortcut) {
        case "g":
            alert("Using google")
            break
        case "w":
            alert("Using wikiwand")
            break
        case "b":
            alert("Using brave")
            break
        case "p":
            alert("Using perplexity")
            break
        default:
            alert("Shortcut not recognized")
            break
    }
}

const colors = {
    Productivity: "#f38ba8",
    Information: "#89b4fa",
    Social: "#a6e3a1",
    Personal: "#f9e2af",
    Miscellanous: "#cba6f7",
    Browsers: "#f5e0dc"
}
const bookmarks = {
    Productivity: {
        Classroom: ["book", "https://classroom.google.com"],
        Drive: ["task", "https://drive.google.com"],
        Docs: ["draft", "https://docs.google.com"],
        Slides: ["mail", "https://slides.google.com"]
    },
    Information: {
        "ChatGPT": ["neurology", "https://chat.openai.com"],
        "Perplexity": ["search", "https://www.perplexity.ai"],
        "Wikiwand": ["book", "https://www.wikiwand.com/en/Wikiwand"],
        "Wolfram Alpha": ["calculate", "https://www.wolframalpha.com"]
    },
    Social: {
        Discord: ["videocam", "https://www.discord.com/channels/@me"],
        Reddit: ["comment", "https://www.reddit.com"],
        YouTube: ["play_arrow", "https://www.youtube.com"]
    },
    Personal: {
        GitHub: ["3p", "https://www.github.com/miyucomics"]
    },
    Miscellanous: {
        xkcd: ["face", "https://xkcd.com"]
    },
    Browsers: {
        "Google": ["search", "https://www.google.com"],
        "DuckDuckGo": ["search", "https://https://duckduckgo.com"],
        "Brave Search": ["search", "https://search.brave.com"]
    }
}

const bookmarkContainer = document.getElementById("bookmarks")
for (const [category, links] of Object.entries(bookmarks)) {
    const bookmark = document.createElement("div")
    bookmark.classList.add("bookmark")
    const title = document.createElement("h1")
    title.textContent = category
    title.style.color = colors[category]
    bookmark.appendChild(title)
    for (const [name, src] of Object.entries(links)) {
        const item = document.createElement("li")
        item.classList.add("link")
        const icon = document.createElement("span")
        icon.classList.add("material-symbols-rounded")
        icon.textContent = src[0]
        const link = document.createElement("a")
        link.classList.add("link")
        link.textContent = name
        link.href = src[1]
        item.appendChild(icon)
        item.appendChild(link)
        bookmark.appendChild(item)
    }
    bookmarkContainer.appendChild(bookmark)
}
