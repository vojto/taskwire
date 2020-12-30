Rails.application.routes.draw do
  resources :tasks do
    collection do
      get :batch_destroy
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
