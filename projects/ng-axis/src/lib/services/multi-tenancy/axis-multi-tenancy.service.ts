﻿///<reference path="../../../../../../node_modules/@cartesian-ui/js-axis/axis.d.ts"/>

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AxisMultiTenancyService {
  get isEnabled(): boolean {
    return axis.multiTenancy.isEnabled;
  }
}
