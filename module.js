
export function createUl(parent,array) {
    console.log(array)
    let ul = document.createElement('ul')

    for (const X of array) {
        createLi(ul,X)
    }

    parent.appendChild(ul)
}

function createLi(parent,text) {
    let li = document.createElement('li')
    li.textContent = text + "";
    parent.appendChild(li)
}


export function createDiv() {
    return document.createElement('div');
}