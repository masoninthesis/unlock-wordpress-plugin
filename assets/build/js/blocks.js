!function(){"use strict";var e={n:function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,{a:o}),o},d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.i18n,o=window.wp.blocks,n=window.wp.blockEditor,r=window.wp.components,c=window.React,l=window.wp.apiFetch,u=e.n(l);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}(0,o.registerBlockType)("unlock-protocol/unlock-box",{title:(0,t.__)("Unlock Protocol","unlock-protocol"),category:"common",icon:"lock",description:(0,t.__)("A block to add lock(s) to the content inside of WordPress.","unlock-protocol"),attributes:{lockAddress:{type:"string",default:""},ethereumNetworks:{type:"array",default:[]},ethereumNetwork:{type:"integer",default:-1}},supports:{align:!0},edit:function(e){var l=e.attributes,i=e.setAttributes,s=l.lockAddress,p=l.ethereumNetwork,k=l.ethereumNetworks,f=(0,o.getBlockTypes)().map((function(e){return e.name})).filter((function(e){return"unlock-protocol/unlock-box"!==e}));(0,c.useEffect)((function(){console.log("ethereumNetwork",p,a(p)),u()({path:"/unlock-protocol/v1/settings"}).then((function(e){var o=e.networks,n=[{label:(0,t.__)("None","unlock-protocol"),value:-1}];o.map((function(e,t){n.push({label:e.network_name,value:t})})),i({ethereumNetworks:n})})).catch((function(e){}))}),[]);var m=function(e,t){i(function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}({},e,t))};return React.createElement(React.Fragment,null,React.createElement("div",(0,n.useBlockProps)(),React.createElement(n.InspectorControls,null,React.createElement(r.PanelBody,{title:(0,t.__)("Settings","unlock-protocol")},React.createElement("p",null,React.createElement("strong",null,(0,t.__)("Lock Address","unlock-protocol"))),React.createElement(r.TextControl,{value:s,onChange:function(e){return m("lockAddress",e)}}),React.createElement(r.SelectControl,{label:(0,t.__)("Ethereum Network","unlock-protocol"),value:p,options:k,onChange:function(e){return m("ethereumNetwork",parseInt(e))}}),React.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:unlockProtocol.unlock_docs},(0,t.__)("Unlock's documentation","unlock-protocol")))),React.createElement("div",{className:"unlock-header-icon"}),React.createElement(n.InnerBlocks,{allowedBlocks:f})))},save:function(){return React.createElement(n.InnerBlocks.Content,null)}})}();