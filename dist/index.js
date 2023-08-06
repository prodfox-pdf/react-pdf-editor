"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateIframeAndLoadViewer = void 0;
var _react = require("react");
require("pdfjs-dist/web/pdf_viewer.css");
var useCreateIframeAndLoadViewer = function useCreateIframeAndLoadViewer(_ref) {
  var file = _ref.file,
    fileName = _ref.fileName,
    tools = _ref.tools,
    container = _ref.container;
  var done = (0, _react.useRef)(false);
  var createIframe = function createIframe() {
    var iframe = document.createElement('iframe');
    iframe.src = "".concat(process.env.PUBLIC_URL, "/dist/index.html");
    iframe.id = "webviewer-1";
    iframe.title = "webviewer";
    iframe.frameBorder = "0";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.margin = "0px";
    iframe.style.padding = "0px";
    iframe.style.display = "block";
    iframe.allowFullscreen = true;
    // @ts-ignore
    iframe["webkitallowfullscreen"] = true;
    // @ts-ignore
    iframe["mozallowfullscreen"] = true;

    // When the iframe is loaded, post the file to it
    iframe.onload = function () {
      // @ts-ignore
      iframe.contentWindow.postMessage({
        file: file,
        fileName: fileName,
        tools: tools
      }, '*');
    };
    container.current.appendChild(iframe);
  };
  var handleVisibilityChange = function handleVisibilityChange() {
    if (!document.hidden) {
      var iframe = document.getElementById('webviewer-1');
      if (iframe) {
        iframe.remove();
      }
      createIframe();
    }
  };
  (0, _react.useEffect)(function () {
    if (!(container !== null && container !== void 0 && container.current)) {
      return;
    }
    if (done.current) {
      return;
    }
    done.current = true;
    createIframe();
  }, [container, file]);
  (0, _react.useEffect)(function () {
    document.addEventListener('click', function () {
      // @ts-ignore
      var iframeWin = document.getElementById('webviewer-1').contentWindow;
      iframeWin.postMessage('clickedOutside', '*');
    });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return function () {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  var download = function download() {
    var _document;
    // @ts-ignore
    var iframeWin = (_document = document) === null || _document === void 0 || (_document = _document.getElementById('webviewer-1')) === null || _document === void 0 ? void 0 : _document.contentWindow;
    iframeWin.postMessage({
      type: 'download'
    }, '*');
  };
  return {
    download: download
  };
};
exports.useCreateIframeAndLoadViewer = useCreateIframeAndLoadViewer;