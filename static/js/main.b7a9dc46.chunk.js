(this["webpackJsonpaov-embed-creator"]=this["webpackJsonpaov-embed-creator"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"Sprint":["spr","518032442288898078"],"Execute":["exe","518032871869382669"],"Punish":["pun","518032669477437450"],"Flicker":["fli","518032712146223105"],"Roar":["roa","518032517857542155"],"Heal":["hea","518032678377750537"],"Daze":["daz","518035352137498634"],"Purify":["pur","518032517006229504"],"Disrupt":["dis","518036665046925322"]}')},23:function(e){e.exports=JSON.parse('{"assassin":["Airi.jpeg","Aoi.jpeg","Batman.png","Bright.jpg","Butterfly.jpeg","Enzo.jpeg","Keera.jpg","Kriknak.png","Murad.png","Nakroth.jpeg","Paine.jpg","Quillen.png","Sinestrea.jpg","Wukong.jpg","Zephys.png","Zill.png","Zuka.png"],"mage":["Aleister.png","Azzen\'Ka.png","D\'Arcy.png","Diaochan.png","Dirak.jpg","Iggy.jpeg","Ignis.png","Illumia.png","Ishar.jpg","Jinnar.png","Kahlii.png","Krixi.png","Lauriel.png","Liliana.png","Lorion.jpg","Marja.png","Mganga.png","Natalya.png","Preyta.png","Raz.png","Sephera.png","The Flash.png","Tulen.png","Veera.png","Zata.jpg"],"marksman":["Brunhilda.jpg","Capheny.png","Eland\'orr.jpg","Elsu.png","Fennik.png","Hayate.png","Laville.jpg","Lindis.png","Moren.png","Slimz.png","Tel\'Annas.png","The Joker.png","Thorne.jpg","Valhein.png","Violet.png","Wisp.png","Yorn.png"],"support":["Alice.png","Annette.png","Arum.png","Chaugnar.png","Grakk.png","Krizzix.png","Lumburr.png","Peura.png","Rouie.jpg","TeeMee.png","Zip.jpeg"],"tank":["Arduin.png","Ata.jpg","Baldum.png","Cresht.png","Gildur.png","Maloch.png","Max.png","Mina.png","Omega.png","Ormarr.png","Roxie.png","Skud.png","Taara.png","Thane.png","Toro.png","Wiro.png","Xeniel.png","Y\'bneth.png"],"warrior":["Allain.jpg","Amily.png","Arthur.png","Astrid.png","Dextra.jpg","Errol.jpg","Florentino.png","Kil\'Groth.png","Lu Bu.png","Omen.png","Qi.png","Riktor.png","Rourke.png","Ryoma.png","Superman.png","Veres.png","Volkath.jpg","Wonder Woman.png","Yena.jpeg","Zanis.png"]}')},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},370:function(e,n,t){},371:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(5),i=t.n(c),o=(t(30),t(2)),s=(t(31),t(3)),l=(t(32),t(1));function u(e){var n=e.updateJson,t=Object(a.useState)("RED"),r=Object(o.a)(t,2),c=r[0],i=r[1],s=Object(a.useState)("PURPLE"),u=Object(o.a)(s,2),g=u[0],p=u[1],d=Object(a.useState)("GREEN"),h=Object(o.a)(d,2),b=h[0],O=h[1];return Object(a.useEffect)((function(){n((function(e){return e.fields[1].value="".concat(c,"\n").concat(g,"\n").concat(b)}))}),[c,g,b]),Object(l.jsxs)("div",{className:"arcana-body",children:[Object(l.jsx)(j,{color:"Red",onChange:i}),Object(l.jsx)(j,{color:"Purple",onChange:p}),Object(l.jsx)(j,{color:"Green",onChange:O})]})}function j(e){var n=e.color,t=e.onChange;return Object(l.jsx)("input",{className:"arcana-input arcana-input-".concat(n.toLowerCase()),placeholder:n,onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)}))})}var g=t(25),p=(t(34),t(9)),d=t(10);function h(e){return Object.entries(e)}function b(e){return"https://cdn.discordapp.com/emojis/".concat(e,".png")}t(35);function O(e){var n=e.choices,t=e.onChoose,r=e.onCancel,c=Object(a.useState)(""),i=Object(o.a)(c,2),s=i[0],u=i[1];return Object(l.jsx)("div",{id:"modal",onClick:function(e){e.stopPropagation(),null===r||void 0===r||r()},children:Object(l.jsxs)("div",{id:"modal-content",children:[Object(l.jsx)("input",{autoFocus:!0,id:"modal-filter",value:s,onChange:function(e){return u(e.target.value)},onClick:function(e){return e.stopPropagation()}}),Object(l.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(s)})).map((function(e){return Object(l.jsxs)("div",{className:"modal-item",onClick:function(n){n.stopPropagation(),t(e.name)},children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("img",{src:e.iconUrl,alt:"?"})]},e.name)}))})]})})}var f=h(p).map((function(e){var n=Object(o.a)(e,2);return{name:n[0],iconUrl:b(n[1][1])}})),m=h(d).map((function(e){var n=Object(o.a)(e,2);return{name:n[0],iconUrl:b(n[1][1])}})),x=function(){return{items:Array(6).fill(void 0),ability:"Sprint"}};function v(e){var n=e.updateJson,t=Object(a.useState)([x()]),r=Object(o.a)(t,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){n((function(e){return e.fields[2].value=c.map((function(e){return" {".concat(d[e.ability][0],"} | ").concat(e.items.filter(Boolean).map((function(e){return"{".concat(p[e][0],"}")})).join(" ")," ")})).join("\n\n")}))}),[c]),Object(l.jsxs)(l.Fragment,{children:[c.map((function(e,n){return Object(l.jsx)(S,{idx:n,build:e,remove:function(){var e=c.slice();e.splice(n,1),i(e)},buildHasUpdated:function(){i(c.slice())}},"build-".concat(n))})),Object(l.jsx)("span",{id:"new-build-btn",className:"hover-color",onClick:function(){i([].concat(Object(g.a)(c),[x()]))},children:"+"})]})}function S(e){var n=e.build,t=e.buildHasUpdated,r=e.idx,c=e.remove,i=Object(a.useState)(!1),s=Object(o.a)(i,2),u=s[0],j=s[1];return Object(l.jsxs)("div",{className:"build-entry",children:[u&&Object(l.jsx)(O,{choices:m,onChoose:function(e){j(!1),n.ability=e,t()},onCancel:function(){return j(!1)}}),Object(l.jsxs)("div",{className:"build-entry-header",children:[Object(l.jsx)("img",{src:b(d[n.ability][1]),alt:"",onClick:function(){return j(!0)}}),Object(l.jsxs)("h3",{children:["Build ",r+1]}),0!==r&&Object(l.jsx)("span",{className:"hover-color",onClick:c,children:"\xd7"})]}),Object(l.jsx)("div",{className:"build-box",children:n.items.map((function(e,a){return Object(l.jsx)(k,{iconUrl:e&&b(p[e][1]),onChange:function(e){n.items[a]=e,t()}},"build-box-".concat(a))}))})]})}function k(e){var n=e.iconUrl,t=e.onChange,r=Object(a.useState)(!1),c=Object(o.a)(r,2),i=c[0],s=c[1];return Object(l.jsxs)("div",{className:"build-item",onClick:function(){console.log("hi"),s(!0)},children:[i&&Object(l.jsx)(O,{choices:f,onChoose:function(e){s(!1),t(e)},onCancel:function(){return s(!1)}}),n&&Object(l.jsx)("img",{className:"build-item-img",src:n,alt:""})]})}t(36);function C(e){var n=e.updateJson,t=Object(a.useState)(),r=Object(o.a)(t,2),c=r[0],i=r[1],s=Object(a.useState)(!1),u=Object(o.a)(s,2),j=u[0],g=u[1];return Object(l.jsxs)("div",{className:"enchantments-image-picker",children:[Object(l.jsx)("input",{value:c,onChange:function(e){var t=e.target.value;i(t),n((function(e){return e.image=t}))},placeholder:"Image URL"}),c&&Object(l.jsx)("img",{src:c,alt:"",onLoad:function(){return g(!1)},onError:function(){return g(!0)},hidden:j}),c&&j&&Object(l.jsx)("p",{children:"Failed to load that image :("})]})}function E(e){var n=e.hero;return Object(l.jsx)("img",Object(s.a)({src:"/AovEmbedCreator"+"/images/heroes/".concat(n),alt:n.substring(0,n.lastIndexOf("."))},e))}var y,w=t(373),N=t(22);function A(e){var n=e.object,t=Object(a.useState)(!1),r=Object(o.a)(t,2),c=r[0],i=r[1],s=JSON.stringify(n,null,4);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:c?"Copied!":"Click the codeblock to copy"}),Object(l.jsx)(w.a,{language:"json",style:N.atomOneDark,onClick:function(){window.navigator.clipboard.writeText(s),i(!0),y&&clearTimeout(y),y=setTimeout((function(){return i(!1)}),3e3)},children:s})]})}var B=t(24),M=function(e){return Object(l.jsx)(B.a,Object(s.a)(Object(s.a)({},e),{},{theme:function(e){return Object(s.a)(Object(s.a)({},e),{},{colors:Object(s.a)(Object(s.a)({},e.colors),{},{neutral0:"#434C5E",neutral10:"#2E3440",neutral20:"#2E3440",neutral30:"darkorange",neutral50:"lightgrey",neutral80:"white",primary:"darkorange",primary25:"#2E3440",primary50:"#2E3440"})})},styles:{control:function(e){return Object(s.a)(Object(s.a)({},e),{},{margin:"0.6em 0"})}}}))},T=t(23),F=Object.entries(T).reduce((function(e,n){var t=Object(o.a)(n,2),a=t[0];return t[1].forEach((function(n){var t=n.substring(0,n.lastIndexOf("."));e[t]=[a,n]})),e}),{}),L=(t(370),["Jungle","Slayer Lane","Middle Lane","Dragon Lane","Support"].map((function(e){return{value:e,label:e}})));function R(e){var n=e.hero,t=e.onBack,r=Object(o.a)(F[n],2),c=r[0],i=r[1],j=Object(a.useState)(),g=Object(o.a)(j,2),p=g[0],d=g[1],h=Object(a.useState)(function(e,n,t){var a=window.location.href.replace(/#.*$/,"");return{author:{name:n,icon_url:"".concat(a,"/images/classes/").concat(t,".png")},color:53380,footer:{text:"Last updated"},timestamp:(new Date).toISOString(),thumbnail:"".concat(a,"/images/heroes/").concat(e),image:"UNSPECIFIED",fields:[{name:"Role",value:"UNSPECIFIED",inline:!0},{name:"Arcana",value:"UNSPECIFIED",inline:!1},{name:"Build",value:"UNSPECIFIED",inline:!1}]}}(i,n,c)),b=Object(o.a)(h,2),O=b[0],f=b[1],m={updateJson:function(e){e(O),f(Object(s.a)({},O))}};return Object(l.jsxs)("div",{className:"hero-wrapper",children:[Object(l.jsx)("span",{id:"back-button",className:"hover-grow hover-color",onClick:t,children:"\xd7"}),Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsxs)("div",{className:"hero-header",children:[Object(l.jsx)(E,{hero:i,className:"hero-avatar"}),Object(l.jsx)("h1",{children:n})]}),Object(l.jsxs)("section",{className:"roles-section",children:[Object(l.jsx)("h2",{children:"Roles"}),Object(l.jsx)(M,{isMulti:!0,options:L,value:p,onChange:function(e){d(e),m.updateJson((function(n){return n.fields[0].value=e.map((function(e){return e.value})).join(", ")}))},placeholder:"Roles"})]}),Object(l.jsxs)("section",{className:"arcana-section",children:[Object(l.jsx)("h2",{children:"Arcana"}),Object(l.jsx)(u,Object(s.a)({},m))]}),Object(l.jsxs)("section",{className:"builds-section",children:[Object(l.jsx)("h2",{children:"Builds"}),Object(l.jsx)(v,Object(s.a)({},m))]}),Object(l.jsxs)("section",{className:"enchantments-section",children:[Object(l.jsx)("h2",{children:"Enchantments"}),Object(l.jsx)(C,Object(s.a)({},m))]}),Object(l.jsxs)("section",{className:"json-codeblock",children:[Object(l.jsx)("h2",{children:"JSON"}),Object(l.jsx)(A,Object(s.a)({object:O},m))]})]})]})}function D(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Made by Vendicated -"," ",Object(l.jsx)("a",{className:"hover-color",href:"https://github.com/Vendicated/AovEmbedCreator",children:"Source Code"})]})})}function P(){var e=Object(a.useState)(""),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash.replace("#",""))};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),Object(l.jsxs)("div",{id:"wrapper",children:[Object(l.jsx)("div",{children:t&&Object.prototype.hasOwnProperty.call(F,t)?Object(l.jsx)(R,{hero:t,onBack:function(){return window.location.hash="#"}}):Object(l.jsxs)("div",{id:"hero-chooser",children:[Object(l.jsx)("h1",{children:"AoV Hero Embed Generator"}),Object(l.jsx)("div",{children:Object.keys(F).map((function(e){return Object(l.jsx)("div",{className:"hero-avatar",onClick:function(){return window.location.hash="".concat(e)},children:Object(l.jsx)(E,{hero:F[e][1]})},e)}))})]})}),Object(l.jsx)(D,{})]})}i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('{"Spear of Longinus":["sol","513341238196437002"],"Fafnir\'s Talon":["fta","528687743396610058"],"Claves Sancti":["cs","513341093195153418"],"Muramasa":["mur","513340193084801038"],"The Beast":["tb","513340192531152899"],"Omni Arms":["oa","513339483694039040"],"Slikk\'s Sting":["ss","513339483563753472"],"Fenrir\'s Tooth":["ft","513340816190865421"],"Blitz Blade":["bb","513339413754019864"],"Devil\'s Handshake":["dh","513349039694151700"],"Rankbreaker":["ran","513349070987984898"],"Uriel\'s Brand":["TODO","TODO"],"Curse of Death":["cod","513344338101534734"],"Death Sickle":["ds","513344293637718037"],"Bow of Slaughter":["bos","513341235293978636"],"Phoenix Tear":["pt","513374080305463327"],"Spoopy Mask":["sm","513371941990694924"],"Boomstick":["boo","513377154705129483"],"Hecate\'s Diadem":["hd","513377356971376650"],"Orb of the Magi":["ootm","513377568624214063"],"Rhea\'s Blessing":["rb","513377799747141633"],"Zweihander":["zh","513378026600267810"],"Frosty\'s Revenge":["fr","518031946799120384"],"Berith\'s Agony":["ba","513379010424864768"],"Apocalypse":["apo","513383020586336256"],"Soaring Aura":["sa","513471984718446615"],"Holy of Holies":["hoh","513472526643625999"],"Arctic Orb":["ao","513473471368658984"],"Frostguard":["vb","684007018029383748"],"Staff of Nuul":["son","513375622526009351"],"Evil Secrets":["es","678230635562926101"],"Tome of the Reaper":["totr","513376056997052448"],"Virtue\'s Necklace":["vn","513375832358518797"],"Mantle of Ra":["mor","513474528094060564"],"Shield of the Lost":["sotl","513474972065333248"],"The Aegis":["ta","513476508522643456"],"Gaia\'s Standard":["gs","513476798592319494"],"Medallion of Troy":["mot","513476889810305047"],"Hyoga\'s Edge":["he","513476949155250176"],"Blade of Eternity":["boe","513480688637444098"],"Frost Cape":["fc","513476948559659018"],"Amulet of Longevity":["aol","513476948794540048"],"Rock Shield":["rs","513480693557493760"],"Mail of Pain":["mop","513474003244023838"],"Hercules\' Madness":["hm","513474284153208842"],"Odin\'s Will":["ow","518532233255059505"],"Sonic Boots":["sb","513473592814600222"],"Gilded Greaves":["gg","513471879462256649"],"Flashy Boots":["fb","513471879688749056"],"Enchanted Kicks":["ek","513471879625834511"],"War Boots":["wb","513473752823234560"],"Hermes\' Select":["hs","513473844095352852"],"Loki\'s Curse":["lc","513477087743574017"],"Gnoll Cleaver":["gc","518527111963869205"],"Leviathan":["lev","513477087336726539"],"Soulreaver":["sr","513477087282200587"],"Scorching Wind":["sw","513480687660040192"],"Mother Earth: Barrier":["egb","727696413772742756"],"Mother Earth: Magic Eye":["egme","727700635985903616"],"Mother Earth: Eradicate":["ege","727701283452092468"],"Mother Earth: Cleansing":["egc","727701675548082266"],"Mother Earth: Genesis":["egg","727701958890225766"],"Tidal Force: Barrier":["wgb","727696392490975233"],"Tidal Force: Magic Eye":["wgme","727700661466169425"],"Tidal Force: Eradicate":["wge","727701316146692216"],"Tidal Force: Cleansing":["wgc","727701691834564619"],"Tidal Force: Genesis":["wgg","727701975386292365"],"Wildfire: Barrier":["fgb","727696432496246787"],"Wildfire: Magic Eye":["fgme","727700680667824272"],"Wildfire: Eradicate":["fge","727701332953268265"],"Wildfire: Cleansing":["fgc","727701716765769729"],"Wildfire: Genesis":["fgg","727702001718132737"]}')}},[[371,1,2]]]);
//# sourceMappingURL=main.b7a9dc46.chunk.js.map