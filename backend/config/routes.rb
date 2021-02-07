Rails.application.routes.draw do
  resources :measurements
  resources :ingredients
  resources :users, only: [:index, :create, :show] do
    resources :recipes
  end

  post '/login', to: 'auth#login'
  get '/auto_login', to: 'auth#auto_login'
  get '/user_is_authed', to: 'auth#user_is_authed'
end
