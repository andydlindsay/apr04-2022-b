class BlogpostsController < ApplicationController
  before_action :set_blogpost, only: %i[ show edit update destroy ]

  # GET /blogposts or /blogposts.json
  def index
    @blogposts = Blogpost.all
  end

  # GET /blogposts/1 or /blogposts/1.json
  def show
  end

  # GET /blogposts/new
  def new
    @blogpost = Blogpost.new
  end

  # GET /blogposts/1/edit
  def edit
  end

  # POST /blogposts or /blogposts.json
  def create
    @blogpost = Blogpost.new(blogpost_params)

    respond_to do |format|
      if @blogpost.save
        format.html { redirect_to blogpost_url(@blogpost), notice: "Blogpost was successfully created." }
        format.json { render :show, status: :created, location: @blogpost }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @blogpost.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blogposts/1 or /blogposts/1.json
  def update
    respond_to do |format|
      if @blogpost.update(blogpost_params)
        format.html { redirect_to blogpost_url(@blogpost), notice: "Blogpost was successfully updated." }
        format.json { render :show, status: :ok, location: @blogpost }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @blogpost.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blogposts/1 or /blogposts/1.json
  def destroy
    @blogpost.destroy

    respond_to do |format|
      format.html { redirect_to blogposts_url, notice: "Blogpost was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blogpost
      @blogpost = Blogpost.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blogpost_params
      params.fetch(:blogpost, {})
    end
end
