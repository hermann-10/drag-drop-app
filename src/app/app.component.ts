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

  taskGroupsIds: any[];

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.taskGroupsSubscription = this.tasksService.taskGroupsSubject.subscribe(
      (taskGroups: any[]) => {
        this.taskGroups = taskGroups;
        taskGroups.forEach(function (child) {
          this.taskGroupsIds.push(child);
          console.log(child);
        });
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
/*import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'drag-drop-app';

  taskGroups: any[]; //va récupérer dans task.service.ts les taskGroup qui sont emis dans task.service.ts
  taskGroupsSubscription: Subscription; //la subscription est le recepteur

  taskGroupsIds: any[]; //cette variable va nous permettre de lier les listes ensemble, donc elle va recenser les id des groupes de tâches des listes, dans ce qui est déclarer en objet dans tasks.service
  //Donc cela va nous permettre de faire la liaison entre chaque liste, dans le but de faire passer des éléments d'une liste à une autre.
constructor( private tasksService: TasksService){

}

ngOnInit(){ //récupérer au chargement du composant la liste et ngOnDestroy va me permettre de me désabonner de la souscription lors du déchargement
  this.taskGroupsSubscription = this.tasksService.taskGroupsSubject.subscribe( //on s'abonne à ce subject afin de pouvoir récupérer les data
    //(taskGroups: any[]) => {
      (data) => {
      this.taskGroups = data;
      }
      //taskGroups.forEach(function (child){
        //this.taskGroupsIds.push(child);
        //console.log(child);
      //});
    //}
  );
  this.tasksService.emitTaskGroups();
}

ngOnDestroy() {
  this.taskGroupsSubscription.unsubscribe(); //désabonnement de la souscription
}

}*/
