docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itog12-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itog12-java/app ../../..
