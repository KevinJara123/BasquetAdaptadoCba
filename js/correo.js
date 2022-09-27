
    /* Contactos*/

    const $form=document.querySelector('#form')
    const $buttonMailto=document.querySelector('#email-1')
    
    $form.addEventListener('submit',handleSubmit)

    function handleSubmit(event){
      event.preventDefault()
      const form =new FormData(this)
      $buttonMailto.setAttribute('href',`mailto:federacion_cordoba_bsr@hotmail.com?subject=${form.get('name')}&body=${form.get('message')}`)
      $buttonMailto.click();

    }
    