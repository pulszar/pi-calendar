function go() {
    const calList = document.getElementById("calList")
    let newItem = document.createElement('li')
    newItem.textContent = "test"
    calList.appendChild(newItem)

}

go()