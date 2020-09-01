import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './journal.js';
import { report } from './journal.js';

$(document).ready(function() {
  $("#journal-entry").submit(function(event) {
    event.preventDefault();
    let title = $("input#journal-title").val();
    let body = $("input#journal-body").val();

    // console.log(body);
    let text = new Entry(title, body);
    // console.log(text);
    let result = report(text);
    // console.log(result);

    $("#result").html(result);
  });
});