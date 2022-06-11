import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskItem = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    //Linha criada para não deixar adicinar campos apenas com espaços.
    this.addItemTaskList = this.addItemTaskList.trim();

    // if criado para não deixar adicionar campos vazios
    if(this.addItemTaskList){
      this.emitItemTaskItem.emit(this.addItemTaskList);

    // linha de código para quando apertar o [Enter] apague o que foi escrito na caixinha de texto de entrada
    this.addItemTaskList = "";
    }

  }

}
