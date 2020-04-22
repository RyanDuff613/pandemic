import { Game } from './businessLogic.js';
import{ Player } from './businessLogic.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function(){
  $('#start').click(function(event){
    let game = new Game();
    let player = new Player();
    let playerName = $('#userName').val();
    player.name = playerName;
    $('#player').text(player.name);
    $('#day').text(game.day);
    $('#infectionRate').text(game.infectionRate);
    $('#population').text(game.population);
    $('#budget').text(game.budget);
    $('#economy').text(game.economy);
    event.preventDefault();
  });
});
