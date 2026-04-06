import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {

    private key = 'game_bg';
    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    setBackground(color: string) {
        if (!this.isBrowser) return;

        document.documentElement.style.setProperty('--bg-main', color);
        localStorage.setItem(this.key, color);
    }

    loadSavedTheme() {
        if (!this.isBrowser) return;

        const saved = localStorage.getItem(this.key);
        if (saved) {
            document.documentElement.style.setProperty('--bg-main', saved);
        }
    }
}