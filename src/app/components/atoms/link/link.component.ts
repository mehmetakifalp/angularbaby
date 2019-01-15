/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp
 * @Company : rastmobile.com
 */
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from "@angular/core";

@Component({
    selector: 'baby-link',
    templateUrl: 'link.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class LinkComponent {
    @Input()
    linkTitle: string = 'Default Link Title';

    @Input()
    linkText: string = ' Default Link Text';

    @Input()
    linkHref:string = 'atoms';
}
