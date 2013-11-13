class Board < ActiveRecord::Base
  attr_accessible :title, :user_id
  
  validates_presence_of :title, :user_id

  has_many(
  :board_owners,
  :class_name => "BoardOwner",
  :foreign_key => :board_id,
  :primary_key => :id  
  )
  
  has_many :users, :through => :board_owners, :source => :user
  has_many :lists, dependent: :destroy
end
