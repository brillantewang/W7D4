json.set! :pokemon do
  json.array! @pokemons do |poke|
    json.id poke.id
    json.name poke.name
    json.attack poke.attack
    json.defense poke.defense
    json.poke_type poke.poke_type
    json.moves poke.moves
    json.image_url asset_path(poke.image_url)
    json.item_ids poke.items.map(&:id)
  end
end

json.set! :items do
  items_arr = []
  @pokemons.each { |poke| items_arr += poke.items }
  json.array! items_arr.uniq, :id, :name, :pokemon_id, :price, :happiness, :image_url
end

# @pokemons.each do |poke|
#
#   json.items poke.items do |item|
#
#     json.id item.id
#     json.name item.name
#     json.pokemon_id item.pokemon_id
#     json.price item.price
#     json.happiness item.happiness
#     json.image_url asset_path(item.image_url)
#   end
#
# end
