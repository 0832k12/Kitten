(this.webpackJsonp=this.webpackJsonp||[]).push([[30],{Ei7i:function(e,a,t){e.exports={switch_container:"switch_container--1EOJD",switch:"switch--3ek9e",slider:"slider--3HViH"}},FAGs:function(e,a,t){e.exports={wrapper:"wrapper--13DQD",flex1:"flex1--2l1Ka",h_flex:"h_flex--6EF2u",v_center:"v_center--2mJZx",v_flex:"v_flex--1ebW7",vh_center:"vh_center--1FukW",h_start:"h_start--3TPCm",h_end:"h_end--1TKMw",h_center:"h_center--2X66M",clickable:"clickable--3XzoQ",confirm:"confirm--D5Orc",dialog:"dialog--kxdHl",content:"content--271p_",showDialog:"showDialog--14D95","wrapper--appear--active":"wrapper--appear--active--2Jpr2","wrapper--appear":"wrapper--appear--OAn4r",mask:"mask--OFgPn",material:"material--3RLSt",showMask:"showMask--d5CAx",dialog_btn_close:"dialog_btn_close--bbqF2",model_panel_container:"model_panel_container--11A3I",model_panel_close_button:"model_panel_close_button--1GvF0",model_panel_main_header:"model_panel_main_header--13B7N",model_panel_model_name:"model_panel_model_name--1t726",model_panel_data_header:"model_panel_data_header--3yUWX",model_panel_hr:"model_panel_hr--i94w2",model_panel_data_item:"model_panel_data_item--unhDh",model_panel_running:"model_panel_running--3sTjc",model_panel_save_button:"model_panel_save_button--3ruYA"}},ncQP:function(e,a,t){"use strict";t.r(a),t.d(a,"ModelPanel",(function(){return D})),t.d(a,"GameAIDiagram",(function(){return M}));var n=t("lwsE"),l=t.n(n),r=t("W8MJ"),_=t.n(r),o=t("a1gu"),s=t.n(o),i=t("Nsbk"),c=t.n(i),d=t("7W2i"),p=t.n(d),m=t("kNvX"),u=t.n(m),h=t("q1tI"),g=t("doQp"),v=t.n(g),k=t("2OET"),b=t("Vbab");t("Ei7i");var f=function(e){function a(){var e,t;l()(this,a);for(var n=arguments.length,r=new Array(n),_=0;_<n;_++)r[_]=arguments[_];return(t=s()(this,(e=c()(a)).call.apply(e,[this].concat(r)))).toggle_mode=function(){t.props.set_status(!t.props.current_status)},t}return p()(a,e),_()(a,[{key:"render",value:function(){return h.createElement("div",{className:"switch_container--1EOJD"},this.props.label,h.createElement("label",{className:"switch--3ek9e"},h.createElement("input",{type:"checkbox",name:"mode",checked:this.props.current_status,onClick:this.toggle_mode}),h.createElement("span",{className:"slider--3HViH"})))}}]),a}(h.Component),w=t("1/M+"),A=t("hLD+"),E=t("QU3j"),y=(t("FAGs"),{"./style.scss":{flex1:"flex1--2l1Ka",h_flex:"h_flex--6EF2u",v_center:"v_center--2mJZx",v_flex:"v_flex--1ebW7",vh_center:"vh_center--1FukW",h_start:"h_start--3TPCm",h_end:"h_end--1TKMw",h_center:"h_center--2X66M",clickable:"clickable--3XzoQ",wrapper:"wrapper--13DQD",confirm:"confirm--D5Orc",dialog:"dialog--kxdHl",content:"content--271p_",showDialog:"showDialog--14D95","wrapper--appear--active":"wrapper--appear--active--2Jpr2","wrapper--appear":"wrapper--appear--OAn4r",mask:"mask--OFgPn",material:"material--3RLSt",showMask:"showMask--d5CAx",dialog_btn_close:"dialog_btn_close--bbqF2",model_panel_container:"model_panel_container--11A3I",model_panel_close_button:"model_panel_close_button--1GvF0",model_panel_main_header:"model_panel_main_header--13B7N",model_panel_model_name:"model_panel_model_name--1t726",model_panel_data_header:"model_panel_data_header--3yUWX",model_panel_hr:"model_panel_hr--i94w2",model_panel_data_item:"model_panel_data_item--unhDh",model_panel_running:"model_panel_running--3sTjc",model_panel_save_button:"model_panel_save_button--3ruYA"}});var N=["backPropagation","evolution"],D=function(e){function a(e){var t;return l()(this,a),(t=s()(this,c()(a).call(this,e))).hide_panel=function(){t.setState({is_visible:!1})},t.state=E.f,t}return p()(a,e),_()(a,[{key:"componentDidMount",value:function(){var e=this;A.a.register_model_panel((function(a){e.setState(a)}),(function(){return e.state}))}},{key:"get_gen_str",value:function(e){return"en"===Object(b.e)()?"".concat(this.get_num_with_ordinal_suffix(e),": "):"第".concat(e,"代: ")}},{key:"get_num_with_ordinal_suffix",value:function(e){var a=["th","st","nd","rd"],t=e%100;return"".concat(e).concat(a[(t-20)%10]||a[t]||a[0])}},{key:"get_action_str",value:function(e){return"".concat(this.props.intl.formatMessage({id:"action",defaultMessage:"Action"})," ").concat(e,": ")}},{key:"get_no_data_str",value:function(){return this.props.intl.formatMessage({id:"auto_player_no_corresponding_data",defaultMessage:"No data"})}},{key:"get_running_str",value:function(){return this.props.intl.formatMessage({id:"auto_player_running",defaultMessage:"Running"})}},{key:"training_button_is_clicked",value:function(){w.a&&w.a.auto_controller.kill_all_actors_and_stop()}},{key:"show_details",value:function(){var e=this,a=this.state.details.length;return this.state.details.map((function(t,n){var l=[];switch(t.type){case E.b.Generation:l.push(e.get_gen_str(t.index));break;case E.b.Action:l.push(e.get_action_str(t.index));break;case E.b.Empty:}switch(t.data){case E.c:l.push(e.get_no_data_str());break;case E.d:l.push(e.get_running_str());break;default:l.push(t.data)}var r=l.join(""),_="model_panel_data_item";return n===a-1&&e.state.panel_type===E.a.UNSUPERVISED&&(_+=" model_panel_running"),h.createElement("li",{key:t.id,className:u()(_,y,{autoResolveMultipleImports:!0,handleMissingStyleName:"warn"})},r)}))}},{key:"show_summary",value:function(){var e=this.state.summary,a=[];switch(e.type){case E.e.Empty:a.push(this.get_no_data_str());break;case E.e.Action:a.push(e.data);break;case E.e.Generation:a.push(this.get_gen_str(e.index)),a.push(e.data)}var t=a.join("");return h.createElement("div",{className:"model_panel_data_item--unhDh"},t)}},{key:"get_header_content_id",value:function(e){var a;switch("".concat(e,"_").concat(this.state.panel_type)){case"".concat("DETAIL","_").concat(E.a.SUPERVISED):a="auto_player_action_data_record";break;case"".concat("SUMMARY","_").concat(E.a.SUPERVISED):a="auto_player_iteration_num";break;case"".concat("DETAIL","_").concat(E.a.UNSUPERVISED):a="auto_player_score_record";break;case"".concat("SUMMARY","_").concat(E.a.UNSUPERVISED):a="auto_player_highest_score";break;default:a="unknown_title"}return a}},{key:"get_switch",value:function(){var e=this;return this.state.panel_type===E.a.UNSUPERVISED&&h.createElement(f,{current_status:this.state.is_quick_mode,set_status:function(){var a=!e.state.is_quick_mode;e.setState({is_quick_mode:a}),w.a&&w.a.auto_controller.set_current_mode(a)},label:this.props.intl.formatMessage({id:"auto_player_quick_mode"})})}},{key:"render",value:function(){return this.state.is_visible&&h.createElement(v.a,{bounds:"#theater-panel",defaultPosition:{x:-8,y:-8}},h.createElement("div",{className:"model_panel_container--11A3I"},h.createElement("div",{className:"model_panel_close_button--1GvF0"},h.createElement("img",{src:t("zh0p"),onClick:this.hide_panel})),h.createElement("div",{className:"model_panel_main_header--13B7N"},h.createElement("div",{className:"model_panel_model_name--1t726"},this.state.cur_model_name)),h.createElement("div",{className:"model_panel_data_header--3yUWX"},this.props.intl.formatMessage({id:N[this.state.panel_type]||"unknown_algorithm"})),this.get_switch(),h.createElement("hr",{className:"model_panel_hr--i94w2"}),h.createElement("div",{className:"model_panel_data_header--3yUWX"},this.props.intl.formatMessage({id:this.get_header_content_id("DETAIL")})),h.createElement("div",null,h.createElement("ul",null,this.show_details())),h.createElement("div",{className:"model_panel_data_header--3yUWX"},this.props.intl.formatMessage({id:this.get_header_content_id("SUMMARY")})),this.show_summary(),h.createElement("hr",{className:"model_panel_hr--i94w2"}),h.createElement("div",{className:"model_panel_save_button--3ruYA",onClick:this.training_button_is_clicked},this.props.intl.formatMessage({id:"auto_player_save_button_content"}))))}}]),a}(h.Component),M=Object(k.b)(D)},zh0p:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAAAXNSR0IArs4c6QAAAbtJREFUOBGVlDFSw0AMRePM5AhQcIW45CCkyKV8D/cZzkFLYSYNDUUoU2UozH+ytJEXEwbNbLSr//VX1u5mtZKN4zjgy0SBsfHAaIgv+gZIizYmq588wWuxek9sG5nPbYu9wLPGxoKaYJfJje/yOwrBThpbm+knggQAGBbsmITljajiN+tic6rBLgTkTVaebVoNMwBKzratEgyDuHEWn1IUNEc5Sjra9q6w84TsroRgCkW516CUQWMfWPEKztqhdba1ERWJLakxWxzDdOoJ4UPiY06oaB3kfbkMXkeL16m/igT5zuNvZGULpXLIDp6nQqe0TyndCzCyQqbuis8oHj2L5sbxEaLe+MDZZQNcss5VJydGKGfybkbKC7Ho61JSFmAO56bQrVOsxer19TOEcGdyRTSERtGc3CwtzYiBwYnmAaCxodtcwNpIiveQ32cdq/N6BOuHlUlFmD6zicZS1ZFzhsTTWLIiJhChv6pDY0Aw/iMIYFx8u4XydUV5E/oYj0RTs+nNahpP0OPW7JocGB4sHwix+RVSgFPrQP5p5JQ3d/23TrdbBN7Qk49H+QeHP+RfNA4MPdYvjxf3Dc9+aKZZlhzHAAAAAElFTkSuQmCC"}}]);