$('#mysidebar').height($(".nav").height());


$( document ).ready(function() {

    //this script says, if the height of the viewport is greater than 800px, then insert affix class, which makes the nav bar float in a fixed
    // position as your scroll. if you have a lot of nav items, this height may not work for you.
    var h = $(window).height();
    //console.log (h);
    if (h > 800) {
        $( "#mysidebar" ).attr("class", "nav affix");
    }
    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });

    /**
     * AnchorJS
     */
    anchors.add('h2,h3,h4,h5');

});

// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
$(function() {
    var json, tabsState;
    $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href, json, parentId, tabsState;

        tabsState = localStorage.getItem("tabs-state");
        json = JSON.parse(tabsState || "{}");
        parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
        href = $(e.target).attr('href');
        json[parentId] = href;

        return localStorage.setItem("tabs-state", JSON.stringify(json));
    });

    tabsState = localStorage.getItem("tabs-state");
    json = JSON.parse(tabsState || "{}");

    $.each(json, function(containerId, href) {
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });
});



<script src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.2.1/highlight.min.js'/>
<script>/*<![CDATA[*/
!function(e,o){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?o(e,!0):function(e){if(!e.document)throw new Error("A window with a document is required");return o(e)}:o(e)}("undefined"!=typeof window?window:this,function(y,e){if("boolean"!=typeof o)var o=!1;function t(e){var o,m={templateSelector:"#CodeBadgeTemplate",contentSelector:"body",loadDelay:0,copyIconClass:"fa fa-copy",copyIconContent:"",checkIconClass:"fa fa-check text-success",checkIconContent:"",onBeforeCodeCopied:null};function t(){m.loadDelay?setTimeout(n,loadDelay):n()}function n(){if(!document.querySelector(m.templateSelector)){var e=document.createElement("div");e.innerHTML=function(){for(var e=["<style>","@media print {","   .code-badge { display: none; }","}"," .dark-mode .code-badge {","        background: rgba(78,95,109,.10);","    }"," .code-badge-pre {","        position: relative;","    }","    .code-badge {","        display: flex;","        flex-direction: row;","        white-space: normal;","        background: rgba(88,101,111,.63);","        color: #333;","        font-size: 0.875em;","        opacity: 0.5;","        transition: opacity linear 0.5s;","        border-radius: 0 4px 0 4px;","        padding: 5px 8px 5px 8px;","        position: absolute;","        right: 0;","        top: 0;","    }","    .code-badge.active {","        opacity: 0.8;","    }","","    .code-badge:hover {","        opacity: .95;","    }","","    .code-badge a,","    .code-badge a:hover {","        text-decoration: none;","    }","","    .code-badge-language {","        margin-right: 10px;","        font-weight: 600;","        color: goldenrod;","    }","    .fa.text-success:{ color: limegreen !important }","</style>",'<div id="CodeBadgeTemplate" style="display:none">','    <div class="code-badge">','        <div class="code-badge-language" >{{language}}</div>','        <div  id="copyy" title="Salin Code">','            <i class="{{copyIconClass}}"></i></i></a>',"        </div>","     </div>","</div>"],o="",t=0;t<e.length;t++)o+=e[t]+"\n";return o}();var o=e.querySelector("style"),t=e.querySelector(m.templateSelector);document.body.appendChild(o),document.body.appendChild(t)}for(var n=document.querySelector(m.templateSelector).innerHTML,c=document.querySelectorAll("pre>code.hljs"),a=0;a<c.length;a++){var r=c[a];if(!r.querySelector(".code-badge")){for(var d="",l=0;l<r.classList.length;l++){var i=r.classList[l];if("language-"===i.substr(0,9)){d=r.classList[l].replace("language-","");break}if("lang-"===i.substr(0,5)){d=r.classList[l].replace("lang-","");break}if(!d)for(var s=0;s<r.classList.length;s++)if("hljs"!=r.classList[s]){d=r.classList[s];break}}"ps"==(d=d?d.toLowerCase():"text")?d="powershell":"cs"==d?d="csharp":"js"==d?d="javascript":"ts"==d?d="typescript":"fox"==d&&(d="foxpro");var p=n.replace("{{language}}",d).replace("{{copyIconClass}}",m.copyIconClass).trim(),u=document.createElement("div");u.innerHTML=p,u=u.querySelector(".code-badge");var g=r.parentElement;g.classList.add("code-badge-pre"),m.copyIconContent&&(u.querySelector(".code-badge-copy-icon").innerText=m.copyIconContent),g.insertBefore(u,r)}}document.querySelector(m.contentSelector).addEventListener("click",function(e){return e.srcElement.classList.contains("code-badge-copy-icon")&&(e.preventDefault(),e.cancelBubble=!0,function(e){var o=e.srcElement.parentElement.parentElement.parentElement,t=o.querySelector("pre>code"),n=t.textContent||t.innerText;m.onBeforeCodeCopied&&(n=m.onBeforeCodeCopied(n,t));var c=document.createElement("textarea");c.value=n.trim(),document.body.appendChild(c),c.style.display="block",y.document.documentMode?c.setSelectionRange(0,c.value.length):c.select();document.execCommand("copy"),document.body.removeChild(c),function(e){var o=m.copyIconClass.split(" "),t=m.checkIconClass.split(" "),n=e.querySelector(".code-badge-copy-icon");n.innerText=m.checkIconContent;for(var c=0;c<o.length;c++)n.classList.remove(o[c]);for(c=0;c<t.length;c++)n.classList.add(t[c]);setTimeout(function(){n.innerText=m.copyIconContent;for(var e=0;e<t.length;e++)n.classList.remove(t[e]);for(e=0;e<o.length;e++)n.classList.add(o[e])},2e3)}(o)}(e)),!1})}o=e,Object.assign(m,o),"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()}y.highlightJsBadge=t,y.module&&y.module.exports&&(y.module.exports.highlightJsBadge=t),o&&t()});

document.addEventListener("DOMContentLoaded", (event) => {
  var pres = document.querySelectorAll("pre>code");
  for (var i = 0; i < pres.length; i++) {
    hljs.highlightBlock(pres[i]);
  }

  var options = {
    contentSelector: ".post-body",
    loadDelay:0,
    copyIconClass: "code-badge-copy-icon",
    checkIconClass: "code-badge-check-icon",
    onBeforeTextCopied: function(text, codeElement) {
      return text;   
    }
  };
  window.highlightJsBadge(options);
});
function downloadJSAtOnload(){var e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.2.1/highlight.min.js",document.body.appendChild(e)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
/*]]>*/</script>