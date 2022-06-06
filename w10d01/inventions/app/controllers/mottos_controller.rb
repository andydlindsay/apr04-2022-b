class MottosController < ApplicationController
  def index
    @invention = Invention.find params[:invention_id]
    @mottos = @invention.mottos
  end
end
