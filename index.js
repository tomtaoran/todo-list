const inputForm = document.querySelector('#inputForm')
const todoList = {}
const storedList= document.querySelector('#storedList')
function renderColor(color){
    const div=document.createElement('div');
    div.style.backgroundColor=color;
    div.style.width = '100px';
    div.style.height = '50px';
    return div
}

function renderListItem(label, value){
    const item = document.createElement('li')
    item.innerHTML = `${label}: ${value}`
    return item
}
function renderList(data){
    const list = document.createElement('ol')

    Object.keys(data).map(function(label){
        const item =renderListItem(label,data[label])
        list.appendChild(item)
    })
    //['name','favoriteColor', 'Age']
    return list
}
function handleSubmit(ev){
    ev.preventDefault() //just to stop the default refresh
    const f= ev.target
    const title = f.title.value
    const content = f.content.value
    todoList[title]=content 
    //Rerender by clear the storedList div first
    while(storedList.firstChild){
    storedList.removeChild(storedList.firstChild);
    }
   // And then appendChild to each item
    storedList.appendChild(renderList(todoList))
}
function changeAppearance(ev){
    ev.preventDefault()
    const f= ev.target
    const heading = document.querySelector('.reverse')
    const str= heading.textContent
    const person ={
        name: f.personName.value,
        favoriteColor: renderColor(f.favoriteColor.value).outerHTML,
        age: f.age.value,
    }
    details.appendChild(renderList(person))
   
    heading.style.color = colorToHex(f.colorRed.value,f.colorGreen.value,f.colorBlue.value);
  
}
inputForm.addEventListener('submit', handleSubmit) 
//personForm.addEventListener('submit', changeAppearance)

