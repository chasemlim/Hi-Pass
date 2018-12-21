json.users do
    json.set! user.id do
        json.extract! user, :id, :username
        json.avatar url_for(user.avatar)
    end
end

json.songs do
    user.songs.each do |song|
        json.set! song.id do
            # json.partial! "api/songs/song", song: song
            json.extract! song, :id, :title, :artist, :genre, :description, :user_id
            json.audioURL url_for(song.audio)
            json.album_art url_for(song.album_art)  
        end
    end
end