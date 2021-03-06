import { Component } from "@angular/core";
import { Response } from '@angular/http';
import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService,
                private router: Router) {}

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/signin']);
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}