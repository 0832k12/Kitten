(this.webpackJsonp=this.webpackJsonp||[]).push([[50],{CGJY:function(e,o,t){e.exports={block_to_image_dialog:"block_to_image_dialog--3aYWo",blocktoimage_icn_close:"blocktoimage_icn_close--Pkbpr",block_image_wrap:"block_image_wrap--2Xq6U",btn_download:"btn_download--1JpbB"}},jcXd:function(e,o,t){"use strict";t.r(o),t.d(o,"BlockToImageDialogComponent",(function(){return v}));var i=t("lwsE"),a=t.n(i),n=t("W8MJ"),_=t.n(n),c=t("a1gu"),l=t.n(c),s=t("Nsbk"),g=t.n(s),r=t("PJYZ"),m=t.n(r),b=t("7W2i"),d=t.n(b),k=t("q1tI"),p=t("ANjH"),u=t("/MKj"),h=t("G72A"),f=t("CG87");t("CGJY");var w=function(e){function o(e){var t;return a()(this,o),(t=l()(this,g()(o).call(this,e))).state={block_image_src:""},t.on_request_close=t.on_request_close.bind(m()(t)),t.download_image=t.download_image.bind(m()(t)),t}return d()(o,e),_()(o,[{key:"UNSAFE_componentWillMount",value:function(){""===this.state.block_image_src&&this.props.block_to_image_dialog_setting&&this.props.block_to_image_dialog_setting.block_image_base64&&this.setState({block_image_src:this.props.block_to_image_dialog_setting.block_image_base64})}},{key:"componentWillUnmount",value:function(){this.props.set_dialog_props({block_to_image_dialog_setting:void 0})}},{key:"on_request_close",value:function(){this.props.close_dialog({dialog_type:"block_to_image"})}},{key:"download_image",value:function(){var e=document.createElement("a");e.href=this.state.block_image_src,e.download="".concat(Blockly.Msg.BLOCK_IMAGE_FILENAME,".png"),e.click()}},{key:"render",value:function(){return k.createElement(f.a,{type:"block_to_image",on_request_close:this.on_request_close.bind(this),close_btn:!1},k.createElement("div",{className:"block_to_image_dialog--3aYWo"},k.createElement("i",{className:"blocktoimage_icn_close--Pkbpr",onClick:this.on_request_close}),k.createElement("div",{className:"block_image_wrap--2Xq6U"},k.createElement("img",{src:this.state.block_image_src,alt:"block_image.png"})),k.createElement("i",{className:"btn_download--1JpbB",onClick:this.download_image})))}}]),o}(k.Component);var v=Object(u.connect)((function(e){return{block_to_image_dialog_setting:e.dialog_state.setting.block_to_image_dialog_setting}}),(function(e){return Object(p.bindActionCreators)({set_dialog_props:h.f,close_dialog:h.c},e)}))(w)}}]);