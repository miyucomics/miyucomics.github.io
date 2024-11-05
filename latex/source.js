const field = document.getElementById('field')
const output = document.getElementById('output')

field.addEventListener('input', () => {
    output.innerHTML = ""
    katex.render("\\displaystyle " + field.innerText.replaceAll("\n", "\\newline "), output, { "throwOnError": false })
})
