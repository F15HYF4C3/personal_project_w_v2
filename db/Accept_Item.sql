select m.owner_id, v.item_name, v.image_url, v.quantity, m.volunteered
from my_items as m
join master_list as v on m.item_id = v.id
where id = ${id}