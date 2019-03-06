# language: fr
@web
Fonctionnalité: Faire une recherche Google

  Plan du scénario: Un simple recherche
    Etant donné que je vais sur Google
    Quand je recherche "<Terme recherché>"
    Alors je vois une liste de <Nombre de résultats> résultats
    Et "<Résultat>" fait partie de la liste des résultats

    Exemples:
      | Terme recherché | Nombre de résultats | Résultat    |
      | le monde        | 5                   | Le Monde.fr |
      | le progrès      | 6                   | Autre chose |
