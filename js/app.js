
'use strict'

let allAray = [];
 
$.get('data/page-1.json').then(data1 => {
    
    data1.forEach(element => {
        let select = new Select(element.image_url, element.title, element.description, element.keyword, element.horns);
        select.render();
    });
});

$.get('data/page-2.json').then(data2 => {
   
    data2.forEach(element => {
        let select = new Select(element.image_url, element.title, element.description, element.keyword, element.horns);
        select.render();

    });
    
});

$("#pag1").click(function(){
    allAray=[];
    $.get('data/page-1.json').then(data1 => {
        $('main section').fadeIn(1000);
        $('main section').remove();
    data1.forEach(element => {
        let select = new Select(element.image_url, element.title, element.description, element.keyword, element.horns);
        select.render();
        select.renderOption();
       
    });
    
});
});



$("#pag2").click(function(){
allAray=[];
    $.get('data/page-2.json').then(data2 => {
        $('main section').fadeIn(1000);
        $('main section').remove();
    data2.forEach(element => {
        let select = new Select(element.image_url, element.title, element.description, element.keyword, element.horns);
        select.render();
        select.renderOption();
     
    });
    
});
});

function Select(image_url, title, description, keyword, horns) {
        this.image_url = image_url;
        this.title = title;
        this.description = description;
        this.keyword = keyword;
        this.horns = horns;
        allAray.push(this);
};



Select.prototype.render = function () {
    
    let element = $('<section></section>');
    element.attr('class', this.keyword)
  
    let innerHtml = `
    <h2>${this.title}</h2>
    <img src="${this.image_url}", width="150px" height="150px">
    <p>${this.description}</p>`;
    element.append(innerHtml);
  
    $('main').append(element);
    console.log($(element))
};




let arr=[];
Select.prototype.renderOption = function () {
 
    let itemSelect = $('<option></option>');
    itemSelect.attr('class', this.keyword)
    itemSelect.attr('value', this.keyword)

    if (!arr.includes(this.keyword))
    {
        arr.push(this.keyword);
        $('select').append(itemSelect);
    }    

    let innerHtml = `
    <p>${this.keyword}</p>`;
    itemSelect.append(innerHtml);

}
    $('select').change(function(){
        let chosen = $(this).val(); 
        console.log(chosen)
        
        $('main section').hide(1000); 
    
        $(`.${chosen}`).fadeIn();
        
        console.log($(`.${chosen}`))
    });


    $("#sortByHorns").click(function () {
        allAray.sort(sortByHorns);
        $('main').empty();
        allAray.forEach(element => {
            element.render();
        });
        console.log(allAray)
    });
    function sortByHorns(a, b) {
        return (a.horns - b.horns);
    }

    $("#sortByTitle").click(function () {
        allAray.sort(sortByTitle);
        $('main').empty();
        allAray.forEach(element => {
            element.render();
        });
        console.log(imageArr)
    });
    function sortByTitle(a, b) {
        return (a.title.localeCompare(b.title));
    }

