import { ApiProvider } from "./../../providers/api/api";
import { Observable } from "rxjs/Observable";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: "page-people",
    templateUrl: "people.html"
})
export class PeoplePage {
    peoples: Observable<any>;

    constructor(
        public navCtrl: NavController,
        public apiProvider: ApiProvider
    ) {
        this.peoples = this.apiProvider.getPeoples();
    }

    openDetails(people) {
        // on push sur la page suivante les détails du people en cours
        this.navCtrl.push("PeopleDetailsPage", { people: people });
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad PeoplePage");
    }
}
