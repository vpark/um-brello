Todorize::Application.routes.draw do
  devise_for :users
  resources :users do
    resources :boards
  end
  
  root to: 'users#index'
end
