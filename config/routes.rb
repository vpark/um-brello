Todorize::Application.routes.draw do
  devise_for :users
  resources :users 
  resources :boards do
    resources :lists
  end
  
  
  root to: 'root#root'
end
