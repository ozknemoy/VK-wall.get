﻿function count(wall_posts){num_post=wall_posts.response.count;all_post=wall_posts;update2(wall_posts,1,15);}
function update2(wall_posts,start,end){var post=document.getElementById("post");var wall_post_array=wall_posts.response.items;for(var i=start;i<end;i++){if(wall_post_array[i].text){var tex=wall_post_array[i].text;if(tex.indexOf("http")!=-1){var n1=tex.indexOf("http");var ur_raw=tex.slice(n1);var urr=ur_raw.indexOf(" ");var ur=ur_raw.slice(0,urr);tex=tex.slice(0,n1)+"<a href='"+ur+"'>"+ur+"</a>"+tex.slice(n1+urr);console.log(tex);}
if(tex.indexOf("[")==-1){var text=tex;}else{do{var no1=tex.indexOf("[");var no2=tex.indexOf("|");var no3=tex.indexOf("]");var url="http://vk.com/"+tex.slice(no1+1,no2);var tex=tex.slice(0,no1)+"<a  href='"+url+"'>"+
tex.slice(no2+1,no3)+"</a>"+tex.slice(no3+1,tex.length);}while(tex.indexOf("]")!==-1) var text=tex;}
var newElement_text=document.createElement("h3");newElement_text.setAttribute("class","text");newElement_text.innerHTML=text;post.appendChild(newElement_text);}
if(wall_post_array[i].attachments){if(wall_post_array[i].attachments[0].video){var tex_2=wall_post_array[i].attachments[0].video.title;if(tex_2.indexOf("[")==-1){var text_2=tex_2;}else{do{var no1=tex_2.indexOf("[");var no2=tex_2.indexOf("|");var no3=tex_2.indexOf("]");var url_2="http://vk.com/"+tex_2.slice(no1+1,no2);var tex_2=tex_2.slice(0,no1)+"<a  href='"+url_2+"'>"+
tex_2.slice(no2+1,no3)+"</a>"+tex_2.slice(no3+1,tex_2.length);}while(tex_2.indexOf("]")!==-1) var text_2=tex_2;}
var newElement_text_2=document.createElement("p");newElement_text_2.setAttribute("class","text");newElement_text_2.innerHTML=text_2;post.appendChild(newElement_text_2);}
if(wall_post_array[i].attachments[0].photo){var photo=wall_post_array[i].attachments[0].photo.photo_604;var newElement_photo=document.createElement("img");newElement_photo.setAttribute("src",photo);post.appendChild(newElement_photo);}else if(wall_post_array[i].attachments[0].album){var photo_2=wall_post_array[i].attachments[0].album.thumb.photo_604;var newElement_photo_2=document.createElement("img");newElement_photo_2.setAttribute("src",photo_2);post.appendChild(newElement_photo_2);}else if(wall_post_array[i].attachments[0].video){var photo_4=wall_post_array[i].attachments[0].video.photo_800;var newElement_photo_4=document.createElement("img");newElement_photo_4.setAttribute("src",photo_4);post.appendChild(newElement_photo_4);}}
if(wall_post_array[i].copy_history){var copy_hist=wall_post_array[i].copy_history[0].text;if(copy_hist.indexOf("[")==-1){var text_2=copy_hist;}else{do{var no1=copy_hist.indexOf("[");var no2=copy_hist.indexOf("|");var no3=copy_hist.indexOf("]");var url_copy_hist="http://vk.com/"+copy_hist.slice(no1+1,no2);var copy_hist=copy_hist.slice(0,no1)+"<a  href='"+url_copy_hist+"'>"+
copy_hist.slice(no2+1,no3)+"</a>"+copy_hist.slice(no3+1,copy_hist.length);}while(copy_hist.indexOf("]")!==-1) var copy_history=copy_hist;}
var newElement_copy_history=document.createElement("div");newElement_copy_history.setAttribute("class","text");newElement_copy_history.innerHTML=copy_history;post.appendChild(newElement_copy_history);if(wall_post_array[i].copy_history[0].attachments.photo){var photo_3=wall_post_array[i].copy_history[0].attachments[0].photo.photo_604;var newElement_photo_3=document.createElement("img");newElement_photo_3.setAttribute("src",photo_3);post.appendChild(newElement_photo_3);}}
var time=new Date(wall_post_array[i].date*1000);var num_month=time.getMonth();var array_month=["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"];var month=array_month[num_month];var minutes="0"+time.getMinutes();var seconds="0"+time.getSeconds();var time_ru=time.getDate()+" "+month+" "+time.getFullYear()+" "+
time.getHours()+':'+minutes.substr(-2)+':'+seconds.substr(-2);var newElement_time=document.createElement("div");newElement_time.setAttribute("class","time");newElement_time.innerHTML=time_ru;post.appendChild(newElement_time);}}
window.onload=function(){new_button(0,1);}
function new_button(s,n){var nav=document.getElementById("nav");var num_sheets=Math.ceil(num_post/15);var e=Math.min(s+15,num_sheets);if(num_sheets>14){e=Math.min(s+15,num_sheets);};if(s<0){s=0;e=Math.min(s+15,num_sheets);};for(var i=s;i<e;i++){var newElement_li=document.createElement("input");b="but("+(i+1)+")";newElement_li.setAttribute("type","button");newElement_li.setAttribute("onclick",b);newElement_li.setAttribute("value",i+1);newElement_li.setAttribute("class","btn btn-default");if(i==n-1)newElement_li.setAttribute("class","btn btn-default active");nav.appendChild(newElement_li);}}
function but(n){document.getElementById("nav").innerHTML="";new_button(n-8,n);window.scrollTo(0,0);document.getElementById("post").innerHTML="";document.getElementById("sc").innerHTML="";var sc=document.getElementById("sc");var offset=(n-1)*15;var count=offset+15;var url="https://api.vk.com/method/wall.get?owner_id=-803&offset="+offset+"&count="+count+"&filter=all&v=5.40&callback=count";var newElement_script=document.createElement("script");newElement_script.setAttribute("src",url);sc.appendChild(newElement_script);}