json.users do
    json.set! user.id do
        json.extract! user, :id, :username
    end
end

json.songs do
    user.songs.each do |song|
        json.set! song.id do
            # json.partial! "api/songs/song", song: song
            json.extract! song, :id, :title, :artist, :genre, :description, :user_id
        end
    end
end