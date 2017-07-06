import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[mdc-menu-anchor]'
})
export class MenuAnchorDirective {
  @HostBinding('class.mdc-menu-anchor') isHostClass = true;
}