Todorize::Application.routes.draw do
  devise_for :users
  resources :users 
  resources :cards

  resources :boards do
    resources :lists, :only => [:index]
  end
  
  resources :lists do
    resources :cards, :only => [:index]
  end
  
  root to: 'root#root'
end
