# Baseimage
FROM mysql:latest

# Parameters
ENV MYSQL_ROOT_PASSWORD root
ARG DATABASE_SCHEMA=/schema.sql

# Define Volumes
VOLUME /var/lib/mysql
VOLUME /etc/mysql/conf.d

COPY $DATABASE_SCHEMA /docker-entrypoint-initdb.d/schema.sql

EXPOSE 3306