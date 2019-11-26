import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { ErrorPageComponent } from './components/error-page/error-page.component';



@NgModule({
  declarations: [ButtonComponent, TooltipDirective, ErrorPageComponent],
  exports: [
    ButtonComponent,
    TooltipDirective,
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
