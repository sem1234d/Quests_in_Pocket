(this.webpackJsonpnew_qip=this.webpackJsonpnew_qip||[]).push([[0],{110:function(e,t,a){e.exports=a(157)},124:function(e,t,a){e.exports=a.p+"static/media/Design-story.2ea10a94.png"},157:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(21),s=a.n(l),r=a(26),i=a.n(r),c=a(12),p=a(20),u=a(14),d=a(13),m=a(15),h=a(48),f=(a(30),a(4)),E=(a(23),a(28)),k=a.n(E),b=a(58),v=a.n(b),g=(o.a.Component,{fontSize:"150%",fontWeight:"bold"}),y={},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={fetchedUser:a.props.fetchedUser},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{id:"profile-container",align:"center"},o.a.createElement(f.e,{id:"avatar-container"},o.a.createElement(f.b,{src:this.state.fetchedUser.photo_200,style:{border:"solid 3px #BF24FE"},size:150})),o.a.createElement("p",{style:y},this.props.ball),o.a.createElement(f.e,{id:"name-container"},o.a.createElement(f.d,{id:"name"},o.a.createElement("p",{style:g},o.a.createElement("strong",null,this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name)))),o.a.createElement(f.i,{title:"\u0412\u0430\u0448\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",id:"achievements-container"},o.a.createElement(f.l,{style:{paddingBottom:15}},this.props.a.map((function(e,t){return o.a.createElement(f.d,{before:o.a.createElement("div",{style:{"margin-left":"1px"}},o.a.createElement(f.b,{src:e.img,size:72})),size:"l",description:e.description,asideContent:o.a.createElement(k.a,null)},e.name)})))))}}]),t}(o.a.Component),S=a(37),_=a(31),P=a(59);a(35),a(123);_.a.init(P.a);var C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).GenerateStory=function(){console.log(n.props.selectedPlace.name),_.a.generateStoryFromTemplate(a(124),[{font:"50px Arial",align:"center",color:"#FFFFFF",value:n.props.selectedPlace.name,x:540,y:1133}],n.props.selectedPlace.img).then((function(e){_.a.shareStory(7150376,e,{add_to_news:!0})}))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this;return o.a.createElement(f.n,{activeModal:"story"},o.a.createElement(f.m,(e={id:"story",onClose:function(){return t.setActiveModal(null)},icon:o.a.createElement(f.b,{src:this.props.selectedPlace.img,size:72}),title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043c\u0435\u0441\u0442\u043e\u043c \u0441 \u0434\u0440\u0443\u0437\u044c\u043c\u0438",caption:"\u041f\u0443\u0441\u0442\u044c \u0434\u0440\u0443\u0437\u044c\u044f \u0443\u0437\u043d\u0430\u044e\u0442, \u043a\u0443\u0434\u0430 \u0432\u044b \u0434\u043e\u0431\u0440\u0430\u043b\u0438\u0441\u044c!!!",style:{}},Object(S.a)(e,"onClose",(function(){t.props.cancelHistory()})),Object(S.a)(e,"actions",[{title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f",type:"primary",action:function(){t.props.sendHistory(),t.GenerateStory()}}]),e)))}}]),t}(o.a.Component),j=a(25),O=a(60),x=a.n(O),q=(a(137),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).infoWindowRef=o.a.createRef(),a.contentElement=document.createElement("div"),a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&(s.a.render(o.a.Children.only(this.props.children),this.contentElement),this.infoWindowRef.current.infowindow.setContent(this.contentElement))}},{key:"render",value:function(){return o.a.createElement(j.InfoWindow,Object.assign({ref:this.infoWindowRef},this.props))}}]),t}(o.a.Component)),M=(a(138),a(61)),G=a.n(M),U={width:"100%",height:"100%",marginLeft:"auto",marginRight:"auto"},I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onMarkerClick=function(e,t,n){a.props.setErorr(),a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.submit=function(e){a.props.checkGeo(a.state.selectedPlace)},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.render=function(e){return o.a.createElement(j.Map,{google:a.props.google,style:U,zoom:16,initialCenter:{lat:a.props.geoData.lat,lng:a.props.geoData.long},gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControl:!1,onClick:a.onMapClicked},o.a.createElement(j.Marker,{onClick:a.onMarkerClick,position:{lat:a.state.lat,lng:a.state.lng},id_marker:"I",icon:{url:G.a,anchor:new a.props.google.maps.Point(32,32),scaledSize:new a.props.google.maps.Size(32,51)},name:"\u042d\u0442\u043e \u0432\u044b"}),a.props.marker.map((function(e,t){return o.a.createElement(j.Marker,{onClick:a.onMarkerClick,id_marker:e.id_marker,position:{lat:e.lat,lng:e.lng},name:o.a.createElement("div",null,1==e.verify?o.a.createElement("div",null,e.name," ",o.a.createElement(x.a,null)):o.a.createElement("p",null,e.name)),pretext:e.pretext,text:e.text,text_end:e.text_end,pollQuestions:e.pollQuestions,answer_1:e.answer_1,answer_2:e.answer_2,answer_3:e.answer_3,but:o.a.createElement(f.c,{level:"commerce",onClick:a.submit},"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435")})})),o.a.createElement(q,{marker:a.state.activeMarker,visible:a.state.showingInfoWindow},o.a.createElement(f.e,{align:"center"},o.a.createElement("img",{src:"https://questsinpocket.com/img_vk/"+a.state.selectedPlace.id_marker+".jpg",style:{width:"90%",height:"90%"}}),o.a.createElement("h1",null,a.state.selectedPlace.name),o.a.createElement("p",null,a.state.selectedPlace.pretext),a.props.errorGeo,a.state.selectedPlace.but)))},a.state={errorGeo:a.props.errorGeo,lat:a.props.geoData.lat,lng:a.props.geoData.long,nameButton:"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435",showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(m.a)(t,e),t}(o.a.Component),T=Object(j.GoogleApiWrapper)({apiKey:"AIzaSyCL0U2diIKJtBb5gmgyUsRvpSIIKIfKCv0"})(I),z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{align:"center"},0==this.props.showEnd?null:o.a.createElement("div",null,o.a.createElement("p",null,this.props.selectedPlace.text_end),o.a.createElement(f.c,{size:"xl",level:"commerce",onClick:this.props.theEnd},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c")))}}]),t}(o.a.Component),D=a(62),F=(a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleVote=function(e){var t=a.state.pollAnswers.map((function(t){return t.option===e&&t.votes++,t}));a.props.setShowEnd();var n=JSON.stringify(t);a.props.setPoll(n),a.setState({pollAnswers:t})},a.state={selectedPlace:a.props.selectedPlace,pollAnswers:a.props.Poll,pollQuestion:a.props.selectedPlace.pollQuestions},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(D.a,{question:this.state.pollQuestion,answers:this.state.pollAnswers,onVote:this.handleVote}))}}]),t}(o.a.Component)),A=a(36),W=a.n(A),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(f.e,{align:"center"},o.a.createElement(f.p,{left:o.a.createElement(f.j,{onClick:function(){return e.props.backMap()}},o.a.createElement(W.a,null))},this.props.selectedPlace.name),o.a.createElement(f.b,{src:"https://questsinpocket.com/img_vk/"+this.props.selectedPlace.id_marker+".jpg",size:200}),this.props.selectedPlace.text)}}]),t}(o.a.Component),H=a(38),L=a.n(H),Q=(a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).render=function(e){return o.a.createElement(f.e,null,o.a.createElement("div",null,o.a.createElement(f.g,{vertical:"top"},o.a.createElement(f.u,{theme:"light"},o.a.createElement(f.v,{onClick:function(){return a.setState({activeTab:"questions"})},selected:"questions"===a.state.activeTab},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),o.a.createElement(f.v,{onClick:function(){return a.setState({activeTab:"rr"})},selected:"rr"===a.state.activeTab},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433")))),o.a.createElement("div",{align:"center",style:{paddingTop:32,paddingBottom:32}},"questions"===a.state.activeTab?o.a.createElement(f.l,null,a.props.quest.map((function(e,t){return o.a.createElement(f.d,{key:t,before:o.a.createElement(f.b,{src:e.img,size:72})},"  "+e.name+" ")}))):o.a.createElement("div",null,o.a.createElement(f.l,{style:{paddingBottom:40}},a.props.rr.map((function(e,t){return o.a.createElement(f.d,{key:t,before:t+1,description:o.a.createElement("div",null,o.a.createElement("span",{style:{fontWeight:600,color:"#525453"}},e.ball),o.a.createElement("div",{style:{display:"inlineBlock"}},o.a.createElement(f.b,{src:L.a,size:24}))),indicator:o.a.createElement(f.b,{src:e.img})},e.first_name+" "+e.last_name)}))),o.a.createElement(f.g,{vertical:"bottom"},o.a.createElement(f.d,{style:{background:"#D2F4FF"},before:o.a.createElement("p",null,"~",a.props.place),indicator:o.a.createElement(f.b,{src:a.props.fetchedUser.photo_200}),description:o.a.createElement("div",null,a.props.ball,o.a.createElement(f.b,{src:L.a,size:24}))}," ",a.props.fetchedUser.first_name+" "+a.props.fetchedUser.last_name)))))},a.state={activeTab:"questions"},a}return Object(m.a)(t,e),t}(o.a.Component)),R=(o.a.Component,a(63)),K=a.n(R),V=a(64),J=a.n(V),N=a(65),X=a.n(N),Y=a(66),Z=a.n(Y),$=(a(156),a(24)),ee=a.n($),te=a(33),ae={backgroundImage:"linear-gradient(135deg, #ffb73d, #ffa000)"},ne=new h.VKMiniAppAPI,oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).setErorr=function(e){a.setState({errorGeo:null})},a.onClickMap=function(e){te.get("https://www.questsinpocket.com/vk/index.php?type=get_all_points").then((function(e){a.setState({marker:e.data})})),a.setState({popout:o.a.createElement(f.q,null)}),ne.getGeodata().then((function(e){a.setState({geoData:e}),setTimeout((function(){a.setState({activeStory:"map",popout:null})}),500),console.log(e)}))},a.onClickOther=function(e){a.setState({popout:o.a.createElement(f.q,null)}),te.get("https://www.questsinpocket.com/vk/index.php?type=getPlaceRr&id="+a.state.fetchedUser.id).then((function(e){a.setState({place:e.data})})),te.get("https://www.questsinpocket.com/vk/index.php?type=get_all_rr").then((function(e){a.setState({rr:e.data})})),te.get("https://www.questsinpocket.com/vk/index.php?type=get_all_quest&id_vk="+a.state.fetchedUser.id).then((function(e){a.setState({questList:e.data,activeStory:"other",popout:null})}))},a.updateGeodata=function(e){a.setState({activeStory:"load",popout:o.a.createElement(f.q,null)}),ne.getGeodata().then((function(e){setTimeout((function(){a.setState({geoData:e,activeStory:"map",popout:null})}),1500)}))},a.checkGeo=function(e,t){a.setState({popout:o.a.createElement(f.q,null)}),ne.getGeodata().then((function(e){a.setState({geoData:e})}));var n=a.state.geoData.lat.toFixed(a.num),l=(+e.position.lat).toFixed(a.num),s=a.state.geoData.long.toFixed(a.num),r=(+e.position.lng).toFixed(a.num);n===l&&s===r?te.get("https://www.questsinpocket.com/vk/index.php?type=check_quest&id_vk="+a.state.fetchedUser.id+"&id_marker="+e.id_marker).then((function(t){10==t.data?a.setState({patency:!1}):a.setState({patency:!0}),te.get("https://www.questsinpocket.com/vk/index.php?type=get_poll&id_marker="+e.id_marker).then((function(t){""===t.data?a.setState({snackbar:o.a.createElement(f.r,{onClose:function(){return a.setState({snackbar:null})},action:o.a.createElement(k.a,null),onActionClick:function(){return a.setState({snackbar:null})},before:o.a.createElement(f.b,{size:16,style:ae},o.a.createElement(ee.a,{fill:"#fff",width:14,height:14}))},"+50"),Poll:[{option:e.answer_1,votes:0},{option:e.answer_2,votes:0},{option:e.answer_3,votes:0}],ball:a.state.ball+50}):1==a.state.patency?a.setState({snackbar:o.a.createElement(f.r,{onClose:function(){return a.setState({snackbar:null})},action:o.a.createElement(k.a,null),onActionClick:function(){return a.setState({snackbar:null})},before:o.a.createElement(f.b,{size:16,style:ae},o.a.createElement(ee.a,{fill:"#fff",width:14,height:14}))},"+10"),Poll:t.data,ball:a.state.ball+10}):a.setState({Poll:t.data})})),setTimeout((function(){a.setState({activePanelMap:"quest",selectedPlace:e,popout:null})}),550)})):a.setState({errorGeo:o.a.createElement("p",{style:{color:"red"}},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"),popout:null})},a.setPoll=function(e,t){a.setState({PollEnd:e})},a.setShowEnd=function(e){a.setState({showEnd:!0})},a.competionQuest=function(e){1==a.state.patency&&(te.post("https://www.questsinpocket.com/vk/index.php?type=set_poll&id_marker="+a.state.selectedPlace.id_marker+"&poll="+a.state.PollEnd),te.post("https://www.questsinpocket.com/vk/index.php?type=set&id_vk="+a.state.fetchedUser.id+"&ball="+a.state.ball),te.post("https://www.questsinpocket.com/vk/index.php?type=set_quest&id_vk="+a.state.fetchedUser.id+"&id_marker="+a.state.selectedPlace.id_marker)),a.setState({modal:o.a.createElement(C,{selectedPlace:a.state.selectedPlace,sendHistory:a.sendHistory,cancelHistory:a.cancelHistory})}),a.setState({activePanelMap:"map"})},a.cancelHistory=function(e){a.setState({modal:null})},a.sendHistory=function(e){a.setState({modal:null})},a.backMap=function(e){a.setState({activePanelMap:"map"})},a.closePopout=function(e){a.setState({popout:null})},a.missTutorial=function(e){a.setState({tabbar:!0,activeStory:"profile"})},a.onStoryChange=function(e){a.setState({activeStory:e.currentTarget.dataset.story})},a.onToChange=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.num=0,a.state={window:null,slideIndex:0,activeStory:"load",activePanelLoad:"load",activePanelMap:"map",activeTab:"questions",header:!0,snackbar:null,tabbar:!1,popout:null,modal:null,selectedPlace:null,fetchedUser:null,id:null,ball:0,tooltip:!0,patency:!0,rr:null,place:null,quest:null,a:null,questList:null,access_token:null,geoData:null,marker:[],errorGeo:null,Poll:null,PollEnd:null,showEnd:!1},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(e){var t=this;ne.initApp(),this.setState({popout:o.a.createElement(f.q,null)}),ne.getUserInfo().then((function(e){t.setState({fetchedUser:e,id:e.id}),te.post("https://www.questsinpocket.com/vk/index.php?type=create&id_vk="+e.id+"&ball=0&first_name="+e.first_name+"&last_name="+e.last_name+"&img="+e.photo_200).then((function(a){2===a.data?te.post("https://www.questsinpocket.com/vk/index.php?type=get&id_vk="+e.id).then((function(a){t.setState({ball:a.data}),te.post("https://www.questsinpocket.com/vk/index.php?type=get_a&id_vk="+e.id).then((function(e){t.setState({popout:null,activePanelLoad:"tutorial",a:e.data})}))})):1===a.data&&te.post("https://www.questsinpocket.com/vk/index.php?type=set_a&id_vk="+e.id+"&a="+a.data).then((function(a){te.post("https://www.questsinpocket.com/vk/index.php?type=get_a&id_vk="+e.id).then((function(e){t.setState({popout:null,a:e.data,activeStory:"profile",snackbar:o.a.createElement(f.r,{onClose:function(){return t.setState({snackbar:null})},before:o.a.createElement(f.b,{size:16,style:ae},o.a.createElement(ee.a,{fill:"#fff",width:14,height:14}))},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435")})}))}))}))}))}},{key:"getPoll",value:function(e){var t=this;te.get("https://www.questsinpocket.com/vk/index.php?type=get&vk_id=0&id="+this.state.selectedPlace.id_marker).then((function(e){t.setState({Poll:e.data})}))}},{key:"openDefault",value:function(e){this.setState({popout:o.a.createElement(f.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"},{title:"\u041e\u043a",autoclose:!0}],onClose:this.closePopout},o.a.createElement("p",null,"\u0414\u043b\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"))})}},{key:"render",value:function(){var e=this;return o.a.createElement(f.f,{activeStory:this.state.activeStory,tabbar:!0===this.state.tabbar?o.a.createElement(f.s,null,o.a.createElement(f.t,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},o.a.createElement(X.a,null)),o.a.createElement(f.t,{onClick:this.onClickMap,selected:"map"===this.state.activeStory,"data-story":"map"},o.a.createElement(J.a,null)),o.a.createElement(f.t,{onClick:this.onClickOther,selected:"other"===this.state.activeStory,"data-story":"other"},o.a.createElement(K.a,null))):null},o.a.createElement(f.x,{id:"profile",popout:this.state.popout,activePanel:"profile"},o.a.createElement(f.o,{id:"profile"},o.a.createElement(w,{fetchedUser:this.state.fetchedUser,ball:this.state.ball,a:this.state.a}),this.state.snackbar)),o.a.createElement(f.x,{id:"load",popout:this.state.popout,header:!1,activePanel:this.state.activePanelLoad},o.a.createElement(f.o,{id:"load"},this.state.snackbar),o.a.createElement(f.o,{id:"tutorial"},o.a.createElement(f.h,{bullets:"dark",slideWidth:"100%",align:"center",style:{height:"100vh",marginBottom:15},slideIndex:this.state.slideIndex,onChange:function(t){return e.setState({slideIndex:t})}},o.a.createElement("div",{style:{backgroundColor:"var(--destructive)",position:"relative"}},o.a.createElement(f.c,{style:{position:"absolute",bottom:5,right:5},level:"commerce",onClick:function(){e.missTutorial()}},"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c")),o.a.createElement("div",{style:{backgroundColor:"var(--button_commerce_background)"}}),o.a.createElement("div",{style:{backgroundColor:"var(--accent)",position:"relative"}},o.a.createElement(f.c,{style:{position:"absolute",bottom:5,right:5},level:"commerce",onClick:function(){e.missTutorial()}},"\u041e\u043a"))))),o.a.createElement(f.x,{id:"map",header:!0,modal:this.state.modal,popout:this.state.popout,activePanel:this.state.activePanelMap},o.a.createElement(f.o,{id:"map"},o.a.createElement(f.p,{left:o.a.createElement(f.w,{text:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",isShown:this.state.tooltip,onClose:function(){return e.setState({tooltip:!1})},offsetX:10},o.a.createElement(f.j,{onClick:function(){return e.updateGeodata()}},o.a.createElement(Z.a,null))),addon:o.a.createElement(f.j,{onClick:function(){return e.updateGeodata()}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c")},"\u041a\u0430\u0440\u0442\u0430"),o.a.createElement(T,{geoData:this.state.geoData,updateGeodata:this.updateGeodata,errorGeo:this.state.errorGeo,setErorr:this.setErorr,checkGeo:this.checkGeo,marker:this.state.marker})),o.a.createElement(f.o,{id:"quest"},o.a.createElement(B,{selectedPlace:this.state.selectedPlace,backMap:this.backMap}),o.a.createElement(F,{selectedPlace:this.state.selectedPlace,Poll:this.state.Poll,setPoll:this.setPoll,setShowEnd:this.setShowEnd}),o.a.createElement(z,{selectedPlace:this.state.selectedPlace,theEnd:this.competionQuest,showEnd:this.state.showEnd}),this.state.snackbar)),o.a.createElement(f.x,{id:"other",popout:this.state.popout,activePanel:"other"},o.a.createElement(f.o,{id:"other"},o.a.createElement(f.p,null,"\u0420\u0430\u0437\u043d\u043e\u0435"),o.a.createElement(Q,{rr:this.state.rr,quest:this.state.questList,fetchedUser:this.state.fetchedUser,ball:this.state.ball,place:this.state.place}),this.state.snackbar)))}}]),t}(o.a.Component);i.a.send("VKWebAppInit"),s.a.render(o.a.createElement(oe,null),document.getElementById("root"))},38:function(e,t,a){e.exports=a.p+"static/media/l.5aef6ad1.png"},58:function(e,t,a){e.exports=a.p+"static/media/achiev-1.05917b64.png"},61:function(e,t,a){e.exports=a.p+"static/media/map.e0ba97a3.png"}},[[110,1,2]]]);
//# sourceMappingURL=main.6ec28b69.chunk.js.map