    
create table my_items (
    id serial PRIMARY KEY not null,
    owner_id int REFERENCES guest_table(id) not null,
    item_name VARCHAR REFERENCES master_list(item_name) not null,
    image_url VARCHAR REFERENCES master_list(image_url),
    quantity int, 
    volunteered boolean,
)