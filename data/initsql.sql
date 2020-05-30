CREATE TABLE estufa (
	temperature varchar(50) NOT NULL,
	humidity varchar(50) NOT NULL,
	lightness varchar(50) NOT NULL,
	water_level varchar(50) NOT NULL,
	soil_humidity varchar(50) NOT NULL,
	id SERIAL PRIMARY key,
	created_at TIMESTAMP not NULL
);
