var pageCounter = 1;
var btn = document.getElementById('btn');
var animal = document.getElementById('animal-info');

btn.addEventListener('click', () => {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
    ourRequest.onLoad = () => {
    var ourData = JSON.parse(ourRequest.responseText)
    renderHTML(ourData);
};
ourRequest.send();
pageCounter++;
if (pageCounter > 3) {
    btn.classList.add("hide-me");
}
console.log("worked")
});

function renderHTML(data) {
    for (let index = 0; index < data.length; index++) {
        htmlString += "<p>" + data[index].name + " is a " + data[index].species + "that dislikes to eat "
        
        for (let ii = 0; ii < data[index].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[index].foods.dislikes[ii];
            }
            else {
                htmlString += " and " + data[index].foods.dislikes[ii];
            }
        }

        htmlString += 'and dislikes ';

        for (let ii = 0; ii < data[index].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[index].foods.dislikes[ii];
            }
            else {
                htmlString += " and " + data[index].foods.dislikes[ii];
            }
        }

        htmlString += '.</p>'
    }
    animal.insertAdjacentHTML('beforeend', htmlString)
}