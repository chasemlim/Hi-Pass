json.songs do
    json.set! @song.id do
        json.partial! '/api/songs/song', song: @song
    end
    # json.listens @song.listens.pluck(:id).count
end

user = User.find(@song.user_id)

json.users do
    json.set! user.id do
        json.extract! user, :id, :username
        json.avatar url_for(user.avatar)
    end
end


# json.comments do
#     @song.comments.each do |comment|
#         json.set! comment.id do
#             json.partial! 'api/comments/comment', comment: comment
#         end
#     end
# end