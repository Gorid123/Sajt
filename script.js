const SetLinks = (start = 0) => { //start dobija vrednost 0 ako je undefined tj ako argument nije dat
    const items = document.body.querySelectorAll('td') //nalazi sve celije tabele
    for (let i = 0; i < items.length; i++) {
        const value = i + start
        items[i].onclick = () => {
            window.open('page1.html?index=' + value, '_self') //indeks se salje preko url adrese i otvara se u istom prozoru (_self)
        }
    }
}