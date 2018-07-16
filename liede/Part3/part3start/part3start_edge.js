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
                            id: 'liedebianqian',
                            type: 'image',
                            rect: ['-1px', '60px', '1280px', '619px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"liedebianqian.gif",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-1px', '0px', '1280px', '720px', 'auto', 'auto'],
                            opacity: '0.5',
                            fill: ["rgba(3,10,87,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Symbol_start33',
                            symbolName: 'Symbol_start33',
                            type: 'rect',
                            rect: ['370', '534', '566', '166', 'auto', 'auto']
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
            },
            "Symbol_start3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '566px', '165px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(251,251,253,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '566px', '166px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_start33": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Symbol_start3',
                            symbolName: 'Symbol_start3',
                            opacity: '0.7',
                            rect: ['0px', '0px', '566', '166', 'auto', 'auto']
                        },
                        {
                            rect: ['80px', '34px', '410px', '112px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 500; font-size: 30px;\">水乡·猎德</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 500; font-size: 30px;\">​广州第一个改造成功的城中村</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 500; font-size: 30px;\">​点击看尽猎德前世今生</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '566px', '166px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Symbol_start3}",
                            '0.7',
                            '0.7'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Symbol_start3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid3",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Symbol_start3}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("part3start_edgeActions.js");
})("EDGE-18336770");
