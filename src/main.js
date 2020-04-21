import { Game } from './businessLogic.js';
import{ Player } from './businessLogic.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function(){
  $('#start').click(function(event){
    event.preventDefault();
    let game = new Game();
    let player = new Player();
    let someVar = 3;
    someVar = 3;
    game.population = 200;
    player.name = 'andy';
    $('#population').text('some number'+someVar);
  });
});
