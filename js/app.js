
'use strict'

$.get('data/page-1.json').then(data => {
    // console.log(data);
    data.forEach(element => {
        let select = new Select(element.image_url, element.title, element.description, element.keyword, element.horns);
        select.render();
    });
});

function Select(image_url, title, description, keyword, horns) {
        this.image_url = image_url;
        this.title = title;
        this.description = description;
        this.keyword = keyword;
        this.horns = horns;
};

Select.prototype.render = function () {
    
   let element= $("#photo-template").clone();
   element.removeAttr('id');
   let itemClone = $('#photo-template').clone();
   itemClone.removeAttr('id');
   let img = $("#photo-template img");
   img.attr("src", this.image_url);
   let h2 = $("#photo-template h2");
   h2.text(this.title);
   let p = $("#photo-template p");
   p.text(this.description);
   $('#container').append(itemClone);
    
   element.appendTo("main");

};