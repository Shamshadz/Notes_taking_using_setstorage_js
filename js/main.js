console.log("System is running");

let text ;
let index = 0;
let txtBtn = document.querySelector('#txtBtn');

txtBtn.addEventListener('click', function (e) {
    let txtArea = document.querySelector('#txtArea').value;

    localStorage.setItem(`note ${index + 1}`, JSON.stringify(txtArea));
    // localStorage.clear();
    index++;
    showNotes();
});

function showNotes() {
    
    let element = localStorage.getItem(`note ${index}`);

       text +=`<div class="card my-2 mx-2" style="width: 18rem;">
           <div class="card-body">
               <h5 class="card-title">notes ${index}</h5>
               <p class="card-text">${element}</p>
               <a href="#" id="${index}" class="btn deleteBtn btn-primary">Delete</a>
           </div>
       </div>`;
       document.querySelector('#notes').innerHTML = text;
}

let deleteBtn = document.querySelector('.deleteBtn');
deleteBtn.addEventListener('click', function(e) {
    document.getElementsByClassName('deleteBtn').id = "newid";
    localStorage.removeItem(`${newid}`);
});