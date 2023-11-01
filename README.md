Nuxt 3, 
Pinia,
Vueuse,
Tailwindcss,
VueRouter,
ElementPlus

---Згідно вимогам---

Додаток для пошуку інформації про фільми. Використовується API omdbapi. Токени доступу навмисно залишені в .env.example

Не використовуються CSS препроцесори. Але використовуються бібліотеки Tailwindcss та ElementPlus

Вікно додавання нового фільму доступно з будь-якої точки додатку (імітуєтсья відправка POST запиту)

Є два види пошуку - точне співпадіння чи не точне, в залежності від цього, змінюються квері параметри. При не точному - вивід у картки в слайдері. Якщо це точне співпадіння - ми отримуємо одну сутність й
виводимо у звичайну картку, не у слайдері. 

По кліку на карту відбуваєтсяь перехід до додаткової інформації про фільм - запит відбуваєтсья у setup для спрацювання SSR рендеренгу

Додаток адаптивний

Також реалізована пагінація

![Screenshot 2023-11-01 at 23 27 16](https://github.com/timurioukr/test_project_1/assets/82959081/5fbae8bd-90aa-4ce5-b7a8-fe1c7223e1f0)
![Screenshot 2023-11-01 at 23 27 07](https://github.com/timurioukr/test_project_1/assets/82959081/d4862a1c-5871-42a0-8638-63b51db16797)
![Screenshot 2023-11-01 at 23 28 02](https://github.com/timurioukr/test_project_1/assets/82959081/2aeb843d-db05-4555-9159-3389d9176362)
![Screenshot 2023-11-01 at 23 29 10](https://github.com/timurioukr/test_project_1/assets/82959081/570cfce9-06cc-4ebf-874f-a5da8c79f596)
![Screenshot 2023-11-01 at 23 28 41](https://github.com/timurioukr/test_project_1/assets/82959081/980e5a6a-004b-42f6-a4ef-55c603dde0d4)
![Screenshot 2023-11-01 at 23 28 33](https://github.com/timurioukr/test_project_1/assets/82959081/0ec378e4-8e94-474c-b75a-c1d2a77eea8b)
