(this["webpackJsonpmovie-add"]=this["webpackJsonpmovie-add"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),i=a.n(s),r=a(10),c=a.n(r),o=(a(17),a(4)),h=a(5),l=a(7),j=a(6),u=(a(18),a(9)),d=a.n(u),p=a(3),b=a(11),v=a(2),O=(a(20),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={script:"movie",name:"",rating:"0",platform:"0",password:""},n.scriptChange=n.scriptChange.bind(Object(v.a)(n)),n.movieNameChange=n.movieNameChange.bind(Object(v.a)(n)),n.ratingChange=n.ratingChange.bind(Object(v.a)(n)),n.platformChange=n.platformChange.bind(Object(v.a)(n)),n.passwordChange=n.passwordChange.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"scriptChange",value:function(e){this.setState({script:e.target.value})}},{key:"movieNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"ratingChange",value:function(e){this.setState({rating:e.target.value})}},{key:"platformChange",value:function(e){this.setState({platform:e.target.value})}},{key:"passwordChange",value:function(e){this.setState({password:e.target.value})}},{key:"sendRequest",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,n,s,i,r,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.script,a=this.state.name,n=this.state.rating,s="movie"===this.state.script||"yesterday"===this.state.script?this.state.platform:"1",i=this.state.password,a&&"0"!==n&&"0"!==s){e.next=8;break}return alert("Movie Name, Rating & Watched Using needs to be filled in"),e.abrupt("return",0);case 8:if(!this.state.requestSent){e.next=11;break}return alert("Request has been sent, don't try twice..."),e.abrupt("return",0);case 11:return this.setState(Object(p.a)(Object(p.a)({},this.state),{},{requestSent:!0})),alert("Sending..."),r="https://raj.bariah.com:2010/bash/movie-add?name="+a+"&rating="+n+"&platform="+s+"&password="+i+"&script="+t,e.next=16,fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}});case 16:return c=e.sent,e.next=19,c.json();case 19:o=e.sent,alert(o.message),o.success||this.setState(Object(p.a)(Object(p.a)({},this.state),{},{requestSent:!1}));case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:[Object(n.jsx)("a",{href:"https://raj.bar/",children:"raj.Bar"})," / ",Object(n.jsx)("a",{href:"https://raj.bar/movies/",children:"Movie-Add"})]}),Object(n.jsx)("h3",{className:"miniHeaders",children:"Script:"}),Object(n.jsxs)("select",{className:"inputs",value:this.state.script,onChange:this.scriptChange,children:[Object(n.jsx)("option",{value:"movie",children:"Movie"}),Object(n.jsx)("option",{value:"yesterday",children:"Yesterday"}),Object(n.jsx)("option",{value:"oldMovie",children:"Old Movie"}),Object(n.jsx)("option",{value:"tv",children:"TV"})]}),Object(n.jsxs)("h3",{className:"miniHeaders",children:["tv"===this.state.script?"TV show":"Movie"," Name:"]}),Object(n.jsx)("input",{className:"inputs",type:"text",name:"movie-name",onChange:this.movieNameChange}),Object(n.jsx)("h3",{children:"Rating:"}),Object(n.jsxs)("select",{className:"inputs",value:this.state.rating,onChange:this.ratingChange,children:[Object(n.jsx)("option",{value:"0",children:"select"}),Object(n.jsx)("option",{value:"6",children:"God tier"}),Object(n.jsx)("option",{value:"5",children:"Loved"}),Object(n.jsx)("option",{value:"4",children:"Liked"}),Object(n.jsx)("option",{value:"3",children:"Average"}),Object(n.jsx)("option",{value:"2",children:"Disliked"}),Object(n.jsx)("option",{value:"1",children:"Hated"})]}),"movie"===this.state.script||"yesterday"===this.state.script?Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Watched using:"}),Object(n.jsxs)("select",{className:"inputs",value:this.state.platform,onChange:this.platformChange,children:[Object(n.jsx)("option",{value:"0",children:"select"}),Object(n.jsx)("option",{value:"n",children:"Netflix"}),Object(n.jsx)("option",{value:"p",children:"Prime"}),Object(n.jsx)("option",{value:"c",children:"Cinema"}),Object(n.jsx)("option",{value:"t",children:"Television"}),Object(n.jsx)("option",{value:"r",children:"Rakuten"}),Object(n.jsx)("option",{value:"d",children:"Disney+"}),Object(n.jsx)("option",{value:"s",children:"NowTV"})]})]}):Object(n.jsx)("div",{}),Object(n.jsx)("h4",{children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",onChange:this.passwordChange}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:function(){return e.sendRequest()},children:"Submit"})]})}}]),a}(s.Component)),m=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(O,{})})}}]),a}(s.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),g()}},[[21,1,2]]]);
//# sourceMappingURL=main.fa1f42ed.chunk.js.map