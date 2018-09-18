class Api::ArticlesController < ApplicationController

  def index
    @things = [
      {:category=>"technology"}, 
      {:category=>"business"}, 
      {:category=>"sport"}, 
      {:category=>"weather"}, 
      {:category=>"music"}, 
      {:category=>"travel"}
    ]
    @things.each do |thing|
      type = thing[:category]
      response = Unirest.get(
        "https://content.guardianapis.com/#{type}?&api-key=#{ENV["API_KEY"]}")
      @results = response.body["response"]["results"]
      thing[:data] = @results.map do |result|
        result["imageUrl"] = nil
        result
      end 
      thing[:currentArticleIndex] = 0
      thing[:currentArticleVisible] = false
    end
    render json: @things
  end

  def pic
    link = params["api_URL"]
    tail = "?show-blocks=all&api-key=#{ENV["API_KEY"]}"
    response = Unirest.get(link + tail)
    @pics = response.body["response"]["content"]["blocks"]["main"]["elements"][0]["assets"]
    @pics.each do |pic|
      if pic["typeData"]["isMaster"] == true
        @img = pic["file"]
      end
    end
    render json: {img: @img}
  end

end
