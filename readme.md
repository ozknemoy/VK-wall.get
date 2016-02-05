VK method wall.get

Include this code in your HTML markup:
<div class="container">
<div id="post"></div>
<div id="nav"></div>
</div>
<div id="sc"></div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="js/vk-wall.js"></script>


Usage
In your application code, use the VKWall() function like this:
$('.container').VKWall({
        ownerId: -803,
        count: 20,
        mode: 2,
        allowPages: true
    });

ownerId - id for public or user in VK (идентификатор сообщества или пользователя)
count - this variable allows you to set the maximum amount of items displayed at a time(Default: 10)
    (количество отображаемых записей. По умолчанию: 10)
mode - 0 - only text of post about 250 letters, 1 - full text of post, 2 - full content(text, photo, repost)(Default: 0)
  (режим отображения. Значения: 0 - только текст записи, органиченный
  250 символами; 1 - только текст записи; 2 - полный контент записи . По умолчанию: 0)
allowPages - Display navigation buttons(Default: false) (отображать кнопки. По умолчанию: false)