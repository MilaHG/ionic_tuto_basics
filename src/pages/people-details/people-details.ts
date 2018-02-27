import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
    selector: "page-people-details",
    templateUrl: "people-details.html"
})
export class PeopleDetailsPage {
    people: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // récupère les détails des personnages cliqué depuis PeoplesPage, donc le personnage en cours dans la boucle de people.ts
        this.people = this.navParams.get("people");
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad PeopleDetailsPage");
    }
}
