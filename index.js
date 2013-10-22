
var NS = 'http://www.w3.org/2000/svg';

module.exports = function (title, svg, styles) {
  var div = document.createElement('div')
    , next = svg.nextSibling
    , parent = svg.parentNode
    , src;
  if (!svg.querySelector('style')) {
    svg.insertBefore(document.createElementNS(NS, 'style'), svg.firstChild);
  }
  svg.setAttribute('title', title);
  svg.setAttribute('version', 1.1);
  svg.setAttribute('xmlns', NS);
  svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  div.appendChild(svg);
  src = div.innerHTML;
  if (next) {
    parent.insertBefore(svg, next);
  } else {
    parent.appendChild(svg);
  }
  src = src.replace('<style>', '<style>/* <![CDATA[ */' + styles + '/* ]]> */');
  return 'data:image/svg+xml;base64,' + btoa(src);
}
