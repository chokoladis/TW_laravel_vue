include .env

build:
	docker-compose up --build -d
up:
	docker-compose up -d
down:
	docker-compose down

reload:
	make down
	make up

db-start:
	docker exec -w /var/www/tw_app tw_app_php php artisan migrate
	docker exec -w /var/www/tw_app tw_app_php sh -c "php artisan db:seed DatabaseSeeder && php artisan db:seed QuestionSeeder"
	docker exec -w /var/www/tw_app tw_app_php sh -c "php artisan db:seed TagSeeder && php artisan db:seed QuestionTagsSeeder && php artisan db:seed UserTagsSeeder"

#todo
db-restore:
	gunzip -c dumps/tw_app.sql.gz | docker exec -i tw_app_db psql -X -u$(DB_USERNAME) -p$(DB_PASSWORD) $(DB_DATABASE);
db-export:
	docker exec tw_app_db pg_dump -u$(DB_USERNAME) -p$(DB_PASSWORD) $(DB_DATABASE) | gzip > dumps/tw_app_$(shell date +%F).sql.gz

install-composer:
	docker exec -w /var/www/tw_app tw_app_php composer install --no-interaction --prefer-dist --optimize-autoloader
update-composer:
	docker exec -w /var/www/tw_app tw_app_php composer update --no-interaction

fix-right:
	sudo chmod -R 777 storage

clear-cache:
	docker exec -it tw_app_php php artisan optimize:clear
