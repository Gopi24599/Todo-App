let addbutton = document.getElementById('add');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addbutton.addEventListener('click', function() {
    var paragraph = document.createElement('li');
    
    var delbtn = document.createElement('button'); 
    paragraph.classList.add('paragraph-styling');
    // paragraph.classList.add('deletetask');
    // this.append.delbtn('delete');
    if(inputfield.value === ""){
        alert ("Enter any value");
    }
    else{
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value="";
   
}
    
    paragraph.addEventListener('mouseover',function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('mouseout',function() {
        paragraph.style.textDecoration = "none";
        
    })
    paragraph.addEventListener('dblclick',function() {
        todocontainer.removeChild(paragraph);
        
    });
});

    // todocontainer.addEventListener('mouseenter',function(){
    //     todocontainer.textContent = "Double Click to Delete";
    // });

    // todocontainer.addEventListener('mouseleave',function(){
    //     todocontainer.textContent = "";
    // });
    