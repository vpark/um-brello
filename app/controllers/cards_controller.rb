class CardsController < ApplicationController
  def index
    @list = List.find(params[:list_id])
    render :json => @list.cards
  end
  
  def create
    @card = Card.new(params[:card])
    @card.save!
    
    render :json => @card
  end
end
