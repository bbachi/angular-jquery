import { Component } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jquery';

  onSubmit() {

    const email = jQuery('#email').val();
    const password = jQuery('#pword').val();

    jQuery('#value1').val(email);
    jQuery('#value2').val(password);

    jQuery('#formid').attr('action', 'someform.htm').submit();

  }
}
