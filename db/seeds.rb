# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
user = User.create(
    username: "NeocolorMusic", email: "neocolormusic@gmail.com", password: "password"
)

Song.delete_all
song = Song.create(
    title: "hctbw", artist: "Neocolor", genre: "Electronic", description: "thing", user_id: user.id
)

file = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/hctbw.mp3')

song.audio.attach(io: file, filename: 'test')