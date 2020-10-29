import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskGroups: any[] = [ /*Penser à rajouter un type afin de remplacer le "any" mis provisoirement*/
    {
      title: "En recherche d'emploi",
      id: "en_recherche",
      tasks: [
        {
          id: 0,
          title: "Alfredo Lorosco",
          description: "Spécialisé en développement Fullstack JavaScript"
        },
        {
          id: 1,
          title: "Steve Dupont",
          description: "Spécialisé en développement Full Stack"
        },
        {
          id: 2,
          title: "David Monnier",
          description: "Spécialisé en développement Back-end"
        }
      ]
    },
    {
      title: "Poste : Développeur Front-end",
      id: "dev_front",
      tasks: [
        {
          id: 0,
          title: "Sandra Torres",
          description: "Spécialisée en développement PHP"
        },
        {
          id: 1,
          title: "Sara Lanza",
          description: "Spécialisée en développement sur Wordpress et PHP"
        },
        {
          id: 2,
          title: "Luca Rossilo",
          description: "Spécialisé en développement sur ReactJS et ExpressJS"
        }
      ]
    },
    {
      title: "Poste : Développeur Back-end",
      id: "dev_back",
      tasks: [
        {
          id: 0,
          title: "Alberto Lopes",
          description: "Spécialisé en développement en PHP"
        },
        {
          id: 1,
          title: "Stéphane Manolo",
          description: "Spécialisé en développement en Java"
        }
      ]
    },
    {
      title: "Poste : Développeur Full Stack",
      id: "dev_fullstack",
      tasks: [
        {
          id: 0,
          title: "Alberto Lopes",
          description: "Spécialisé en développement JavaScript"
        },
        {
          id: 1,
          title: "Stéphane Manolo",
          description: "Spécialisé en développement Full Stack JavaScript"
        }
      ]
    }

  ];
  
  taskGroupsSubject = new Subject<any[]>(); //le subject est un observable qui sert à emettre les donneés

  constructor() { }

  emitTaskGroups() { //un subject s'accompagne d'une méthode d'emission
    this.taskGroupsSubject.next(this.taskGroups); //je recupère taskGroupsSubject.next en j'envoi le tableau d'objet qui est dans task service
  }

}