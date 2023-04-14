const keywords = [
  "New Startup in on way!",
  "Creative",
  "UX Design",
  "UI Design",
  "Product Des",
  "Creative",
  "UX Design",
  "UI Design",
  "Product Des",
  "Azerbaijan",
];

let selectedKeywordsArray = [];

const inputKeywords = $("#input-keywords");

function addKeyword(e, keyword) {
  keyword !== ""
    ? selectedKeywordsArray.length > 0
      ? selectedKeywordsArray.find(
          (item) => item.toLowerCase() === keyword.toLowerCase()
        )
        ? ""
        : selectedKeywordsArray.push(`${keyword}`)
      : selectedKeywordsArray.push(`${keyword}`)
    : "";
  selectedKeywords();
}

function deleteKeyword(e, keywordId) {
  selectedKeywordsArray = selectedKeywordsArray.filter(
    (item, id) => id !== keywordId
  );
  selectedKeywords();
}

function selectedKeywords() {
  inputKeywords.empty();
  selectedKeywordsArray.map((keyword, id) =>
    inputKeywords.append(
      `<span data-index=${id} id="input-keyword-${
        id + 1
      }" class="keyword gap-2">${keyword} <span data-index=${id} onclick="deleteKeyword(this,${id})"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16992 14.8299L14.8299 9.16992" stroke="#115EED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8299 14.8299L9.16992 9.16992" stroke="#115EED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span></span>`
    )
  );
}

keywords.map((keyword, id) =>
  $("#keywords").append(
    `<span id="keyword-${
      id + 1
    }" data-keyword="${keyword}" onclick="addKeyword(this,'${keyword}')" class="keyword hover:scale-105 transition-all">${keyword}</span>`
  )
);

$("#search").keypress((e) => {
  const keycode = e.keyCode ? e.keyCode : e.which;
  if (keycode == "13") {
    addKeyword(this, e.target.value);
    e.target.value = "";
  }
});
