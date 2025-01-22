
    var loader;
    // document.body.style.backgroundColor = 'white'
    function loadNow(opacity) {
        if (opacity <= 0) {               
            displayContent();      
            // document.body.style.backgroundColor = 'white'                       
        } else {               
            loader.style.opacity = opacity;
              
            window.setTimeout(function() {
                loadNow(opacity - 0.05);
            }, 50);
        }
    }

    function displayContent() {
        loader.style.display = 'none';                   
       
        window.setTimeout(function() {
            document.getElementById('root').style.display = 'block';
            }, 50);
    }

    document.addEventListener("DOMContentLoaded", function() {
        loader = document.getElementById('wrap');
        document.getElementById('root').style.display = 'none'
        
        loadNow(1);
    });
