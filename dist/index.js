'use strict';var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require('react'),_react2=_interopRequireDefault(_react),_reactDom=require('react-dom'),_reactDom2=_interopRequireDefault(_reactDom),_propTypes=require('prop-types'),_propTypes2=_interopRequireDefault(_propTypes);Object.defineProperty(exports,'__esModule',{value:!0});require('./style.css');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Carousel=function(a){function b(c){_classCallCheck(this,b);var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return d.scrollNextTo=function(){d.state.scrollValue===-1*(d.props.width*(d.props.carouselItems.length-1))?(d.setState({scrollValue:0,position:0}),d.props.getSelectedPostion(0)):(d.setState({scrollValue:d.state.scrollValue-d.props.width,position:d.state.position+1}),d.props.getSelectedPostion(d.state.position+1))},d.scrollPreviousTo=function(){0===d.state.scrollValue?(d.setState({scrollValue:-1*(d.props.width*(d.props.carouselItems.length-1)),position:d.props.carouselItems.length-1}),d.props.getSelectedPostion(d.props.carouselItems.length-1)):(d.setState({scrollValue:d.state.scrollValue+d.props.width,position:d.state.position-1}),d.props.getSelectedPostion(d.state.position-1))},d.getscrollValueAndStyle=function(){return{transform:'translateX('+d.state.scrollValue+'px)',width:d.props.width+'px',height:d.props.height+'px'}},d.goToCarouselItem=function(e){d.setState({scrollValue:-1*e*d.props.width,position:e})},d.state={scrollValue:0,position:0},d}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){var c=this;this.props.autoPlay&&setInterval(function(){c.scrollNextTo()},this.props.autoPlayInterval)}},{key:'render',value:function render(){var c=this;return _react2.default.createElement('div',null,_react2.default.createElement('div',{className:'carousel',style:{maxWidth:this.props.width}},_react2.default.createElement('div',{className:'horizontal-scroll'},this.props.carouselItems.map(function(d,e){return _react2.default.createElement('div',{key:e,className:'horizontal-scroll-item',style:c.getscrollValueAndStyle()},d)})),_react2.default.createElement('figcaption',{className:'right'},_react2.default.createElement('i',{className:'fa fa-chevron-circle-right','aria-hidden':'true',onClick:function onClick(){return c.scrollNextTo()}})),_react2.default.createElement('figcaption',{className:'left'},_react2.default.createElement('i',{className:'fa fa-chevron-circle-left','aria-hidden':'true',onClick:function onClick(){return c.scrollPreviousTo()}})),this.props.carouselNav?this.props.carouselItems.map(function(d,e){return _react2.default.createElement('figcaption',{key:e,style:{left:2*e+45+'%'},className:'center'},e===c.state.position?_react2.default.createElement('i',{className:'fa fa-circle','aria-hidden':'true',onClick:function onClick(){return c.goToCarouselItem(e)}}):_react2.default.createElement('i',{className:'fa fa-circle-thin','aria-hidden':'true',onClick:function onClick(){return c.goToCarouselItem(e)}}))}):null))}}]),b}(_react2.default.Component);exports.default=Carousel,Carousel.propTypes={width:_propTypes2.default.number,height:_propTypes2.default.number,autoPlay:_propTypes2.default.bool,autoPlayInterval:_propTypes2.default.number,carouselItems:_propTypes2.default.array,carouselNav:_propTypes2.default.bool},Carousel.defaultProps={width:800,height:500,autoPlay:!1,autoPlayInterval:3e3,carouselItems:[],carouselNav:!0};
