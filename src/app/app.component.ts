import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from './../app/services/tasks.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  taskGroups: any[];
  taskGroupsSubscription: Subscription;

  //taskGroupsIds: any[] = [];

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.taskGroupsSubscription = this.tasksService.taskGroupsSubject.subscribe(
      (data) => {
        this.taskGroups = data;

        /*data.forEach((child) => {
          this.taskGroupsIds.push(child.id); //push de l'id d'une liste de tâche
          console.log(child.id);
        });*/
      }
    );
    this.tasksService.emitTaskGroups();
  }

  onTaskDrop(event: CdkDragDrop<any[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); //lorsqu'on ne change pas de container, j'execute moveItemInArray() qui permet de déplacer un élément dans sa liste, dans son tableau, donc cela modifie son emplacement
    }                 //données du container  //l'index précédent (l'index de l'emplacement de l'élément avec qu'on le déplace)  //le nouvelle index (index courant)
    else{
      transferArrayItem(event.previousContainer.data,
        event.container.data, //donneés du container courant
        event.previousIndex, //l'emplacement précédent de l'élément
        event.currentIndex); //index de l'élément courant
      }
    }
  

  ngOnDestroy() {
    this.taskGroupsSubscription.unsubscribe();
  }

}
