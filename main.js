
let input = document.querySelector(".input-text");
let addBtn = document.querySelector(".add-btn");
let addTaskContainer = document.querySelector(".tasks");


let taskArr = [];

addBtn.addEventListener("click",addfunction);

 function addfunction()
{

    if(input.value == ""){
        alert("Please fill the input task");
    }
    else{

        let newTaskItem = document.createElement("div");
        newTaskItem.classList.add("task-item");
        newTaskItem.innerHTML =`
        <p>${input.value}</p>
        <div class="task-item-btn">
            <i class="fa-solid fa-pen-to-square" onclick="editTask(this)"></i>
            <i class="fa-solid fa-trash" onclick="deleteTask(this)"></i>
        </div>
        `
        taskArr.push(input.value);
        addTaskContainer.appendChild(newTaskItem);
        input.value = "";
    }

    // console.log(taskArr);

}

function deleteTask(e){

    e.parentElement.parentElement.remove();
    for(let i =0;i<taskArr.length;i++){

        if(taskArr[i] == e.parentElement.parentElement.children[0].innerHTML){

            taskArr.splice(i,1);
        }
    }
    // console.log(taskArr);
    

}

function editTask(e){
    document.querySelector(".add-btn").style.display = "none";
    document.querySelector(".edit-btn").style.display = "block";
   

        let edittask = e.parentElement.parentElement;
        input.value = edittask.children[0].innerHTML;


        document.querySelector(".edit-btn").addEventListener("click",()=>{

          
            let res = document.querySelector(".input-text").value;
            console.log(res);
            addfunction();
            deleteTask(e);
            document.querySelector(".add-btn").style.display = "block";
    document.querySelector(".edit-btn").style.display = "none";

        });
   

        deleteTask(e);
       

    }


// console.log(taskArr);





   

