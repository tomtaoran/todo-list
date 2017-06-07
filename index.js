const inputForm = document.querySelector('#inputForm')
const todoList = {}
const promoteList={}
let todoListCounter = 0;
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
    item.innerHTML = `${value}`
    const promoteButton = document.createElement("button");
    promoteButton.setAttribute("class",label)
    promoteButton.innerHTML = "promote";
    promoteButton.addEventListener('click',handlePromote)
    //This is redundant, but it seems to be the only way to render on-the-spot
    promoteButton.addEventListener('click',function(){
         item.style.color="red"
    })
    item.appendChild(promoteButton)
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class",label)
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener('click',function(){
         item.remove()
         delete todoList[label]
    })
    item.appendChild(deleteButton)
    if(promoteList[label]===1){
        item.style.color="red"
    }
    return item
}

function handlePromote(ev){
    ev.preventDefault()
    const b= ev.target
    promoteList[b.className]=1
}

function renderList(data){
    const list = document.createElement('ol')


    Object.keys(data).reverse().map(function(label){
        const item =renderListItem(label,data[label])
        list.appendChild(item)
        
    })
    //['name','favoriteColor', 'Age']
    return list
}
function handleSubmit(ev){
    ev.preventDefault() //just to stop the default refresh
    const f= ev.target
    const title = todoListCounter
    todoListCounter= todoListCounter+1
    const content = f.content.value
    todoList[title]=content 
    promoteList[title]=0
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

