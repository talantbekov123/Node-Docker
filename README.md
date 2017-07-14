Type "docker build -t demo ." to build docker image

# Node-Docker
Simple tutorial

https://prakhar.me/docker-curriculum/ (awesome tutorial to start docker)

https://www.youtube.com/watch?v=t9YuqwGYUUg (very simple explanation)

https://www.youtube.com/watch?v=o4FGNWcbzVk (docker + node simple tutorial)

https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b (nice explanation of docker/virtual machine)

Introducing the problem
Скажем у меня есть приложение и я хочу запустить его на компьюторе у своего друга.
Я закидываю свой файл в github и скидываю репозиторий своему другу, он скачивает и пробует запустить и бум программа не работает. Почему?

     - билиотек нету (установил)
     - может у тебя нету node? (установил)
     - Базы данных нет, mongo/mysql (установил)

Два вывода.
1) Вот ты мне скинул не рабочий код, ты тупой.
2) Я не могу даже запустить программу на своем компе, я тупой.

Но на самом деле разная версия node/database или может быть что изза того что у меня linux а у него windows/mac.

Explain how it works(draw picture)

	- PC itself have only one version of program
	- Virtual Machines have not share hardware (very heavy and difficult to set up)
	- Docker shares the hardware with PC but preinstall some programs into image.

Docker is pretty new and getting very popular, every one use it now (google, amazon, ect.). Containers are pretty old, some of them Solaris Zones, BSD jails, and LXC  but all of them are difficult to set up and use.

Practice with docker(commands)
- docker run hello-world (to test, whether docker installed corectly or not)
- docker pull busybox (pull image from Dockerhub, dockerhub is something like github for docker images)
- docker run busybox (run the image, if image not exist than docker pulls it and then run)
- docker ps -a (shows you all containers that are currently running)
- docker run -it busybox sh (goes inside of the image, -it flags attaches us to an interactive tty in the container. Now we can run as many commands in the container as we want. Take some time to run your favorite commands.)
- docker rm 305297d7a235 (removes some container with specific id, run docker ps -a to get an id)
- "docker rm $(docker ps -a -q -f status=exited)" (removes all container)
- docker run -d -P --name static-site prakhar1989/static-site (run the image, sets name for image, last one is image name, предпоследний container name)
- docker build -t prakhar1989/catnip . (builds an image from a Dockerfile. it takes an optional tag name with -t and a location of the directory containing the Dockerfile.) 
- docker image (shows all images)
- docker stop (to stop running container, can not delete running container)




MICROSERVICES
 - https://www.youtube.com/watch?v=CKL3fV5UR8w (very simple explanation of microservices) 
 - http://microservices.io/patterns/microservices.html (nice article, suggest to read)
 - https://www.youtube.com/watch?v=xUumgxZ04SM (about app scaling)