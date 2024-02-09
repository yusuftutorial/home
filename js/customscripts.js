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


// buat salin text pada pre code.
<script src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.2.1/highlight.min.js'/>
<script>// Get the <pre> element
const preTag = document.getElementById("myPreTag");

// Create a copy button element
const copyButton = document.createElement("span");
copyButton.innerText = "Copy";
copyButton.classList.add("copy-button");

// Append the copy button to the <pre> tag
preTag.appendChild(copyButton);

// Add click event listener to the copy button
copyButton.addEventListener("click", () => {
  // Hide the copy button temporarily
  copyButton.style.display = "none";

  // Create a range and select the text inside the <pre> tag
  const range = document.createRange();
  range.selectNode(preTag);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Alert the user that the text has been copied
    copyButton.innerText = "Copied!";
    setTimeout(function(){
      copyButton.innerText = "Copy";
    }, 2000);
  } catch (err) {
    console.error("Unable to copy text:", err);
  } finally {
    // Show the copy button again
    copyButton.style.display = "inline";

    // Deselect the text
    window.getSelection().removeAllRanges();
  }
});
</script>