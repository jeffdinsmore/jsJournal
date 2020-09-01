import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './journal.js';
import { report } from './journal.js';

$(document).ready(function() {
  alert("here");
  $("#journal-entry").submit(function(event) {
    event.preventDefault();
    alert("in");
    let title = $("input#journal-title").val();
    let body = $("input#journal-body").val();

    let text = new Entry(title, body);
    let result = report(text);

    $("#result").html(result);
  });
});