import { ApiProvider } from "./../../providers/api/api";
import { Observable } from "rxjs/Observable";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
    selector: "page-planets",
    templateUrl: "planets.html"
})
export class PlanetsPage {
    planets: Observable<any>;

    constructor(
        public navCtrl: NavController,
        public apiProvider: ApiProvider
    ) {
        this.planets = this.apiProvider.getPlanets();
    }

    openDetails(planet) {
        // on push sur la page suivante les détails de la planète en cours
        this.navCtrl.push("PlanetDetailsPage", { planet: planet });
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad PlanetsPage");
    }
}
