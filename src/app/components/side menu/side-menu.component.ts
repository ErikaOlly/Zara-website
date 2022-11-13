import { Component } from "@angular/core";

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',

})
export class SideMenuComponent {

    // menuItems = ['UOMO','DONNA','BAMBINO','HOME',];
    menuItems = [
        {
            itemTitle: 'UOMO',
            menuItems: ['SCARPE', 'CINTURE', 'CAPPELLI']
        },
        {
            itemTitle: 'DONNA',
            menuItems: ['BORSE', 'GIACCHE', 'GONNE']
        },
        {
            itemTitle: 'BAMBINO',
            menuItems: ['SHORTS', 'CIUCCI', 'BAVAGLINI']
        },
        {
            itemTitle: 'HOME',
            menuItems: ['BICCHIERI', 'TAZZE', 'VASSOI']
        }
    ];

    menuItemsChosen: any;
        
    constructor() {

}


loadMenuItems(item) {
   this.menuItemsChosen= this.menuItems.find(x => x.itemTitle === item.itemTitle)
}
}