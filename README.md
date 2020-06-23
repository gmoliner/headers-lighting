# Table headers lighting directive
An Angular directive to highlight the table thead cell relating to the mouse position on the table tbody column.

### Installation
`npm install table-headers-lighting`

### Import in Angular project
Import `HeadersLightingModule` in `app.module.ts`.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HeadersLightingModule} from 'table-headers-lighting'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeadersLightingModule // Import the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Demo
[Try the demo in Stackblitz](https://stackblitz.com/edit/table-headers-lighting)

### Usage
<ul>
<li>Set the attribute <code>headersLighting="true"</code> to the HTML table.</li>
<li>Hover a column to highlight the related header.</li>
</ul>

### Disable column
Set the HTML `disable` attribute to prevent highlighting for a specific column.
```
    <table>
        <thead>
            <tr>
                <th disabled="true">Header 1</th>
                <th>Header 2</th>
                <th disabled="true">Header 3</th>
                <th>Header 4</th> 
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Row 1</td>
                <td>Row 2</td>
                <td>Row 3/td>
                <td>Row 4</td>
            </tr>
        </tbody>
    </table>
```

### Set background color
Set the color with the `.header-light` CSS class
```
    .header-light {
        background-color: yellow;
    }
```