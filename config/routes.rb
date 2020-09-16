Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do 
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: %i[create destroy]

    end
  end

  # This will allow React Router basically handling routing to our react component without interfering with our rails routes with out api 
  get '*path', to: 'pages#index', via: :all
end
