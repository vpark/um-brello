class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def check_signed_in
    unless user_signed_in?
      redirect_to new_user_registration_url
    end
  end
end
