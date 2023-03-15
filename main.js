const targetNode = document.getElementById('gListUl');
function generateList(numbers) {
    const ul = document.createElement('ul');
    for (let el of numbers) {
        const li = document.createElement('li');
        if (Array.isArray(el)) {
            li.appendChild(generateList(el));
        } else {
            li.textContent = el;
        }
        ul.appendChild(li);
    }
    return ul;
}

targetNode.appendChild(generateList([1,2,[1.1,1.2,1.3],3,4,5]));