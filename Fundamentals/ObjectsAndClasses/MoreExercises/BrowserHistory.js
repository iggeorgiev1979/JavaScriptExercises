function browser(obj, arr){

    function open(tab){
        obj["Open Tabs"].push(tab);
        obj["Browser Logs"].push(`Open ${tab}`);
    }

    function close(tab){
        let index = obj["Open Tabs"].indexOf(tab);
        if(index != -1){
            obj["Open Tabs"].splice(index, 1);
            obj["Recently Closed"].push(tab);
            obj["Browser Logs"].push(`Close ${tab}`);
        }
    }

    function clear(){
        // obj["Browser Name"] = "";
        obj["Open Tabs"] = [];
        obj["Recently Closed"] = [];
        obj["Browser Logs"] = [];
    }

    for(el of arr){
        let tmp = el.split(" ");
        let command = tmp.shift();
        let name = tmp.join(" ");
        switch(command){
            case "Open":
                open(name);
            break;
            case "Close":
                close(name)
            break;
            case "Clear":
                clear();
            break;
        }
    }

    console.log(`${obj["Browser Name"]}\nOpen Tabs: ${obj["Open Tabs"].join(", ")}\nRecently Closed: ${obj["Recently Closed"].join(", ")}\nBrowser Logs: ${obj["Browser Logs"].join(", ")}`);

}
browser({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)