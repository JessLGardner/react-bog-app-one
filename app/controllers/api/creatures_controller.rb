class Api::CreaturesController < ApplicationController
  before_action :authenticate_user!
  
    def index
      @creatures = Creature.all
      render json: @creatures
    end
  
    def show
      @creature = Creature.find(params[:id])
      render json: @creature
    end
  
    def create
      @creature = Creature.new(creature_params)
  
      if @creature.save
        render json: @creature
      else
        render json: {
          message: 'error creating creature'
        }
      end
    end
  
    def update
      @creature = Creature.find params[:id]
      @creature.update(creature_params)
  
      if @creature.save
        render json: @creature
      else
        render json: {
          message: 'error updating creature'
        }
      end
    end
  
    def destroy
      @creature = Creature.find(params[:id])
      @creature.destroy
  
      render json: {
        message: 'creature successfully destroyed'
      }
    end
  
    private
    def creature_params
      params.require(:creature).permit(:name, :description)
    end
  
  end
  