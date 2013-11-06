class UsersController < ApplicationController
  before_filter :check_signed_in
  # respond_to :html, :json
  #this does the same thing as what I have on index
  
  def index
    # respond_to do |format|
    #   format.html {render :index}
    #   format.json {
        @user_boards = current_user.boards
        render :json => @user_boards
    #   }
    # end    
  end
end
