(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,a){e.exports={gradeThumb:"Statistics_gradeThumb__2dFOW",grades:"Statistics_grades__3WdcW",gradeDescription:"Statistics_gradeDescription__2Ympv"}},,,function(e,t,a){e.exports={btnThumb:"FeedbackOptions_btnThumb__A2C1T",btn:"FeedbackOptions_btn__y_hFF"}},function(e,t,a){e.exports={headline:"Section_headline__1z-XP",section:"Section_section__ETgjL"}},,,,,function(e,t,a){e.exports={headline:"Notification_headline__249QM"}},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(6),r=a.n(c),i=(a(17),a(7)),d=a(8),o=a(9),l=a(12),b=a(11),j=(a(18),a(4)),h=a.n(j),u=a(0);var p=function(e){var t=e.options,a=e.click;return Object(u.jsx)("div",{className:h.a.btnThumb,children:t.map((function(e,t){return Object(u.jsx)("button",{className:h.a.btn,type:"button",name:e,onClick:a,children:e},t)}))})},m=a(1),O=a.n(m);function g(e){var t=e.good,a=e.neutral,s=e.bad,n=e.total,c=e.percentsApproving;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:O.a.gradeThumb,children:[Object(u.jsx)("p",{className:O.a.gradeDescription,children:"Great!"}),Object(u.jsx)("p",{className:O.a.grades,children:t})]}),Object(u.jsxs)("div",{className:O.a.gradeThumb,children:[Object(u.jsx)("p",{className:O.a.gradeDescription,children:"Meh..."}),Object(u.jsx)("p",{className:O.a.grades,children:a})]}),Object(u.jsxs)("div",{className:O.a.gradeThumb,children:[Object(u.jsx)("p",{className:O.a.gradeDescription,children:"Bad :("}),Object(u.jsx)("p",{className:O.a.grades,children:s})]}),Object(u.jsxs)("div",{className:O.a.gradeThumb,children:[Object(u.jsx)("p",{className:O.a.gradeDescription,children:"Reviews"}),Object(u.jsx)("p",{className:O.a.grades,children:n})]}),Object(u.jsxs)("div",{className:O.a.gradeThumb,children:[Object(u.jsx)("p",{className:O.a.gradeDescription,children:"Reviwers approved"}),Object(u.jsxs)("p",{className:O.a.grades,children:[c,"%"]})]})]})}var x=a(5),v=a.n(x);function _(e){var t=e.title,a=e.children;return Object(u.jsxs)("section",{className:v.a.section,children:[Object(u.jsx)("h2",{className:v.a.headline,children:t}),a]})}var f=a(10),N=a.n(f);function k(e){var t=e.message;return Object(u.jsx)("h2",{className:N.a.headline,children:t})}var T=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.btnHandler=function(t){t.preventDefault();var a=t.target.name;e.setState((function(e){return Object(i.a)({},a,e[a]+1)}))},e.totalFeedbacks=function(){var t=e.state;return t.good+t.neutral+t.bad},e.percents=function(){var t=e.state.good/e.totalFeedbacks()*100;return Math.round(t)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(_,{title:"Give us your feedback",children:Object(u.jsx)(p,{options:Object.keys(this.state),click:this.btnHandler})}),this.totalFeedbacks()>0?Object(u.jsx)(_,{title:"Our Statistics",children:Object(u.jsx)(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.totalFeedbacks(),percentsApproving:this.percents()})}):Object(u.jsx)(k,{message:"Rate Us!"})]})}}]),a}(n.a.Component),F=T;r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.c0840da9.chunk.js.map