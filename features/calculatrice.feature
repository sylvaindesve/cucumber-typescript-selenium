# language: fr
@selected
Fonctionnalité: faire des calculs
  En tant qu'élève de primaire
  Je veux faire des additions, soustractions, mulitplications et divisions
  Afin de m'aider dans mes devoirs à la maison

  Contexte:
    Etant donné que j'ai démarré ma calculatrice

  Scénario: Une simple addition
    Quand je saisi "3"
    Et j'appuie sur "+"
    Et je saisi "4"
    Alors la valeur affichée est "7"

  Plan du scénario: d'autres additions
    Quand je saisi "<x>"
    Et j'appuie sur "+"
    Et je saisi "<y>"
    Alors la valeur affichée est "<résultat>"

    Exemples:
      | x  | y  | résultat |
      | 1  | 1  | 2        |
      | 1  | 3  | 4        |
      | 18 | 12 | 30       |

  Scénario: Utilisation de la mémoire
    Quand je saisi "3"
    Et je met en mémoire à l'emplacement "A"
    Et je saisi "4"
    Et je met en mémoire à l'emplacement "B"
    Alors la mémoire contient:
      | Emplacement | Valeur |
      | A           | 3      |
      | B           | 4      |
