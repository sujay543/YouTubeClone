import { content } from "../data/content.js";
let html = ' ';
content.forEach((element) => {
 html += 
  `
  <div class="card" style="width: 350px; height: 320px; border:none;">
      <a href="https://www.youtube.com/watch?v=nQH29oWXHgI"><img class="card-img-top" src="${element.thumbnailUrl}" alt="Card image cap" style="border-radius: 18px; height: 200px;"></a>
      <div class="card-body" style="padding: 6px; padding-top: 8px; ">
        <div class="logo">
          <img src="./img/golden-retriever-dog-1362597631o6g.jpg" style="width:40px; height: 35px; border-radius: 50%;">
        </div>
        <div class="cart-content" >
          <div class="title" style="font-weight: 600; font-style: roboto; font-size: 16px;">${element.title}</div>
          <div class="name-views" style="padding-top: 3px; color:grey;">
            <div class="name">${element.name}</div>
          <div class="views" ><p>423k views <span class="dot" style="font-size: 16px; font-weight: bold;">&#xB7;  </span><span class="time">2 years ago</span></p></div>
          </div>
        </div>
        <div class="three-dots" >
          &#x22EE;
        </div>
      </div>
    </div>`
})
document.querySelector(".body-container").innerHTML = html;