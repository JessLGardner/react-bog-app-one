Rails.application.routes.draw do

  root "creatures#index"
  namespace :api do
    resources :creatures
  end
  
end
