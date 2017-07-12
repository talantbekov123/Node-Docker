# Node-Docker
Simple tutorial for icoder

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

PC itself have only one version of program
Virtual Machines have not share hardware (very heavy and difficult to set up)
Docker shares the hardware with PC but preinstall some programs into image.

Docker is pretty new and getting very popular, every one use it now (google, amazon, ect.). Containers are pretty old, some of them Solaris Zones, BSD jails, and LXC  but all of them are difficult to set up and use.
