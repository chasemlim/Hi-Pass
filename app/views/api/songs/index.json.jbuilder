@songs.each do |song|
    json.set! song.id do
        json.extract! :id, :title, :artist, :genre
        # json.listens @song.listens.pluck(:id).count
    end
end