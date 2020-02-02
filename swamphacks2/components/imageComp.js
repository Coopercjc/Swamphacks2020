

async function populate() {
    var storage = datab.storage();
    var ref = storage.ref('logo.png');
    let promise = new Promise((resolve, reject) => {
      //setTimeout(() => resolve("done!"), 1000)
      ref.getDownloadURL();
    });
    
    let result = await promise;
    return result;
}

var out = populate().stringfy();
export default {out};