Todorize::Application.routes.draw do
  devise_for :users
  resources :users 
  resources :boards do
    resources :lists, :only => [:index]
  end
  
  resources :lists, :only => [:create]
  resources :cards, :only => [:create]
  root to: 'root#root'
end
