Alles starten ohne Docker compose

1. docker build -t workshop/mysql-container -f .\mysql-container\Dockerfile --build-arg DATABASE_SCHEMA=/mysql-container/schema.sql .
2. docker build -t workshop/studentservice -f .\services\Dockerfile --build-arg JAR_FILE=/studentservice/student-0.1.jar --build-arg EXPOSE=8090 .
3. docker build -t workshop/roomservice -f .\services\Dockerfile --build-arg JAR_FILE=/roomservice/room-0.1.jar --build-arg EXPOSE=8080 .
4. docker build -t workshop/lectureservice -f .\services\Dockerfile --build-arg JAR_FILE=/lectureservice/lecture-0.1.jar --build-arg EXPOSE=8070 .
5. docker run --name mysql-container -d workshop/mysql-container
6. docker run -d --link mysql-container -P --name studentservice workshop/studentservice
7. docker run -d --link mysql-container -P --name roomservice workshop/roomservice
8. docker run -d --link mysql-container -P --name lectureservice workshop/lectureservice
