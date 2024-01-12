import { Injectable } from '@angular/core';
import { CustomWizardTypes } from '@angularbuildbug/config-util';


@Injectable({ providedIn: 'root' })
export class StoredObjectApiService {
	constructor() {}
	type: CustomWizardTypes = CustomWizardTypes.ActiveAlertPolicies;
}
