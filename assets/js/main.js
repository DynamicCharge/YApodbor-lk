document.addEventListener("DOMContentLoaded", (event) => {
    var documents = document.querySelectorAll("[data-document-modal]");
    for (var i = 0; i < documents.length; i++) {
        documents[i].onclick = function(e){
        e.preventDefault();

        let $this = e.target,
        dataName = $this.getAttribute('data-document-name'),
        dataDesc = $this.getAttribute('data-document-desc'),
        dataText = $this.getAttribute('data-document-text'),

        isSigned = $this.getAttribute('data-document-signed'),

        $overlay = document.querySelector('.new-lk__overlay'),
        $modal = document.querySelector('.new-lk__modal'),

        $name = $modal.querySelector('.modal-name'),
        $desc = $modal.querySelector('.modal-desc'),
        $text = $modal.querySelector('.new-lk__modal-text');

        if(!$modal.classList.contains('_active')) {
            // $name.innerHTML = dataName;
            // $desc.innerHTML = dataDesc;
            // $text.innerHTML = dataText;

            if(isSigned == 'Y') {
                $modal.classList.add('--signed');
                $modal.querySelector('.new-lk__modal-check').setAttribute('checked', true)
            }

            console.log(isSigned);

            $overlay.classList.add('_active');
            $modal.classList.add('_active');            
        }
      };
    }

    var close = document.querySelectorAll('[data-document-close]');
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function(e){
            let $overlay = document.querySelector('.new-lk__overlay'),
            $modal = document.querySelector('.new-lk__modal');

            $overlay.classList.remove('_active');
            $modal.classList.remove('_active');
        }
    }

    let check = document.querySelector('.new-lk__modal-check');
    if(check){
        check.onchange = function() {
            let $modal = document.querySelector('.new-lk__modal'),
            $checkoutBtn = $modal.querySelector('.new-lk__modal-checkout');
            
            $checkoutBtn.classList.toggle('_active');
        }
    }

    let expand = document.querySelector('.new-lk__modal-expand');
    if(expand){
        expand.onclick = function() {
            let $modal = document.querySelector('.new-lk__modal');
    
            $modal.classList.toggle('_expanded');
        }        
    }


    $('.new-graduation__select').each(function(){
        let $this = $(this);

        $this.selectmenu();
    });

    $('[data-num-only]').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');        
    });
});