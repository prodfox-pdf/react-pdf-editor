let wasm;export function __wbg_set_wasm(e){wasm=e}let cachedInt32Memory0=null;function getInt32Memory0(){return null!==cachedInt32Memory0&&0!==cachedInt32Memory0.byteLength||(cachedInt32Memory0=new Int32Array(wasm.memory.buffer)),cachedInt32Memory0}const lTextDecoder="undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder;let cachedTextDecoder=new lTextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});cachedTextDecoder.decode();let cachedUint8Memory0=null;function getUint8Memory0(){return null!==cachedUint8Memory0&&0!==cachedUint8Memory0.byteLength||(cachedUint8Memory0=new Uint8Array(wasm.memory.buffer)),cachedUint8Memory0}function getStringFromWasm0(e,t){return e>>>=0,cachedTextDecoder.decode(getUint8Memory0().subarray(e,e+t))}export function greet(){let e,t;try{const c=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.greet(c);var r=getInt32Memory0()[c/4+0],n=getInt32Memory0()[c/4+1];return e=r,t=n,getStringFromWasm0(r,n)}finally{wasm.__wbindgen_add_to_stack_pointer(16),wasm.__wbindgen_free(e,t,1)}}