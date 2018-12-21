# == Schema Information
#
# Table name: songs
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  artist      :string           not null
#  user_id     :integer          not null
#  genre       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

class Song < ApplicationRecord
    validates :title, :artist, :user_id, :genre, presence: true

    has_one_attached :audio

    has_one_attached :album_art

    has_many :listens,
        foreign_key: :song_id,
        class_name: :Listen

    has_many :comments,
        foreign_key: :song_id,
        class_name: :Comment

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
