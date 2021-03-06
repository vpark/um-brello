class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  attr_accessible :email, :password, :password_confirmation
  
  has_many(
  :board_ownerships,
  :class_name => "BoardOwner",
  :foreign_key => :user_id,
  :primary_key => :id  
  )
  
  has_many :boards, :through => :board_ownerships, :source => :board
end
