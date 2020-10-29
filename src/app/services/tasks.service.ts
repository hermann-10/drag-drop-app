import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskGroups: any[] = [ /*Penser à rajouter un type afin de remplacer le "any" mis provisoirement*/
    {
      title: "A faire",
      id: "todo",
      tasks: [
        {
          id: 0,
          title: "Première tache",
          description: "Voici ma première tache"
        },
        {
          id: 1,
          title: "Acheter du pain",
          description: "Aller acheter du pain à la boulangerie"
        },
        {
          id: 2,
          title: "Faire les courses",
          description: "Prendre du lait, des céréales et des bananes"
        }
      ]
    },
    {
      title: "En cours",
      id: "inProgress",
      tasks: [
        {
          id: 0,
          title: "Réparer la voiture",
          description: "Changer le phare avant gauche"
        },
        {
          id: 1,
          title: "Etendre le linge",
          description: "Etendre le linge"
        },
        {
          id: 2,
          title: "Préparer une quiche",
          description: "Voir la recette de la quiche"
        }
      ]
    },
    {
      title: "Terminé",
      id: "done",
      tasks: [
        {
          id: 0,
          title: "Mettre la table",
          description: "Mettre 8 couverts pour les invités"
        },
        {
          id: 1,
          title: "Passer l'aspirateur",
          description: "Nettoyage du rez de chaussée"
        }
      ]
    }
  ];
  
  taskGroupsSubject = new Subject<any[]>(); //le subject sert à emettre les donneés

  constructor() { }

  emitTaskGroups() { //un subject s'accompagne d'une méthode d'emission
    this.taskGroupsSubject.next(this.taskGroups); //je recupère taskGroupsSubject.next en j'envoi le tableau d'objet qui est dans task service
  }

}