
insert into role (id,role) values (1,'owner');
insert into role(id,role) values (2,'customer');
insert into role (id,role) values (3,'admin');

-- password 123 for all
insert into users(id,deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (200,false,'hiwot@gmail.com','hiwot','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1664134331536_jpg','Reta','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);

insert into users(id,deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (100,false,'zed@gmail.com','zedagem','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975646074_jpg','demelash','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);


insert into users(id,deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (101,false,'bereket@gmail.com','bereket','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975645768_jpeg','daniel','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);


insert into users(id,deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (102,false,'zola@gmail.com','zelalem','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975644694_jpeg','belayneh','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);

insert into users(id,deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (103,false,'dawit@gmail.com','dawit','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1664134386359_jpg','dave','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);

insert into users(id,deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (104,false,'abdu@gmail.com','abdu','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975645545_jpeg','Edao','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);



insert into address (id, state, city, zip, street) values (100, 'Iowa', 'Waterloo', '50706', '1 Buhler Plaza');
insert into address (id, state, city, zip, street) values (200, 'California', 'Stockton', '95219', '766 Talisman Trail');
insert into address (id, state, city, zip, street) values (300, 'Ohio', 'Cincinnati', '45243', '7650 Pennsylvania Park');
insert into address (id, state, city, zip, street) values (400, 'California', 'San Francisco', '94177', '5496 Anhalt Point');
insert into address (id, state, city, zip, street) values (500, 'New Hampshire', 'Portsmouth', '00214', '93613 Brickson Park Way');
insert into address (id, state, city, zip, street) values (600, 'Michigan', 'Saginaw', '48604', '00884 Waxwing Crossing');
insert into address (id, state, city, zip, street) values (700, 'California', 'Fresno', '93726', '97039 Erie Crossing');
insert into address (id, state, city, zip, street) values (800, 'Tennessee', 'Nashville', '37245', '42 Judy Way');
insert into address (id, state, city, zip, street) values (900, 'Florida', 'Jacksonville', '32244', '7550 Oriole Terrace');
insert into address (id, state, city, zip, street) values (1000, 'Delaware', 'Wilmington', '19886', '371 Hallows Alley');



insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id) values ( '100', '2022-09-26',76, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Safe Harbor', 1, 143,false,'Sell',100,101);
insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ('200', '2022-10-25',68, 'Aenean lectus. Pellentesque eget nunc.  condimentum.', 'Mills LLC', 3,  174,false,'Sell',200,101);
insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ( '300','2022-11-12', 43, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. ',' Country Side', 5, 63,false,'Rent',300,101);
insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ('400', '2022-12-21',35, 'Quisque id justo sit amet sapien dignissim vestibulum. ','Sheraton palace', 5, 90,true,'Sell',400,101);
insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ('500', '2021-01-14',99, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. ', 'Acianda Bella' , 4, 89,true,'Sell',500,102);
insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ('600', '2021-02-13',58, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.','Special Grande', 5, 187,false,'Rent',600,102);
insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ('700', '2021-03-12',73, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo mauris, laoreet ut,', 'Grand Bololo', 4, 63,false,'Rent',700,102);
insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ('800', '2021-04-21',38, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.  ','Grady-Prosacco' , 3, 76,false,'Sell',800,103);
insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ( '900','2021-05-22', 84, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed,','Watsica-Konopelski', 2, 101,true,'Rent',900,103);
insert into property (id,date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ('101', '2021-07-10',77, ' sed, tristique in, tempus sit amet, sem.Fusce consequat. Nulla nisl. Nunc nisl.', 'Renner Inc', 1, 66,true,'Rent',1000,103);



insert into image (id, url,property_id) values ('1', 'http://dummyimage.com/233x100.png/cc0000/ffffff',100);
insert into image (id, url,property_id) values ('2', 'http://dummyimage.com/178x100.png/dddddd/000000',200);
insert into image (id, url,property_id) values ('3', 'http://dummyimage.com/244x100.png/cc0000/ffffff',300);
insert into image (id, url,property_id) values ('4', 'http://dummyimage.com/142x100.png/cc0000/ffffff',400);
insert into image (id, url,property_id) values ('5', 'http://dummyimage.com/249x100.png/5fa2dd/ffffff',500);
insert into image (id, url,property_id) values ('6', 'http://dummyimage.com/123x100.png/ff4444/ffffff',600);
insert into image (id, url,property_id) values ('7', 'http://dummyimage.com/112x100.png/dddddd/000000',700);
insert into image (id, url,property_id) values ('8', 'http://dummyimage.com/217x100.png/dddddd/000000',800);
insert into image (id, url,property_id) values ('9', 'http://dummyimage.com/115x100.png/dddddd/000000',900);
insert into image (id, url,property_id) values ('10', 'http://dummyimage.com/237x100.png/cc0000/ffffff',101);


insert into users_role(user_id,role_id) values (200,1);
insert into users_role(user_id,role_id) values (100,1);
insert into users_role(user_id,role_id) values (101,1);
insert into users_role(user_id,role_id) values (102,2);
insert into users_role(user_id,role_id) values (103,2);
insert into users_role(user_id,role_id) values (104,3);
insert into users_role(user_id,role_id) values (104,3);


insert into application(date,user_id,property_id) values ('2021-10-10',102,100);
insert into application(date,user_id,property_id) values ('2021-10-10',102,200);
insert into application(date,user_id,property_id) values ('2021-10-10',102,300);