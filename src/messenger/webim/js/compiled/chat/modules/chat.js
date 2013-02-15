/*
 This file is part of Mibew Messenger project.
 http://mibew.org

 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Objects.Models.Controls={};a.Objects.Models.Status={};var j=a.Application;j.module("Chat",{startWithParent:!1}).addInitializer(function(d){var g=a.Objects,c=a.Objects.Models,b=a.Objects.Models.Controls,h=a.Objects.Models.Status,f=new a.Layouts.Chat({model:new Backbone.Model(d.layoutsData.chat||{})});a.Objects.chatLayout=f;j.mainRegion.show(f);c.thread=new a.Models.Thread(d.thread);c.user=new a.Models.ChatUser(d.user);c.page=new a.Models.Page(d.page);var e=new a.Collections.Controls;
c.user.get("isAgent")||(b.userName=new a.Models.UserNameControl({weight:220}),e.add(b.userName),b.sendMail=new a.Models.SendMailControl({weight:200,link:d.links.mailLink}),e.add(b.sendMail));c.user.get("isAgent")&&(b.redirect=new a.Models.RedirectControl({weight:200,link:d.links.redirectLink}),e.add(b.redirect),b.history=new a.Models.HistoryControl({weight:180,link:d.links.historyLink}),e.add(b.history));b.sound=new a.Models.SoundControl({weight:160});e.add(b.sound);b.refresh=new a.Models.RefreshControl({weight:140});
e.add(b.refresh);d.links.sslLink&&(b.secureMode=new a.Models.SecureModeControl({weight:120,link:d.links.sslLink}),e.add(b.secureMode));b.close=new a.Models.CloseControl({weight:100});e.add(b.close);g.Collections.controls=e;f.controlsRegion.show(new a.Views.ControlsCollection({collection:e}));h.message=new a.Models.StatusMessage({hideTimeout:5E3});h.typing=new a.Models.StatusTyping({hideTimeout:5E3});g.Collections.status=new a.Collections.Status([h.message,h.typing]);f.statusRegion.show(new a.Views.StatusCollection({collection:g.Collections.status}));
c.user.get("isAgent")||(c.avatar=new a.Models.Avatar,f.avatarRegion.show(new a.Views.Avatar({model:c.avatar})));g.Collections.messages=new a.Collections.Messages;c.messageForm=new a.Models.MessageForm(d.messageForm);f.messageFormRegion.show(new a.Views.MessageForm({model:c.messageForm}));f.messagesRegion.show(new a.Views.MessagesCollection({collection:g.Collections.messages}));c.sound=new a.Models.Sound;f.soundRegion.show(new a.Views.Sound({model:c.sound}));g.server.callFunctionsPeriodically(function(){var b=
a.Objects.Models.thread,c=a.Objects.Models.user;return[{"function":"update",arguments:{"return":{typing:"typing",canPost:"canPost"},references:{},threadId:b.get("id"),token:b.get("token"),lastId:b.get("lastId"),typed:c.get("typing"),user:!c.get("isAgent")}}]},function(b){b.errorCode?a.Objects.Models.Status.message.setMessage(b.errorMessage||"refresh failed"):(b.typing&&a.Objects.Models.Status.typing.show(),a.Objects.Models.user.set({canPost:b.canPost||!1}))})})})(Mibew);