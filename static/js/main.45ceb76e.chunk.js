(window.webpackJsonpQuestsinPocket=window.webpackJsonpQuestsinPocket||[]).push([[0],{119:function(e,t,a){e.exports=a.p+"static/media/forest.cc873e2d.png"},201:function(e,t,a){e.exports=a.p+"static/media/achiev-1.05917b64.png"},203:function(e,t,a){e.exports=a.p+"static/media/one_1.230919a1.jpg"},204:function(e,t,a){e.exports=a.p+"static/media/one_colum.5e049246.jpg"},205:function(e,t,a){e.exports=a.p+"static/media/map.e0ba97a3.png"},260:function(e,t,a){e.exports=a(497)},344:function(e,t){},346:function(e,t){},379:function(e,t){},380:function(e,t){},466:function(e,t){},468:function(e,t){},497:function(e,t,a){"use strict";a.r(t);a(261),a(287),a(289),a(290),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(301),a(302),a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(312),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(327),a(328),a(329);var n=a(0),o=a.n(n),l=a(36),s=a.n(l),r=a(64),c=a.n(r),i=a(21),d=a(22),p=a(24),u=a(23),m=a(76),f=a(25),h=a(28),b=a.n(h),g=a(3),E=(a(50),a(201)),v=a.n(E),k=function(e){function t(e){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).call(this,e))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(g.c,{before:o.a.createElement(g.a,{src:v.a,style:{width:"200px"},size:100}),indicator:this.props.lvlNum+" lvl"},o.a.createElement(g.h,null,this.props.title))}}]),t}(o.a.Component),P={fontSize:"90%",fontWeight:"bold"},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={fetchedUser:a.props.fetchedUser},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(g.d,{id:"profile-container",align:"center"},o.a.createElement(g.d,{id:"avatar-container"},o.a.createElement(g.a,{src:this.state.fetchedUser.photo_200,size:150})),o.a.createElement(g.d,{id:"name-container"},o.a.createElement(g.c,{id:"name"},o.a.createElement("p",{style:P},this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name))),o.a.createElement(g.d,{id:"score"},o.a.createElement(g.c,{id:"score-text"},o.a.createElement(g.h,null,"\u041e\u0447\u043a\u0438: 0"))),o.a.createElement(g.f,{title:"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",id:"achievements-container"},o.a.createElement(k,{lvlNum:"1",title:"\u041f\u0435\u0440\u0432\u043e\u043f\u0440\u043e\u0445\u043e\u0434\u0435\u0446"})))}}]),t}(o.a.Component),j=(a(141),a(88)),O=a(202),S=[{x:540,y:1133,value:"Hello World",font:"96px Arial",align:"center",color:"#FFFFFF"}],_=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(p.a)(this,Object(u.a)(t).call(this,e))).GenerateStory=function(){j.a.init(O.a),j.a.generateStoryFromTemplate(a(119),S).then((function(e){console.log("\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442")})).catch(console.error),j.a.shareStory(7150376,n.props.story,{add_to_news:!0}).then((function(e){console.log("\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442")})).catch(console.error)},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(g.d,null,o.a.createElement(g.a,{src:this.props.fetchedUser.photo_200,size:150}),o.a.createElement(g.c,{id:"name"},this.props.fetchedUser.first_name+" "+this.props.fetchedUser.last_name),o.a.createElement(g.b,{size:"xl",onClick:this.GenerateStory,style:{background:"linear-gradient(to right #4d6cb7 #182848)",color:"#fff"}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"))}}]),t}(o.a.Component),C=a(55),w=a(54),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).infoWindowRef=o.a.createRef(),a.contentElement=document.createElement("div"),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&(s.a.render(o.a.Children.only(this.props.children),this.contentElement),this.infoWindowRef.current.infowindow.setContent(this.contentElement))}},{key:"render",value:function(){return o.a.createElement(w.InfoWindow,Object.assign({ref:this.infoWindowRef},this.props))}}]),t}(o.a.Component),W=a(119),q=a.n(W),I=a(203),G=a.n(I),U=a(204),V=a.n(U),M=a(205),x=a.n(M),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).onMarkerClick=function(e,t,n){switch(t.id_marker){case"one_2":case"I":case"one_1":a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0});break;default:console.log("\u043e\u0448\u0438\u0431\u043e\u0447\u043a\u0430")}},a.submit=function(e){console.log(a.state.selectedPlace),a.props.checkGeo(a.state.selectedPlace)},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={nameButton:"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435",showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e;return o.a.createElement(w.Map,{google:this.props.google,style:{width:"100%",height:"100%",marginLeft:"auto",marginRight:"auto"},zoom:16,initialCenter:{lat:this.props.geo.lat,lng:this.props.geo.long},gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,zoomControl:!1,onClick:this.onMapClicked},o.a.createElement("div",{align:"center",style:{marginTop:"100%"}}),o.a.createElement(w.Marker,{onClick:this.onMarkerClick,position:{lat:59.934777,lng:30.302896},name:"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0441\u043b\u0430\u0432\u044b",img:G.a,img_1:V.a,pretitle:"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u044f\u043c\u0438 \u0421\u043b\u0430\u0432\u044b \u0432 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435. \u041f\u0430\u043c\u044f\u0442\u043d\u0438\u043a \u0432 \u0447\u0435\u0441\u0442\u044c \u043f\u043e\u0431\u0435\u0434 \u041b\u0435\u0439\u0431-\u0433\u0432\u0430\u0440\u0434\u0438\u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430 \u0432 \u041e\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0432\u043e\u0439\u043d\u0435 1812 \u0433\u043e\u0434\u0430 \u0431\u044b\u043b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043d\u0430 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u043c \u0431\u0443\u043b\u044c\u0432\u0430\u0440\u0435 \u0432 1845-1846 \u0433\u043e\u0434\u0430\u0445. \u0410\u0432\u0442\u043e\u0440 \u0441\u0442\u0430\u0442\u0443\u0439 \u2014 \u0425. \u0414. \u0420\u0430\u0443\u0445, \u0430\u0432\u0442\u043e\u0440 \u043a\u043e\u043b\u043e\u043d\u043d \u2014 \u041a. \u0418. \u0420\u043e\u0441\u0441\u0438.",id_marker:"one_1",text:o.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},o.a.createElement("p",{align:"center"},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c, \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044b \u0443\u0437\u043d\u0430\u0442\u0435 3 \u0441\u0430\u043c\u044b\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u0444\u0430\u043a\u0442\u043e\u0432 \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0418 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c!:))"),o.a.createElement("p",null,"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0421\u043b\u0430\u0432\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432 \u0438\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u043e\u0440\u0434\u0435\u0440\u0435 \u0438\u0437 \u0441\u0435\u0440\u043e\u0433\u043e \u0441\u0435\u0440\u0434\u043e\u0431\u043e\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u043d\u0438\u0442\u0430.",o.a.createElement("br",null),"\u041b\u0435\u0442\u044f\u0449\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0438 \u0431\u043e\u0433\u0438\u043d\u0438 \u041d\u0438\u043a\u0438 \u0441 \u043b\u0430\u0432\u0440\u043e\u0432\u044b\u043c\u0438 \u0432\u0435\u043d\u043a\u0430\u043c\u0438 \u0432 \u0440\u0443\u043a\u0430\u0445,\u043d\u0430\u0432\u0435\u0440\u0445\u0443, \u0431\u044b\u043b\u0438 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u044b \u0432 \u0411\u0435\u0440\u043b\u0438\u043d\u0435 \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u043e\u0440\u0430 \u0425. \u0414. \u0420\u0430\u0443\u0445\u0430 \u0438 \u043f\u043e\u0434\u0430\u0440\u0435\u043d\u044b \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u041d\u0438\u043a\u043e\u043b\u0430\u044e I \u043a\u043e\u0440\u043e\u043b\u0435\u043c \u0424\u0440\u0438\u0434\u0440\u0438\u0445\u043e\u043c \u0412\u0438\u043b\u044c\u0433\u0435\u043b\u044c\u043c\u043e\u043c IV \u0432 1845 \u0433\u043e\u0434\u0443 \u0432 \u0437\u043d\u0430\u043a \u043e\u0442\u0432\u0435\u0442\u043d\u043e\u0439 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430 \u043a\u043e\u043f\u0438\u0438 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f \xab\u0423\u043a\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u044f\xbb \u041f. \u041a. \u041a\u043b\u043e\u0434\u0442\u0430 (\u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0410\u043d\u0438\u0447\u043a\u043e\u0432\u043e\u043c \u043c\u043e\u0441\u0442\u0443).")," "),end:o.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},o.a.createElement("p",null,"\u0422\u0440\u0435\u0442\u0438\u0439 \u0444\u0430\u043a\u0442: \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043d\u044b \u2014 12 \u043c\u0435\u0442\u0440\u043e\u0432, \u0432\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u0430\u0442\u0443\u0438 \u2014 2,5 \u043c\u0435\u0442\u0440\u0430.")),pollQuestions:"\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043a\u0430\u043a\u043e\u0439 \u0432\u044b\u0441\u043e\u0442\u044b \u044d\u0442\u0438 \u043a\u043e\u043b\u043e\u043d\u043d\u044b?",answer_1:"12 \u043c\u0435\u0442\u0440\u043e\u0432",answer_2:"13 \u043c\u0435\u0442\u0440\u043e\u0432",answer_3:"15 \u043c\u0435\u0442\u0440\u043e\u0432",but:o.a.createElement(g.b,{level:"commerce",onClick:this.submit},this.state.nameButton)}),o.a.createElement(w.Marker,(e={onClick:this.onMarkerClick,pretitle:"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0447\u0442\u043e... \u041f\u0440\u0438\u0434\u0438\u0442\u0435 \u0438 \u0443\u0437\u043d\u0430\u0439\u0442\u0435",img:q.a,name:"\u041f\u0435\u0440\u0432\u0430\u044f",end:o.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},o.a.createElement("p",null,"\u0422\u0440\u0435\u0442\u0438\u0439 \u0444\u0430\u043a\u0442: \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043d\u044b \u2014 12 \u043c\u0435\u0442\u0440\u043e\u0432, \u0432\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u0430\u0442\u0443\u0438 \u2014 2,5 \u043c\u0435\u0442\u0440\u0430.")),pollQuestions:"\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043a\u0430\u043a\u043e\u0439 \u0432\u044b\u0441\u043e\u0442\u044b \u044d\u0442\u0438 \u043a\u043e\u043b\u043e\u043d\u043d\u044b?",text:o.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},o.a.createElement("p",{align:"center"},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c, \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044b \u0443\u0437\u043d\u0430\u0442\u0435 3 \u0441\u0430\u043c\u044b\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u0444\u0430\u043a\u0442\u043e\u0432 \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0418 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c!:))"),o.a.createElement("p",null,"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0421\u043b\u0430\u0432\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432 \u0438\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u043e\u0440\u0434\u0435\u0440\u0435 \u0438\u0437 \u0441\u0435\u0440\u043e\u0433\u043e \u0441\u0435\u0440\u0434\u043e\u0431\u043e\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u043d\u0438\u0442\u0430.",o.a.createElement("br",null),"\u041b\u0435\u0442\u044f\u0449\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0438 \u0431\u043e\u0433\u0438\u043d\u0438 \u041d\u0438\u043a\u0438 \u0441 \u043b\u0430\u0432\u0440\u043e\u0432\u044b\u043c\u0438 \u0432\u0435\u043d\u043a\u0430\u043c\u0438 \u0432 \u0440\u0443\u043a\u0430\u0445,\u043d\u0430\u0432\u0435\u0440\u0445\u0443, \u0431\u044b\u043b\u0438 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u044b \u0432 \u0411\u0435\u0440\u043b\u0438\u043d\u0435 \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u043e\u0440\u0430 \u0425. \u0414. \u0420\u0430\u0443\u0445\u0430 \u0438 \u043f\u043e\u0434\u0430\u0440\u0435\u043d\u044b \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u041d\u0438\u043a\u043e\u043b\u0430\u044e I \u043a\u043e\u0440\u043e\u043b\u0435\u043c \u0424\u0440\u0438\u0434\u0440\u0438\u0445\u043e\u043c \u0412\u0438\u043b\u044c\u0433\u0435\u043b\u044c\u043c\u043e\u043c IV \u0432 1845 \u0433\u043e\u0434\u0443 \u0432 \u0437\u043d\u0430\u043a \u043e\u0442\u0432\u0435\u0442\u043d\u043e\u0439 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430 \u043a\u043e\u043f\u0438\u0438 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f \xab\u0423\u043a\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u044f\xbb \u041f. \u041a. \u041a\u043b\u043e\u0434\u0442\u0430 (\u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0410\u043d\u0438\u0447\u043a\u043e\u0432\u043e\u043c \u043c\u043e\u0441\u0442\u0443).")," ")},Object(C.a)(e,"pollQuestions","\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043f\u0435\u0440\u0432\u0430\u044f?"),Object(C.a)(e,"answer_1","\u0417\u0434\u0435\u0441\u044c\u044f \u043a\u0442\u043e-\u0442\u043e \u0436\u0438\u0432\u0435\u0442"),Object(C.a)(e,"answer_2","\u0415\u0451 \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043f\u0435\u0440\u0432\u043e\u0439"),Object(C.a)(e,"answer_3","\u041f\u0435\u0440\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u0433\u043e\u0440\u043e\u0434\u0435"),Object(C.a)(e,"id_marker","one_2"),Object(C.a)(e,"but",o.a.createElement(g.b,{level:"commerce",onClick:this.submit},this.state.nameButton)),Object(C.a)(e,"position",{lat:59.934239,lng:30.303854}),e)),o.a.createElement(w.Marker,{onClick:this.onMarkerClick,position:{lat:this.props.geo.lat,lng:this.props.geo.long},id_marker:"I",icon:{url:x.a,anchor:new this.props.google.maps.Point(32,32),scaledSize:new this.props.google.maps.Size(32,51)},name:"\u042d\u0442\u043e \u0432\u044b"}),o.a.createElement(A,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},o.a.createElement(g.d,{align:"center"},o.a.createElement("img",{src:this.state.selectedPlace.img,style:{width:"90%",height:"90%"}}),o.a.createElement("h1",null,this.state.selectedPlace.name),o.a.createElement("p",null,this.state.selectedPlace.pretitle),this.props.errorGeo,this.state.selectedPlace.but)))}}]),t}(o.a.Component),z=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyCL0U2diIKJtBb5gmgyUsRvpSIIKIfKCv0"})(K),F=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(g.d,{align:"center"},this.props.selectedPlace.end,o.a.createElement(g.b,{size:"xl",level:"commerce",onClick:this.props.theEnd},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"))}}]),t}(o.a.Component),T=a(206),Q=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).handleVote=function(e){var t=a.state.pollAnswers.map((function(t){return t.option===e&&t.votes++,t}));a.setState({pollAnswers:t});var n=JSON.stringify(t);a.props.setPoll(n),a.props.setEnd(!0)};var n=a.props.Poll,o=a.props.selectedPlace.pollQuestions,l=[{option:""===n?a.props.selectedPlace.answer_1:a.props.Poll[0].option,votes:""===n?0:a.props.Poll[0].votes},{option:""===n?a.props.selectedPlace.answer_2:a.props.Poll[1].option,votes:""===n?0:a.props.Poll[1].votes},{option:""===n?a.props.selectedPlace.answer_3:a.props.Poll[2].option,votes:""===n?0:a.props.Poll[2].votes}];return a.state={pollAnswers:[].concat(l),pollQuestion:o,selectedPlace:a.props.selectedPlace},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){this.state.pollAnswers.pollAnswers;return o.a.createElement(g.d,null,o.a.createElement(T.a,{theme:"purple",question:this.state.pollQuestion,answers:this.state.pollAnswers,onVote:this.handleVote}))}}]),t}(o.a.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(g.d,{align:"center"},o.a.createElement(g.a,{src:this.props.selectedPlace.img_1,size:200}),this.props.selectedPlace.text)}}]),t}(o.a.Component),J=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(g.d,null,o.a.createElement(g.p,{theme:"light"},o.a.createElement(g.q,null,"\u0414\u0438\u0430\u043b\u043e\u0433\u0438"),o.a.createElement(g.q,null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),o.a.createElement(g.i,null,this.props.quests.map((function(t,a){return o.a.createElement(g.c,{before:o.a.createElement(g.a,{src:JSON.parse(e.props.quests[a].value).img}),key:a,style:{background:"linear-gradient(to right, #8B04A8, #E9003A)"}},o.a.createElement(g.h,{title:JSON.parse(e.props.quests[a].value).name}," ",o.a.createElement(g.l,{value:JSON.parse(e.props.quests[a].value).num,style:{color:"green"}})))}))))}}]),t}(o.a.Component),D=a(207),N=a.n(D),B=a(208),H=a.n(B),L=a(209),X=a.n(L),Y=a(210),Z=a.n(Y),$=a(211),ee=a.n($),te=(a(87),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).onClick=function(e){b.a.send("VKWebAppGetGeodata",{}),a.setState({popout:o.a.createElement(g.m,null)}),a.setState({activeStory:"map"}),setTimeout((function(){a.setState({popout:null})}),2e3)},a.setPoll=function(e,t){b.a.send("VKWebAppCallAPIMethod",{method:"storage.set",request_id:"setPoll",params:{key:a.state.selectedPlace.id_marker+"Poll",global:1,value:e,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}})},a.theStory=function(e){a.setState({activePanel:"map"})},a.theEnd=function(e){var t={name:a.state.selectedPlace.name,img:a.state.selectedPlace.img,num:100};console.log(t),b.a.send("VKWebAppCallAPIMethod",{method:"storage.set",request_id:"theEnd",params:{key:a.state.selectedPlace.id_marker,value:t,user_id:a.state.fetchedUser.id,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}}),a.setState({activePanel:"modal"})},a.setEnd=function(e,t){a.setState({showEnd:e})},a.GetVar=function(e){a.setState({popout:o.a.createElement(g.m,null)}),b.a.send("VKWebAppCallAPIMethod",{method:"storage.getKeys",request_id:"getAllQuests",params:{user_id:a.state.fetchedUser.id,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}})},a.checkGeo=function(e,t){if(b.a.send("VKWebAppGetGeodata",{}),a.setState({popout:o.a.createElement(g.m,null)}),a.state.geoData.lat.toFixed(a.num)===e.position.lat.toFixed(a.num)&&a.state.geoData.long.toFixed(a.num)===e.position.lng.toFixed(a.num)){a.setState({errorGeo:null});var n={name:e.name,img:e.img,num:50};b.a.send("VKWebAppCallAPIMethod",{method:"storage.set",request_id:"setQuests",params:{key:e.id_marker,value:n,user_id:a.state.fetchedUser.id,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}}),b.a.send("VKWebAppCallAPIMethod",{method:"storage.get",request_id:"getPoll",params:{key:e.id_marker+"Poll",user_id:a.state.fetchedUser.id,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}}),a.setState({selectedPlace:e})}else a.setState({errorGeo:a.so,popout:null})},a.onToChange=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.render=function(){return o.a.createElement(g.e,{activeStory:a.state.activeStory,tabbar:o.a.createElement(g.n,null,o.a.createElement(g.o,{onClick:a.onStoryChange,selected:"profile"===a.state.activeStory,"data-story":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},o.a.createElement(H.a,null)),o.a.createElement(g.o,{onClick:a.ConnectM,selected:"map"===a.state.activeStory,"data-story":"map",text:"\u041a\u0430\u0440\u0442\u0430"},o.a.createElement(Z.a,null)),o.a.createElement(g.o,{onClick:a.GetVar,selected:"questions"===a.state.activeStory,"data-story":"questions",label:"5",text:"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"},o.a.createElement(X.a,null)))},o.a.createElement(g.r,{id:"profile",popout:a.state.popout,activePanel:"profile"},o.a.createElement(g.j,{id:"profile"},o.a.createElement(g.k,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),o.a.createElement(y,{fetchedUser:a.state.fetchedUser}))),o.a.createElement(g.r,{id:"map",popout:a.state.popout,activePanel:a.state.activePanel},o.a.createElement(g.j,{id:"map"},o.a.createElement(g.k,null,"\u041a\u0430\u0440\u0442\u0430"),o.a.createElement(z,{geo:a.state.geoData,checkGeo:a.checkGeo,errorGeo:a.state.errorGeo})),o.a.createElement(g.j,{id:"questions"},a.state.selectedPlace&&o.a.createElement(g.k,{left:o.a.createElement(g.g,{onClick:a.onToChange,"data-to":"map"},o.a.createElement(ee.a,null))},a.state.selectedPlace.name),o.a.createElement(R,{selectedPlace:a.state.selectedPlace}),o.a.createElement(Q,{selectedPlace:a.state.selectedPlace,setPoll:a.setPoll,Poll:a.state.Poll,setEnd:a.setEnd}),o.a.createElement(g.d,null,a.state.showEnd&&o.a.createElement(F,{theEnd:a.theEnd,selectedPlace:a.state.selectedPlace}))),o.a.createElement(g.j,{id:"modal"},o.a.createElement(_,{fetchedUser:a.state.fetchedUser,theStory:a.theStory}))),o.a.createElement(g.r,{id:"questions",popout:a.state.popout,activePanel:"quest"},o.a.createElement(g.j,{id:"quest"},o.a.createElement(g.k,null,"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),o.a.createElement(J,{quests:a.state.quests}))))},a.so=o.a.createElement("p",{style:{color:"red"}},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"),a.num=0,a.state={activeStory:null,activePanel:"map",quests:null,header:!0,snackbar:null,popout:null,selectedPlace:null,fetchedUser:null,access_token:null,geoData:null,errorGeo:null,Poll:null,showEnd:!1},a.onStoryChange=a.onStoryChange.bind(Object(m.a)(a)),a.onToChange=a.onToChange.bind(Object(m.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),e.setState({activeStory:"profile"}),console.log(t.detail.data.id);break;case"VKWebAppGeodataResult":!0===t.detail.data.available?e.setState({geoData:t.detail.data}):console.log("\u0432\u0441\u0435 \u043f\u043b\u043e\u0445\u043e");break;case"VKWebAppAccessTokenReceived":e.setState({access_token:t.detail.data.access_token}),N.a.writeFile("loop.json","id :1 square :1");break;case"VKWebAppCallAPIMethodResult":switch(t.detail.data.request_id){case"getAll":e.setState({quests:t.detail.data.response}),console.log(t.detail.data.response[0]),e.setState({activeStory:"questions",popout:null});break;case"getAllQuests":b.a.send("VKWebAppCallAPIMethod",{method:"storage.get",request_id:"getAll",params:{keys:t.detail.data.response.join(","),user_id:e.state.fetchedUser.id,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}}),console.log(t.detail.data.response);break;case"getPoll":if(console.log(t.detail),""===t.detail.data.response)e.setState({Poll:""}),e.setState({activePanel:"questions",popout:null});else{var a=JSON.parse(t.detail.data.response);e.setState({Poll:a}),e.setState({activePanel:"questions",popout:null}),console.log(a)}break;case"g":console.log(t.detail.data);break;case"setPoll":console.log(t.detail.data.response)}break;default:console.log(t.detail.data)}})),b.a.send("VKWebAppGetUserInfo",{}),b.a.send("VKWebAppGetAuthToken",{app_id:7150376,scope:"friends"}),b.a.send("VKWebAppGetGeodata",{})}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}}]),t}(o.a.Component));c.a.send("VKWebAppInit"),s.a.render(o.a.createElement(te,null),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.45ceb76e.chunk.js.map