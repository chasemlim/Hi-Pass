json.extract! song, :id, :title, :artist, :genre, :description, :user_id

json.audioURL url_for(song.audio)