class BoardsController < ApplicationController
  def index
    @user_boards = current_user.boards
    render :json => @user_boards.to_json(:include => {:lists => {:include => :cards}} )
  end

  def create
    @board = Board.new(params[:board])
    @board.save!
    
    @board_owner = BoardOwner.new(user_id: @board.user_id, board_id: @board.id)
    @board_owner.save!
    
    render :json => @board
  end
  
  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    
    render :json => nil
  end
end
