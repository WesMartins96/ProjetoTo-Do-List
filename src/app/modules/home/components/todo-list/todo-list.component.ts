import { Component, DoCheck, OnInit } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {


  // Forma de explicitar o tipo (Array) Exemplo: Array<{nome: tipo}>=[]
    // Usei uma interface pra realizar a comunicação <TaskList>
      // LocalStorage pra salvar as alterações
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }



  ngDoCheck(): void {
    // LocalStorage
    this.setLocalStorage();

  }

  // Metodo criado para enviar dados para dentro da List
  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, checked: false})
  }

  // Metodo para apagar um elemento
  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  // Metodo para apagar tudo, e contem uma verificação, quando apertado aparecerá uma mensagem de confirmação
  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente Deletar tudo?");

    if(confirm){
      this.taskList = [];
    }
  }


  // Metodo para validação de campo editado vazio, fazer possivel delete ou não.(Escolha do usuario)
  public validationInput(event: string, index: number){

    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja Deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }


  // Por ultimo usei o [LocalStorage], para gravar as alterações feitas no CRUD da aplicação;
  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));

      // LocalStorage
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
