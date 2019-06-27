var SITE_URL = 'file:///E:/xampp/htdocs/BalajiInfoway/balajiinfoway.in/';
var site_data

/* Menus */ = {  
    "menus": [
        {  
            "title" : "Home",
            "slug" : "home",
            "file_name" : "home.html",
        },
        {  
            "title" : "About",
            "slug" : "about",
            "file_name" : "about.html",
        },
        {  
            "title" : "Services",
            "slug" : "services",
            "file_name" : "services.html",
        },
        {  
            "title" : "Portfolio",
            "slug" : "portfolio",
            "file_name" : "portfolio.html",
        },
        {  
            "title" : "Contact",
            "slug" : "contact",
            "file_name" : "contact.html",
        },
        {  
            "title" : "Home",
            "slug" : "home",
            "file_name" : "home.html",
        }
    ]  
};



$( site_data['menus'] ).each(function(key, value) {
      $( "#navbarNav_custom" ).append( '<li class="nav-item"><a class="nav-link" href="'+SITE_URL+value['file_name']+'">'+value['title']+'</a></li>' );
    });
    $( "#navbarNav_custom" ).append( '<li class="nav-item"><a class="nav-link custom-btn btn-mid grad-style-cd" href="contact.html" data-toggle="modal" data-target="#get-a-quote-modal">GET A QUOTE</a></li>' );


$(document).ready(function(){
    

    /* Menus */
    

});