/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'xincun3',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '720px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"xincun3.png",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'video',
                            tag: 'video',
                            rect: ['69px', '136px', '1153px', '556px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [vid+"%E9%BE%99%E8%88%9F%E8%8A%822.mp4"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1280px', '720px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("part3-3-1-1_edgeActions.js");
})("EDGE-11807085");
