import { Component, Input } from '@angular/core';

@Component({
    selector: 'baby-pagination',
    templateUrl: 'pagination.component.html'
})
export class PaginationComponent{


    @Input()
    pageSize: number = 0;

    @Input()
    totalCount: number = 0;
}