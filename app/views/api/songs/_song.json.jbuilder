json.extract! song, :id, :title, :artist, :genre, :description, :user_id

json.audioURL url_for(song.audio)

json.album_art url_for(song.album_art)