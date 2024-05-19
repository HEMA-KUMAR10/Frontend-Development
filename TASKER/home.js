var popUp = document.querySelector("#popUp")

popUp.style.scale = 0;

function addtask() {
    popUp.style.scale = 1;
}

function cancelTask(){
    popUp.style.scale = 0;

}

function addData(){
    let name = document.getElementById("task-name").value;
    let category = document.getElementById("category").value;
    console.log(category)
    let token = localStorage.getItem('taskList');

    let taskList;

    if(token == null){
        taskList = [];
        localStorage.setItem('taskList',JSON.stringify(taskList));
    }
    else{
        taskList = JSON.parse(token);
    }

    console.log("taskList",taskList);

    taskList.push(
        {
            name: name,
            category: category
        }
    );
    localStorage.setItem("taskList", JSON.stringify(taskList));
    showData();
}

function showData(){
    let taskList;
    
    let token = JSON.parse(localStorage.getItem('taskList'));

    if(token == null){
        taskList = [];
    }
    else{
        taskList = token;
    }
    let html = "";

    if(taskList.length > 0){
        taskList.forEach(element => {
            html += element.name ;
        });

        console.log("element",html);

        document.querySelector("#Task").innerHTML = html;

    }
    else{
        html += '<div id="Task">  No Data available </div';
    }
}

function deleteData(index){
    let taskList;

    let token = JSON.parse(localStorage.getItem("taskList"));

    if(token == null){
        taskList = [];
    }
    else{
        taskList = token;
    }

    taskList.splice(index,1);

    localStorage.setItem("taskList", JSON.stringify(taskList));

    showData();

}