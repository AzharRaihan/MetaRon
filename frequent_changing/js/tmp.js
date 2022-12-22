function get_all_information_of_future_sale_from_indexeddb_kot_checker(sale_no_new) {
    return new Promise(function (resolve, reject) {
        let objectStore = db.transaction(['kot_print_data'], "readwrite").objectStore("kot_print_data");
        let response = null;
        objectStore.openCursor().onsuccess = function(event) {
            let cursor = event.target.result;
            if (cursor) {
                if(cursor.value.sale_no_new == sale_no_new) {
                    let orderData = cursor.value;
                    resolve(1);
                }
                cursor.continue();
            }
        };
        objectStore.onerror = function(event) {
            reject(event)
        }
    })
}