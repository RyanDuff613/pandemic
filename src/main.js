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

    $('#moreDistance').click(function(){
      game.changeDistancing(2);
    });

    $('#lessDistance').click(function(){
      game.changeDistancing(-1);
    });

    $('#investScience').click(function(){
      game.investDivest(1);
    });

    $('#divestScience').click(function(){
      game.investDivest(-1);
    });

    setInterval(function(){
      game.dayPassing();
      displayData();
    }, 1000);
    
    
  });
});
