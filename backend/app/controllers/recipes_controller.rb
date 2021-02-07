class RecipesController < ApplicationController
    skip_before_action :require_login

    def index
        @recipes = User.find_by_id(params[:user_id]).recipes
        render json: @recipes
    end
end
