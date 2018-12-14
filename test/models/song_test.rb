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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
