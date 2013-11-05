class BoardOwner < ActiveRecord::Base
  attr_accessible :user_id, :board_id
  
  validates_presence_of :user_id, :board_id
  
  belongs_to :users
  belongs_to :boards
end
