class RecipesController < ApplicationController
    skip_before_action :require_login
    before_action :current_user, only: [:create]

    def index
        @recipes = User.find_by_id(params[:user_id]).recipes
        render json: @recipes
    end

    def show

    end

    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe
            @recipe.user_id = @user.id
            @recipe.save
        end
    end

    def update

    end

    def destroy

    end

    private

    def current_user
        @user = User.find_by_id(params[:user_id])
    end

    def recipe_params
        params.permit(:name, :food_type, :serving_size, :prep_time, :cook_time, :instructions)
    end
end
