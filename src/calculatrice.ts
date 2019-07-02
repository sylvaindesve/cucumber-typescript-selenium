export class Calculatrice {

  private valeurCourante: number;
  private operationEnAttente: (valeur: number) => number | null;
  private memoire: {[key: string]: number};

  constructor() {
    this.valeurCourante = 0;
    this.operationEnAttente = null;
    this.memoire = {};
  }

  public lireValeur(): number {
    return this.valeurCourante;
  }

  public entrerValeur(valeur: number) {
    if (this.operationEnAttente !== null) {
      this.valeurCourante = this.operationEnAttente(valeur);
      this.operationEnAttente = null;
    } else {
      this.valeurCourante = valeur;
    }
  }

  public additionner(): void {
    const valeurInitiale = this.valeurCourante;
    this.operationEnAttente = (valeur: number) => {
      return valeurInitiale + valeur;
    };
  }

  public mettreEnMemoire(emplacement: string) {
    this.memoire[emplacement] = this.valeurCourante;
  }

  public obtenirContenuMemoire(): {[key: string]: number} {
    return this.memoire;
  }

}
