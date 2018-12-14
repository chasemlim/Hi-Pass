json.extract! user, :id, :username
json.user_songs user.songs.pluck(:id)