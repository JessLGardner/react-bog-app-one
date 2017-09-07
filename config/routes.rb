Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  root "creatures#index"
  namespace :api do
    resources :creatures
  end
  
end
