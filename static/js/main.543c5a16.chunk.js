(window.webpackJsonpQuestsinPocket=window.webpackJsonpQuestsinPocket||[]).push([[0],{196:function(e,t,n){e.exports=n.p+"static/media/achiev-1.05917b64.png"},198:function(e,t,n){e.exports=n.p+"static/media/one_1.230919a1.jpg"},199:function(e,t,n){e.exports=n.p+"static/media/one_colum.5e049246.jpg"},200:function(e,t,n){e.exports=n.p+"static/media/map.e0ba97a3.png"},256:function(e,t,n){e.exports=n(491)},335:function(e,t){},337:function(e,t){},370:function(e,t){},371:function(e,t){},457:function(e,t){},459:function(e,t){},474:function(e,t,n){e.exports=n.p+"static/media/Design-story.2ea10a94.png"},487:function(e,t,n){e.exports=n.p+"static/media/forest.cc873e2d.png"},491:function(e,t,n){"use strict";n.r(t);n(257),n(283),n(285),n(286),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325);var a=n(0),o=n.n(a),l=n(30),r=n.n(l),i=n(62),c=n.n(i),s=n(19),u=n(24),m=n(21),p=n(20),d=n(22),h=n(84),f=n.n(h),g=n(191),E=(n(83),n(4)),b=(n(46),n(196)),v=n.n(b),k=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(E.d,{before:o.a.createElement("div",{style:{"margin-left":"1px"}},o.a.createElement(E.b,{src:v.a,size:100})),indicator:this.props.lvlNum+" lvl"},o.a.createElement(E.h,null,this.props.title))}}]),t}(o.a.Component),C={fontSize:"150%",fontWeight:"bold"},y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={fetchedUser:n.props.fetchedUser},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(E.e,{id:"profile-container",align:"center"},o.a.createElement(E.e,{id:"avatar-container"},o.a.createElement(E.b,{src:this.state.fetchedUser.photo_200,style:{border:"solid 3px #BF24FE"},size:150})),o.a.createElement(E.e,{id:"name-container"},o.a.createElement(E.d,{id:"name"},o.a.createElement("p",{style:C},o.a.createElement("strong",null,this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name)))),o.a.createElement(E.g,{title:"\u0412\u0430\u0448\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",id:"achievements-container"},o.a.createElement(k,{lvlNum:"1",title:"\u041f\u0435\u0440\u0432\u043e\u043f\u0440\u043e\u0445\u043e\u0434\u0435\u0446"})))}}]),t}(o.a.Component),w=n(87),j=n(197);w.a.init(j.a);o.a.Component;var O=n(53),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).infoWindowRef=o.a.createRef(),n.contentElement=document.createElement("div"),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&(r.a.render(o.a.Children.only(this.props.children),this.contentElement),this.infoWindowRef.current.infowindow.setContent(this.contentElement))}},{key:"render",value:function(){return o.a.createElement(O.InfoWindow,Object.assign({ref:this.infoWindowRef},this.props))}}]),t}(o.a.Component),_=(n(487),n(198)),P=n.n(_),I=(n(488),n(199)),x=n.n(I),M=n(86),W=n.n(M),z=n(200),L=n.n(z),U={width:"100%",height:"100%",marginLeft:"auto",marginRight:"auto"},T=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).onMarkerClick=function(e,t,a){switch(t.id_marker){case"one_2":case"one_3":case"I":case"one_1":n.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0});break;default:console.log("\u043e\u0448\u0438\u0431\u043e\u0447\u043a\u0430")}},n.submit=function(e){console.log(n.state.selectedPlace),n.props.checkGeo(n.state.selectedPlace)},n.onMapClicked=function(e){n.state.showingInfoWindow&&n.setState({showingInfoWindow:!1,activeMarker:null})},n.render=function(e){return o.a.createElement(O.Map,{google:n.props.google,style:U,zoom:16,initialCenter:{lat:n.state.lat,lng:n.state.lon},gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,zoomControl:!1,onClick:n.onMapClicked},o.a.createElement("div",null,o.a.createElement(E.c,{size:"xl",onClick:n.props.updateGeo,level:"commerce"},o.a.createElement("p",{align:"center"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))),o.a.createElement(O.Marker,{onClick:n.onMarkerClick,position:{lat:59.934777,lng:30.302896},name:"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0441\u043b\u0430\u0432\u044b",img:P.a,img_1:x.a,pretitle:"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u044f\u043c\u0438 \u0421\u043b\u0430\u0432\u044b \u0432 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435. \u041f\u0430\u043c\u044f\u0442\u043d\u0438\u043a \u0432 \u0447\u0435\u0441\u0442\u044c \u043f\u043e\u0431\u0435\u0434 \u041b\u0435\u0439\u0431-\u0433\u0432\u0430\u0440\u0434\u0438\u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430 \u0432 \u041e\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0432\u043e\u0439\u043d\u0435 1812 \u0433\u043e\u0434\u0430 \u0431\u044b\u043b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043d\u0430 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u043c \u0431\u0443\u043b\u044c\u0432\u0430\u0440\u0435 \u0432 1845-1846 \u0433\u043e\u0434\u0430\u0445. \u0410\u0432\u0442\u043e\u0440 \u0441\u0442\u0430\u0442\u0443\u0439 \u2014 \u0425. \u0414. \u0420\u0430\u0443\u0445, \u0430\u0432\u0442\u043e\u0440 \u043a\u043e\u043b\u043e\u043d\u043d \u2014 \u041a. \u0418. \u0420\u043e\u0441\u0441\u0438.",id_marker:"one_1",text:o.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},o.a.createElement("p",{align:"center"},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c, \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044b \u0443\u0437\u043d\u0430\u0442\u0435 3 \u0441\u0430\u043c\u044b\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u0444\u0430\u043a\u0442\u043e\u0432 \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0418 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c!:))"),o.a.createElement("p",null,"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0421\u043b\u0430\u0432\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432 \u0438\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u043e\u0440\u0434\u0435\u0440\u0435 \u0438\u0437 \u0441\u0435\u0440\u043e\u0433\u043e \u0441\u0435\u0440\u0434\u043e\u0431\u043e\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u043d\u0438\u0442\u0430.",o.a.createElement("br",null),"\u041b\u0435\u0442\u044f\u0449\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0438 \u0431\u043e\u0433\u0438\u043d\u0438 \u041d\u0438\u043a\u0438 \u0441 \u043b\u0430\u0432\u0440\u043e\u0432\u044b\u043c\u0438 \u0432\u0435\u043d\u043a\u0430\u043c\u0438 \u0432 \u0440\u0443\u043a\u0430\u0445,\u043d\u0430\u0432\u0435\u0440\u0445\u0443, \u0431\u044b\u043b\u0438 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u044b \u0432 \u0411\u0435\u0440\u043b\u0438\u043d\u0435 \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u043e\u0440\u0430 \u0425. \u0414. \u0420\u0430\u0443\u0445\u0430 \u0438 \u043f\u043e\u0434\u0430\u0440\u0435\u043d\u044b \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u041d\u0438\u043a\u043e\u043b\u0430\u044e I \u043a\u043e\u0440\u043e\u043b\u0435\u043c \u0424\u0440\u0438\u0434\u0440\u0438\u0445\u043e\u043c \u0412\u0438\u043b\u044c\u0433\u0435\u043b\u044c\u043c\u043e\u043c IV \u0432 1845 \u0433\u043e\u0434\u0443 \u0432 \u0437\u043d\u0430\u043a \u043e\u0442\u0432\u0435\u0442\u043d\u043e\u0439 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430 \u043a\u043e\u043f\u0438\u0438 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f \xab\u0423\u043a\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u044f\xbb \u041f. \u041a. \u041a\u043b\u043e\u0434\u0442\u0430 (\u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0410\u043d\u0438\u0447\u043a\u043e\u0432\u043e\u043c \u043c\u043e\u0441\u0442\u0443).")," "),end:o.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},o.a.createElement("p",null,"\u0422\u0440\u0435\u0442\u0438\u0439 \u0444\u0430\u043a\u0442: \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043d\u044b \u2014 12 \u043c\u0435\u0442\u0440\u043e\u0432, \u0432\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u0430\u0442\u0443\u0438 \u2014 2,5 \u043c\u0435\u0442\u0440\u0430.")),pollQuestions:"\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043a\u0430\u043a\u043e\u0439 \u0432\u044b\u0441\u043e\u0442\u044b \u044d\u0442\u0438 \u043a\u043e\u043b\u043e\u043d\u043d\u044b?",answer_1:"12 \u043c\u0435\u0442\u0440\u043e\u0432",answer_2:"13 \u043c\u0435\u0442\u0440\u043e\u0432",answer_3:"15 \u043c\u0435\u0442\u0440\u043e\u0432",but:o.a.createElement(E.c,{level:"commerce",onClick:n.submit},n.state.nameButton)}),o.a.createElement(O.Marker,{onClick:n.onMarkerClick,pretitle:"\u0417\u0434\u0430\u043d\u0438\u0435 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u043d\u0435\u0436\u0430 \u0432 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435. \u0418\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0434\u0430\u043d\u0438\u0435 \u0432 \u0441\u0442\u0438\u043b\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u0446\u0438\u0437\u043c\u0430, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u0432 1804-1807 \u0433\u043e\u0434\u0430\u0445 \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0414\u0436\u0430\u043a\u043e\u043c\u043e \u041a\u0432\u0430\u0440\u0435\u043d\u0433\u0438 \u0434\u043b\u044f \u0432\u044b\u0443\u0447\u043a\u0438 \u0438 \u043f\u0430\u0440\u0430\u0434\u043d\u044b\u0445 \u0432\u044b\u0435\u0437\u0434\u043e\u0432 \u041b\u0435\u0439\u0431-\u0433\u0432\u0430\u0440\u0434\u0438\u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430. \u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0437\u0434\u0435\u0441\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0441\u0442\u0430\u0432\u043e\u0447\u043d\u044b\u0439 \u0437\u0430\u043b \xab\u041c\u0430\u043d\u0435\u0436\xbb.",img:W.a,img_1:W.a,name:"\u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u0438\u0439 \u043c\u0430\u043d\u0435\u0436",end:o.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},o.a.createElement("p",null,"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0414\u0438\u043e\u0441\u043a\u0443\u0440\u044b \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u043e\u0431\u043d\u0430\u0436\u0435\u043d\u043d\u044b\u0445 \u044f\u0437\u044b\u0447\u0435\u0441\u043a\u0438\u0445 \u0431\u043e\u0433\u043e\u0432 \u2014 \u0434\u0435\u0442\u0435\u0439 \u0417\u0435\u0432\u0441\u0430, \u043f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0418\u0441\u0430\u0430\u043a\u0438\u0435\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0431\u043e\u0440\u0430 \u043f\u043e \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044e \u043f\u0440\u0430\u0432\u043e\u0441\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0434\u0443\u0445\u043e\u0432\u0435\u043d\u0441\u0442\u0432\u0430 \u0438\u0445 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u043b\u0438 \u043d\u0430 \u0437\u0430\u0434\u043d\u0438\u0439 \u0444\u0430\u0441\u0430\u0434 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u043d\u0435\u0436\u0430, \u0438 \u0442\u0430\u043c \u043e\u043d\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u044f\u043b\u0438 \u0432\u043f\u043b\u043e\u0442\u044c \u0434\u043e 1954 \u0433\u043e\u0434\u0430.")),text:o.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},o.a.createElement("p",{align:"center"},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c, \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044b \u0443\u0437\u043d\u0430\u0442\u0435 3 \u0441\u0430\u043c\u044b\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u0444\u0430\u043a\u0442\u043e\u0432 \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0418 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c!:))"),o.a.createElement("p",null,"\u041a\u0430\u0437\u0430\u0440\u043c\u044b \u041b\u0435\u0439\u0431-\u0433\u0432\u0430\u0440\u0434\u0438\u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430, \u043e\u0441\u043e\u0431\u043e \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u043a \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0441\u043a\u043e\u043c\u0443 \u0434\u0432\u043e\u0440\u0443 \u0432\u043e\u0439\u0441\u043a\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f, \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u043b\u0438\u0441\u044c \u043d\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u043a\u0430\u043d\u0430\u043b\u0430, \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0432\u0448\u0435\u0433\u043e \u0410\u0434\u043c\u0438\u0440\u0430\u043b\u0442\u0435\u0439\u0441\u0442\u0432\u043e \u0441 \u041d\u043e\u0432\u043e\u0439 \u0413\u043e\u043b\u043b\u0430\u043d\u0434\u0438\u0435\u0439, \u043d\u043e \u043f\u043e\u0437\u0436\u0435 \u0437\u0430\u0441\u044b\u043f\u0430\u043d\u043d\u043e\u0433\u043e. \u0418\u043c\u0435\u043d\u043d\u043e \u043d\u0430 \u043c\u0435\u0441\u0442\u0435 \u0431\u044b\u0432\u0448\u0435\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430 \u0438 \u0431\u044b\u043b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u043c\u0430\u043d\u0435\u0436 \u0434\u043b\u044f \u0437\u0438\u043c\u043d\u0435\u0439 \u0438 \u043b\u0435\u0442\u043d\u0435\u0439 \u0432\u044b\u0443\u0447\u043a\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0430\u0440\u0430\u0434\u043d\u044b\u0445 \u043a\u043e\u043d\u043d\u044b\u0445 \u0432\u044b\u0435\u0437\u0434\u043e\u043a \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430. \u041e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u043b \u0441\u0442\u0430\u0442\u044c \u0443\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u0435\u043c \u0418\u0441\u0430\u0430\u043a\u0438\u0435\u0432\u0441\u043a\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0443 \u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044e \u043c\u0430\u043d\u0435\u0436\u0430 \u043f\u043e\u0434\u043e\u0448\u043b\u0438 \u0441\u043e \u0432\u0441\u0435\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0439 \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c\u044e \u0438 \u043c\u043e\u043d\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e.",o.a.createElement("br",null),"\u0414\u043e\u043b\u0433\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430 \u043b\u0435\u0433\u0435\u043d\u0434\u0430, \u0447\u0442\u043e \u043c\u0435\u0436\u0434\u0443 \u0417\u0438\u043c\u043d\u0438\u043c \u0434\u0432\u043e\u0440\u0446\u043e\u043c \u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u0438\u043c \u043c\u0430\u043d\u0435\u0436\u0435\u043c \u0431\u044b\u043b \u043f\u0440\u043e\u0440\u044b\u0442 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0442\u0443\u043d\u043d\u0435\u043b\u044c, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u0435\u0445\u0430\u0442\u044c \u0432\u0435\u0440\u0445\u043e\u043c \u043d\u0430 \u043b\u043e\u0448\u0430\u0434\u0438..")," "),pollQuestions:"\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043a\u0442\u043e \u0442\u0430\u043a\u0438\u0435 \u0434\u0438\u043e\u0441\u043a\u0443\u0440\u044b?",answer_1:"\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u0443\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u044f \u0444\u0430\u0441\u0430\u0434\u0430 \u0437\u0434\u0430\u043d\u0438\u044f",answer_2:"\u0411\u0440\u0430\u0442\u044c\u044f \u0431\u043b\u0438\u0437\u043d\u0435\u0446\u044b \u0432 \u0434\u0440\u0435\u0432\u043d\u0435\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u0438\u0444\u043e\u043b\u043e\u0433\u0438\u0438, \u0434\u0435\u0442\u0438 \u0417\u0435\u0432\u0441\u0430",answer_3:"\u0412 \u0434\u0440\u0435\u0432\u043d\u0435\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u0438\u0444\u043e\u043b\u043e\u0433\u0438\u0438 \u0437\u043b\u044b\u0435 \u0444\u0443\u0440\u0438\u0438",id_marker:"one_3",but:o.a.createElement(E.c,{level:"commerce",onClick:n.submit},n.state.nameButton),position:{lat:59.934304,lng:30.303386}}),o.a.createElement(O.Marker,{onClick:n.onMarkerClick,position:{lat:n.state.lat,lng:n.state.lon},id_marker:"I",icon:{url:L.a,anchor:new n.props.google.maps.Point(32,32),scaledSize:new n.props.google.maps.Size(32,51)},name:"\u042d\u0442\u043e \u0432\u044b"}),o.a.createElement(S,{marker:n.state.activeMarker,visible:n.state.showingInfoWindow},o.a.createElement(E.e,{align:"center"},o.a.createElement("img",{src:n.state.selectedPlace.img,style:{width:"90%",height:"90%"}}),o.a.createElement("h1",null,n.state.selectedPlace.name),o.a.createElement("p",null,n.state.selectedPlace.pretitle),n.props.errorGeo,n.state.selectedPlace.but)))};n.props.geoData;return n.state={nameButton:"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435",lat:n.props.geoData.lat,lon:n.props.geoData.lon,showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},n}return Object(d.a)(t,e),t}(o.a.Component),D=Object(O.GoogleApiWrapper)({apiKey:"AIzaSyCL0U2diIKJtBb5gmgyUsRvpSIIKIfKCv0"})(T),A=(o.a.Component,n(489),{outline:"none",width:"100%",color:"white",fontFamily:"Arial",padding:"20px 30px",borderRadius:"10px",backgroundImage:"linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%)",backgroundSize:"200%",boxShadow:" 0 0 20px rgba(0,0,0,.1)",transition:".5s",marginTop:"1.5%"}),K=(o.a.Component,o.a.Component,f.a.createConnection({host:"eu-cdbr-west-02.cleardb.net:3306",user:"bdafa681a6ea90",password:"aebf7eea",database:"heroku_92d8d4ee3e0b01c"}));console.log(K);var R=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={activeTab:"questions"},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"connect",value:function(){K.connect((function(e){e?console.log(e.stack):console.log(K.threadId)}))}},{key:"render",value:function(){var e=this;return o.a.createElement(E.e,null,o.a.createElement(E.l,{theme:"light"},o.a.createElement(E.m,{onClick:function(){return e.setState({activeTab:"questions"})},selected:"questions"===this.state.activeTab},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),o.a.createElement(E.m,{onClick:function(){return e.setState({activeTab:"rr"})},selected:"rr"===this.state.activeTab},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433")),"questions"===this.state.activeTab?o.a.createElement(E.e,null,o.a.createElement("p",null,"KLLLLLLLLLLLL"),o.a.createElement("button",{onClick:this.connect},"bg")):null)}}]),t}(o.a.Component),B=(o.a.Component,n(201)),F=n.n(B),q=n(202),G=n.n(q),Q=n(203),V=n.n(Q),J=(n(490),n(85),new g.VKMiniAppAPI),N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).closePopout=function(e){n.setState({popout:null})},n.onStoryChange=function(e){n.setState({activeStory:e.currentTarget.dataset.story})},n.onToChange=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.num=2,n.state={activeStory:"map",activePanelMap:"map",activeTab:"questions",header:!0,popout:null,selectedPlace:null,fetchedUser:null,access_token:null,geoData:null,errorGeo:null,Poll:null,showEnd:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.initApp(),J.getUserInfo().then((function(t){e.setState({fetchedUser:t}),console.log(t.id)}))}},{key:"openDefault",value:function(e){this.setState({popout:o.a.createElement(E.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"},{title:"\u041e\u043a",autoclose:!0}],onClose:this.closePopout},o.a.createElement("p",null,"\u0414\u043b\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"))})}},{key:"render",value:function(){return o.a.createElement(E.f,{activeStory:this.state.activeStory,tabbar:o.a.createElement(E.j,null,o.a.createElement(E.k,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},o.a.createElement(V.a,null)),o.a.createElement(E.k,{onClick:this.onClick,selected:"map"===this.state.activeStory,"data-story":"map"},o.a.createElement(G.a,null)),o.a.createElement(E.k,{onClick:this.onStoryChange,selected:"other"===this.state.activeStory,"data-story":"other"},o.a.createElement(F.a,null)))},o.a.createElement(E.n,{id:"profile",activePanel:"profile"},o.a.createElement(E.i,{id:"profile"},o.a.createElement(y,{fetchedUser:this.state.fetchedUser}))),o.a.createElement(E.n,{id:"map",activePanel:this.state.activePanelMap},o.a.createElement(E.i,{id:"map"},o.a.createElement(D,{geoData:this.state.geoData}))),o.a.createElement(E.n,{id:"other",header:!1,activePanel:"other"},o.a.createElement(E.i,{id:"other"},o.a.createElement(R,null))))}}]),t}(o.a.Component);c.a.send("VKWebAppInit"),r.a.render(o.a.createElement(N,null),document.getElementById("root"))},86:function(e,t,n){e.exports=n.p+"static/media/man.f3b16325.jpg"}},[[256,1,2]]]);
//# sourceMappingURL=main.543c5a16.chunk.js.map