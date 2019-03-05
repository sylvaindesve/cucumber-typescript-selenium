# language: fr
Fonctionnalité: Une fonctionnalité avec des tables

  Contexte:
    Etant donné les personnes suivantes:
      | Prénom | Nom    |
      | Joe    | Dalton |
      | Lucky  | Luke   |

  Scénario: Joe
    Quand je recherche le nom de "Joe"
    Alors j'ai "Dalton"

  Scénario: Luke
    Quand je recherche le nom de "Lucky"
    Alors j'ai "Luke"
