"use strict";(globalThis.webpackChunk_stlite_desktop=globalThis.webpackChunk_stlite_desktop||[]).push([[291],{20291:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var s=i(5057),o=i(98209),l=i(88707),a=i(46434),r=i(96266);class n extends s.PureComponent{constructor(...e){super(...e),this.formClearHelper=new o.Kz,this.state={value:this.initialValue},this.commitWidgetValue=e=>{this.props.widgetMgr.setIntValue(this.props.element,this.state.value,e)},this.onFormCleared=()=>{this.setState(((e,t)=>({value:t.element.default})),(()=>this.commitWidgetValue({fromUi:!0})))},this.onChange=e=>{this.setState({value:e},(()=>this.commitWidgetValue({fromUi:!0})))}}get initialValue(){const e=this.props.widgetMgr.getIntValue(this.props.element);return void 0!==e?e:this.props.element.default}componentDidMount(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}componentDidUpdate(){this.maybeUpdateFromProtobuf()}componentWillUnmount(){this.formClearHelper.disconnect()}maybeUpdateFromProtobuf(){const{setValue:e}=this.props.element;e&&this.updateFromProtobuf()}updateFromProtobuf(){const{value:e}=this.props.element;this.props.element.setValue=!1,this.setState({value:e},(()=>{this.commitWidgetValue({fromUi:!1})}))}render(){const{options:e,help:t,label:i,labelVisibility:s,formId:o}=this.props.element,{disabled:n,widgetMgr:p}=this.props;return this.formClearHelper.manageFormClearListener(p,o,this.onFormCleared),(0,r.jsx)(l.Z,{label:i,labelVisibility:(0,a.iF)(null===s||void 0===s?void 0:s.value),options:e,disabled:n,width:this.props.width,onChange:this.onChange,value:this.state.value,help:t})}}const p=n}}]);