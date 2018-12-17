'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.PickerDefaultProps=exports.PickerPropTypes=exports.EmojiDefaultProps=exports.EmojiPropTypes=undefined;var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var EmojiPropTypes={data:_propTypes2.default.object.isRequired,onPress:_propTypes2.default.func,onLongPress:_propTypes2.default.func,fallback:_propTypes2.default.func,emojiImageFn:_propTypes2.default.func,native:_propTypes2.default.bool,forceSize:_propTypes2.default.bool,tooltip:_propTypes2.default.bool,skin:_propTypes2.default.oneOf([1,2,3,4,5,6]),set:_propTypes2.default.oneOf(['apple','google','twitter','messenger','facebook']),size:_propTypes2.default.number.isRequired,emoji:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.object]).isRequired,useLocalImages:_propTypes2.default.oneOfType([_propTypes2.default.bool,_propTypes2.default.object]),margin:_propTypes2.default.number,noMargin:_propTypes2.default.bool};var EmojiDefaultProps={skin:1,set:'apple',native:false,forceSize:false,tooltip:false,emojiImageFn:function emojiImageFn(image){return image;},onPress:function onPress(){},onLongPress:function onLongPress(){},useLocalImages:false,margin:14,noMargin:false};var PickerPropTypes={onPress:_propTypes2.default.func,onLongPress:_propTypes2.default.func,onSelect:_propTypes2.default.func,onPressClose:_propTypes2.default.func,onSkinChange:_propTypes2.default.func,perLine:_propTypes2.default.number,rows:_propTypes2.default.number,pagesToEagerLoad:_propTypes2.default.number,emojiSize:_propTypes2.default.number,emojiMargin:_propTypes2.default.number,anchorSize:_propTypes2.default.number,i18n:_propTypes2.default.object,style:_propTypes2.default.object,title:_propTypes2.default.string,emoji:_propTypes2.default.string,color:_propTypes2.default.string,set:EmojiPropTypes.set,skin:EmojiPropTypes.skin,native:_propTypes2.default.bool,emojiImageFn:EmojiPropTypes.emojiImageFn,emojisToShowFilter:_propTypes2.default.func,useLocalImages:EmojiPropTypes.useLocalImages,showSkinTones:_propTypes2.default.bool,showAnchors:_propTypes2.default.bool,showCloseButton:_propTypes2.default.bool,emojiTooltip:EmojiPropTypes.tooltip,include:_propTypes2.default.arrayOf(_propTypes2.default.string),exclude:_propTypes2.default.arrayOf(_propTypes2.default.string),recent:_propTypes2.default.arrayOf(_propTypes2.default.string),autoFocus:_propTypes2.default.bool,custom:_propTypes2.default.arrayOf(_propTypes2.default.shape({name:_propTypes2.default.string.isRequired,short_names:_propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,emoticons:_propTypes2.default.arrayOf(_propTypes2.default.string),keywords:_propTypes2.default.arrayOf(_propTypes2.default.string),imageUrl:_propTypes2.default.string.isRequired})),categoryEmojis:_propTypes2.default.objectOf(_propTypes2.default.string),notFound:_propTypes2.default.func,notFoundEmoji:_propTypes2.default.string};var PickerDefaultProps={onPress:function onPress(){},onLongPress:function onLongPress(){},onSelect:function onSelect(){},onPressClose:function onPressClose(){},onSkinChange:function onSkinChange(){},emojiSize:30,emojiMargin:EmojiDefaultProps.margin,anchorSize:24,perLine:7,rows:3,pagesToEagerLoad:2,i18n:{},style:{},title:'Emoji Mart™ Native',emoji:'department_store',color:'#ae65c5',set:EmojiDefaultProps.set,skin:null,defaultSkin:EmojiDefaultProps.skin,native:EmojiDefaultProps.native,emojiImageFn:EmojiDefaultProps.emojiImageFn,emojisToShowFilter:null,useLocalImages:EmojiDefaultProps.useLocalImages,showSkinTones:true,showAnchors:true,showCloseButton:false,emojiTooltip:EmojiDefaultProps.tooltip,autoFocus:false,custom:[],categoryEmojis:{},notFound:function notFound(){},notFoundEmoji:'sleuth_or_spy'};exports.EmojiPropTypes=EmojiPropTypes;exports.EmojiDefaultProps=EmojiDefaultProps;exports.PickerPropTypes=PickerPropTypes;exports.PickerDefaultProps=PickerDefaultProps;