Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :fb_auth, only: [:create]
  resources :search,  only: [:index]
end
