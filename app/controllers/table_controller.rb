class TableController < ApplicationController
  def index
    @elements = getJson()
  end

  def show
    id = params[:id]
    elements = getJson()

    @element = elements[id]

    if !@element
      redirect_to action: 'index'
    end
  end

  def getJson
    file = File.read("db/data.json")
    return JSON.parse(file)
  end
end
