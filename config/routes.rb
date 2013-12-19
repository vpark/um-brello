Todorize::Application.routes.draw do
  devise_for :users
  resources :users 
  resources :cards
  resources :board_owners
  post '/lists/sort', to: 'lists#sort'
  
  resources :boards do
    resources :lists, :only => [:index]
  end
  
  resources :lists do
    resources :cards, :only => [:index]
  end
  
  root to: 'root#root'
end