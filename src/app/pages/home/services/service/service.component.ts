import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/models/service.model';

@Component({
	selector: 'mcna-service',
	templateUrl: './service.component.html',
	styleUrls: [ './service.component.scss' ]
})
export class ServiceComponent {
	@Input() service: Service;
}
