import{s as I0,q as M0,u as R0,v as H0,w as N0,r as P0,c as $0}from"../chunks/scheduler.CMswNPJ8.js";import{S as F0,i as z0,e as o,s,t as $,c as n,a as w,k as E,f as g,d as m,b as F,l as t,g as U0,h as e,z as S,p as j0,n as A0}from"../chunks/index.BOwdv7r6.js";import{p as O0}from"../chunks/stores.BYdKi-Fb.js";import{b as z}from"../chunks/entry.DgE4Y9gL.js";import{C as q0}from"../chunks/cross.3itv2MPs.js";const B0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='64px'%20height='64px'%3e%3cg%20fill='%23f8b465'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(4,4)'%3e%3cpath%20d='M21.58008,7c-8.039,0%20-14.58008,6.54494%20-14.58008,14.58594v20.83203c0,8.04%206.54494,14.58203%2014.58594,14.58203h20.83203c8.04,0%2014.58203,-6.54494%2014.58203,-14.58594v-20.83398c0,-8.039%20-6.54494,-14.58008%20-14.58594,-14.58008zM47,15c1.104,0%202,0.896%202,2c0,1.104%20-0.896,2%20-2,2c-1.104,0%20-2,-0.896%20-2,-2c0,-1.104%200.896,-2%202,-2zM32,19c7.17,0%2013,5.83%2013,13c0,7.17%20-5.831,13%20-13,13c-7.17,0%20-13,-5.831%20-13,-13c0,-7.169%205.83,-13%2013,-13zM32,23c-4.971,0%20-9,4.029%20-9,9c0,4.971%204.029,9%209,9c4.971,0%209,-4.029%209,-9c0,-4.971%20-4.029,-9%20-9,-9z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",G0="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3egithub%20[%23142]%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-140.000000,%20-7559.000000)'%20fill='%23F8B465'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M94,7399%20C99.523,7399%20104,7403.59%20104,7409.253%20C104,7413.782%20101.138,7417.624%2097.167,7418.981%20C96.66,7419.082%2096.48,7418.762%2096.48,7418.489%20C96.48,7418.151%2096.492,7417.047%2096.492,7415.675%20C96.492,7414.719%2096.172,7414.095%2095.813,7413.777%20C98.04,7413.523%20100.38,7412.656%20100.38,7408.718%20C100.38,7407.598%2099.992,7406.684%2099.35,7405.966%20C99.454,7405.707%2099.797,7404.664%2099.252,7403.252%20C99.252,7403.252%2098.414,7402.977%2096.505,7404.303%20C95.706,7404.076%2094.85,7403.962%2094,7403.958%20C93.15,7403.962%2092.295,7404.076%2091.497,7404.303%20C89.586,7402.977%2088.746,7403.252%2088.746,7403.252%20C88.203,7404.664%2088.546,7405.707%2088.649,7405.966%20C88.01,7406.684%2087.619,7407.598%2087.619,7408.718%20C87.619,7412.646%2089.954,7413.526%2092.175,7413.785%20C91.889,7414.041%2091.63,7414.493%2091.54,7415.156%20C90.97,7415.418%2089.522,7415.871%2088.63,7414.304%20C88.63,7414.304%2088.101,7413.319%2087.097,7413.247%20C87.097,7413.247%2086.122,7413.234%2087.029,7413.87%20C87.029,7413.87%2087.684,7414.185%2088.139,7415.37%20C88.139,7415.37%2088.726,7417.2%2091.508,7416.58%20C91.513,7417.437%2091.522,7418.245%2091.522,7418.489%20C91.522,7418.76%2091.338,7419.077%2090.839,7418.982%20C86.865,7417.627%2084,7413.783%2084,7409.253%20C84,7403.59%2088.478,7399%2094,7399'%20id='github-[%23142]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",D0="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23F8B465'%20stroke-width='0.00024000000000000003'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20id='style=fill'%3e%3cg%20id='email'%3e%3cpath%20id='Subtract'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7%202.75C5.38503%202.75%203.92465%203.15363%202.86466%204.1379C1.79462%205.13152%201.25%206.60705%201.25%208.5V15.5C1.25%2017.393%201.79462%2018.8685%202.86466%2019.8621C3.92465%2020.8464%205.38503%2021.25%207%2021.25H17C18.615%2021.25%2020.0754%2020.8464%2021.1353%2019.8621C22.2054%2018.8685%2022.75%2017.393%2022.75%2015.5V8.5C22.75%206.60705%2022.2054%205.13152%2021.1353%204.1379C20.0754%203.15363%2018.615%202.75%2017%202.75H7ZM19.2285%208.3623C19.5562%208.10904%2019.6166%207.63802%2019.3633%207.31026C19.1101%206.98249%2018.6391%206.9221%2018.3113%207.17537L12.7642%2011.4616C12.3141%2011.8095%2011.6858%2011.8095%2011.2356%2011.4616L5.6886%207.17537C5.36083%206.9221%204.88982%206.98249%204.63655%207.31026C4.38328%207.63802%204.44367%208.10904%204.77144%208.3623L10.3185%2012.6486C11.3089%2013.4138%2012.691%2013.4138%2013.6814%2012.6486L19.2285%208.3623Z'%20fill='%23F8B465'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",E0="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23F8B465'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M2,21V11a1,1,0,0,1,2,0v7.586L18.586,4H11a1,1,0,0,1,0-2H21a1,1,0,0,1,1,1V13a1,1,0,0,1-2,0V5.414L5.414,20H13a1,1,0,0,1,0,2H3A1,1,0,0,1,2,21Z'/%3e%3c/g%3e%3c/svg%3e",Y0="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23F8B465'%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20transform='matrix(1,0,0,1,-1088,-192)'%3e%3crect%20id='Icons'%20x='0'%20y='0'%20width='1280'%20height='800'%20style='fill:none;'/%3e%3cg%20id='Icons1'%20serif:id='Icons'%3e%3cg%20id='Strike'%3e%3c/g%3e%3cg%20id='H1'%3e%3c/g%3e%3cg%20id='H2'%3e%3c/g%3e%3cg%20id='H3'%3e%3c/g%3e%3cg%20id='list-ul'%3e%3c/g%3e%3cg%20id='hamburger-1'%3e%3c/g%3e%3cg%20id='hamburger-2'%20transform='matrix(1.50868,0,0,1.01217,70.647,191.772)'%3e%3cg%20transform='matrix(0.149202,0,0,0.173437,664.206,42.142)'%3e%3crect%20x='103.288'%20y='8.535'%20width='71.218'%20height='34.133'%20style='fill-rule:nonzero;'/%3e%3c/g%3e%3cg%20transform='matrix(0.149202,0,0,0.173437,664.345,27.4)'%3e%3crect%20x='103.288'%20y='8.535'%20width='141.366'%20height='34.133'%20style='fill-rule:nonzero;'/%3e%3c/g%3e%3cg%20transform='matrix(0.149202,0,0,0.173437,664.345,12.658)'%3e%3crect%20x='103.288'%20y='8.535'%20width='212.447'%20height='34.133'%20style='fill-rule:nonzero;'/%3e%3c/g%3e%3c/g%3e%3cg%20id='list-ol'%3e%3c/g%3e%3cg%20id='list-task'%3e%3c/g%3e%3cg%20id='trash'%3e%3c/g%3e%3cg%20id='vertical-menu'%3e%3c/g%3e%3cg%20id='horizontal-menu'%3e%3c/g%3e%3cg%20id='sidebar-2'%3e%3c/g%3e%3cg%20id='Pen'%3e%3c/g%3e%3cg%20id='Pen1'%20serif:id='Pen'%3e%3c/g%3e%3cg%20id='clock'%3e%3c/g%3e%3cg%20id='external-link'%3e%3c/g%3e%3cg%20id='hr'%3e%3c/g%3e%3cg%20id='info'%3e%3c/g%3e%3cg%20id='warning'%3e%3c/g%3e%3cg%20id='plus-circle'%3e%3c/g%3e%3cg%20id='minus-circle'%3e%3c/g%3e%3cg%20id='vue'%3e%3c/g%3e%3cg%20id='cog'%3e%3c/g%3e%3cg%20id='logo'%3e%3c/g%3e%3cg%20id='radio-check'%3e%3c/g%3e%3cg%20id='eye-slash'%3e%3c/g%3e%3cg%20id='eye'%3e%3c/g%3e%3cg%20id='toggle-off'%3e%3c/g%3e%3cg%20id='shredder'%3e%3c/g%3e%3cg%20id='spinner--loading--dots-'%20serif:id='spinner%20[loading,%20dots]'%3e%3c/g%3e%3cg%20id='react'%3e%3c/g%3e%3cg%20id='check-selected'%3e%3c/g%3e%3cg%20id='turn-off'%3e%3c/g%3e%3cg%20id='code-block'%3e%3c/g%3e%3cg%20id='user'%3e%3c/g%3e%3cg%20id='coffee-bean'%3e%3c/g%3e%3cg%20transform='matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)'%3e%3cg%20id='coffee-beans'%3e%3cg%20id='coffee-bean1'%20serif:id='coffee-bean'%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='coffee-bean-filled'%3e%3c/g%3e%3cg%20transform='matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)'%3e%3cg%20id='coffee-beans-filled'%3e%3cg%20id='coffee-bean2'%20serif:id='coffee-bean'%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='clipboard'%3e%3c/g%3e%3cg%20transform='matrix(1,0,0,1,128.011,1.35415)'%3e%3cg%20id='clipboard-paste'%3e%3c/g%3e%3c/g%3e%3cg%20id='clipboard-copy'%3e%3c/g%3e%3cg%20id='Layer1'%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",W0="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M16.5562%2012.9062L16.1007%2013.359C16.1007%2013.359%2015.0181%2014.4355%2012.0631%2011.4972C9.10812%208.55901%2010.1907%207.48257%2010.1907%207.48257L10.4775%207.19738C11.1841%206.49484%2011.2507%205.36691%2010.6342%204.54348L9.37326%202.85908C8.61028%201.83992%207.13596%201.70529%206.26145%202.57483L4.69185%204.13552C4.25823%204.56668%203.96765%205.12559%204.00289%205.74561C4.09304%207.33182%204.81071%2010.7447%208.81536%2014.7266C13.0621%2018.9492%2017.0468%2019.117%2018.6763%2018.9651C19.1917%2018.9171%2019.6399%2018.6546%2020.0011%2018.2954L21.4217%2016.883C22.3806%2015.9295%2022.1102%2014.2949%2020.8833%2013.628L18.9728%2012.5894C18.1672%2012.1515%2017.1858%2012.2801%2016.5562%2012.9062Z'%20fill='%23F8B465'/%3e%3c/g%3e%3c/svg%3e";function Z0(i){let a,d,f,U="KY.",M,h,f0=`<a href="https://www.instagram.com/not_kok_young/" target="_blank"><img src="${B0}" alt="instagram"/></a> <a href="https://github.com/hohkokyoung" target="_blank"><img src="${G0}" alt="github"/></a> <a href="mailto:kelvinhoh1520@hotmail.com"><img src="${D0}" alt="email"/></a>`,Z,B,p0=`<img src="${E0}" alt="expand"/>`,K,x,v0=`<img src="${Y0}" alt="hamburger half menu icon"/>`,J,R,Q,p,_,w0=`<img src="${q0}" alt="cross icon"/>`,X,l,k,e0,j,t0,b,a0,A,r0,y,i0,O,c0,V,o0,q,n0,T,l0,Y,s0,G,D,C0=`<img src="${E0}" alt="expand icon"/>`,g0,L,x0=`<a href="https://www.instagram.com/not_kok_young/" target="_blank"><img src="${B0}" alt="instagram"/></a> <a href="https://github.com/hohkokyoung" target="_blank"><img src="${G0}" alt="github"/></a> <a href="mailto:kelvinhoh1520@hotmail.com"><img src="${D0}" alt="email"/></a> <a class="phone" href="tel:+60123429617"><img src="${W0}" alt="phone"/></a>`,d0,I,_0="+60 123429617",u0,v,h0,k0;const m0=i[2].default,u=M0(m0,i,i[1],null);return{c(){a=o("div"),d=o("aside"),f=o("a"),f.textContent=U,M=s(),h=o("div"),h.innerHTML=f0,Z=s(),B=o("button"),B.innerHTML=p0,K=s(),x=o("button"),x.innerHTML=v0,J=s(),R=o("div"),Q=s(),p=o("nav"),_=o("button"),_.innerHTML=w0,X=s(),l=o("div"),k=o("a"),e0=$("Home"),t0=s(),b=o("a"),a0=$("Education"),r0=s(),y=o("a"),i0=$("Experience"),c0=s(),V=o("a"),o0=$("Portfolio"),n0=s(),T=o("a"),l0=$("Certification"),s0=s(),G=o("div"),D=o("button"),D.innerHTML=C0,g0=s(),L=o("div"),L.innerHTML=x0,d0=s(),I=o("p"),I.textContent=_0,u0=s(),u&&u.c(),this.h()},l(c){a=n(c,"DIV",{class:!0});var r=w(a);d=n(r,"ASIDE",{class:!0});var H=w(d);f=n(H,"A",{class:!0,href:!0,"data-svelte-h":!0}),E(f)!=="svelte-246xhv"&&(f.textContent=U),M=g(H),h=n(H,"DIV",{class:!0,"data-svelte-h":!0}),E(h)!=="svelte-yc2qgv"&&(h.innerHTML=f0),Z=g(H),B=n(H,"BUTTON",{class:!0,"data-svelte-h":!0}),E(B)!=="svelte-18822sh"&&(B.innerHTML=p0),H.forEach(m),K=g(r),x=n(r,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),E(x)!=="svelte-zs0jhw"&&(x.innerHTML=v0),J=g(r),R=n(r,"DIV",{id:!0,class:!0}),w(R).forEach(m),Q=g(r),p=n(r,"NAV",{id:!0,class:!0});var N=w(p);_=n(N,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),E(_)!=="svelte-1aixcsv"&&(_.innerHTML=w0),X=g(N),l=n(N,"DIV",{class:!0});var C=w(l);k=n(C,"A",{href:!0,"aria-current":!0});var b0=w(k);e0=F(b0,"Home"),b0.forEach(m),t0=g(C),b=n(C,"A",{href:!0,"aria-current":!0});var y0=w(b);a0=F(y0,"Education"),y0.forEach(m),r0=g(C),y=n(C,"A",{href:!0,"aria-current":!0});var V0=w(y);i0=F(V0,"Experience"),V0.forEach(m),c0=g(C),V=n(C,"A",{href:!0,"aria-current":!0});var T0=w(V);o0=F(T0,"Portfolio"),T0.forEach(m),n0=g(C),T=n(C,"A",{href:!0,"aria-current":!0});var S0=w(T);l0=F(S0,"Certification"),S0.forEach(m),C.forEach(m),s0=g(N),G=n(N,"DIV",{class:!0});var W=w(G);D=n(W,"BUTTON",{class:!0,"data-svelte-h":!0}),E(D)!=="svelte-1ji5a3p"&&(D.innerHTML=C0),g0=g(W),L=n(W,"DIV",{class:!0,"data-svelte-h":!0}),E(L)!=="svelte-gsa2yd"&&(L.innerHTML=x0),W.forEach(m),N.forEach(m),d0=g(r),I=n(r,"P",{class:!0,"data-svelte-h":!0}),E(I)!=="svelte-15bfmky"&&(I.textContent=_0),u0=g(r),u&&u.l(r),r.forEach(m),this.h()},h(){t(f,"class","home-icon"),t(f,"href","/"),t(h,"class","contact desktop-only"),t(B,"class","expand-icon desktop-only"),t(d,"class","sidebar"),t(x,"type","button"),t(x,"class","expand-navigation mobile-only"),t(R,"id","mainNavigationBarBackground"),t(R,"class","main-navigation-bar-background mobile-only"),t(_,"type","button"),t(_,"class","contract-navigation mobile-only"),t(k,"href",z+"/"),t(k,"aria-current",j=i[0].url.pathname=="/"),t(b,"href",z+"/education"),t(b,"aria-current",A=i[0].url.pathname=="/education"),t(y,"href",z+"/experience"),t(y,"aria-current",O=i[0].url.pathname=="/experience"),t(V,"href",z+"/portfolio"),t(V,"aria-current",q=i[0].url.pathname=="/portfolio"),t(T,"href",z+"/certification"),t(T,"aria-current",Y=i[0].url.pathname=="/certification"),t(l,"class","navigation-bar-container"),t(D,"class","expand-icon"),t(L,"class","contact"),t(G,"class","mobile-only footer"),t(p,"id","mainNavigationBar"),t(p,"class","navigation-bar main-navigation-bar"),t(I,"class","phone-number desktop-only"),t(a,"class","layout")},m(c,r){U0(c,a,r),e(a,d),e(d,f),e(d,M),e(d,h),e(d,Z),e(d,B),e(a,K),e(a,x),e(a,J),e(a,R),e(a,Q),e(a,p),e(p,_),e(p,X),e(p,l),e(l,k),e(k,e0),e(l,t0),e(l,b),e(b,a0),e(l,r0),e(l,y),e(y,i0),e(l,c0),e(l,V),e(V,o0),e(l,n0),e(l,T),e(T,l0),e(p,s0),e(p,G),e(G,D),e(G,g0),e(G,L),e(a,d0),e(a,I),e(a,u0),u&&u.m(a,null),v=!0,h0||(k0=[S(B,"click",L0),S(x,"click",K0),S(_,"click",P),S(k,"click",P),S(b,"click",P),S(y,"click",P),S(V,"click",P),S(T,"click",P),S(D,"click",L0)],h0=!0)},p(c,[r]){(!v||r&1&&j!==(j=c[0].url.pathname=="/"))&&t(k,"aria-current",j),(!v||r&1&&A!==(A=c[0].url.pathname=="/education"))&&t(b,"aria-current",A),(!v||r&1&&O!==(O=c[0].url.pathname=="/experience"))&&t(y,"aria-current",O),(!v||r&1&&q!==(q=c[0].url.pathname=="/portfolio"))&&t(V,"aria-current",q),(!v||r&1&&Y!==(Y=c[0].url.pathname=="/certification"))&&t(T,"aria-current",Y),u&&u.p&&(!v||r&2)&&R0(u,m0,c,c[1],v?N0(m0,c[1],r,null):H0(c[1]),null)},i(c){v||(j0(u,c),v=!0)},o(c){A0(u,c),v=!1},d(c){c&&m(a),u&&u.d(c),h0=!1,P0(k0)}}}function L0(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen();var i=document.body;i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen&&i.webkitRequestFullscreen()}function K0(){var i=document.getElementById("mainNavigationBar"),a=document.getElementById("mainNavigationBarBackground");i.style.right=0,a.style.opacity=1,a.style.zIndex=1}function P(){var i=document.getElementById("mainNavigationBar");i.style.right="-70%",mainNavigationBarBackground.style.opacity=0,mainNavigationBarBackground.style.zIndex=-1}function J0(i,a,d){let f;$0(i,O0,h=>d(0,f=h));let{$$slots:U={},$$scope:M}=a;return i.$$set=h=>{"$$scope"in h&&d(1,M=h.$$scope)},[f,M,U]}class re extends F0{constructor(a){super(),z0(this,a,J0,Z0,I0,{})}}export{re as component};
