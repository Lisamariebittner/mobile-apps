/*import Framework7 from "framework7";

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License. test
 */

function locationupdaten() {
    navigator.geolocation.getCurrentPosition(
        function(pos) {
            let card = document.getElementById("locationcard"); 
            card.innerText = "lat = " + pos.coords.latitude + "\r" +
                         "long = " + pos.coords.longitude;
        }
        , 
        function(err) {
            alert("Unable to retrieve position: " + err)
        }
    );
}
 
function bodyGeladen(){
    if(window.usingCordova) {
        //Native App
        console.log("In der nativen Anwendung");
    } else {
        //Browser
        console.log("Im Browser");
        initApp();
            if ('serviceWorker' in navigator) {
                console.log("Service Worker läuft");
                navigator.serviceWorker.register('service-worker.js');
              } //service Worker implementiert
    }
} 

function initApp(){
    console.log("Starting framework7 app...");
    var app = new Framework7({
        root: '#app',
        name: 'My App',
        id: 'com.myapp.test',
        panel: {
        swipe: 'left',
        }
     });
}

document.addEventListener("deviceready", initApp, false);


