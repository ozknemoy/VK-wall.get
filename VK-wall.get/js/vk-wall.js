/**
 * Created by ozknemoy on 04.02.2016.
 */


//callback
function count(wall_posts){
    num_post=wall_posts.response.count;
    all_post=wall_posts;
    update2(wall_posts ,0 ,settings.count );

}
//разбор json и запись постов на страницу
function update2(wall_posts ,start ,end ){
    var post= document.getElementById("post");
    var wall_post_array=wall_posts.response.items;
    for (var i=start ; i<end; i++) {

        //текст поста
        if(wall_post_array[i].text) {
            var tex = wall_post_array[i].text;
            //поиск обычных ссылок / обрабатывает только первую
            if(tex.indexOf("http")!=-1) {
                var n1 = tex.indexOf("http");
                var ur_raw = tex.slice(n1);
                var urr = ur_raw.indexOf(" ");
                var ur = ur_raw.slice(0,urr);
                tex = tex.slice(0,n1)+ "<a href='" + ur + "'>" + ur + "</a>" + tex.slice(n1+urr);
            }
            //поиск ссылок на анкеты vk
            if(tex.indexOf("[")==-1) {//не находит ссылок
                var text = tex;
            }else {//находит ссылку
                do {
                    var no1 = tex.indexOf("[");
                    var no2 = tex.indexOf("|");
                    var no3 = tex.indexOf("]");
                    var url = "http://vk.com/" + tex.slice(no1+1, no2);
                    var tex = tex.slice(0, no1) + "<a  href='" + url + "'>" +
                        tex.slice(no2+1, no3) + "</a>" + tex.slice(no3+1, tex.length);
                } while (tex.indexOf("]")!==-1)
                var text = tex;
            }
            if (settings.mode ==0) {
                var numOfSpace = text.indexOf(" ", 250);
                if(numOfSpace>0) {
                   var text = arraySlicer(text, numOfSpace).join('') + " ...";
                }
            }
            var newElement_text=document.createElement("h3");
            newElement_text.setAttribute("class", "text");
            newElement_text.innerHTML = text;
            post.appendChild(newElement_text);
        }

        if (settings.mode >0) {
        if(wall_post_array[i].attachments) {
            if(wall_post_array[i].attachments[0].video) {//текст во вложении
                var tex_2 = wall_post_array[i].attachments[0].video.title;
                if(tex_2.indexOf("[")==-1) {//не находит ссылок
                    var text_2 = tex_2;
                }else {//находит ссылку
                    do {
                        var no1 = tex_2.indexOf("[");
                        var no2 = tex_2.indexOf("|");
                        var no3 = tex_2.indexOf("]");
                        var url_2 = "http://vk.com/" + tex_2.slice(no1+1, no2);
                        var tex_2 = tex_2.slice(0, no1) + "<a  href='" + url_2 + "'>" +
                            tex_2.slice(no2+1, no3) + "</a>" + tex_2.slice(no3+1, tex_2.length);
                    } while (tex_2.indexOf("]")!==-1)
                    var text_2 = tex_2;
                }
                var newElement_text_2=document.createElement("p");
                newElement_text_2.setAttribute("class", "text");
                newElement_text_2.innerHTML = text_2;
                post.appendChild(newElement_text_2);
            }
            if (settings.mode ==2) {
            if(wall_post_array[i].attachments[0].photo) {//фотки админа
                var photo = wall_post_array[i].attachments[0].photo.photo_604;
                var newElement_photo=document.createElement("img");
                newElement_photo.setAttribute("src", photo);
                post.appendChild(newElement_photo);
            } else if (wall_post_array[i].attachments[0].album) {//фотки альбома
                var photo_2 = wall_post_array[i].attachments[0].album.thumb.photo_604;
                var newElement_photo_2=document.createElement("img");
                newElement_photo_2.setAttribute("src", photo_2);
                post.appendChild(newElement_photo_2);
            } else if (wall_post_array[i].attachments[0].video) {
                var photo_4 = wall_post_array[i].attachments[0].video.photo_800;
                var newElement_photo_4=document.createElement("img");
                newElement_photo_4.setAttribute("src", photo_4);
                post.appendChild(newElement_photo_4);
            }
            }
        }
        if(wall_post_array[i].copy_history) {
            //текст перепоста
            var copy_hist = wall_post_array[i].copy_history[0].text;
            if(copy_hist.indexOf("[")==-1) {//не находит ссылок
                var text_2 = copy_hist;
            }else {//находит ссылку
                do {
                    var no1 = copy_hist.indexOf("[");
                    var no2 = copy_hist.indexOf("|");
                    var no3 = copy_hist.indexOf("]");
                    var url_copy_hist = "http://vk.com/" + copy_hist.slice(no1+1, no2);
                    var copy_hist = copy_hist.slice(0, no1) + "<a  href='" + url_copy_hist + "'>" +
                        copy_hist.slice(no2+1, no3) + "</a>" + copy_hist.slice(no3+1, copy_hist.length);
                } while (copy_hist.indexOf("]")!==-1)
                var copy_history = copy_hist;
            }
            var newElement_copy_history=document.createElement("div");
            newElement_copy_history.setAttribute("class", "text");
            newElement_copy_history.innerHTML = copy_history;
            post.appendChild(newElement_copy_history);
            //фотки перепоста
            if (settings.mode ==2) {
            if(wall_post_array[i].copy_history[0].attachments.photo) {
                var photo_3 = wall_post_array[i].copy_history[0].attachments[0].photo.photo_604;
                var newElement_photo_3=document.createElement("img");
                newElement_photo_3.setAttribute("src", photo_3);
                post.appendChild(newElement_photo_3);
            }
            }
        }
        }
        //дата поста
        var time=new Date(wall_post_array[i].date*1000);
        var num_month = time.getMonth();
        var array_month=["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"];
        var month = array_month[num_month];
        var minutes = "0" + time.getMinutes();
        var seconds = "0" + time.getSeconds();
        var time_ru = time.getDate()+" "+month+" "+time.getFullYear()+" "+
            time.getHours() + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        var newElement_time=document.createElement("div");
        newElement_time.setAttribute("class", "time");
        newElement_time.innerHTML = time_ru;
        post.appendChild(newElement_time);
    }
}


// создает кнопки навигации
function new_button (s,n) {
    if(settings.allowPages) {
    var nav= document.getElementById("nav");
    var num_sheets=Math.ceil(num_post/settings.count);
    var e = Math.min(s+15, num_sheets);
    if (num_sheets>14) {e = Math.min(s+15, num_sheets);}//ограничил количество кнопок
    if (s<0) {s=0; e = Math.min(s+15, num_sheets);}

    for (var i=s ; i<e; i++) {
        var newElement_li=document.createElement("input");
        b = "but(" + (i+1) + ")";//обзываем функцию и даем ей параметр
        newElement_li.setAttribute("type", "button");
        newElement_li.setAttribute("onclick", b);
        newElement_li.setAttribute("value", i+1);
        newElement_li.setAttribute("class", "btn btn-default");
        if (i==n-1) newElement_li.setAttribute("class", "btn btn-default active");//делает кнопку нажатой/активной
        nav.appendChild(newElement_li);
    }
    }
}

function but(n) {//обработчик нажатия кнопок
    document.getElementById("nav").innerHTML = "";
    new_button (n-8,n);
    window.scrollTo(0, 0);
    new_script(n);
}
//создает скрипт с запросом к вк
function new_script(n) {
    document.getElementById("post").innerHTML = "";//удалить содержимое страницы кроме кнопок
    document.getElementById("sc").innerHTML = "";//удалить предыдущий скрипт
    var sc = document.getElementById("sc");
    var offset = (n-1)*settings.count;
    var count = offset + settings.count;
    var url = "https://api.vk.com/method/wall.get?owner_id=" +settings.ownerId +
        "&offset=" + offset + "&count=" + count + "&filter=all&v=5.40&callback=count";
    var newElement_script=document.createElement("script");
    newElement_script.setAttribute("src", url);
    sc.appendChild(newElement_script);
}
//отсекает в массиве требуемое число элементов
function arraySlicer(arr, size) {
    var newArr = [];
    for (var i=0; i<size; i++) { newArr.push(arr[i]);}
    return newArr;
}


(function($) {
    //объединяем опции
    var VKWall = function(element, options){
        settings = $.extend({}, $.fn.VKWall.Defaults, options);
        new_script (1);
        setTimeout(function() {new_button (0,1)},1000);
    };
    $.fn.VKWall = function(options) {
        //Default options for
        $.fn.VKWall.Defaults = {
            count: 10,
            mode: 0,
            allowPages: false
        };
        var VKW = new VKWall(this, options);
    };
})(jQuery);

