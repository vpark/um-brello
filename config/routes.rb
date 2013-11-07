Todorize::Application.routes.draw do
  devise_for :users
  resources :users 
  resources :boards
  
  
  root to: 'root#root'
end
