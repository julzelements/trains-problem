"use strict";

var logRecord = "";

exports.log = (string) => {
    logRecord+= string;
}

 exports.logCapture = () => { 
     return logRecord;
    };
