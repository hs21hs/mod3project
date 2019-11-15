class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games, only:[:name, :score, :id]
      end

    def create 
      
       work = Game.create(game_params)
      render json: work
    end


    private 

    def game_params
      params.require(:game).permit!
    end
end
