@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :artist, :genre
        json.album_art url_for(song.album_art)
        # json.listens @song.listens.pluck(:id).count
    end
end