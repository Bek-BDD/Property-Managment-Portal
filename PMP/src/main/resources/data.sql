
insert into role (role) values ('owner');
insert into role(role) values ('customer');
insert into role (role) values ('admin');

-- password 123 for all
insert into users(deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (false,'hiwot@gmail.com','hiwot','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1664134331536_jpg','Reta','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);

insert into users(deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (false,'zedshif123@icloud.com','zedagem','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975646074_jpg','demelash','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);


insert into users(deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (false,'bereket@gmail.com','bereket','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975645768_jpeg','daniel','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);


insert into users(deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (false,'zola@gmail.com','zelalem','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975644694_jpeg','belayneh','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);

insert into users(deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (false,'dawit@gmail.com','dawit','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1664134386359_jpg','dave','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);

insert into users(deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
    (false,'abdu@gmail.com','abdu','https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975645545_jpeg','Edao','$2a$10$SRDI40/FTaDnEZlkOZisuO2om9Ner.2IRxIquKGJqDpNFhoi6Ub26','',true);



insert into address ( state, city, zip, street) values ( 'Iowa', 'Waterloo', '50706', '1 Buhler Plaza');
insert into address ( state, city, zip, street) values ( 'California', 'Stockton', '95219', '766 Talisman Trail');
insert into address ( state, city, zip, street) values ( 'Ohio', 'Cincinnati', '45243', '7650 Pennsylvania Park');
insert into address ( state, city, zip, street) values ( 'California', 'San Francisco', '94177', '5496 Anhalt Point');
insert into address ( state, city, zip, street) values ( 'New Hampshire', 'Portsmouth', '00214', '93613 Brickson Park Way');
insert into address ( state, city, zip, street) values ( 'Michigan', 'Saginaw', '48604', '00884 Waxwing Crossing');
insert into address ( state, city, zip, street) values ( 'California', 'Fresno', '93726', '97039 Erie Crossing');
insert into address ( state, city, zip, street) values ( 'Tennessee', 'Nashville', '37245', '42 Judy Way');
insert into address ( state, city, zip, street) values ( 'Florida', 'Jacksonville', '32244', '7550 Oriole Terrace');
insert into address ( state, city, zip, street) values ( 'Delaware', 'Wilmington', '19886', '371 Hallows Alley');



insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id) values (  '2022-09-26',76, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Safe Harbor', 1, 143,false,'Sell',1,1);
insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ( '2022-10-25',68, 'Aenean lectus. Pellentesque eget nunc.  condimentum.', 'Mills LLC', 3,  174,false,'Sell',2,2);
insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ('2022-11-12', 43, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. ',' Country Side', 5, 63,false,'Rent',3,3);
insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ( '2022-12-21',35, 'Quisque justo sit amet sapien dignissim vestibulum. ','Sheraton palace', 5, 90,true,'Sell',4,4);
insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ( '2021-01-14',99, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. ', 'Acianda Bella' , 4, 89,true,'Sell',5,5);
insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ( '2021-02-13',58, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.','Special Grande', 5, 187,false,'Rent',6,6);
insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ( '2021-03-12',73, 'Maecenas leo odio, condimentum  luctus nec, molestie sed, justo mauris, laoreet ut,', 'Grand Bololo', 4, 63,false,'Rent',7,6);
insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ( '2021-04-21',38, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.  ','Grady-Prosacco' , 3, 76,false,'Sell',1,5);
insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ('2021-05-22', 84, 'Maecenas leo odio, condimentum  luctus nec, molestie sed,','Watsica-Konopelski', 2, 101,true,'Rent',2,3);
insert into property (date_posted, area, description, name, number_of_room, price,status,type,address_id,owner_id)  values ( '2021-07-10',77, ' sed, tristique in, tempus sit amet, sem.Fusce consequat. Nulla nisl. Nunc nisl.', 'Renner Inc', 1, 66,true,'Rent',1,5);



insert into image ( url,property_id) values ( 'http://dummyimage.com/233x100.png/cc0000/ffffff',1);
insert into image ( url,property_id) values ( 'http://dummyimage.com/178x100.png/dddddd/000000',2);
insert into image ( url,property_id) values ( 'http://dummyimage.com/244x100.png/cc0000/ffffff',3);
insert into image ( url,property_id) values ( 'http://dummyimage.com/142x100.png/cc0000/ffffff',4);
insert into image ( url,property_id) values ( 'http://dummyimage.com/249x100.png/5fa2dd/ffffff',5);
insert into image ( url,property_id) values ( 'http://dummyimage.com/123x100.png/ff4444/ffffff',6);
insert into image ( url,property_id) values ( 'http://dummyimage.com/112x100.png/dddddd/000000',7);
insert into image ( url,property_id) values ( 'http://dummyimage.com/217x100.png/dddddd/000000',8);
insert into image ( url,property_id) values ( 'http://dummyimage.com/115x100.png/dddddd/000000',9);
insert into image ( url,property_id) values ( 'http://dummyimage.com/237x100.png/cc0000/ffffff',1);


insert into users_role(user_id,role_id) values (1,1);
insert into users_role(user_id,role_id) values (2,1);
insert into users_role(user_id,role_id) values (3,1);
insert into users_role(user_id,role_id) values (4,2);
insert into users_role(user_id,role_id) values (5,2);
insert into users_role(user_id,role_id) values (6,3);
insert into users_role(user_id,role_id) values (1,3);
