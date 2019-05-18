(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){e.exports=a(325)},175:function(e,t,a){},323:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),i=a.n(o),s=(a(81),a(29)),c=(a(324),a(146)),l=a(151),d=(a(167),a(61)),u=a(133),h=a(134),m=a(149),f=a(135),g=a(150),p=(a(103),a(148)),y=(a(326),a(147)),S=(a(172),a(60)),b=a(136),v=a.n(b),w=a(137),k=a.n(w),E=(a(175),S.a.Header),I=S.a.Footer,D=S.a.Content,j=y.a.Title,x=p.a.Search,C=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).columns=[{title:"Name",dataIndex:"name",key:"name",render:function(t){return r.a.createElement(v.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[e.state.searchInput],textToHighlight:t?t.toString():null})}},{title:"ID",dataIndex:"id",key:"id"},{title:"Recclass",dataIndex:"recclass",key:"recclass"},{title:"Mass (g)",dataIndex:"mass",key:"mass"},{title:"Year",dataIndex:"formattedDate",key:"formattedDate"}],e.onSearch=function(t){if(0!==t.length){var a=e.state.data.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())&&e.name.toLowerCase().charAt(0)===t.toLowerCase().charAt(0)});e.setState({loading:!0,filteredDb:a},function(){e.setState({loading:!1})}),0===a.length&&d.a.error("No search results found \ud83d\ude2e")}else e.setState({loading:!0,filteredDb:e.state.data},function(){e.setState({loading:!1})})},e.setInputValue=function(t){if(!(t.target.value.length<2)){var a=t.target.value;e.setState({searchInput:a})}},e.state={data:[],filteredDb:[],loading:!1,searchInput:"",sortedInfo:null},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getLandings()}},{key:"getLandings",value:function(){var e=this;this.setState({loading:!0});fetch("/graphql",{method:"POST",body:JSON.stringify({query:"\n        query {\n          landings {\n            name\n            id\n            recclass\n            mass\n            year\n          }\n        }\n      "}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){if(!t.data)return d.a.error("Failed to fetch data \ud83d\ude2d"),void e.setState({loading:!1});d.a.success("Successfully grabbed data \ud83d\ude04");var a=t.data.landings.map(function(e){var t=e.year,a=r.a.createElement(k.a,{format:"YYYY"},t);return Object(l.a)({},e,{key:e.id,formattedDate:a})});e.setState({data:a,filteredDb:a},function(){e.setState({loading:!1})})}).catch(function(){d.a.error("Failed to fetch data \ud83d\ude2d"),e.setState({loading:!1})})}},{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{className:"app-container"},r.a.createElement(E,{className:"header-container"},r.a.createElement(j,{level:3,style:{color:"white"}},"Meteorite Explorer")),r.a.createElement(D,{className:"content-container"},r.a.createElement(x,{placeholder:"Search meteor name",className:"search-container",enterButton:"Search",size:"large",onSearch:function(t){return e.onSearch(t)},onChange:this.setInputValue}),r.a.createElement(c.a,{className:"table-container",columns:this.columns,dataSource:this.state.filteredDb,size:"small",loading:this.state.loading})),r.a.createElement(I,{className:"footer-container"},r.a.createElement(s.a,{size:"small",type:"primary",href:"https://github.com/rjohnson91/meteorite-explorer-app",target:"_blank"},"View GitHub")))}}]),t}(r.a.Component);a(323),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[153,1,2]]]);
//# sourceMappingURL=main.4a6f0c37.chunk.js.map