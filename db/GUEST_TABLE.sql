-- create table guest_table (
--     id serial PRIMARY key not null,
--     full_name varchar(100),
--     email varchar(100) not null,
--     password varchar(100) not null,
--     bg_names varchar(100) not null
-- )

select * from guest_table where id = ${id}