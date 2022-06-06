Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', to: 'users#show'
  # get 'login', action: :show, controller: 'users'

  # resources :inventions
  # resources :mottos

  resources :inventions do
    resources :mottos
  end
end
