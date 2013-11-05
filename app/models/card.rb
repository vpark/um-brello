class Card < ActiveRecord::Base
  attr_accessible :title, :list_id
  
  validates_presence_of :title, :list_id
  
  belongs_to :list
end
