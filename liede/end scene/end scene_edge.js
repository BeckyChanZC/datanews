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
                            id: '_20151005055300_x5tFJ',
                            type: 'image',
                            rect: ['0px', '0px', '1289px', '733px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"20151005055300_x5tFJ.jpeg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 1, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'end',
                            type: 'image',
                            rect: ['0px', '-130px', '1280px', '1417px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"end.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 1, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['245px', '76px', '791px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 700; font-size: 28px;\">城市化浪潮中</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 700; font-size: 28px;\">​城中村原是一道遗憾的伤疤、失落的家园</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 700; font-size: 28px;\">​</span></p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['265px', '155px', '731px', '105px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 28px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">如今</p><p style=\"margin: 0px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: normal;\"><span style=\"font-weight: 700; font-size: 28px;\">​它也有破茧成蝶的可能</span></p><p style=\"margin: 0px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: normal;\"><span style=\"font-weight: 700; font-size: 28px;\">​传承与创新的活力</span></p><p style=\"margin: 0px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: normal;\"><span style=\"font-weight: 700; font-size: 28px;\">​</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['351px', '263px', '559px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 28px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">它也可以成为</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 28px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin:0px\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['344px', '308px', '573px', '105px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 28px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"><span style=\"color: rgb(9, 32, 155); font-size: 35px;\">诗意的栖居地</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Andrei_Machado_-_Sobre_a_brevidade_da_vida',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1325', '821', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [aud+"Andrei%20Machado%20-%20Sobre%20a%20brevidade%20da%20vida.mp3"],
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
                    duration: 215092.245,
                    autoPlay: true,
                    data: [
                        [
                            "eid27",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            6000,
                            1000,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid8",
                            "filter.sepia",
                            0,
                            12000,
                            "linear",
                            "${end}",
                            '1',
                            '0'
                        ],
                        [
                            "eid46",
                            "left",
                            30000,
                            0,
                            "linear",
                            "${Text3}",
                            '351px',
                            '351px'
                        ],
                        [
                            "eid57",
                            "filter.sepia",
                            0,
                            12000,
                            "linear",
                            "${_20151005055300_x5tFJ}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid36",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${Text3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13",
                            "left",
                            30000,
                            0,
                            "linear",
                            "${end}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid42",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            11000,
                            1000,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${Text4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid47",
                            "top",
                            30000,
                            0,
                            "linear",
                            "${Text3}",
                            '263px',
                            '263px'
                        ],
                        [
                            "eid50",
                            "left",
                            30000,
                            0,
                            "linear",
                            "${Text4}",
                            '344px',
                            '344px'
                        ],
                        [
                            "eid53",
                            "top",
                            30000,
                            0,
                            "linear",
                            "${Text4}",
                            '308px',
                            '308px'
                        ],
                        [
                            "eid14",
                            "top",
                            30000,
                            0,
                            "linear",
                            "${end}",
                            '-130px',
                            '-130px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1000,
                            2000,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("end%20scene_edgeActions.js");
})("EDGE-35549724");
