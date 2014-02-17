/*
 Copyright 2005-2013 the original author or authors.
 Licensed under the Apache License, Version 2.0 (the "License").
 You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
*/
(function(){var k=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.visitor=k(function(b,c,e,a,d){function f(){return"-"}this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,b.helpers);d=d||{};var g,h=e.helperMissing,j=this.escapeExpression;b='<td class="visitor">\n    ';if((a=e.unless.call(c,c.invitationInfo,{hash:{},inverse:this.program(3,function(a,b){var c;(c=e.userName)?c=c.call(a,{hash:{},data:b}):(c=a.userName,c="function"===typeof c?c.apply(a):c);return j(c)},d),fn:this.program(1,
function(a,b){var c,d;c={hash:{},data:b};c='<a href="javascript:void(0);" class="invite-link" title="'+(j((d=e.L10n||a.L10n,d?d.call(a,"pending.table.invite",c):h.call(a,"L10n","pending.table.invite",c)))+'">');(d=e.userName)?d=d.call(a,{hash:{},data:b}):(d=a.userName,d="function"===typeof d?d.apply(a):d);return c+=j(d)+"</a>"},d),data:d}))||0===a)b+=a;g={hash:{},data:d};b=b+'\n</td>\n<td class="visitor">\n    <div class="default-visitor-controls inline-block">\n        <div class="control track-control inline-block" title="'+
(j((a=e.L10n||c.L10n,a?a.call(c,"pending.table.tracked",g):h.call(c,"L10n","pending.table.tracked",g)))+'"></div>\n    </div>\n    <div class="visitor-controls inline-block"></div>\n</td>\n<td class="visitor">');if((a=e["if"].call(c,c.userIp,{hash:{},inverse:this.program(7,function(a,c){var b;(b=e.remote)?b=b.call(a,{hash:{},data:c}):(b=a.remote,b="function"===typeof b?b.apply(a):b);return j(b)},d),fn:this.program(5,function(a,b){var c,d;c='<a href="javascript:void(0);" class="geo-link" title="GeoLocation">';
(d=e.remote)?d=d.call(a,{hash:{},data:b}):(d=a.remote,d="function"===typeof d?d.apply(a):d);return c+=j(d)+"</a>"},d),data:d}))||0===a)b+=a;b+='</td>\n<td class="visitor"><span class="timesince" data-timestamp="';(a=e.firstTime)?a=a.call(c,{hash:{},data:d}):(a=c.firstTime,a="function"===typeof a?a.apply(c):a);b+=j(a)+'"></span></td>\n<td class="visitor"><span class="timesince" data-timestamp="';(a=e.lastTime)?a=a.call(c,{hash:{},data:d}):(a=c.lastTime,a="function"===typeof a?a.apply(c):a);b+=j(a)+
'"></span></td>\n<td class="visitor">';if((a=e["if"].call(c,c.invitationInfo,{hash:{},inverse:this.program(11,f,d),fn:this.program(9,function(a){var b;return j((b=(b=a.invitationInfo,null==b||!1===b?b:b.agentName),"function"===typeof b?b.apply(a):b))},d),data:d}))||0===a)b+=a;b+='</td>\n<td class="visitor">';if((a=e["if"].call(c,c.invitationInfo,{hash:{},inverse:this.program(11,f,d),fn:this.program(13,function(a){var b;return a=""+('<span class="timesince" data-timestamp="'+j((b=(b=a.invitationInfo,
null==b||!1===b?b:b.time),"function"===typeof b?b.apply(a):b))+'"></span>')},d),data:d}))||0===a)b+=a;b+='</td>\n<td class="visitor">';(a=e.invitations)?a=a.call(c,{hash:{},data:d}):(a=c.invitations,a="function"===typeof a?a.apply(c):a);b+=j(a)+" / ";(a=e.chats)?a=a.call(c,{hash:{},data:d}):(a=c.chats,a="function"===typeof a?a.apply(c):a);b+=j(a)+'</td>\n<td class="visitor">';(a=e.userAgent)?a=a.call(c,{hash:{},data:d}):(a=c.userAgent,a="function"===typeof a?a.apply(c):a);return b+=j(a)+"</td>"});
l.queued_thread=k(function(b,c,e,a,d){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,b.helpers);d=d||{};var f=e.helperMissing,g=this.escapeExpression;b='<td class="visitor">\n    <div><a href="javascript:void(0);" class="user-name open-dialog" title="';if((a=e["if"].call(c,c.canOpen,{hash:{},inverse:this.program(3,function(a,b){var c,d;d={hash:{},data:b};return g((c=e.L10n||a.L10n,c?c.call(a,"pending.table.view",d):f.call(a,"L10n","pending.table.view",d)))},d),fn:this.program(1,function(a,b){var c,
d;d={hash:{},data:b};return g((c=e.L10n||a.L10n,c?c.call(a,"pending.table.speak",d):f.call(a,"L10n","pending.table.speak",d)))},d),data:d}))||0===a)b+=a;b+='">';if((a=e["if"].call(c,c.ban,{hash:{},inverse:this.noop,fn:this.program(5,function(a,b){var c,d;c={hash:{},data:b};return c=""+(g((d=e.L10n||a.L10n,d?d.call(a,"chat.client.spam.prefix",c):f.call(a,"L10n","chat.client.spam.prefix",c)))+"&nbsp;")},d),data:d}))||0===a)b+=a;(a=e.userName)?a=a.call(c,{hash:{},data:d}):(a=c.userName,a="function"===
typeof a?a.apply(c):a);b+=g(a)+"</a></div>\n    ";if((a=e["if"].call(c,c.firstMessage,{hash:{},inverse:this.noop,fn:this.program(7,function(a,b){var c,d;c='<div class="first-message"><a href="javascript:void(0);" title="';(d=e.firstMessage)?d=d.call(a,{hash:{},data:b}):(d=a.firstMessage,d="function"===typeof d?d.apply(a):d);c+=g(d)+'">';(d=e.firstMessagePreview)?d=d.call(a,{hash:{},data:b}):(d=a.firstMessagePreview,d="function"===typeof d?d.apply(a):d);return c+=g(d)+"</a></div>"},d),data:d}))||0===
a)b+=a;b+='\n</td>\n<td class="visitor">\n    <div class="default-thread-controls inline-block">\n        ';if((a=e["if"].call(c,c.canOpen,{hash:{},inverse:this.noop,fn:this.program(9,function(a,b){var c,d;c={hash:{},data:b};return c='\n            <div class="control open-dialog open-control inline-block" title="'+(g((d=e.L10n||a.L10n,d?d.call(a,"pending.table.speak",c):f.call(a,"L10n","pending.table.speak",c)))+'"></div>\n        ')},d),data:d}))||0===a)b+=a;b+="\n        ";if((a=e["if"].call(c,
c.canView,{hash:{},inverse:this.noop,fn:this.program(11,function(a,b){var c,d;c={hash:{},data:b};return c='\n            <div class="control view-control inline-block" title="'+(g((d=e.L10n||a.L10n,d?d.call(a,"pending.table.view",c):f.call(a,"L10n","pending.table.view",c)))+'"></div>\n        ')},d),data:d}))||0===a)b+=a;b+="\n        ";if((a=e["if"].call(c,c.tracked,{hash:{},inverse:this.noop,fn:this.program(13,function(a,b){var c,d;c={hash:{},data:b};return c='\n            <div class="control track-control inline-block" title="'+
(g((d=e.L10n||a.L10n,d?d.call(a,"pending.table.tracked",c):f.call(a,"L10n","pending.table.tracked",c)))+'"></div>\n        ')},d),data:d}))||0===a)b+=a;b+="\n        ";if((a=e["if"].call(c,c.canBan,{hash:{},inverse:this.noop,fn:this.program(15,function(a,b){var c,d;c={hash:{},data:b};return c='\n            <div class="control ban-control inline-block" title="'+(g((d=e.L10n||a.L10n,d?d.call(a,"pending.table.ban",c):f.call(a,"L10n","pending.table.ban",c)))+'"></div>\n        ')},d),data:d}))||0===
a)b+=a;b+='\n    </div>\n    <div class="thread-controls inline-block"></div>\n</td>\n<td class="visitor">';if((a=e["if"].call(c,c.userIp,{hash:{},inverse:this.program(19,function(a,b){var c;(c=e.remote)?c=c.call(a,{hash:{},data:b}):(c=a.remote,c="function"===typeof c?c.apply(a):c);return g(c)},d),fn:this.program(17,function(a,c){var b,d;b='<a href="javascript:void(0);" class="geo-link" title="GeoLocation">';(d=e.remote)?d=d.call(a,{hash:{},data:c}):(d=a.remote,d="function"===typeof d?d.apply(a):
d);return b+=g(d)+"</a>"},d),data:d}))||0===a)b+=a;b+='</td>\n<td class="visitor">';(a=e.stateDesc)?a=a.call(c,{hash:{},data:d}):(a=c.stateDesc,a="function"===typeof a?a.apply(c):a);b+=g(a)+'</td>\n<td class="visitor">';(a=e.agentName)?a=a.call(c,{hash:{},data:d}):(a=c.agentName,a="function"===typeof a?a.apply(c):a);b+=g(a)+'</td>\n<td class="visitor"><span class="timesince" data-timestamp="';(a=e.totalTime)?a=a.call(c,{hash:{},data:d}):(a=c.totalTime,a="function"===typeof a?a.apply(c):a);b+=g(a)+
'"></span></td>\n<td class="visitor">';if((a=e.unless.call(c,c.chatting,{hash:{},inverse:this.program(23,function(){return"-"},d),fn:this.program(21,function(a,c){var b,d;b='<span class="timesince" data-timestamp="';(d=e.waitingTime)?d=d.call(a,{hash:{},data:c}):(d=a.waitingTime,d="function"===typeof d?d.apply(a):d);return b+=g(d)+'"></span>'},d),data:d}))||0===a)b+=a;b+='</td>\n<td class="visitor">';if((a=e["if"].call(c,c.ban,{hash:{},inverse:this.program(27,function(a,c){var b;(b=e.userAgent)?b=
b.call(a,{hash:{},data:c}):(b=a.userAgent,b="function"===typeof b?b.apply(a):b);return g(b)},d),fn:this.program(25,function(a){var b;return g((b=(b=a.ban,null==b||!1===b?b:b.reason),"function"===typeof b?b.apply(a):b))},d),data:d}))||0===a)b+=a;return b+"</td>"});l.no_visitors=k(function(b,c,e,a,d){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,b.helpers);d=d||{};var f;b=e.helperMissing;a=this.escapeExpression;d={hash:{},data:d};return c='<td class="no-visitors" colspan="9">'+(a((f=e.L10n||c.L10n,
f?f.call(c,"visitors.no_visitors",d):b.call(c,"L10n","visitors.no_visitors",d)))+"</td>")});l.no_threads=k(function(b,c,e,a,d){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,b.helpers);d=d||{};var f;b=e.helperMissing;a=this.escapeExpression;d={hash:{},data:d};return c='<td class="no-threads" colspan="8">'+(a((f=e.L10n||c.L10n,f?f.call(c,"clients.no_clients",d):b.call(c,"L10n","clients.no_clients",d)))+"</td>")});l.status_panel=k(function(b,c,e,a,d){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,
b.helpers);d=d||{};var f,g=e.helperMissing,h=this.escapeExpression;b='<div id="connstatus">';(a=e.message)?a=a.call(c,{hash:{},data:d}):(a=c.message,a="function"===typeof a?a.apply(c):a);b+=h(a);if((f=e["if"].call(c,(a=c.agent,null==a||!1===a?a:a.away),{hash:{},inverse:this.program(3,function(a,b){var c,d;d={hash:{},data:b};return h((c=e.L10n||a.L10n,c?c.call(a,"pending.status.online",d):g.call(a,"L10n","pending.status.online",d)))},d),fn:this.program(1,function(a,b){var c,d;d={hash:{},data:b};return h((c=
e.L10n||a.L10n,c?c.call(a,"pending.status.away",d):g.call(a,"L10n","pending.status.away",d)))},d),data:d}))||0===f)b+=f;b+='</div><div id="connlinks"><a href="javascript:void(0);" id="change-status">';if((f=e["if"].call(c,(a=c.agent,null==a||!1===a?a:a.away),{hash:{},inverse:this.program(7,function(a,b){var c,d;d={hash:{},data:b};return h((c=e.L10n||a.L10n,c?c.call(a,"pending.status.setaway",d):g.call(a,"L10n","pending.status.setaway",d)))},d),fn:this.program(5,function(a,b){var c,d;d={hash:{},data:b};
return h((c=e.L10n||a.L10n,c?c.call(a,"pending.status.setonline",d):g.call(a,"L10n","pending.status.setonline",d)))},d),data:d}))||0===f)b+=f;return b+"</a></div>"});l.threads_collection=k(function(b,c,e,a,d){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,b.helpers);d=d||{};var f,g=e.helperMissing,h=this.escapeExpression;a={hash:{},data:d};b='<table class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+(h((f=e.L10n||c.L10n,f?f.call(c,"pending.table.head.name",a):g.call(c,"L10n","pending.table.head.name",
a)))+"</th>\n    <th>");a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"pending.table.head.actions",a):g.call(c,"L10n","pending.table.head.actions",a)))+"</th>\n    <th>";a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"pending.table.head.contactid",a):g.call(c,"L10n","pending.table.head.contactid",a)))+"</th>\n    <th>";a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"pending.table.head.state",a):g.call(c,"L10n","pending.table.head.state",a)))+"</th>\n    <th>";a={hash:{},data:d};
b+=h((f=e.L10n||c.L10n,f?f.call(c,"pending.table.head.operator",a):g.call(c,"L10n","pending.table.head.operator",a)))+"</th>\n    <th>";a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"pending.table.head.total",a):g.call(c,"L10n","pending.table.head.total",a)))+"</th>\n    <th>";a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"pending.table.head.waittime",a):g.call(c,"L10n","pending.table.head.waittime",a)))+"</th>\n    <th>";a={hash:{},data:d};return b+=h((f=e.L10n||c.L10n,f?f.call(c,"pending.table.head.etc",
a):g.call(c,"L10n","pending.table.head.etc",a)))+'</th>\n</tr>\n</thead>\n<tbody id="threads-container">\n\n</tbody>\n</table>'});l.visitors_collection=k(function(b,c,e,a,d){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,b.helpers);d=d||{};var f,g=e.helperMissing,h=this.escapeExpression;a={hash:{},data:d};b='<table id="visitorslist" class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+(h((f=e.L10n||c.L10n,f?f.call(c,"visitors.table.head.name",a):g.call(c,"L10n","visitors.table.head.name",
a)))+"</th>\n    <th>");a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"visitors.table.head.actions",a):g.call(c,"L10n","visitors.table.head.actions",a)))+"</th>\n    <th>";a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"visitors.table.head.contactid",a):g.call(c,"L10n","visitors.table.head.contactid",a)))+"</th>\n    <th>";a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"visitors.table.head.firsttimeonsite",a):g.call(c,"L10n","visitors.table.head.firsttimeonsite",a)))+"</th>\n    <th>";
a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"visitors.table.head.lasttimeonsite",a):g.call(c,"L10n","visitors.table.head.lasttimeonsite",a)))+"</th>\n    <th>";a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"visitors.table.head.invited.by",a):g.call(c,"L10n","visitors.table.head.invited.by",a)))+"</th>\n    <th>";a={hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"visitors.table.head.invitationtime",a):g.call(c,"L10n","visitors.table.head.invitationtime",a)))+"</th>\n    <th>";a=
{hash:{},data:d};b+=h((f=e.L10n||c.L10n,f?f.call(c,"visitors.table.head.invitations",a):g.call(c,"L10n","visitors.table.head.invitations",a)))+"</th>\n    <th>";a={hash:{},data:d};return b+=h((f=e.L10n||c.L10n,f?f.call(c,"visitors.table.head.etc",a):g.call(c,"L10n","visitors.table.head.etc",a)))+'</th>\n</tr>\n</thead>\n<tbody id="visitors-container">\n</tbody>\n</table>'});l.agent=k(function(b,c,e,a,d){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,b.helpers);d=d||{};var f=e.helperMissing,g=this.escapeExpression;
b='<span class="agent-status-';if((a=e["if"].call(c,c.away,{hash:{},inverse:this.program(3,function(){return"online"},d),fn:this.program(1,function(){return"away"},d),data:d}))||0===a)b+=a;b+=' inline-block" title="';if((a=e["if"].call(c,c.away,{hash:{},inverse:this.program(7,function(a,b){var c,d;d={hash:{},data:b};return g((c=e.L10n||a.L10n,c?c.call(a,"pending.status.online",d):f.call(a,"L10n","pending.status.online",d)))},d),fn:this.program(5,function(a,b){var c,d;d={hash:{},data:b};return g((c=
e.L10n||a.L10n,c?c.call(a,"pending.status.away",d):f.call(a,"L10n","pending.status.away",d)))},d),data:d}))||0===a)b+=a;b+='"></span>';(a=e.name)?a=a.call(c,{hash:{},data:d}):(a=c.name,a="function"===typeof a?a.apply(c):a);b+=g(a);if((a=e.unless.call(c,c.isLast,{hash:{},inverse:this.noop,fn:this.program(9,function(){return","},d),data:d}))||0===a)b+=a;return b})})();