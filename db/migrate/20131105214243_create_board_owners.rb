class CreateBoardOwners < ActiveRecord::Migration
  def change
    create_table :board_owners do |t|
      t.integer :user_id
      t.integer :board_id
      
      t.timestamps
    end
  end
end
