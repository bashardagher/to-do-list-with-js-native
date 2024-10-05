let tasks=[];
//---------------------------
window.onload = ()=>{
    if(localStorage.length>0){
        for(let i=0;i<localStorage.length;i++){
            let task = localStorage.getItem(i)
            tasks.push(JSON.parse(task));
            console.log(task)
        }
        edit();
    }
}
//------------Edit------------
let edit = function(){
    document.getElementById(`tasks`).innerHTML = ` `;
        for(let i=0;i<tasks.length;i++){
            
            let task = `
            <div class="task">
                <div class="box1">
                    <p class="title">${tasks[i].title}</p>
                    <p class="date">${tasks[i].date}</p>
                </div>
                <div class="box2">
                    <span class="material-symbols-outlined ${tasks[i].done==true ? "done" :""}"
                    onclick="do1(${i})">
                    done
                    </span>
                    <span class="material-symbols-outlined" onclick="delete1(${i})">
                    delete
                    </span>
                    <span class="material-symbols-outlined" onclick="update1(${i})">
                        edit
                    </span>
                </div>
            </div>
            `;
            document.getElementById('tasks').innerHTML+=task;
            localStorage.setItem(i,JSON.stringify(tasks[i]))
        }
    }
//------------add---------------
let addF = function(){
    let t = prompt(`inter your task`)
    if(t !== null && t !==undefined && t !== ``){
        let date = new Date();
        let day = date.getDate() ;
        let mon = date.getMonth()+1;
        let year = date.getFullYear();//y
        let task = {
            title:t,
            date:`${day}-${mon}-${year}`,
            done: false,
        };
        tasks.push(task);
        edit();
    }
}
let add = document.querySelector(`#add`);
add.addEventListener(`click`,addF)
//------------Delete---------------
function delete1(i){
    let ok = prompt(`write ok to delete task`);
    if(ok === `ok` || ok === `Ok`){
        tasks.splice(i,1);
        localStorage.clear();
        edit();
    }
}
//------------Update---------------
function update1(i){
    let tit = prompt(`write new title`);
    if(tit !== null && tit !== undefined && tit !== ``){
        tasks[i].title=tit;
        localStorage.clear();
        edit();
    }
}
//-------------Done-----------------
function do1(i){
    tasks[i].done=!tasks[i].done;
    localStorage.clear();
    edit();
}
