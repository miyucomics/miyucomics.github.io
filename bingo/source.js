const grid = document.getElementById('grid');
const parameters = new URLSearchParams(window.location.search);

document.body.style.width = `${Math.min(window.innerWidth, screen.width)}px`
document.body.style.height = `${Math.min(window.innerHeight, screen.height)}px`
document.documentElement.style.setProperty("--box-size", `${Math.min(150, Math.min(window.innerWidth, screen.width) / 6)}px`)

const color = parameters.get('color') || 'a6e3a1'
document.documentElement.style.setProperty("--color", "#" + color)

let editing = parameters.get("edit") == "true";

document.getElementById("title").textContent = parameters.get("title") || "Task Bingo"

if (editing) {
    const title = document.getElementById("title")
    title.addEventListener("click", () => {
        newValue = prompt("What should the new content be?")
        if (newValue != null) {
            parameters.set("title", newValue)
            title.textContent = newValue
            window.history.replaceState({}, document.title, `${window.location.origin}${window.location.pathname}?${parameters.toString()}`);
        }
    })
}

for (let i = 0; i < 25; i++) {
    const square = document.createElement('div')
    const state = parseInt(parameters.get('state') || '0', 10)
    square.className = 'square'
    square.classList.toggle('active', (state & (1 << i)) !== 0)
    square.textContent = parameters.get(`${i}`) || ''

    square.style.width = `${Math.min(150, Math.min(window.innerWidth, screen.width) / 6)}px`
    square.style.height = `${Math.min(150, Math.min(window.innerWidth, screen.width) / 6)}px`

    square.addEventListener('click', () => {
        if (editing) {
            newValue = prompt("What should the new content be?")
            if (newValue == null) return;
            parameters.set(i.toString(), newValue)
        } else {
            const currentGridState = parseInt(parameters.get('state') || '0', 10);
            const newGridState = currentGridState ^ (1 << i);
            parameters.set('state', newGridState.toString());
        }
        updateGrid();
        window.history.replaceState({}, document.title, `${window.location.origin}${window.location.pathname}?${parameters.toString()}`);
    })

    grid.appendChild(square)
}

function updateGrid() {
    grid.childNodes.forEach((square, index) => {
        const gridState = parseInt(parameters.get('state') || '0', 10);
        const isActive = (gridState & (1 << index)) !== 0;
        square.classList.toggle('active', isActive);
        square.textContent = parameters.get(`${index}`) || '';
    });
}

updateGrid();
