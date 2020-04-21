import {Game} from './businessLogic.js';
import $ from 'jquery';

$(document).ready(function(){
  $('start').submit(function(event){
    event.preventDefault();
    let game = new Game();
    game.player += 1;
  });
});
