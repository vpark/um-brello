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
  
  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    
    render :json => nil
  end
end
