function deleteData(IDHAPUS) {
    var kuesionerId = IDHAPUS;
    var target_url = "https://jaehyun.herokuapp.com/dlt/" + kuesionerId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}