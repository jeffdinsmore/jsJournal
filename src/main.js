import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#journal-entry").submit(function(event) {
    let title = $("input#journal-title").val();
    let body = $("input#journal-body").val();

    $("#result").html();
  });
});