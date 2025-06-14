https://gimnasiu.github.io/monitoring

# Інтерактивна таблиця Моніторингу успішності якості знань учнів за рівнями досягнень

Цей проект є веб-додатком для ведення та аналізу даних про успішність учнів з різних предметів. Він дозволяє динамічно додавати предмети, вводити бали, автоматично розраховувати рівні досягнень, середні бали, а також експортувати та імпортувати дані для подальшого використання або резервного копіювання.

## Основні можливості

*   **Динамічне управління предметами:**
    *   Додавання нових предметів (до 25).
    *   Редагування назв предметів.
    *   Вилучення останнього доданого предмета.
    *   Випадкове призначення світлих кольорів для стовпців предметів для кращої візуалізації.
*   **Введення та редагування балів:**
    *   Зручне введення балів (1-12) для кожного учня по кожному предмету.
    *   Валідація введених даних.
    *   Навігація між комірками за допомогою клавіатури (стрілки, Tab).
*   **Автоматичні розрахунки:**
    *   **Моніторинг якості знань:** Для кожного предмета та загалом по всіх предметах розраховуються:
        *   Кількість учнів на кожному рівні досягнень (Високий, Достатній, Середній, Низький).
        *   Відсоткове співвідношення учнів на кожному рівні.
        *   Якість знань (сума відсотків учнів на високому та достатньому рівнях).
    *   **Середній бал:** Автоматичний розрахунок середнього балу для кожного учня по всіх предметах.
*   **Збереження та відновлення даних:**
    *   Експорт всіх введених даних (назви предметів, бали) у файл формату JSON.
    *   Імпорт даних з раніше збереженого JSON-файлу для швидкого відновлення.
    *   Автоматичне генерування імені файлу експорту з поточною датою та часом.
*   **Експорт звітів:**
    *   Експорт таблиці "Моніторинг якості знань учнів" у форматах `.xls` (для Excel) та `.doc` (для Word).

## Технології

*   HTML5
*   CSS3
*   JavaScript (без зовнішніх бібліотек та фреймворків)

## Генерація коду

Велика частина коду цього проекту, включаючи HTML-структуру, CSS-стилі та JavaScript-логіку, була згенерована за допомогою моделі штучного інтелекту від Google. Я, як модель, допоміг(-ла) у створенні та ітеративному покращенні функціоналу на основі наданих специфікацій та запитів.

## Встановлення та використання

1.  Клонуйте репозиторій або завантажте файли проекту.
2.  Відкрийте сторінку https://gimnasiu.github.io/monitoring/ - це файл `index.html` у будь-якому сучасному веб-браузері.
3.  Почніть роботу з таблицями!

## Внесок

Пропозиції щодо покращення, звіти про помилки та запити на нові функції вітаються! Будь ласка, створюйте "Issue" у цьому репозиторії.

## Ліцензія

Цей проект поширюється під ліцензією **MIT License**.
