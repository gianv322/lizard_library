class WishlistsController < ApplicationController
    def index
        wishlists = Wishlist.all
        render json: wishlists, status: :ok
    end
    def create
        wishlist = Wishlist.create!(wishlist_params)
        render json: wishlist, status: :created
    end
    def destroy
        wishlist.find_by(id: params[:id])
        if wishlist
            wishlist.destroy
            head :no_content
        else
            render json: {errors: "Not found"}
        end
end
