class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games, only:[:name, :score, :id]
      end


end
