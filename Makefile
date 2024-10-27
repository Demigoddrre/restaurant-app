up:
	docker compose up --build --force-recreate --detach
	
down:
	docker compose down

clean:
	docker compose down --volumes --rmi all

logs:
	docker compose logs -f

ps:
	docker compose ps

restart:
	docker compose restart