import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: 'mdc-card-primary'
})
export class CardPrimaryDirective {
  @HostBinding('class.mdc-card__primary') isHostClass = true;
}