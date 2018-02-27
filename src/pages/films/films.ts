import { ApiProvider } from "./../../providers/api/api";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Observable } from "rxjs/Observable";

@IonicPage()
@Component({
    selector: "page-films",
    templateUrl: "films.html"
})
export class FilmsPage {
    films: Observable<any>;

    constructor(
        public navCtrl: NavController,
        public apiProvider: ApiProvider
    ) {
        this.films = this.apiProvider.getFilms();
    }

    openDetails(film) {
        // on push sur la page suivante un objet film
        this.navCtrl.push("FilmDetailsPage", { film: film });
    }

    // goToPlanets() {
    //     this.navCtrl.parent.select(2);
    // }

    ionViewDidLoad() {
        console.log("ionViewDidLoad FilmsPage");
    }
}
