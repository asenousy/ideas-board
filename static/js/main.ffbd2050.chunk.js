(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={wrapper:"IdeaForm_wrapper__t_n7m",label:"IdeaForm_label__1VCQf",input:"IdeaForm_input__its2D",textArea:"IdeaForm_textArea__2R7o8",button:"IdeaForm_button__2ZS3S"}},16:function(e,t,a){e.exports={wrapper:"Idea_wrapper__3RDpu",date:"Idea_date__2_krq",text:"Idea_text__3-jKi"}},17:function(e,t,a){e.exports={wrapper:"Header_wrapper__3j_eX",label:"Header_label__39ZsH",select:"Header_select__QlLSm",title:"Header_title__32aus"}},22:function(e,t,a){e.exports={wrapper:"Tile_wrapper__2l7rt",edit:"Tile_edit__ye6av",delete:"Tile_delete__23Mui"}},27:function(e,t,a){e.exports={wrapper:"App_wrapper__17lsC",tiles:"App_tiles__2J1FH"}},29:function(e,t,a){e.exports={wrapper:"AddTile_wrapper__1nlSQ",add:"AddTile_add__3Z1-9"}},37:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),c=a(6),o=a(13),d=a(20),s=a(2),u=a(35),p=a(26),b=Object(o.b)({initialState:[],reducers:{addIdea:function(e){return[].concat(Object(u.a)(e),[{id:Math.random().toString(),title:"",description:"",date:Date.now(),new:!0}])},updateIdea:function(e,t){var a=t.payload;return e.map(function(e){return e.id===a.id?{id:e.id,title:Object(p.sanitize)(a.title),description:Object(p.sanitize)(a.description),date:Date.now(),new:!1}:e})},deleteIdea:function(e,t){var a=t.payload;return e.filter(function(e){return e.id!==a.id})}}}),m={date:"Date",alphabet:"Alphabet"},h=Object(o.b)({initialState:m.date,reducers:{setSortBy:function(e,t){return t.payload}}}),f=Object(s.combineReducers)({ideas:b.reducer,sortBy:h.reducer}),_=Object(d.a)({},b.actions,h.actions),O=a(3),y=a(4),j=a(8),v=a(5),g=a(7),E=a(27),w=a.n(E),I=a(14),S=a(29),N=a.n(S),x=a(15),C=r.a.memo(function(e){return r.a.createElement("div",{className:N.a.wrapper,onClick:e.onClick,tabIndex:"0",role:"button","aria-label":"new"},r.a.createElement(I.a,{className:N.a.add,icon:x.b,size:"2x"}))}),k=a(11),H=a(22),B=a.n(H),M=a(16),A=a.n(M),D=r.a.memo(function(e){var t=e.title,a=e.description,n=e.date;return r.a.createElement("div",{className:A.a.wrapper},r.a.createElement("h3",{className:A.a.text},t||"untitled"),r.a.createElement("p",{className:A.a.text},a),r.a.createElement("div",{className:A.a.date},new Date(n).toTimeString().split(" ").shift()))}),T=a(21),K=a(12),F=a.n(K),z=140,J=1e3,L=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(j.a)(this,Object(v.a)(t).call(this,e))).changeHandler=function(e){a.setState(Object(T.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault(),a.props.onSubmit&&a.props.onSubmit(a.state)},a.state=Object(d.a)({},e.idea),a.titleInput=r.a.createRef(),a.focusOnTarget=a.focusOnTarget.bind(Object(k.a)(a)),a}return Object(g.a)(t,e),Object(y.a)(t,[{key:"focusOnTarget",value:function(){this.titleInput.current.focus()}},{key:"componentDidMount",value:function(){this.focusOnTarget()}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description;return r.a.createElement("form",{className:F.a.wrapper,onSubmit:this.submitHandler},r.a.createElement("label",{className:F.a.label},"Title:",r.a.createElement("input",{className:F.a.input,placeholder:" add title",name:"title",value:t,onChange:this.changeHandler,ref:this.titleInput})),r.a.createElement("label",{className:F.a.label},"Description: ",r.a.createElement("br",null),r.a.createElement("textarea",{className:F.a.textArea,placeholder:" add description",name:"description",rows:5,cols:19,value:a,onChange:this.changeHandler,maxLength:z})),r.a.createElement("button",{className:F.a.button,type:"submit"},"Save"))}}]),t}(n.PureComponent),P=_.deleteIdea,R=_.updateIdea,Q=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(j.a)(this,Object(v.a)(t).call(this,e))).handleKey=function(e,t){"Enter"===t.key&&e()},a.toggleEditMode=function(){a.setState(function(e){return{editMode:!e.editMode}})},a.changeHandler=function(e){a.toggleEditMode(),a.props.updateIdea&&a.props.updateIdea(e)},a.deleteHandler=function(){a.props.deleteIdea&&a.props.deleteIdea(a.props.idea)},a.state={editMode:e.idea.new},a.handleEditKey=a.handleKey.bind(Object(k.a)(a),a.toggleEditMode),a.handleDeleteKey=a.handleKey.bind(Object(k.a)(a),a.deleteHandler),a}return Object(g.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.idea;return r.a.createElement("div",{className:B.a.wrapper,tabIndex:"0"},this.state.editMode?r.a.createElement(L,{idea:e,onSubmit:this.changeHandler}):r.a.createElement(D,{title:e.title,description:e.description,date:e.date}),!this.state.editMode&&r.a.createElement(I.a,{className:B.a.edit,icon:x.a,size:"lg",onClick:this.toggleEditMode,onKeyUp:this.handleEditKey,tabIndex:"0",role:"button","aria-label":"edit"}),r.a.createElement(I.a,{className:B.a.delete,icon:x.c,size:"lg",onClick:this.deleteHandler,onKeyUp:this.handleDeleteKey,tabIndex:"0",role:"button","aria-label":"delete"}))}}]),t}(n.PureComponent),Z=Object(c.b)(null,{deleteIdea:P,updateIdea:R})(Q),U=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(j.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).compare=function(e,t){if(a.props.sortBy===m.date)return t.date-e.date;var n=e.title.toLowerCase(),r=t.title.toLowerCase();return!n||n<r?-1:n>r?1:0},a}return Object(g.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return this.props.ideas.slice().sort(this.compare).map(function(e){return r.a.createElement(Z,{key:e.id,idea:e})})}}]),t}(n.PureComponent),q=Object(c.b)(function(e){return{ideas:e.ideas,sortBy:e.sortBy}})(U),V=a(17),X=a.n(V),G=_.setSortBy,W=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(j.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.setSortBy&&a.props.setSortBy(e.target.value)},a}return Object(g.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.sortBy;return r.a.createElement("div",{className:X.a.wrapper},r.a.createElement("h1",{className:X.a.title},"Ideas Board:"),r.a.createElement("label",{className:X.a.label},"Sort by:",r.a.createElement("select",{className:X.a.select,value:e,onChange:this.handleChange},r.a.createElement("option",{value:m.date},m.date),r.a.createElement("option",{value:m.alphabet},m.alphabet))))}}]),t}(n.PureComponent),Y=Object(c.b)(function(e){return{sortBy:e.sortBy}},{setSortBy:G})(W),$=_.addIdea,ee=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(j.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).addhandler=function(){a.props.addIdea()},a}return Object(g.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:w.a.wrapper},r.a.createElement(Y,null),r.a.createElement("div",{className:w.a.tiles},r.a.createElement(C,{onClick:this.addhandler}),r.a.createElement(q,null)))}}]),t}(n.Component),te=Object(c.b)(null,{addIdea:$})(ee),ae=(a(48),a(34)),ne=a.n(ae),re=Object(o.a)({reducer:f,preloadedState:function(){try{var e=localStorage.getItem("ideas");if(null===e)return;return JSON.parse(e)}catch(t){return}}()});re.subscribe(ne()(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("ideas",t)}catch(a){console.error("failed to store state: ",a.message)}}({ideas:re.getState().ideas})},J)),l.a.render(r.a.createElement(c.a,{store:re},r.a.createElement(te,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ffbd2050.chunk.js.map