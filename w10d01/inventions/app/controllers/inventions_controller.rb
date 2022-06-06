class InventionsController < ApplicationController
  def index
    @inventions = Invention.all
  end
end
