import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
    selector: "page-film-details",
    templateUrl: "film-details.html"
})
export class FilmDetailsPage {
    film: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // récupère les détails du film cliqué depuis FilmsPage, donc le film en cours dans la boucle de films.ts
        this.film = this.navParams.get("film");
    }

    //goBack() {
    // retourne à la page précédente
    //   this.navCtrl.pop();
    //}

    // ionViewDidLoad() {
    //     console.log("ionViewDidLoad FilmDetailsPage");
    // }
}
