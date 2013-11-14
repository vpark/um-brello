class ListsController < ApplicationController
  def index
    @board = Board.find(params[:board_id])
    render :json => @board.lists 
  end
  
  def create
    @list = List.new(params[:list])
    @list.save!
    
    render :json => @list
  end
  
  def destroy
    @list = List.find(params[:id])
    @list.destroy
    
    render :json => nil
  end
  
  def sort
    list_ids = params[:list].map(&:to_i)
    
    list_ids.each_with_index do |id, index|
      List.update_all({ position: index + 1 }, { id: id })
    end
  end
end
