class Api::SongsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @songs = Song.all
    end

    def show
        @song = Song.find(params[:id])
    end

    def create
        @song = Song.new(song_params)
        @song.user_id = current_user.id

        if @song.save
            render :show
        else
            render json: ["Invalid song parameters."], status: 411
        end
    end

    def update
        @song = Song.find(params[:id])

        if @song.update(song_params)
            render json: @song
        else
            render json: @song.errors.full_messages, status: 422
        end
    end
        
    def destroy
        @song = Song.find(params[:id])
        @song.destroy
        render json: @song
    end

    private

    # maybe make check method for artists following here?

    def song_params
        params.require(:song).permit(:title, :artist, :genre)
    end
end