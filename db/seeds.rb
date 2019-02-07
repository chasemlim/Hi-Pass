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
user_avatar = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/colors-ep.jpg')
user.avatar.attach(io: user_avatar, filename: 'colors-ep.jpg')
user.save!

clazz = User.create(
    username: "Clazziquai", email: "clazziquai@gmail.com", password: "password"
)
clazz_avatar = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/clazziquai.jpg')
clazz.avatar.attach(io: clazz_avatar, filename: 'clazziquai.jpg')
clazz.save!

porter = User.create(
    username: "porterrobinson", email: "porterworlds@gmail.com", password: "password"
)
porter_avatar = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/porter.jpeg')
porter.avatar.attach(io: porter_avatar, filename: 'porter.jpeg')
porter.save!

paak = User.create(
    username: "andypaak", email: "andersonpaak@gmail.com", password: "password"
)
paak_avatar = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/paak.jpg')
paak.avatar.attach(io: paak_avatar, filename: 'paak.jpg')
paak.save!

daoko = User.create(
    username: "DAOKO", email: "daoko@gmail.com", password: "password"
)
daoko_avatar = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/daoko.jpg')
daoko.avatar.attach(io: daoko_avatar, filename: 'daoko.jpg')
daoko.save!

brock = User.create(
    username: "BROCKHAMPTON", email: "brkhmptn@gmail.com", password: "password"
)
brock_avatar = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/brockhampton.jpg')
brock.avatar.attach(io: brock_avatar, filename: 'brockhampton.jpg')
brock.save!

bmth = User.create(
    username: "BMTH", email: "bmth@gmail.com", password: "password"
)
bmth_avatar = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/bmth.jpg')
bmth.avatar.attach(io: bmth_avatar, filename: 'bmth.jpg')
bmth.save!

travis = User.create(
    username: "TScott", email: "travisscott@gmail.com", password: "password"
)
travis_avatar = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/travis-scott.jpg')
travis.avatar.attach(io: travis_avatar, filename: 'travis-scott.jpg')
travis.save!

madeon = User.create(
    username: "ItsMadeon", email: "madeon@gmail.com", password: "password"
)
madeon_avatar = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/madeon.jpg')
madeon.avatar.attach(io: madeon_avatar, filename: 'madeon.jpg')
madeon.save!


Song.delete_all
s = Song.create(
    title: "How Could This Be Wrong (Neocolor Remix)", artist: "Neocolor", genre: "Electronic", description: "The debut remix of Neocolor, a somber and groovy take on The Glitch Mob's original. Please enjoy!", user_id: user.id
)

f = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/hctbw.mp3')
a = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/hctbw-cover.png')

s.audio.attach(io: f, filename: 'hctbw.mp3')
s.album_art.attach(io: a, filename: 'hctbw-cover.png')
s.save!

s2 = Song.create(
    title: "#궁금해 (#Curious)", artist: "Clazziquai Project", genre: "K-Pop", description: "클래지콰이의 신곡 '#궁금해'는 클래지콰이 정규 7집 [Travelers]의 수록곡으로 클래지콰이 특유의 달콤한 멜로디와 펑키한 사운드로 완성된 곡이다. 

‘#궁금해’는 사랑에 빠지고 있는 남녀의 설레는 이야기를 담은 곡으로, 서로를 궁금해하고 색다른 매력을 느끼기 시작한 둘만의 밝고 사랑스러운 감성이 돋보이는 곡이다. 특히 노랫말을 통해 좋아하는 상대에 대한 감정을 쉽지만 가볍지 않게 담아내 누구나 공감할 수 있는 설렘의 정서를 전달한다.  ", user_id: clazz.id
)

f2 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/curious.m4a')
a2 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/travellers.jpg')

s2.audio.attach(io: f2, filename: 'curious.m4a')
s2.album_art.attach(io: a2, filename: 'travellers.jpg')
s2.save!

s3 = Song.create(
    title: "The Thrill (Porter Robinson Remix)", artist: "Porter Robinson", genre: "Electronic", description: "Porter Robinson's emotional take on Nero's hit song, The Thrill.", user_id: porter.id
)

f3 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/the-thrill.m4a')
a3 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/the-thrill-cover.jpg')

s3.audio.attach(io: f3, filename: 'the-thrill.m4a')
s3.album_art.attach(io: a3, filename: 'the-thrill-cover.jpg')
s3.save!

s4 = Song.create(
    title: "Am I Wrong", artist: "Anderson .Paak", genre: "R&B", description: "From the album Malibu. Out Now!", user_id: paak.id
)

f4 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/am-i-wrong.mp3')
a4 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/malibu.jpg')

s4.audio.attach(io: f4, filename: 'am-i-wrong.mp3')
s4.album_art.attach(io: a4, filename: 'malibu.jpg')
s4.save!

s5 = Song.create(
    title: "BANG!", artist: "DAOKO", genre: "J-Pop", description: "2016年9月14日発売
Triple A Side 2nd Single「もしも僕らがGAMEの主役で/ ダイスキ with TeddyLoid / BANG!」", user_id: daoko.id
)

f5 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/bang.mp3')
a5 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/thank-you-blue.jpg')

s5.audio.attach(io: f5, filename: 'bang.mp3')
s5.album_art.attach(io: a5, filename: 'thank-you-blue.jpg')
s5.save!

s6 = Song.create(
    title: "BOOGIE", artist: "BROCKHAMPTON", genre: "Hip-Hop/Rap", description: "BROCKHAMPTON TOUR TICKETS ON SALE: http://brckhmptn.com/dates/", user_id: brock.id
)

f6 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/boogie.mp3')
a6 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/saturation-3.jpg')

s6.audio.attach(io: f6, filename: 'boogie.mp3')
s6.album_art.attach(io: a6, filename: 'saturation-3.jpg')
s6.save!

s7 = Song.create(
    title: "Happy Song", artist: "Bring Me The Horizon", genre: "Alternative", description: "A departure from their previous heavier sound, Bring Me The Horizon channels their inner arena rock anthem with this blazing new cut.", user_id: bmth.id
)

f7 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/happy-song.mp3')
a7 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/thats-the-spirit.jpg')

s7.audio.attach(io: f7, filename: 'happy-song.mp3')
s7.album_art.attach(io: a7, filename: 'thats-the-spirit.jpg')
s7.save!

s8 = Song.create(
    title: "Illuminate", artist: "Neocolor", genre: "Electronic", description: "The lead single off Neocolor's acclaimed first EP, Colors. An emotional aural journey that wraps you in an enveloping blanket of pads then drops you headfirst into the dance floor at the end.", user_id: user.id
)

f8 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/illuminate.mp3')
a8 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/colors-ep.jpg')

s8.audio.attach(io: f8, filename: 'illuminate.mp3')
s8.album_art.attach(io: a8, filename: 'colors-ep.jpg')
s8.save!

s9 = Song.create(
    title: "Pay No Mind x Easy (Shelter Edit)", artist: "Porter Robinson & Madeon", genre: "Electronic", description: "The live version of Porter Robinson's Easy and Madeon's Pay No Mind, combined into one song, played live only on Shelter Tour.", user_id: porter.id
)

f9 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/pay-no-mind-easy.mp3')
a9 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/shelter-live.jpg')

s9.audio.attach(io: f9, filename: 'pay-no-mind-easy.mp3')
s9.album_art.attach(io: a9, filename: 'shelter-live.jpg')
s9.save!

s10 = Song.create(
    title: "Pay No Mind (Midnight Kids Remix)", artist: "Madeon", genre: "Electronic", description: "Please enjoy this 80's infused remix of Madeon's hit 'Pay No Mind' by the Midnight Kids.", user_id: madeon.id
)

f10 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/pay-no-mind-remix.mp3')
a10 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/pay-no-mind-remix.jpg')

s10.audio.attach(io: f10, filename: 'pay-no-mind-remix.mp3')
s10.album_art.attach(io: a10, filename: 'pay-no-mind-remix.jpg')
s10.save!

s11 = Song.create(
    title: "Shepherdess", artist: "Porter Robinson", genre: "Electronic", description: "Originally a rejected track for Porter Robinson's debut album Worlds, Shepherdess was included as a bonus track on the box set vinyl.", user_id: porter.id
)

f11 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/shepherdess.mp3')
a11 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/worlds.jpg')

s11.audio.attach(io: f11, filename: 'shepherdess.mp3')
s11.album_art.attach(io: a11, filename: 'worlds.jpg')
s11.save!

s12 = Song.create(
    title: "SICKO MODE (feat. Big Hawk, Drake & Swae Lee)", artist: "Travis Scott", genre: "Hip-Hop/Rap", description: "Travis Scott's lead single off his acclaimed album ASTROWORLD, demonstrates the diversity and new heights that he pushes Trap music towards.", user_id: travis.id
)

f12 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/sicko-mode.mp3')
a12 = open('https://s3-us-west-1.amazonaws.com/seed-assets-aa/astro-world.jpg')

s12.audio.attach(io: f12, filename: 'sicko-mode.mp3')
s12.album_art.attach(io: a12, filename: 'astro-world.jpg')
s12.save!

