class BoardsController < ApplicationController
  def index
    @user_boards = current_user.boards
    render :json => @user_boards.to_json(include: :lists) 
  end
end
