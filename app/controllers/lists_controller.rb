class ListsController < ApplicationController
  def index
    @board = Board.find(params[:board_id])
    render :json => @board.lists 
  end
  
  
  
end
