///
/// Copyright © 2016-2024 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { ScadaObjectProperty } from '@home/components/widget/lib/scada/scada.models';

export interface ScadaPropertyRow {
  label: string;
  properties: ScadaObjectProperty[];
  switch?: ScadaObjectProperty;
  rowClass?: string;
}

export const toPropertyRows = (properties: ScadaObjectProperty[]): ScadaPropertyRow[] => {
  const result: ScadaPropertyRow[] = [];
  for (const property of properties) {
    let propertyRow = result.find(r => r.label === property.name);
    if (!propertyRow) {
      propertyRow = {
        label: property.name,
        properties: [],
        rowClass: property.rowClass
      };
      result.push(propertyRow);
    }
    if (property.type === 'switch') {
      propertyRow.switch = property;
    } else {
      propertyRow.properties.push(property);
    }
  }
  return result;
};
