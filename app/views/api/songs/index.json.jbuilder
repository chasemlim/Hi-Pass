@songs.each do |song|
    json.set! song.id do
        json.extract! :id, :title, :artist, :genre, :description
        json.album_art url_for(song.album_art)
        # json.listens @song.listens.pluck(:id).count
    end
end