import { createUl, createDiv } from "./module.js"

const myJson = fetch('file.json')
const response = myJson.then((response) => response.text());

response.then((text) => {
    let grp = []
    let parent = document.querySelector("body")

    text = JSON.parse(text)

    grp.push(text.firstname)
    grp.push(text.lastname)
    grp.push(text.years)
    grp.push(text.pseudo)

    createUl(parent,grp)
});


//-------------------------------------------------------------

document.querySelector("button").addEventListener('click', (e) => {
    let value = document.querySelector('input').value

    const api = fetch('https://api.agify.io?name=' + value)
    const response = api.then((response) => response.text());
    response.then((text) => {
        text = JSON.parse(text)
        console.log(text)
        let div = createDiv()
        div.textContent = "name: " + text.name + ", count: " + text.count + ", age: " + text.age
        document.querySelector('section').appendChild(div);
    })
})



//---------------------------------------------------------



