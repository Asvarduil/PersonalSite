import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LogoComponent } from './logo/logo.component';
import { CollapsiblePanelComponent } from './collapsible-panel/collapsible-panel.component';

@NgModule({ declarations: [
        LogoComponent,
        CollapsiblePanelComponent
    ],
    exports: [
        LogoComponent,
        CollapsiblePanelComponent,
        CommonModule
    ], imports: [CommonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule { }
