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
    showClose: {
      type: Boolean,
      default: true,
      required: false
    },
    onClose: {
      type: Function,
      default: () => {},
      required: false
    },
    direction: {
      type: String,
      default: 'right',
      required: false
    }
  },

  data() {
    return {};
  },

  computed: {
    classMap() {
      return {
        'smylenSlideout--opened': this.showSlideout,
        'smylenSlideout--closed': !this.showSlideout,
        'smylenSlideout--left': this.direction === 'left'
      };
    }

  },
  methods: {
    onBackdropClick() {
      this.onClose();
    },

    onCloseClick() {
      this.onClose();
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "smylenSlideout",
    class: _vm.classMap
  }, [_vm.showSlideout ? _c('div', {
    staticClass: "smylenSlideout__backdrop",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.onBackdropClick($event);
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.showSlideout ? _c('div', {
    staticClass: "smylenSlideout__slideout"
  }, [_vm.showClose ? _c('a', {
    staticClass: "smylenSlideout__closeBtn",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.onCloseClick($event);
      }
    }
  }, [_vm._v("Close")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "smylenSlideout__mainContainer"
  }, [_vm._t("default")], 2)]) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-49755c9c_0", {
    source: ".smylenSlideout__backdrop[data-v-49755c9c]{position:fixed;top:0;left:0;height:100%;width:100%;background:#000;opacity:.7;z-index:99990}.smylenSlideout__slideout[data-v-49755c9c]{position:fixed;right:0;left:auto;z-index:99999;background:#fff;top:0;height:100%;padding:20px}.smylenSlideout--left .smylenSlideout__slideout[data-v-49755c9c]{left:0;right:auto}.smylenSlideout__closeBtn[data-v-49755c9c]{position:absolute;top:10px;right:10px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-49755c9c";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component

const install = function installSmylenSlideout(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SmylenSlideout', __vue_component__);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;
