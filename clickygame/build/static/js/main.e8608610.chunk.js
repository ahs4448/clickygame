(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),i=t.n(o),m=(t(14),t(1)),c=t(2),s=t(4),l=t(3),g=t(5);t(16),t(17),t(19);var u=function(e){return e.map(function(e){return[Math.random(),e]}).sort(function(e,a){return e[0]-a[0]}).map(function(e){return e[1]})};alert("Click on an image to earn points, but don't click on any more than once!");var b=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={totalScore:0,whiteScore:0,blackScore:0,blueScore:0,aquaScore:0,thunderScore:0,plasmaScore:0,chaosScore:0,magnetScore:0,louieScore:0,pinkScore:0,greenScore:0,mermScore:0,initialChars:[{name:"Black Bomber",img:"./images/BlackBomber.jpg"},{name:"Thunder Bomber",img:"./images/ThunderBomber.png"},{name:"Aqua Bomber",img:"./images/Aqua.jpg"},{name:"Blue Bomber",img:"./images/KidBlue.png"},{name:"Chaos Bomber",img:"./images/Chaos_Bomber.png"},{name:"Green Bomber",img:"./images/Green_Bomber.jpg"},{name:"White Bomber",img:"./images/icon.png"},{name:"Magnet Bomber",img:"./images/MagnetBomber.png"},{name:"Plasma Bomber",img:"./images/PlasmaBomber.png"},{name:"mermaid Bomber",img:"./images/Mermaid_Bomber.jpg"},{name:"Louie",img:"./images/Louie.png"},{name:"Pretty Bomber",img:"./images/Pink.png"}]},t.handleRearrange=function(e){var a=u(t.state.initialChars);"White Bomber"===e.target.id&&(t.state.whiteScore+=1),"Black Bomber"===e.target.id&&(t.state.blackScore+=1),"Blue Bomber"===e.target.id&&(t.state.blueScore+=1),"Aqua Bomber"===e.target.id&&(t.state.aquaScore+=1),"Thunder Bomber"===e.target.id&&(t.state.thunderScore+=1),"Chaos Bomber"===e.target.id&&(t.state.chaosScore+=1),"Plasma Bomber"===e.target.id&&(t.state.plasmaScore+=1),"Magnet Bomber"===e.target.id&&(t.state.magnetScore+=1),"Louie"===e.target.id&&(t.state.louieScore+=1),"Pretty Bomber"===e.target.id&&(t.state.pinkScore+=1),"Green Bomber"===e.target.id&&(t.state.greenScore+=1),"mermaid Bomber"===e.target.id&&(t.state.mermScore+=1),2===t.state.whiteScore&&alert("ya lose"),2===t.state.blackScore&&alert("ya lose"),2===t.state.blueScore&&alert("ya lose"),2===t.state.aquaScore&&alert("ya lose"),2===t.state.plasmaScore&&alert("ya lose"),2===t.state.chaosScore&&alert("ya lose"),2===t.state.magnetScore&&alert("ya lose"),2===t.state.thunderScore&&alert("ya lose"),2===t.state.greenScore&&alert("ya lose"),2===t.state.mermScore&&alert("ya lose"),2===t.state.pinkScore&&alert("ya lose"),2===t.state.louieScore?alert("ya lose"):t.state.totalScore++,t.setState({initialChars:a})},t}return Object(g.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("nav",null,"   ",n.a.createElement("img",{src:"./images/Bomberman_Logo.png",id:"banner"})," ",n.a.createElement("p",null," Score:",this.state.totalScore)," "),n.a.createElement("div",{className:"row"},this.state.initialChars.map(function(a){return n.a.createElement("div",{className:"col-md-3"},n.a.createElement("div",{className:"somethin"}),n.a.createElement("img",{src:a.img,alt:"",className:"img-thumbnail first",id:a.name,onClick:e.handleRearrange}))})),n.a.createElement("nav",null," ",n.a.createElement("img",{src:"./images/Bomberman_Logo.png",id:"banner"})," ",n.a.createElement("img",{src:"./images/react-1-logo.png",id:"logo"})," "))}}]),a}(r.Component),d=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(b,null)}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.e8608610.chunk.js.map