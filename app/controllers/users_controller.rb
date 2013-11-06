class UsersController < ApplicationController
  def index
    unless user_signed_in?
      redirect_to new_user_registration_url
    else
      respond_to do |format|
        format.html {render :index}
        format.json {
          @user_boards = BoardOwner.find_by_user_id(current_user.id)
          render :json => @user_boards
        }
      end
    end    
  end
  
end
