(this.webpackJsonpviperfansite=this.webpackJsonpviperfansite||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){window.$=window.jQuery=a(4)},68:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(31),s=a.n(c),n=a(6),i=a(7),o=a(9),l=a(8),j=a(15),d=a(3),h=(a(37),a(38),a(4)),b=a.n(h),u=a(0),O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleShowImageAndButton=function(){b()("#tavernButton").fadeOut(100),b()("#staffImage").fadeOut(100),b()("#hostText").fadeOut(100),b()("#securityText").fadeOut(100),setTimeout((function(){b()("#staffButton").fadeIn(),b()("#tavernImage").fadeIn()}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"mainMenu",style:{backgroundImage:"linear-gradient(to bottom, transparent, rgb(0, 0, 0)), url(".concat("/viperfansite/snake.menu.jpg",")"),backgroundSize:"100% auto"},children:[Object(u.jsxs)(j.b,{className:"navSpots",to:"/yourBartender",style:{textDecoration:"none"},children:[Object(u.jsx)("img",{src:"/viperfansite/flame.image.png",id:"leftFlame",alt:"flame1"}),Object(u.jsxs)("button",{className:"navButtons",children:["Your ",Object(u.jsx)("br",{})," Bartender"]})]}),Object(u.jsxs)(j.b,{className:"navSpots",to:"/socialMedia",style:{textDecoration:"none"},children:[Object(u.jsx)("img",{src:"/viperfansite/flame.image.png",id:"midLeftFlame",alt:"flame2"}),Object(u.jsxs)("button",{className:"navButtons",children:["Social ",Object(u.jsx)("br",{})," Media"]})]}),Object(u.jsxs)(j.b,{className:"navSpots",to:"/scalePartners",style:{textDecoration:"none"},children:[Object(u.jsx)("img",{src:"/viperfansite/flame.image.png",id:"midRightFlame",alt:"flame3"}),Object(u.jsxs)("button",{className:"navButtons",children:["Scale ",Object(u.jsx)("br",{})," Partners"]})]}),Object(u.jsxs)(j.b,{className:"navSpots",to:"/",style:{textDecoration:"none"},children:[Object(u.jsx)("img",{src:"/viperfansite/flame.image.png",id:"rightFlame",alt:"flame4"}),Object(u.jsxs)("button",{className:"navButtons",onClick:this.handleShowImageAndButton,children:["Back ",Object(u.jsx)("br",{})," Home"]})]})]})}}]),a}(r.Component),m=(a(45),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"logo",children:Object(u.jsx)("img",{alt:"logo",src:"/viperfansite/viper.icon.png",id:"logoImage"})})}}]),a}(r.Component)),v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleHideImageAndButton=function(){b()("#staffButton").fadeOut(2e3),b()("#tavernImage").fadeOut(2e3),setTimeout((function(){b()("#tavernButton").fadeIn(2e3),b()("#staffImage").fadeIn(2e3),b()("#hostText").fadeIn(2e3),b()("#securityText").fadeIn(2e3)}),2e3)},e.handleShowImageAndButton=function(){b()("#tavernButton").fadeOut(2e3),b()("#staffImage").fadeOut(2e3),b()("#hostText").fadeOut(2e3),b()("#securityText").fadeOut(2e3),setTimeout((function(){b()("#staffButton").fadeIn(2e3),b()("#tavernImage").fadeIn(2e3)}),2e3)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"landingPage",children:[Object(u.jsx)(O,{}),Object(u.jsx)("h1",{id:"welcomeMessage",children:"Oh hello there, adventurer! You've found yourself at the Scale. Come on in and have a seat. If you've got the coin, we've got the ale!"}),Object(u.jsxs)("div",{id:"tavernImageAndButton",children:[Object(u.jsx)("img",{alt:"tavern",id:"tavernImage",src:"/viperfansite/tavern.image.png"}),Object(u.jsx)("button",{id:"staffButton",onClick:this.handleHideImageAndButton,children:"Staff"})]}),Object(u.jsxs)("div",{id:"staffImageAndButton",children:[Object(u.jsx)("img",{alt:"staff",id:"staffImage",src:"/viperfansite/rex.and.chuck.image.png"}),Object(u.jsx)("button",{id:"tavernButton",onClick:this.handleShowImageAndButton,children:"The Scale"}),Object(u.jsxs)("p",{id:"hostText",children:["Your Host: ",Object(u.jsx)("br",{})," Chuck Beary"]}),Object(u.jsxs)("p",{id:"securityText",children:["Your Security: ",Object(u.jsx)("br",{}),"rex"]})]}),Object(u.jsx)("p",{id:"disclaimerText",children:"***All images used are either accredited, belong to their respective owners on twitch, or are free for personal use with no restrictions***"}),Object(u.jsx)(m,{})]})}}]),a}(r.Component),f=a(2),p=(a(46),a(13)),x=a.n(p),g=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={otter:{userAvatar:""},drsickmaster:{userAvatar:""},jg:{userAvatar:""},mazziemay:{userAvatar:""},lonelysharkmelb:{userAvatar:""},suniiva:{userAvatar:""},eeaden:{userAvatar:""},battlestation1:{userAvatar:""},unclegeeb:{userAvatar:""}},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://decapi.me/twitch/avatar/ottertot141").then((function(t){e.setState(Object(f.a)(Object(f.a)({},e.state),{},{otter:Object(f.a)(Object(f.a)({},e.state.otter),{},{userAvatar:t.data})}))})),x.a.get("https://decapi.me/twitch/avatar/drsickmaster").then((function(t){e.setState(Object(f.a)(Object(f.a)({},e.state),{},{drsickmaster:Object(f.a)(Object(f.a)({},e.state.otter),{},{userAvatar:t.data})}))})),x.a.get("https://decapi.me/twitch/avatar/jg_darhk").then((function(t){e.setState(Object(f.a)(Object(f.a)({},e.state),{},{jg:Object(f.a)(Object(f.a)({},e.state.otter),{},{userAvatar:t.data})}))})),x.a.get("https://decapi.me/twitch/avatar/mazziemay").then((function(t){e.setState(Object(f.a)(Object(f.a)({},e.state),{},{mazziemay:Object(f.a)(Object(f.a)({},e.state.otter),{},{userAvatar:t.data})}))})),x.a.get("https://decapi.me/twitch/avatar/lonelysharkmelb").then((function(t){e.setState(Object(f.a)(Object(f.a)({},e.state),{},{lonelysharkmelb:Object(f.a)(Object(f.a)({},e.state.otter),{},{userAvatar:t.data})}))})),x.a.get("https://decapi.me/twitch/avatar/suniiva").then((function(t){e.setState(Object(f.a)(Object(f.a)({},e.state),{},{suniiva:Object(f.a)(Object(f.a)({},e.state.otter),{},{userAvatar:t.data})}))})),x.a.get("https://decapi.me/twitch/avatar/eeaden").then((function(t){e.setState(Object(f.a)(Object(f.a)({},e.state),{},{eeaden:Object(f.a)(Object(f.a)({},e.state.otter),{},{userAvatar:t.data})}))})),x.a.get("https://decapi.me/twitch/avatar/battlestation1").then((function(t){e.setState(Object(f.a)(Object(f.a)({},e.state),{},{battlestation1:Object(f.a)(Object(f.a)({},e.state.otter),{},{userAvatar:t.data})}))})),x.a.get("https://decapi.me/twitch/avatar/unclegeeb").then((function(t){e.setState(Object(f.a)(Object(f.a)({},e.state),{},{unclegeeb:Object(f.a)(Object(f.a)({},e.state.otter),{},{userAvatar:t.data})}))}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"streamerFriends",children:[Object(u.jsx)(O,{}),Object(u.jsxs)("div",{id:"streamerLinks",children:[Object(u.jsx)("h1",{id:"streamerListTitle",children:"You can also see these great adventurers down below!"}),Object(u.jsxs)("div",{id:"streamerList",children:[Object(u.jsxs)("div",{className:"friendRows",children:[Object(u.jsx)("img",{alt:"otter",className:"avatarImages",src:this.state.otter.userAvatar}),Object(u.jsxs)("p",{className:"directionText",children:["You can watch Otter"," ",Object(u.jsx)("a",{href:"https://www.twitch.com/ottertot141",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"Here"})]})]}),Object(u.jsxs)("div",{className:"friendRows",children:[Object(u.jsx)("img",{alt:"drsickmaster",className:"avatarImages",src:this.state.drsickmaster.userAvatar}),Object(u.jsxs)("p",{className:"directionText",children:["You can watch DrSickMaster"," ",Object(u.jsx)("a",{href:"https://www.twitch.com/drsickmaster",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"Here"})]})]}),Object(u.jsxs)("div",{className:"friendRows",children:[Object(u.jsx)("img",{alt:"jg",className:"avatarImages",src:this.state.jg.userAvatar}),Object(u.jsxs)("p",{className:"directionText",children:["You can watch JG_Darhk"," ",Object(u.jsx)("a",{href:"https://www.twitch.com/jg_darhk",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"Here"})]})]}),Object(u.jsxs)("div",{className:"friendRows",children:[Object(u.jsx)("img",{alt:"mazziemay",className:"avatarImages",src:this.state.mazziemay.userAvatar}),Object(u.jsxs)("p",{className:"directionText",children:["You can watch MazzieMay"," ",Object(u.jsx)("a",{href:"https://www.twitch.com/mazziemay",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"Here"})]})]}),Object(u.jsxs)("div",{className:"friendRows",children:[Object(u.jsx)("img",{alt:"lonelysharkmelb",className:"avatarImages",src:this.state.lonelysharkmelb.userAvatar}),Object(u.jsxs)("p",{className:"directionText",children:["You can watch LonelySharkMelb"," ",Object(u.jsx)("a",{href:"https://www.twitch.com/lonelysharkmelb",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"Here"})]})]}),Object(u.jsxs)("div",{className:"friendRows",children:[Object(u.jsx)("img",{alt:"suniiva",className:"avatarImages",src:this.state.suniiva.userAvatar}),Object(u.jsxs)("p",{className:"directionText",children:["You can watch Suniiva"," ",Object(u.jsx)("a",{href:"https://www.twitch.com/suniiva",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"Here"})]})]}),Object(u.jsxs)("div",{className:"friendRows",children:[Object(u.jsx)("img",{alt:"eeaden",className:"avatarImages",src:this.state.eeaden.userAvatar}),Object(u.jsxs)("p",{className:"directionText",children:["You can watch Eeaden"," ",Object(u.jsx)("a",{href:"https://www.twitch.com/Eeaden",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"Here"})]})]}),Object(u.jsxs)("div",{className:"friendRows",children:[Object(u.jsx)("img",{alt:"battlestation1",className:"avatarImages",src:this.state.battlestation1.userAvatar}),Object(u.jsxs)("p",{className:"directionText",children:["You can watch BattleStation1"," ",Object(u.jsx)("a",{href:"https://www.twitch.com/BattleStation1",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"Here"})]})]}),Object(u.jsxs)("div",{className:"friendRows",children:[Object(u.jsx)("img",{alt:"unclegeeb",className:"avatarImages",src:this.state.unclegeeb.userAvatar}),Object(u.jsxs)("p",{className:"directionText",children:["You can watch UncleGeeb"," ",Object(u.jsx)("a",{href:"https://www.twitch.com/unclegeeb",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"Here"})]})]})]})]}),Object(u.jsx)(m,{})]})}}]),a}(r.Component),w=(a(65),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={viperTwitchIcon:""},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://decapi.me/twitch/avatar/vinyl_viper").then((function(t){e.setState({viperTwitchIcon:t.data})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"socialMedia",children:[Object(u.jsx)(O,{}),Object(u.jsxs)("div",{id:"twitchSpot",children:[Object(u.jsx)("img",{alt:"twitchAvatar",id:"twitchPicture",src:this.state.viperTwitchIcon}),Object(u.jsxs)("p",{children:["Find Viper on ",Object(u.jsx)("a",{href:"https://www.twitch.com/vinyl_viper",rel:"noreferrer",target:"_blank",style:{color:"white"},children:"Twitch"})]})]}),Object(u.jsxs)("div",{id:"twitterSpot",children:[Object(u.jsx)("img",{alt:"twitterAvatar",id:"twitterPicture",src:"/viperfansite/viperTwitterIcon.png"}),Object(u.jsxs)("p",{children:["Find Viper on ",Object(u.jsx)("a",{href:"https://twitter.com/vinylviper93?lang=en",target:"_blank",rel:"noreferrer",style:{color:"white"},children:"Twitter"})]})]}),Object(u.jsxs)("div",{id:"instaSpot",children:[Object(u.jsx)("img",{alt:"instaAvatar",id:"instaPic",src:"/viperfansite/viper.insta.png"}),Object(u.jsxs)("p",{children:["Find Viper on ",Object(u.jsx)("a",{href:"https://www.instagram.com/vinyl_viper/",target:"_blank",rel:"noreferrer",style:{color:"white"},children:"Instagram"})]})]}),Object(u.jsx)(m,{})]})}}]),a}(r.Component)),y=(a(66),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"yourBartender",children:[Object(u.jsx)(O,{}),Object(u.jsx)("h1",{id:"viperGreeting",children:"\"Welcome to the Scale, Deep in the Viper Pit. My name is Viper, I'll be your bartender this evenin'! How ya doing darlin'?\""}),Object(u.jsx)("img",{id:"viperPic",alt:"viperPicture",src:"/viperfansite/viper.image.png"}),Object(u.jsx)(m,{})]})}}]),a}(r.Component)),k=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)(j.a,{children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/",exact:!0,component:v}),Object(u.jsx)(d.a,{path:"/scalePartners",exact:!0,component:g}),Object(u.jsx)(d.a,{path:"/socialMedia",exact:!0,component:w}),Object(u.jsx)(d.a,{path:"/yourBartender",exact:!0,component:y})]})})}}]),a}(r.Component),I=(a(67),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"app",children:Object(u.jsx)(k,{})})}}]),a}(r.Component));s.a.render(Object(u.jsx)(j.a,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f9bc3783.chunk.js.map