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
    * under the License.
    */
    var app = {
        // Application Constructor
        initialize: function() {
            this.bindEvents();
        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
            
            console.log(data);
            console.log(data[0].name);
            
            // Navigator pushPage
            document.addEventListener('init', function(event) {
                var page = event.target;
                
                
                
                if (page.id === 'page1') {
                    var infiniteList = document.getElementById('infinite-list');
                    
                    
                    
                    // Infinite Listing
                    infiniteList.delegate = {
                        
                        createItemContent: function(i) {
                            
                            
                            
                            return ons.createElement(
                                // '<ons-list-item>' + data[i].name + '<hr>' +
                                // '<ons-button id="push-button-' + i + '" onclick="document.querySelector(\'#myNavigator\').pushPage(\'page2.html\', {data: {title: \'Page ' + i + '\',content: \'Client : ' + data[i].name + '\'}});" >Infos</ons-button>' + '</ons-list-item>');
                                `
                                <ons-list-item> + ${data[i].company} <hr>
                                <ons-button id="push-button-${i}"
                                onclick="document.querySelector('#myNavigator')
                                .pushPage('page2.html',
                                {data:
                                    {title: 'Page ${i}',
                                    name: '${data[i].name}',
                                    picture: '${data[i].picture}',
                                    company: '${data[i].company}',
                                    address: '${data[i].address}',
                                    phone: '${data[i].phone}'
                                }
                            }
                        );" >
                        Infos
                        </ons-button>
                        </ons-list-item>
                        `
                    );
                    
                },
                countItems: function() {
                    return 14;
                    
                }
            };
            
            
            
            infiniteList.refresh();
            
            // page.querySelector('#push-button').onclick = function() {
            //     document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
            // };
            
        } else if (page.id === 'page2') {
            page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
            page.querySelector('#page-name').innerHTML = page.data.name;
            page.querySelector('#page-picture').innerHTML = '<img src="' + page.data.picture + '" alt="Photo de profil" width="128" height="128">'
            page.querySelector('#page-company').innerHTML = page.data.company;
            page.querySelector('#page-address').innerHTML = page.data.address;
            page.querySelector('#page-phone').innerHTML = page.data.phone;
            
            // SCRIPT FOR PDF.FILE
            
            /*
            * Let's demonstrate string splitting with the first page of Shakespeare's Romeo and Juliet!
            * We'll use a 8.5 x 11 inch sheet, measuring everything in inches.
            */
            var pageWidth = 210,
            lineHeight = 1.5,
            margin = 12,
            maxLineWidth = pageWidth - margin * 2,
            fontSize = 14,
            ptsPerInch = 72,
            oneLineHeight = fontSize * lineHeight / ptsPerInch,
            text = 'Two households, both alike in dignity,\n' +
            'In fair Verona, where we lay our scene,\n' +
            'From ancient grudge break to new mutiny,\n' +
            'Where civil blood makes civil hands unclean.\n' +
            'From forth the fatal loins of these two foes\n' +
            'A pair of star-cross\'d lovers take their life;\n' +
            'Whole misadventured piteous overthrows\n' +
            'Do with their death bury their parents\' strife.\n' +
            'The fearful passage of their death-mark\'d love,\n' +
            'And the continuance of their parents\' rage,\n' +
            // Notice that the following will be wrapped to two lines automatically!
            'Which, but their children\'s end, nought could remove, Is now the two hours\' traffic of our stage;\n' +
            'The which if you with patient ears attend,\n' +
            'What here shall miss, our toil shall strive to mend.',
            pdf = new jsPDF({
                unit: 'mm',
                format:'a4',
                lineHeight: lineHeight
            }).setProperties({ title: 'String Splitting' });
            
            
            
            
            var button = document.querySelector('.btn--test');
            
            var clientName = page.data.name;
            var clientID = page.data.title;
            var clientAddress = page.data.address;
            var clientDate = page.data.phone;
            
            var textInfo = 
            `
            ${clientID}
            ${clientName}
            ${clientAddress}
            ${clientDate}
            `
            ;
            
            button.addEventListener('click', printPDF);
            
            function printPDF() {
                // Title : INVOICE
                pdf
                .setFontStyle('bold')
                .setFont('helvetica', 'neue')
                .setFontSize(fontSize * 2)
                .text('INVOICE', margin, margin + oneLineHeight);
                
                // Datas : Informations of the client
                pdf
                .setFont('helvetica', 'neue')
                .setFontSize(fontSize)
                .text(textInfo, margin, margin + 10);
                
                // splitTextToSize takes your string and turns it in to an array of strings,
                // each of which can be displayed within the specified maxLineWidth.
                var textLines = pdf
                .setFont('helvetica', 'neue')
                .setFontSize(fontSize)
                .splitTextToSize(text, maxLineWidth);
                
                // pdf.text can now add those lines easily; otherwise, it would have run text off the screen!
                pdf.text(textLines, margin, 80);
                
                
                
                
                pdf.save('a4_invoice.pdf');
            }
            
            
            
            
            /*
            * Testin another way to export the pdf file
            * With regular units
            */
            
            // var pdf = new jsPDF();
            
            // var button = document.querySelector('.btn--test');
            // var input = document.querySelector('.input--test');
            
            // button.addEventListener('click', printPDF);
            
            // function printPDF() {
            //     // Designing the PDF
            //     pdf.setFont("helvetica");
            //     pdf.setFontType("bold");
            //     pdf.text(20,50, `The title is : ${input.value}`);
            //     pdf.text(20, 80, 'This is client-side Javascript, pumping out a PDF.');
            //     pdf.save('a4_invoice.pdf');
            //     // pdf.autoPrint();
            // }
        }
    });
    
    // Infinite Listing       
    // ons.ready(function() {
    //     var infiniteList = document.getElementById('infinite-list');
    
    //     infiniteList.delegate = {
    //       createItemContent: function(i) {
    //         return ons.createElement('<ons-list-item>Item ' + i + '<ons-button class="push-button">Push page</ons-button>' + '</ons-list-item>');
    //       },
    //       countItems: function() {
    //         return 30;
    //       }
    //     };
    
    //     infiniteList.refresh();
    //   });
},
// deviceready Event Handler
//
// The scope of 'this' is the event. In order to call the 'receivedEvent'
// function, we must explicitly call 'app.receivedEvent(...);'
onDeviceReady: function() {
    app.receivedEvent('deviceready');
    console.log('This Device is ready !')
},
// Update DOM on a Received Event
receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    
    console.log('Received Event: ' + id);
}

};







// Testing search function exe



setTimeout(function(){
    // Get input element
    let filterInput = document.getElementById('filterInput');

    // Add event listener
    filterInput.addEventListener('keyup', filterNames);
    
    
    function filterNames(){
        // Get value of input
        let filterValue = document.getElementById('filterInput').value.toUpperCase();
        console.log(filterValue);
        // Get names ul
        let ul = document.querySelector('.lazy-list');
        // Get lis from ul
        let li = ul.querySelectorAll('.list-item');
        
        // Loop through collection-item lis
        for(let i = 0; i < li.length;i++) {
            let a = li[i].getElementsByTagName('div')[0];
            // If matches
            if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    }


}, 3000);


