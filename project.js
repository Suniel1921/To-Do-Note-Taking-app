let addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", addChapter);

function addChapter(e){
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    console.log(currentInput.value);
   
}
