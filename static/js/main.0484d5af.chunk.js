(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(5),a=s.n(i),r=(s(11),s(4)),d=s.n(r),j=s(6),l=s(2),o=(s(13),s(0)),h=function(e){var t=Object(c.useState)("sunny"),s=Object(l.a)(t,2),n=s[0],i=s[1],a=e.tempData,r=a.temp,d=a.humidity,j=a.pressure,h=a.weathermood,u=a.name,b=a.speed,p=a.country,x=a.sunset;Object(c.useEffect)((function(){if(h)switch(h){case"Clouds":i("wi-day-cloudy");break;case"Haze":i("wi-fog");break;default:i("wi-day-sunny");break;case"Rain":i("wi-showers");break;case"Snow":i("wi-snow")}}),[h]);var O=new Date(1e3*x),m="".concat(O.getHours(),":").concat(O.getMinutes());return Object(o.jsxs)("div",{className:"Display-container",children:[console.log(e),Object(o.jsx)("div",{className:"first center",children:Object(o.jsx)("i",{style:{fontSize:60},className:"wi ".concat(n)})}),Object(o.jsxs)("div",{className:"second",children:[Object(o.jsxs)("div",{className:"second-child-1 center",style:{justifyContent:"space-between",padding:"0px 70px 0px 10px"},children:[Object(o.jsxs)("span",{style:{color:"white",fontSize:"60px"},children:[r,"\xb0"]}),Object(o.jsxs)("div",{style:{color:"white",fontSize:"30px"},children:[h," ",Object(o.jsxs)("div",{children:[u," , ",p]})]})]}),Object(o.jsx)("div",{className:"second-child-2 center",children:(new Date).toLocaleString()})]}),Object(o.jsxs)("div",{className:"third",children:[Object(o.jsxs)("div",{className:"width",children:[Object(o.jsx)("i",{className:"wi wi-sunset third-text"}),Object(o.jsxs)("span",{className:"third-text",children:[Object(o.jsx)("p",{children:"Sunset at"}),Object(o.jsx)("p",{children:m})]})]}),Object(o.jsxs)("div",{className:"width",children:[Object(o.jsx)("i",{className:"wi wi-humidity third-text"}),Object(o.jsxs)("span",{className:"third-text",children:[" ",Object(o.jsx)("p",{children:d}),Object(o.jsx)("p",{children:"Humidity"})]})]}),Object(o.jsxs)("div",{className:"width",children:[Object(o.jsx)("i",{className:"wi wi-hail third-text"}),Object(o.jsxs)("span",{className:"third-text",children:[" ",Object(o.jsx)("p",{children:"Pressure"}),Object(o.jsx)("p",{children:j})]})]}),Object(o.jsxs)("div",{className:"width",children:[Object(o.jsx)("i",{className:"wi wi-strong-wind third-text"}),Object(o.jsxs)("span",{className:"third-text",children:[" ",Object(o.jsx)("p",{children:b}),Object(o.jsx)("p",{children:"Speed"})]})]})]})]})},u=function(){var e=Object(c.useState)("karnal"),t=Object(l.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)({}),a=Object(l.a)(i,2),r=a[0],u=a[1],b=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,n,i,a,j,l,o,h,b,p,x,O;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&units=metric&appid=abd793a49182af06d9e646d3b0ab6d1c"),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,console.log(n),i=n.main,a=i.temp,j=i.humidity,l=i.pressure,o=n.weather[0].main,h=n.name,b=n.wind.speed,p=n.sys,x=p.country,O=p.sunset,u({temp:a,humidity:j,pressure:l,weathermood:o,name:h,speed:b,country:x,sunset:O}),console.log(r),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),Object(o.jsx)("div",{className:"container center",children:Object(o.jsxs)("div",{className:"container-1 ",children:[Object(o.jsxs)("div",{className:"input-Container center",children:[Object(o.jsx)("input",{type:"text",placeholder:"Enter Country or City",value:s,onChange:function(e){n(e.target.value)}}),Object(o.jsx)("button",{onClick:b,children:"Search"})]}),Object(o.jsx)(h,{tempData:r})]})})},b=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(u,{})})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.0484d5af.chunk.js.map