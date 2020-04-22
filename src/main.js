import { Game } from './businessLogic.js';
import{ Player } from './businessLogic.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function(){
  $('#start').click(function(event){
    event.preventDefault();

    let game = new Game();
    let player = new Player();
    player.name = $('#userName').val();
    function displayData(){
      $('#player').text(player.name);
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
      game.dayPassing();
      displayData();
    });

    $('#lessDistance').click(function(event){
      event.preventDefault();
      game.changeDistancing(-1);
      game.dayPassing();
      displayData();
    });

    $('#investScience').click(function(event){
      event.preventDefault();
      game.investDivest(1);
      game.dayPassing();
      displayData();
    });

    $('#divestScience').click(function(event){
      event.preventDefault();
      game.investDivest(-1);
      game.dayPassing();
      displayData();
    });

    $('#holdTight').click(function(event){
      event.preventDefault();
      game.dayPassing();
      displayData();
    });

    
    
    
  });
});
