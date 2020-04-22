import { Game } from './businessLogic.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function(){
  $('#start').click(function(event){
    event.preventDefault();

    let game = new Game();
    game.playerName = $('#userName').val();
    function displayData(){
      $('#player').text(game.playerName);
      $('#day').text(game.day);
      $('#infectionRate').text(game.infectionRate);
      $('#population').text(game.population);
      $('#budget').text(game.budget);
      $('#economy').text(game.economy);
    }

    displayData();

    $('#moreDistance').click(function(event){
      event.preventDefault();
      game.changeDistancing(2);
    });

    $('#lessDistance').click(function(event){
      event.preventDefault();
      game.changeDistancing(-1);
    });

    $('#investScience').click(function(event){
      event.preventDefault();
      game.investDivest(1);
    });

    $('#divestScience').click(function(event){
      event.preventDefault();
      game.investDivest(-1);
    });

    setInterval(function(){
      game.dayPassing();
      displayData();
    }, 1000);
    
    
  });
});
