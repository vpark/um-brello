class UsersController < ApplicationController
  def index
    unless user_signed_in?
      redirect_to new_user_registration_url
    end
    
    @user_boards = Board.find(params[:user_id])
    render :json => @user_boards
    
  end
  
end
