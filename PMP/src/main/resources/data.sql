insert into address (id, state, city, zip, street) values (9, 'Florida', 'Jacksonville', '32244', '7550 Oriole Terrace');
insert into address (id, state, city, zip, street) values (10, 'Delaware', 'Wilmington', '19886', '371 Hallows Alley');


insert into users ( id, email, firstname, lastname, imageurl, password, active, address_id, deleted) values ( '6', 'vdecastelain0@newsvine.com', 'Virginia', 'de Castelain', 'http://dummyimage.com/219x100.png/5fa2dd/ffffff', 'YcnhkCbr9tM', true, 9, false);
insert into users ( id, email, firstname, lastname, imageurl, password,active, address_id, deleted) values ( '5', 'kzapata1@gov.uk', 'Kora', 'Zapata', 'http://dummyimage.com/242x100.png/ff4444/ffffff', 'bt5ne5OTF', false, 10, false);

insert into property (id, area, description, name, number_of_room, price,status,type,owner_id, address_id)  values ('4', 35, 'Quisque id justo sit amet sapien dignissim vestibulum. ','Sheraton palace', 5, 90,true,'Sell',6,9);
insert into property (id, area, description, name, number_of_room, price,status,type,owner_id, address_id)  values ('5', 99, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. ', 'Acianda Bella' , 4, 89,true,'Sell',5,10);


insert into image (id, url) values ('4', 'http://dummyimage.com/142x100.png/cc0000/ffffff');
insert into image (id, url) values ('5', 'http://dummyimage.com/249x100.png/5fa2dd/ffffff');
