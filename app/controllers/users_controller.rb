class UsersController < ApplicationController
  before_filter :check_signed_in
  # respond_to :html, :json
  #this does the same thing as what I have on index
  
  def index
    @user = current_user
    render :json => @user
  end
end
