'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'SmylenSlideout',
  props: {
    showSlideout: {
      type: Boolean,
      default: false,
      required: false
    },
    onClose: {
      type: Function,
      default: function _default() {},
      required: false
    },
    direction: {
      type: String,
      default: 'right',
      required: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    classMap: function classMap() {
      return {
        'smylenSlideout--opened': this.showSlideout,
        'smylenSlideout--closed': !this.showSlideout,
        'smylenSlideout--left': this.direction === 'left'
      };
    }
  },
  methods: {
    onBackdropClick: function onBackdropClick() {
      this.onClose();
    },
    onCloseClick: function onCloseClick() {
      this.onClose();
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "smylenSlideout",
    class: _vm.classMap
  }, [_vm._ssrNode((_vm.showSlideout ? "<div class=\"smylenSlideout__backdrop\" data-v-a32e7860></div>" : "<!---->") + " "), _vm.showSlideout ? _vm._ssrNode("<div class=\"smylenSlideout__slideout\" data-v-a32e7860>", "</div>", [_vm._ssrNode("<a href=\"#\" class=\"smylenSlideout__closeBtn\" data-v-a32e7860>Close</a> "), _vm._ssrNode("<div class=\"smylenSlideout__mainContainer\" data-v-a32e7860>", "</div>", [_vm._t("default")], 2)], 2) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-a32e7860_0", {
    source: ".smylenSlideout__backdrop[data-v-a32e7860]{position:fixed;top:0;left:0;height:100%;width:100%;background:#000;opacity:.7;z-index:99990}.smylenSlideout__slideout[data-v-a32e7860]{position:fixed;right:0;left:auto;z-index:99999;background:#fff;top:0;height:100%;padding:20px}.smylenSlideout--left .smylenSlideout__slideout[data-v-a32e7860]{left:0;right:auto}.smylenSlideout__closeBtn[data-v-a32e7860]{position:absolute;top:10px;right:10px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-a32e7860";
/* module identifier */

var __vue_module_identifier__ = "data-v-a32e7860";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

var install = function installSmylenSlideout(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SmylenSlideout', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;