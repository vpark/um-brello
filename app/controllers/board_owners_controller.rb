class BoardOwnersController < ApplicationController
  def create
    @board_owner = BoardOwner.new(params[:board_owner])
    @board_owner.save!
    
    render :json => @board_owner
  end
  
end
