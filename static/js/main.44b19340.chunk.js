(window.webpackJsonpQuestsinPocket=window.webpackJsonpQuestsinPocket||[]).push([[0],{248:function(e,t,a){e.exports=a.p+"static/media/achiev-1.05917b64.png"},250:function(e,t,a){e.exports=a.p+"static/media/map.e0ba97a3.png"},304:function(e,t,a){e.exports=a(633)},383:function(e,t){},385:function(e,t){},418:function(e,t){},419:function(e,t){},504:function(e,t){},506:function(e,t){},520:function(e,t,a){e.exports=a.p+"static/media/Design-story.2ea10a94.png"},557:function(e,t){},558:function(e,t){},633:function(e,t,a){"use strict";a.r(t);a(305),a(331),a(333),a(334),a(336),a(337),a(338),a(339),a(340),a(341),a(342),a(343),a(345),a(346),a(347),a(348),a(349),a(350),a(351),a(352),a(353),a(354),a(356),a(357),a(358),a(359),a(360),a(361),a(362),a(363),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373);var n=a(0),o=a.n(n),i=a(38),c=a.n(i),l=a(74),r=a.n(l),s=a(21),p=a(27),u=a(23),d=a(22),h=a(24),m=(a(159),a(239)),f=(a(96),a(6)),g=(a(52),a(248)),E=a.n(g),b=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.d,{before:o.a.createElement("div",{style:{"margin-left":"1px"}},o.a.createElement(f.b,{src:E.a,size:100})),indicator:this.props.lvlNum+" lvl"},o.a.createElement(f.h,null,this.props.title))}}]),t}(o.a.Component),k={fontSize:"150%",fontWeight:"bold"},v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={fetchedUser:a.props.fetchedUser},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{id:"profile-container",align:"center"},o.a.createElement(f.e,{id:"avatar-container"},o.a.createElement(f.b,{src:this.state.fetchedUser.photo_200,style:{border:"solid 3px #BF24FE"},size:150})),o.a.createElement(f.e,{id:"name-container"},o.a.createElement(f.d,{id:"name"},o.a.createElement("p",{style:k},o.a.createElement("strong",null,this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name)))),o.a.createElement(f.g,{title:"\u0412\u0430\u0448\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",id:"achievements-container"},o.a.createElement(b,{lvlNum:"1",title:"\u041f\u0435\u0440\u0432\u043e\u043f\u0440\u043e\u0445\u043e\u0434\u0435\u0446"})))}}]),t}(o.a.Component),y=a(103),w=a(249);y.a.init(w.a);o.a.Component;var j=a(67),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).infoWindowRef=o.a.createRef(),a.contentElement=document.createElement("div"),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&(c.a.render(o.a.Children.only(this.props.children),this.contentElement),this.infoWindowRef.current.infowindow.setContent(this.contentElement))}},{key:"render",value:function(){return o.a.createElement(j.InfoWindow,Object.assign({ref:this.infoWindowRef},this.props))}}]),t}(o.a.Component),C=(a(533),a(250)),S=a.n(C),P={width:"100%",height:"100%",marginLeft:"auto",marginRight:"auto"},x=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).submit=function(){a.props.checkGeo(a.state.selectedPlace)},a.onMarkerClick=function(e,t,n){a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.submit=function(e){console.log(a.state.selectedPlace),a.props.checkGeo(a.state.selectedPlace)},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.render=function(e){return o.a.createElement(j.Map,{google:a.props.google,style:P,zoom:16,initialCenter:{lat:44,lng:39},gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,zoomControl:!1,onClick:a.onMapClicked},o.a.createElement("div",null,o.a.createElement(f.c,{size:"xl",onClick:a.props.updateGeodata,level:"commerce"},o.a.createElement("p",{align:"center"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))),a.props.marker.map((function(e,t){return o.a.createElement(j.Marker,{onClick:a.onMapClicked,id_marker:e[t].id_marker,position:e.position,name:e.name,img:e.img,img_1:e.img_1,pretext:e.pretext,text:e.text,text_end:e.text_end,answer_1:e.answer_1,answer_2:e.answer_2,answer_3:e.answer_3,but:o.a.createElement(f.c,{level:"commerce"},"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435")})})),o.a.createElement(j.Marker,{onClick:a.onMarkerClick,position:{lat:a.props.geoData.lat,lng:a.props.geoData.lon},id_marker:"I",icon:{url:S.a,anchor:new a.props.google.maps.Point(32,32),scaledSize:new a.props.google.maps.Size(32,51)},name:"\u042d\u0442\u043e \u0432\u044b"}),o.a.createElement(O,{marker:a.state.activeMarker,visible:a.state.showingInfoWindow},o.a.createElement(f.e,{align:"center"},o.a.createElement("img",{src:a.state.selectedPlace.img,style:{width:"90%",height:"90%"}}),o.a.createElement("h1",null,a.state.selectedPlace.name),o.a.createElement("p",null,a.state.selectedPlace.pretext),a.props.errorGeo,a.state.selectedPlace.but)))};a.props.geoData;return a.state={nameButton:"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435",showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(h.a)(t,e),t}(o.a.Component),_=Object(j.GoogleApiWrapper)({apiKey:"AIzaSyCL0U2diIKJtBb5gmgyUsRvpSIIKIfKCv0"})(x),M=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{align:"center"},this.props.selectedPlace.end,o.a.createElement(f.c,{size:"xl",level:"commerce",onClick:this.props.theEnd},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"))}}]),t}(o.a.Component),I=(a(534),{outline:"none",width:"100%",color:"white",fontFamily:"Arial",padding:"20px 30px",borderRadius:"10px",backgroundImage:"linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%)",backgroundSize:"200%",boxShadow:" 0 0 20px rgba(0,0,0,.1)",transition:".5s",marginTop:"1.5%"}),D=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,null,o.a.createElement(f.d,{align:"center"},o.a.createElement("p",null,o.a.createElement("strong",null,this.props.selectedPlace.pollQuestions))),o.a.createElement(f.c,{id:"falseBut",onClick:this.props.getAns,style:I},this.props.selectedPlace.answer_1),o.a.createElement(f.c,{id:"trueBut",onClick:this.props.getAns,style:I},this.props.selectedPlace.answer_2),o.a.createElement(f.c,{id:"falseBut",onClick:this.props.getAns,style:I},this.props.selectedPlace.answer_3))}}]),t}(o.a.Component),G=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{align:"center"},o.a.createElement(f.b,{src:this.props.selectedPlace.img_1,size:200}),this.props.selectedPlace.text)}}]),t}(o.a.Component),L=(a(97),a(230)),U=(a(58),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={activeTab:"questions"},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"connect",value:function(){L.get("http://localhost/index.php?type=get_all").then((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement(f.e,null,o.a.createElement(f.m,{theme:"light"},o.a.createElement(f.n,{onClick:function(){return e.setState({activeTab:"questions"})},selected:"questions"===this.state.activeTab},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),o.a.createElement(f.n,{onClick:function(){return e.setState({activeTab:"rr"})},selected:"rr"===this.state.activeTab},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433")),"questions"===this.state.activeTab?o.a.createElement(f.e,null,o.a.createElement("p",null,"KLLLLLLLLLLLL"),o.a.createElement("button",{onClick:this.connect},"bg")):null)}}]),t}(o.a.Component)),T=(o.a.Component,a(251)),q=a.n(T),z=a(252),W=a.n(z),A=a(253),F=a.n(A),B=(a(632),a(102),a(230)),K=new m.VKMiniAppAPI,R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onClickMap=function(e){B.get("https://www.questsinpocket.com/vk/index.php?type=get_all_points").then((function(e){console.log(e.data),a.setState({marker:e.data})})),a.setState({popout:o.a.createElement(f.j,null)}),K.getGeodata().then((function(e){setTimeout((function(){a.setState({geoData:e,activeStory:"map",popout:null})}),500),console.log(e)}))},a.updateGeodata=function(e){K.getGeodata().then((function(e){a.setState({geoData:e}),console.log(e)}))},a.closePopout=function(e){a.setState({popout:null})},a.onStoryChange=function(e){a.setState({activeStory:e.currentTarget.dataset.story})},a.onToChange=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.num=2,a.state={activeStory:"other",activePanelMap:"map",activeTab:"questions",header:!0,popout:null,selectedPlace:null,fetchedUser:null,ball:0,access_token:null,geoData:null,marker:null,errorGeo:null,Poll:null,showEnd:!1},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(e){var t=this;K.initApp(),K.getUserInfo().then((function(e){t.setState({fetchedUser:e}),B.post("https://www.questsinpocket.com/vk/index.php?type=create&id_vk="+e.id+"&ball=0").then((function(a){console.log(a.data),2===a.data&&B.post("https://www.questsinpocket.com/vk/index.php?type=get&id_vk="+e.id).then((function(e){t.setState({ball:e.data})}))})),console.log(e.id)}))}},{key:"getPoll",value:function(e){var t=this;B.get("https://www.questsinpocket.com/vk/index.php?type=get&vk_id=0&id="+this.state.selectedPlace.id_marker).then((function(e){t.setState({Poll:e.data})}))}},{key:"checkGeo",value:function(e,t){this.setState({popout:o.a.createElement(f.j,null)}),this.updateGeodata(),this.state.geoData.lat.toFixed(this.num)===e.position.lat.toFixed(this.num)&&this.state.geoData.long.toFixed(this.num)===e.position.lng.toFixed(this.num)?(B.post("https://www.questsinpocket.com/vk/index.php?type=get&vk_id="+this.state.fetchedUser.id+"$ball=0"),this.setState({selectedPlace:e,popout:null,activePanelMap:"quest"})):this.setState({errorGeo:o.a.createElement("p",{style:{color:"red"}},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"),popout:null})}},{key:"openDefault",value:function(e){this.setState({popout:o.a.createElement(f.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"},{title:"\u041e\u043a",autoclose:!0}],onClose:this.closePopout},o.a.createElement("p",null,"\u0414\u043b\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"))})}},{key:"render",value:function(){return o.a.createElement(f.f,{activeStory:this.state.activeStory,tabbar:o.a.createElement(f.k,null,o.a.createElement(f.l,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},o.a.createElement(F.a,null)),o.a.createElement(f.l,{onClick:this.onClickMap,selected:"map"===this.state.activeStory,"data-story":"map"},o.a.createElement(W.a,null)),o.a.createElement(f.l,{onClick:this.onStoryChange,selected:"other"===this.state.activeStory,"data-story":"other"},o.a.createElement(q.a,null)))},o.a.createElement(f.o,{id:"profile",popout:this.state.popout,activePanel:"profile"},o.a.createElement(f.i,{id:"profile"},o.a.createElement(v,{fetchedUser:this.state.fetchedUser}))),o.a.createElement(f.o,{id:"map",popout:this.state.popout,activePanel:this.state.activePanelMap},o.a.createElement(f.i,{id:"map"},o.a.createElement(_,{geoData:this.state.geoData,updateGeodata:this.updateGeodata,marker:this.state.marker})),o.a.createElement(f.i,{id:"quest"},o.a.createElement(G,null),o.a.createElement(D,null),o.a.createElement(M,null))),o.a.createElement(f.o,{id:"other",header:!1,popout:this.state.popout,activePanel:"other"},o.a.createElement(f.i,{id:"other"},o.a.createElement(U,null))))}}]),t}(o.a.Component);r.a.send("VKWebAppInit"),c.a.render(o.a.createElement(R,null),document.getElementById("root"))}},[[304,1,2]]]);
//# sourceMappingURL=main.44b19340.chunk.js.map