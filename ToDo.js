let toDoList=[];

function LoadData(){
  toDoList=JSON.parse(localStorage.getItem(('toDoList')));
}


function StoreData(){
  localStorage.setItem('toDoList',JSON.stringify(toDoList));
}

function SubmitToDo(){

  let toDoInputElement=document.querySelector("#To-Do-Input");
  let dateInputElement=document.querySelector("#Date-Input");

  let toDoInput=toDoInputElement.value;
  let dateInput=dateInputElement.value;
  
  if(toDoInput==""||dateInput==""){
    alert("Please Input Compelete Details to Submit Your Task");
    return false;
  }

  toDoList.push({
    toDo:toDoInput,
    date:dateInput
  })

  toDoInputElement.value='';
  dateInputElement.value='';

  StoreData();
  DisplayToDo();

}

function RemoveToDo(index){
toDoList.splice(index,1);
DisplayToDo();
}


function ClearToDo(){

  let toDoDisplayElement=document.querySelector("#To-Do-Display-Section");
  while(toDoDisplayElement.firstChild){
  toDoDisplayElement.removeChild(toDoDisplayElement.firstChild);
  }

}

function DisplayToDo(){

  ClearToDo();

  let toDoDisplayElement=document.querySelector("#To-Do-Display-Section");


  for(i=0;i<toDoList.length;i++){
    let {toDo,date}=toDoList[i];

    let toDoDiv=document.createElement("div");
    toDoDiv.setAttribute("class","js-To-Do-Div");
    toDoDiv.innerHTML=`
        <span class="js-To-Do">${toDo}</span>
        <span class="js-Date">${date}</span>
        <button class="js-Remove-Button" 
        onclick="
        RemoveToDo(${i});
        " >Remove</button>
        `;
   toDoDisplayElement.appendChild(toDoDiv);

  }

}


{

  LoadData();
  DisplayToDo();

}
