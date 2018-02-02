# Baseimage
FROM java:8

# Parameters
ARG JAR_FILE=/app.jar
ARG EXPOSE=8080
ARG MYSQL_CONTAINER=mysql-container
ARG MYSQL_PORT=3306
ARG MYSQL_DB=hochschule
ARG MYSQL_USERNAME=root
ARG MYSQL_PASSWORD=root

ENV spring.datasource.url=jdbc:mysql://$MYSQL_CONTAINER:$MYSQL_PORT/$MYSQL_DB
ENV spring.datasource.username=$MYSQL_USERNAME
ENV spring.datasource.password=$MYSQL_PASSWORD

EXPOSE $EXPOSE
COPY $JAR_FILE /data/app.jar
COPY /wait-for-it.sh /wait-for-it.sh
WORKDIR /data

CMD ["java", "-jar", "app.jar"]