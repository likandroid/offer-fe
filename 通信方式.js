/**
 * iframe跨域通信方法
 * contentWindow 兼容各个浏览器，可取得子窗口的 window 对象。
 * 接受 window.addEventListener("message", (event: MessageEvent) => {
 *  if (type === 'outputScene') {}
 * }
 * 
 * 发送信息 this.iframe.contentWindow.postMessage(inputScene, window.origin);
 */

(() => {
  console.time('12');
  setTimeout(() => {
    console.timeEnd('12')
  }, 1000);
})()