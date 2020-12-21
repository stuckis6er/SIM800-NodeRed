[
    {
        "id": "5c14d8ce.7af138",
        "type": "subflow",
        "name": "SIM800 GSM Modul",
        "info": "![Logo](https://simcom.ee/images/simcom_logo.png)\n\n# SIM800 GSM Modul Subflow\n\n---\n## INPUT:\n\nInput from Serial Modul\n\n`msg.input` = `SERIAL_INPUT`\n\n`msg.payload` = payload from Serial Modul\n\n---\nStart Connection to GSM Modul\n\n`msg.input` = `START`\n\n---\nStop Connection\n\n`msg.input` = `STOP`\n\n---\nReset SIM800\n\n`msg.input` = `RESET`\n\n---\nSend Message SMS\n\n`msg.input` = `SEND_SMS`\n\n`msg.payload` = {\"number\":\"01741234567\",\"message\":\"Nodered Test SMS\"}\n\n---\n## OUTPUT\n\n 1. to Serial Modul\n 2. Messenger_LetzterPruefStatus\n 3. Messenger_LetzteSignalstaerke\n 4. Messenger_Modus\n 5. Messenger_LetzterSendeStatus\n 6. Messenger_SMSEmfangAbsenderID\n 7. Messenger_SMSEmfangText\n 8. Messenger_Warteschlange",
        "category": "SMS",
        "in": [
            {
                "x": 380,
                "y": 3400,
                "wires": [
                    {
                        "id": "de9044c.77626b8"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 380,
                "y": 3460,
                "wires": [
                    {
                        "id": "1680f7f6.5032b8",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1580,
                "y": 200,
                "wires": [
                    {
                        "id": "6ae6cda5.b88d74",
                        "port": 0
                    },
                    {
                        "id": "2eeab5de.9788ea",
                        "port": 0
                    },
                    {
                        "id": "82d57594.39d198",
                        "port": 0
                    },
                    {
                        "id": "ef2a795b.b19c38",
                        "port": 0
                    },
                    {
                        "id": "a5e85a5a.b00598",
                        "port": 0
                    },
                    {
                        "id": "c02f4ed8.6182",
                        "port": 0
                    },
                    {
                        "id": "358b7d7e.72dd52",
                        "port": 0
                    },
                    {
                        "id": "65e1b64a.531328",
                        "port": 0
                    },
                    {
                        "id": "b1c552b6.e4056",
                        "port": 0
                    },
                    {
                        "id": "d98f7ab.2817a88",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1540,
                "y": 1480,
                "wires": [
                    {
                        "id": "3c476f0e.7e708",
                        "port": 0
                    },
                    {
                        "id": "72a98263.2b049c",
                        "port": 0
                    },
                    {
                        "id": "aeade7f9.517c78",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1540,
                "y": 1600,
                "wires": [
                    {
                        "id": "e4d5b6d0.99bb98",
                        "port": 0
                    },
                    {
                        "id": "9f0ada5.ff20e28",
                        "port": 0
                    },
                    {
                        "id": "90cc717f.a3ced",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2540,
                "wires": [
                    {
                        "id": "3e68bce.23d4044",
                        "port": 0
                    },
                    {
                        "id": "74b52f3d.68a45",
                        "port": 0
                    },
                    {
                        "id": "489a3ffa.3efe5",
                        "port": 0
                    },
                    {
                        "id": "5ffbfdf9.c97a64",
                        "port": 0
                    },
                    {
                        "id": "bc7184ab.3abfc8",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2200,
                "wires": [
                    {
                        "id": "2e310e28.abc4a2",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2280,
                "wires": [
                    {
                        "id": "95af397f.2e8188",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2860,
                "wires": [
                    {
                        "id": "bb43e281.6fe52",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [
            {
                "name": "",
                "type": "str",
                "value": "SIM800",
                "ui": {
                    "icon": "font-awesome/fa-signal",
                    "label": {
                        "en-US": "SIM800 GSM Modul Subflow - to send and receive SMS."
                    },
                    "type": "none",
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none",
                    "label": {},
                    "opts": {}
                }
            },
            {
                "name": "SERIAL",
                "type": "str",
                "value": "/dev/ttyS0",
                "ui": {
                    "icon": "font-awesome/fa-compress",
                    "label": {
                        "en-US": "Serial"
                    },
                    "type": "input",
                    "opts": {
                        "types": [
                            "str"
                        ]
                    }
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none",
                    "label": {},
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "text",
                "ui": {
                    "icon": "font-awesome/fa-info-circle",
                    "label": {
                        "en-US": "Wenn PIN deaktiviert, einfach leer lassen!"
                    },
                    "type": "none",
                    "opts": {}
                }
            },
            {
                "name": "PIN",
                "type": "str",
                "value": "",
                "ui": {
                    "icon": "font-awesome/fa-unlock-alt",
                    "label": {
                        "en-US": "PIN ****"
                    },
                    "type": "input",
                    "opts": {
                        "types": [
                            "str"
                        ]
                    }
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none",
                    "label": {},
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "text",
                "ui": {
                    "icon": "font-awesome/fa-info-circle",
                    "label": {
                        "en-US": "Startet bei Systemstart oder Deploy automatisch"
                    },
                    "type": "none",
                    "opts": {}
                }
            },
            {
                "name": "AUTOSTART",
                "type": "bool",
                "value": "false",
                "ui": {
                    "icon": "font-awesome/fa-history",
                    "label": {
                        "en-US": "Auto Start"
                    },
                    "type": "checkbox",
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none",
                    "label": {},
                    "opts": {}
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "Version",
                "ui": {
                    "label": {
                        "en-US": "Version 1.0.0"
                    },
                    "type": "none",
                    "opts": {}
                }
            },
            {
                "name": "DEBUG",
                "type": "bool",
                "value": "false",
                "ui": {
                    "icon": "font-awesome/fa-bug",
                    "label": {
                        "en-US": "Debug"
                    },
                    "type": "checkbox",
                    "opts": {}
                }
            }
        ],
        "color": "#FFCC66",
        "inputLabels": [
            "SERIAL INPUT"
        ],
        "outputLabels": [
            "SERIAL OUTPUT",
            "Messenger_LetzterPruefStatus",
            "Messenger_LetzteSignalstaerke",
            "Messenger_Modus",
            "Messenger_LetzterSendeStatus",
            "Messenger_SMSEmfangAbsenderID",
            "Messenger_SMSEmfangText",
            "Messenger_Warteschlange"
        ],
        "icon": "font-awesome/fa-signal",
        "status": {
            "x": 380,
            "y": 3520,
            "wires": [
                {
                    "id": "3fd78540.fb8d8a",
                    "port": 0
                }
            ]
        }
    },
    {
        "id": "cbad5023.f1d26",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "+ \\r",
        "func": "var at_cmd = msg.payload;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1130,
        "y": 120,
        "wires": [
            [
                "798a3dd4.45a534",
                "3ccde142.4edd5e"
            ]
        ]
    },
    {
        "id": "57af65ae.6b450c",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+ cmd \"\\r\"",
        "func": "var at_cmd = \"AT+\"+msg.payload;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1330,
        "y": 2360,
        "wires": [
            [
                "97e066d8.453fd8"
            ]
        ]
    },
    {
        "id": "173f775b.61e389",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "10 Sekunden bis zum vollständigen Einloggen beim Provider warten",
        "info": "",
        "x": 640,
        "y": 1260,
        "wires": []
    },
    {
        "id": "2de3ea3.584bb16",
        "type": "exec",
        "z": "5c14d8ce.7af138",
        "command": "stty -F ",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "/dev/ttyUSBx",
        "x": 1270,
        "y": 3460,
        "wires": [
            [
                "23e1f9fd.5bdb36"
            ],
            [
                "23e1f9fd.5bdb36"
            ],
            []
        ]
    },
    {
        "id": "23e1f9fd.5bdb36",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "SET BAUD",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1490,
        "y": 3460,
        "wires": []
    },
    {
        "id": "37c51b10.4634c4",
        "type": "inject",
        "z": "5c14d8ce.7af138",
        "name": "#Gelesene SMS löschen",
        "topic": "settings",
        "payload": "CMGD=1",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 1070,
        "y": 2360,
        "wires": [
            [
                "57af65ae.6b450c"
            ]
        ]
    },
    {
        "id": "e8367014.48c99",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "CMGL/CMGD",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CMGL:",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "AT+CMGD=",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 420,
        "y": 2220,
        "wires": [
            [
                "2e310e28.abc4a2"
            ],
            [
                "32d9373b.3505c8"
            ]
        ]
    },
    {
        "id": "2e310e28.abc4a2",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "SMS_INDEX",
        "func": "var incommingSMS = msg.payload.split(\",\");\nvar SMSindex = parseFloat((incommingSMS[0]).replace(\"+CMGL: \", ''));\nmsg.payload = (incommingSMS[2]).replace(/\"/g, '');\nflow.set('SMS_INPUT',true);\nflow.set('SMS_INDEX',SMSindex);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 610,
        "y": 2200,
        "wires": [
            [
                "22f9d007.f6c67"
            ]
        ]
    },
    {
        "id": "abe248dc.1ec978",
        "type": "inject",
        "z": "5c14d8ce.7af138",
        "d": true,
        "name": "SetInitalVar",
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 1910,
        "y": 320,
        "wires": [
            [
                "67f3adc4.d96044"
            ]
        ]
    },
    {
        "id": "67f3adc4.d96044",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "d": true,
        "name": "SetVar",
        "func": "flow.set('SMS_INPUT',false);\nflow.set('SMS_Delete',false);\nflow.set('SMS_SEND',false);\n\nflow.set('GSM_CMEE',false);\nflow.set('GSM_CMGF',false);\nflow.set('GSM_PING',false);\nflow.set('SMS_SEND',false);\n\nflow.set('GSM_POLL',false);",
        "outputs": 1,
        "noerr": 0,
        "x": 2070,
        "y": 320,
        "wires": [
            []
        ]
    },
    {
        "id": "4c584901.473bc8",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "Nummer",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1120,
        "y": 2180,
        "wires": []
    },
    {
        "id": "87b09b58.af2418",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "SMS Input",
        "property": "SMS_INPUT",
        "propertyType": "flow",
        "rules": [
            {
                "t": "false"
            },
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 210,
        "y": 2260,
        "wires": [
            [
                "e8367014.48c99"
            ],
            [
                "30a167f7.62ff88"
            ]
        ]
    },
    {
        "id": "30a167f7.62ff88",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "SMS_Delete",
        "func": "msg.payload = msg.payload;\nflow.set('SMS_INPUT',false);\nflow.set('SMS_Delete',true);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 2300,
        "wires": [
            [
                "1b0af50e.da20db",
                "95af397f.2e8188"
            ]
        ]
    },
    {
        "id": "6453b63.a2f3548",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "Text",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1130,
        "y": 2260,
        "wires": []
    },
    {
        "id": "9bb5155b.06f058",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "Index NR",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1120,
        "y": 2320,
        "wires": []
    },
    {
        "id": "1b0af50e.da20db",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "SMS_INDEX",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 650,
        "y": 2320,
        "wires": [
            [
                "790acdfe.ee7ca4",
                "b3f6000d.845c2"
            ]
        ]
    },
    {
        "id": "b4e07a69.0ad448",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+ CMGD= \"\\r\"",
        "func": "var at_cmd = \"AT+CMGD=\"+msg.payload;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 2400,
        "wires": [
            [
                "e00de907.dccaf8"
            ]
        ]
    },
    {
        "id": "32d9373b.3505c8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_Delete",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 650,
        "y": 2240,
        "wires": [
            []
        ]
    },
    {
        "id": "790acdfe.ee7ca4",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "SMS Input",
        "property": "SMS_Delete",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 170,
        "y": 2400,
        "wires": [
            [
                "1cc6c97.b93cf37"
            ]
        ]
    },
    {
        "id": "65b6a65d.653c28",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "+CMTI:",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CMTI:",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 220,
        "y": 2080,
        "wires": [
            [
                "c69bcac2.438878",
                "a766a893.4dc598",
                "5c38b281.ad760c"
            ]
        ]
    },
    {
        "id": "5c38b281.ad760c",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+ CMGL=\"ALL\" \"\\r\"",
        "func": "var index = msg.payload.split(\",\");\nindex = parseFloat(index[1]);\n\n\n\n\nvar at_cmd = 'AT+CMGL=\"ALL\"'/* + index*/;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 2080,
        "wires": [
            [
                "4b9c69fc.a10f98"
            ]
        ]
    },
    {
        "id": "ab9af324.7e5b6",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "sende sms",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CMGS=",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "> ",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "+CMGS: ",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "ERROR",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 5,
        "x": 230,
        "y": 2620,
        "wires": [
            [
                "a9f1d7ae.2726c8"
            ],
            [
                "bb43e281.6fe52"
            ],
            [
                "6860fba9.9f3174"
            ],
            [
                "6860fba9.9f3174"
            ],
            [
                "94106703.ea50e8"
            ]
        ]
    },
    {
        "id": "17799fc2.9fd19",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "SEND SMS",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1390,
        "y": 2740,
        "wires": []
    },
    {
        "id": "6860fba9.9f3174",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "",
        "property": "SMS_SEND",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 2600,
        "wires": [
            [
                "bc5e8afb.e32da8",
                "ed46f022.eb68d"
            ]
        ]
    },
    {
        "id": "a9f1d7ae.2726c8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 460,
        "y": 2540,
        "wires": [
            [
                "d7da3858.a8a908"
            ]
        ]
    },
    {
        "id": "bc5e8afb.e32da8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 580,
        "y": 2600,
        "wires": [
            [
                "19b6b266.d7336e"
            ]
        ]
    },
    {
        "id": "94106703.ea50e8",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "",
        "property": "SMS_SEND",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 2680,
        "wires": [
            [
                "ae1b7d0c.fcee6",
                "ed46f022.eb68d"
            ]
        ]
    },
    {
        "id": "ae1b7d0c.fcee6",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 580,
        "y": 2680,
        "wires": [
            [
                "adef1bd7.96ffb8"
            ]
        ]
    },
    {
        "id": "6df214b0.8434fc",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "+CSQ: ",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CSQ: ",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 190,
        "y": 1500,
        "wires": [
            [
                "877f4e89.a50e3"
            ]
        ]
    },
    {
        "id": "877f4e89.a50e3",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Signalstärke",
        "func": "var signal = msg.payload.split(\",\");\nsignal = parseFloat((signal[0]).replace(\"+CSQ: \", ''));\n\nif (signal < 2) {\n\tmsg.payload = 1;\n\treturn msg;\n}\nelse if (signal >= 2 && signal <=9) {\n\tmsg.payload = 2;\n\treturn msg;\n}\nelse if (signal >= 10 && signal <=14) {\n\tmsg.payload = 3;\n\treturn msg;\n}\nelse if (signal >= 15 && signal <=19) {\n\tmsg.payload = 4;\n\treturn msg;\n}\nelse if (signal >= 20) {\n\tmsg.payload = 5;\n\treturn msg;\n}\nelse if (signal === 99) {\n\tmsg.payload = 99;\n\treturn msg;\n} else {\n\tmsg.payload = 0;\n\treturn msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 330,
        "y": 1500,
        "wires": [
            [
                "3c476f0e.7e708",
                "800a7abd.1fd458",
                "5e22c84c.2ed5d8"
            ]
        ]
    },
    {
        "id": "35d803bf.7481ec",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "GSM Signal Stärke",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1210,
        "y": 1500,
        "wires": []
    },
    {
        "id": "8ff4247b.166bf8",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "+CREG:",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CREG:",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 220,
        "y": 1320,
        "wires": [
            [
                "ca991ee1.a02f"
            ]
        ]
    },
    {
        "id": "ca991ee1.a02f",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "angemeldet",
        "func": "var signal = msg.payload.split(\",\");\nsignal = parseFloat(signal[1]);\n\nif (signal === 5 || signal === 1) {\n\tmsg.payload = true;\n\treturn msg;\n} else {\n\tmsg.payload = false;\n\treturn msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 1320,
        "wires": [
            [
                "fdca67a6.2d6d58"
            ]
        ]
    },
    {
        "id": "59e9e839.aff658",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "bei Mobilfunkprovider angemeldet",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1160,
        "y": 1300,
        "wires": []
    },
    {
        "id": "783a8bd7.1c2eb4",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "60s nach Reset",
        "pauseType": "delay",
        "timeout": "60",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 900,
        "y": 1340,
        "wires": [
            [
                "56e560ef.15428"
            ]
        ]
    },
    {
        "id": "56e560ef.15428",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CREG? \"\\r\"",
        "func": "var at_cmd = \"AT+CREG?\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1340,
        "wires": [
            [
                "3dec192.b46ffe6"
            ]
        ]
    },
    {
        "id": "fdca67a6.2d6d58",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "true false",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 580,
        "y": 1320,
        "wires": [
            [
                "8ce3dd66.e6485",
                "a5e85a5a.b00598",
                "84a130cf.c94c5"
            ],
            [
                "c02f4ed8.6182",
                "51230bfe.793014"
            ]
        ]
    },
    {
        "id": "bbf5ee21.f9839",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "== AT",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "T",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 170,
        "y": 260,
        "wires": [
            [
                "bb6cddfa.eb81b"
            ],
            []
        ]
    },
    {
        "id": "bb6cddfa.eb81b",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "ef28cddf.74d3f",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "GSM_PING",
        "property": "GSM_PING",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "eq",
                "v": "true",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 330,
        "y": 280,
        "wires": [
            [
                "80ede5a9.d2d138"
            ],
            [
                "80ede5a9.d2d138"
            ]
        ]
    },
    {
        "id": "80ede5a9.d2d138",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 510,
        "y": 280,
        "wires": [
            [
                "8637efd4.5fa8d",
                "ff107d52.dd9b8",
                "c2a629d6.c7b878",
                "98e219c8.27f2f8"
            ],
            []
        ]
    },
    {
        "id": "8637efd4.5fa8d",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "OK",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 690,
        "y": 200,
        "wires": [
            [
                "7fcbfc9a.8468b4"
            ]
        ]
    },
    {
        "id": "5e0c56b2.4eb2a8",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "GSM PING",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1230,
        "y": 200,
        "wires": []
    },
    {
        "id": "f357ea56.e52688",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "",
        "pauseType": "delay",
        "timeout": "6",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 520,
        "y": 160,
        "wires": [
            [
                "a529ea11.3ed6d8"
            ]
        ]
    },
    {
        "id": "a529ea11.3ed6d8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "NOT OK",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "NOT OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 160,
        "wires": [
            [
                "7fcbfc9a.8468b4",
                "6ae6cda5.b88d74",
                "468de009.a6066"
            ]
        ]
    },
    {
        "id": "ff107d52.dd9b8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "reset",
        "rules": [
            {
                "t": "set",
                "p": "reset",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 180,
        "wires": [
            [
                "f357ea56.e52688"
            ]
        ]
    },
    {
        "id": "a9b37be7.6bcf88",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "1. START",
        "info": "",
        "x": 60,
        "y": 80,
        "wires": []
    },
    {
        "id": "f362b370.48e34",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CMEE=2 \"\\r\"",
        "func": "var at_cmd = \"AT+CMEE=2\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 640,
        "wires": [
            [
                "408693dd.bd851c"
            ]
        ]
    },
    {
        "id": "2b259e5.697fe62",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "AT+CMEE=2",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CMEE=2",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 680,
        "wires": [
            [
                "f19a3db5.2a7e8"
            ]
        ]
    },
    {
        "id": "29a67db1.c43912",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CMGF=1 \"\\r\"",
        "func": "var at_cmd = \"AT+CMGF=1\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 860,
        "wires": [
            [
                "3f72aa12.1b0606"
            ]
        ]
    },
    {
        "id": "f19a3db5.2a7e8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMEE",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "365c41dd.8a7fae",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "GSM_CMEE",
        "property": "GSM_CMEE",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 720,
        "wires": [
            [
                "3c7c97f8.389448"
            ]
        ]
    },
    {
        "id": "3c7c97f8.389448",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 720,
        "wires": [
            [
                "b2e0e971.cd9398",
                "d010bdf1.51501"
            ],
            [
                "2eeab5de.9788ea"
            ]
        ]
    },
    {
        "id": "b2e0e971.cd9398",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMEE",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 710,
        "y": 680,
        "wires": [
            [
                "62f1109b.97a56",
                "7dadaeb7.e3123"
            ]
        ]
    },
    {
        "id": "7b206feb.fd8ba",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "AT+CMGF=1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CMGF=1",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 900,
        "wires": [
            [
                "a85c9ac3.9094a8"
            ]
        ]
    },
    {
        "id": "a85c9ac3.9094a8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMGF",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "f64f0e4a.70d6d",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "GSM_CMGF",
        "property": "GSM_CMGF",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 940,
        "wires": [
            [
                "ee879f61.39c21"
            ]
        ]
    },
    {
        "id": "ee879f61.39c21",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 940,
        "wires": [
            [
                "d5afc59a.f90208",
                "87fdc54.380a338"
            ],
            [
                "82d57594.39d198"
            ]
        ]
    },
    {
        "id": "d5afc59a.f90208",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMGF",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 710,
        "y": 900,
        "wires": [
            [
                "a52be1b6.4218e",
                "1d3a86ef.bea9a9"
            ]
        ]
    },
    {
        "id": "832cd570.85f778",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CPIN? \"\\r\"",
        "func": "var at_cmd = \"AT+CPIN?\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1020,
        "wires": [
            [
                "91a45678.25c908"
            ]
        ]
    },
    {
        "id": "d4030905.2c6208",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "+CPIN: READY",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CPIN: READY",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 460,
        "y": 1140,
        "wires": [
            [
                "80d083b0.7e187",
                "adfc666d.05bf48"
            ],
            [
                "ef2a795b.b19c38"
            ]
        ]
    },
    {
        "id": "80d083b0.7e187",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "",
        "pauseType": "delay",
        "timeout": "10",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 190,
        "y": 1260,
        "wires": [
            [
                "7b44ea7.c828314"
            ]
        ]
    },
    {
        "id": "7b44ea7.c828314",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CREG? \"\\r\"",
        "func": "var at_cmd = \"AT+CREG?\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1260,
        "wires": [
            [
                "3dec192.b46ffe6"
            ]
        ]
    },
    {
        "id": "7dc673f5.c8341c",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "Extended Errormessage aktiv",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1230,
        "y": 680,
        "wires": []
    },
    {
        "id": "45ae4080.72d1d",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "TC35 in SMS-Textmodus versetzt",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1220,
        "y": 900,
        "wires": []
    },
    {
        "id": "baba7105.ea02e",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "Sim PIN ok, warte 10 sec.",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1130,
        "y": 1100,
        "wires": []
    },
    {
        "id": "28e69fc.31bfd6",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CFUN=1,1 \"\\r\"",
        "func": "var at_cmd = \"AT+CFUN=1,1\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1110,
        "y": 1760,
        "wires": [
            [
                "fccba3de.5ccc2"
            ]
        ]
    },
    {
        "id": "106ec951.a4ac97",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "AT+CFUN=1,1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CFUN=1,1",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 240,
        "y": 1800,
        "wires": [
            [
                "8d7ba5ed.83ba18",
                "589c4ca7.87cb34"
            ]
        ]
    },
    {
        "id": "d94f2d97.85b96",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "d": true,
        "name": "",
        "pauseType": "delay",
        "timeout": "500",
        "timeoutUnits": "milliseconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 260,
        "y": 1760,
        "wires": [
            [
                "28e69fc.31bfd6"
            ]
        ]
    },
    {
        "id": "f1cf3471.eb98e8",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 640,
        "wires": [
            [
                "f362b370.48e34"
            ]
        ]
    },
    {
        "id": "d010bdf1.51501",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 860,
        "wires": [
            [
                "29a67db1.c43912"
            ]
        ]
    },
    {
        "id": "87fdc54.380a338",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 1060,
        "wires": [
            [
                "d3bf6164.5f2a3"
            ]
        ]
    },
    {
        "id": "986ca680.6ee978",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Send SMS to number",
        "func": "var num = msg.payload.number;\nvar at_cmd = \"AT+CMGS=\\\"\"+num+\"\\\"\"; \n\nmsg.payload=at_cmd+\"\\r\";\n//msg.payload.msg =msg.payload.message;\n\nreturn msg;",
        "outputs": "1",
        "noerr": 0,
        "x": 460,
        "y": 3020,
        "wires": [
            [
                "958542c7.04df3",
                "58e0669c.b268a8",
                "621c0d60.502b14"
            ]
        ]
    },
    {
        "id": "4491519c.ac78",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Send Message",
        "func": "var sms_msg = msg.payload.message;\n\nmsg.payload=sms_msg+\"\\x1A\";\n//msg.payload.msg =msg.payload.message;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 800,
        "y": 3100,
        "wires": [
            [
                "58e0669c.b268a8"
            ]
        ]
    },
    {
        "id": "9d663792.479168",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "Wait for > prompt",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 450,
        "y": 3100,
        "wires": [
            [
                "98f624aa.e8e1a8"
            ]
        ]
    },
    {
        "id": "af8bc6ed.4a0ca8",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "Wait 1 sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 430,
        "y": 3060,
        "wires": [
            [
                "b9d3ef16.c23a7"
            ]
        ]
    },
    {
        "id": "b9d3ef16.c23a7",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Write newline",
        "func": "//msg.payload=\"\\r\\n\";\nmsg.payload=\"\\r\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 800,
        "y": 3060,
        "wires": [
            [
                "58e0669c.b268a8"
            ]
        ]
    },
    {
        "id": "958542c7.04df3",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 770,
        "y": 3020,
        "wires": [
            []
        ]
    },
    {
        "id": "69af9b0f.589f24",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "",
        "pauseType": "delay",
        "timeout": "25",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 870,
        "y": 2640,
        "wires": [
            [
                "ae1b7d0c.fcee6"
            ]
        ]
    },
    {
        "id": "ed46f022.eb68d",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "reset",
        "rules": [
            {
                "t": "set",
                "p": "reset",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 2640,
        "wires": [
            [
                "69af9b0f.589f24"
            ]
        ]
    },
    {
        "id": "8ee1eade.e20818",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CNMI=2,1 \"\\r\"",
        "func": "var at_cmd = \"AT+CNMI=2,1\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 420,
        "wires": [
            [
                "e4afdb17.659d78"
            ]
        ]
    },
    {
        "id": "b13bbe66.d8d9a",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CMGL=\"ALL\" \"\\r\"",
        "func": "var at_cmd = 'AT+CMGL=\"ALL\"';\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1980,
        "wires": [
            [
                "aaaaa3ed.681ad"
            ]
        ]
    },
    {
        "id": "8ce3dd66.e6485",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 1460,
        "wires": [
            [
                "a62ee938.46fb08",
                "594d5b6b.2a6a94"
            ]
        ]
    },
    {
        "id": "a62ee938.46fb08",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CSQ \"\\r\"",
        "func": "var at_cmd = \"AT+CSQ\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1110,
        "y": 1460,
        "wires": [
            [
                "7f2fc402.6987ac"
            ]
        ]
    },
    {
        "id": "95af397f.2e8188",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "decode",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "\u001e",
                "fromt": "str",
                "to": "ß",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "^",
                "fromt": "str",
                "to": "Ü",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "\\",
                "fromt": "str",
                "to": "Ö",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "[",
                "fromt": "str",
                "to": "Ä",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "~",
                "fromt": "str",
                "to": "ü",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "|",
                "fromt": "str",
                "to": "ö",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "{",
                "fromt": "str",
                "to": "ä",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 600,
        "y": 2280,
        "wires": [
            [
                "5cbb11eb.7236b"
            ]
        ]
    },
    {
        "id": "aad70933.02aa28",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "d": true,
        "name": "Filtern",
        "func": "//msg.payload = msg.payload.split(\"\\n\");\n\nvar antwort = msg.payload;\n\nif (antwort.length > 2 && antwort.length !== \"\"){\n    msg.payload = antwort.slice(1, antwort.length);\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 3300,
        "wires": [
            [
                "2c3234fc.d938ec",
                "968ae9cb.7e2568"
            ]
        ]
    },
    {
        "id": "6761a0b0.cbbd3",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Sonderzeichen",
        "info": ".replace(\"{\", 'ä').replace(\"|\", 'ö').replace(\"~\", 'ü').replace(\"[\", 'Ä').replace(\"\\\", 'Ö').replace(\"^\", 'Ü').replace(\"\u001e\", 'ß')\n\n.replace(\"{\", 'ä')\n.replace(\"|\", 'ö')\n.replace(\"~\", 'ü')\n.replace(\"[\", 'Ä')\n.replace(\"\\\", 'Ö')\n.replace(\"^\", 'Ü')\n.replace(\"\u001e\", 'ß')",
        "x": 640,
        "y": 2160,
        "wires": []
    },
    {
        "id": "98f624aa.e8e1a8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "decode",
        "rules": [
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ß",
                "fromt": "str",
                "to": "\u001e",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "Ü",
                "fromt": "str",
                "to": "^",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "Ö",
                "fromt": "str",
                "to": "\\",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "Ä",
                "fromt": "str",
                "to": "[",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ü",
                "fromt": "str",
                "to": "~",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ö",
                "fromt": "str",
                "to": "|",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ä",
                "fromt": "str",
                "to": "{",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 3100,
        "wires": [
            [
                "4491519c.ac78"
            ]
        ]
    },
    {
        "id": "e0fde63e.f33da8",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "GSM MODUL",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1220,
        "y": 1540,
        "wires": []
    },
    {
        "id": "6c175e28.cd29a",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "Bereit",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Bereit",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 850,
        "y": 1560,
        "wires": [
            [
                "86d9b671.19e498"
            ]
        ]
    },
    {
        "id": "e4d5b6d0.99bb98",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "true",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 850,
        "y": 1600,
        "wires": [
            []
        ]
    },
    {
        "id": "a5e85a5a.b00598",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "1",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1300,
        "wires": [
            []
        ]
    },
    {
        "id": "65e1b64a.531328",
        "type": "inject",
        "z": "5c14d8ce.7af138",
        "name": "",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1410,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "2eeab5de.9788ea",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "5",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "5",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "82d57594.39d198",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "6",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "6",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "c02f4ed8.6182",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "9",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "9",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1340,
        "wires": [
            []
        ]
    },
    {
        "id": "ef2a795b.b19c38",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "7",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "7",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1140,
        "wires": [
            []
        ]
    },
    {
        "id": "6a35a54.465175c",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "",
        "info": "Nicht verfügbar;\nErfolgreich;\nTC35 Initialisierung-ShellBefehl fehlgeschlagen;\nTC35 Initialisierung fehlgeschlagen;\nModem nicht bereit;\nAktivierung erweiterte Fehlermeldungen fehlgeschlagen;\nUmschalten SMS-Textmodus fehlgeschlagen;\nSIM-Pin wird benötigt;\nSetzen SIM-Pin fehlgeschlagen;\nProvider nicht registiert;\nErmittlung Signalstärke fehlgeschlagen;\nModem Reset fehlgeschlagen;\nSIM-Fehler (siehe Messenger-Log für mehr Details)",
        "x": 1690,
        "y": 160,
        "wires": []
    },
    {
        "id": "8dfc56c9.5c05a8",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "== 99",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "99",
                "vt": "num"
            },
            {
                "t": "lt",
                "v": "99",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 650,
        "y": 1560,
        "wires": [
            [
                "358b7d7e.72dd52",
                "f8d11c02.4e73c"
            ],
            [
                "6c175e28.cd29a",
                "e4d5b6d0.99bb98",
                "4cc96d0a.bd69c4",
                "66564c3c.d34ce4"
            ]
        ]
    },
    {
        "id": "358b7d7e.72dd52",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "10",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "10",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1540,
        "wires": [
            []
        ]
    },
    {
        "id": "6ae6cda5.b88d74",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "4",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "4",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "86d515b3.ea4068",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "2.  #Extended Errormessage aktivieren",
        "info": "",
        "x": 230,
        "y": 600,
        "wires": []
    },
    {
        "id": "1680f7f6.5032b8",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL OUT",
        "links": [
            "aaaaa3ed.681ad",
            "fccba3de.5ccc2",
            "97e066d8.453fd8",
            "798a3dd4.45a534",
            "408693dd.bd851c",
            "e00de907.dccaf8",
            "e4afdb17.659d78",
            "3dec192.b46ffe6",
            "7f2fc402.6987ac",
            "3f72aa12.1b0606",
            "4b9c69fc.a10f98",
            "91a45678.25c908",
            "58e0669c.b268a8",
            "b5852a29.3b2bd8"
        ],
        "x": 195,
        "y": 3460,
        "wires": [
            []
        ]
    },
    {
        "id": "798a3dd4.45a534",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8",
            "60f43634.e7ba28",
            "5fb52c66.540164",
            "47a78f6e.36d11"
        ],
        "x": 1215,
        "y": 120,
        "wires": []
    },
    {
        "id": "e4afdb17.659d78",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1235,
        "y": 420,
        "wires": []
    },
    {
        "id": "72a939df.a67a28",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN normalize",
        "links": [
            "afd44365.d9e7",
            "f0d960cd.6b1be",
            "278a3ac5.c063d6",
            "ed021fb9.0ee4e",
            "f1dc4db8.e5815",
            "233fbbc6.7437f4",
            "7c0561dd.8378a",
            "ea2dac6b.6b2c6",
            "77591e6c.c0974",
            "2538d5c4.38509a",
            "cb5e8b68.828fb8"
        ],
        "x": 1375,
        "y": 3300,
        "wires": []
    },
    {
        "id": "afd44365.d9e7",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 55,
        "y": 280,
        "wires": [
            [
                "bbf5ee21.f9839",
                "ef28cddf.74d3f"
            ]
        ]
    },
    {
        "id": "ea2dac6b.6b2c6",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 95,
        "y": 680,
        "wires": [
            [
                "2b259e5.697fe62",
                "365c41dd.8a7fae"
            ]
        ]
    },
    {
        "id": "278a3ac5.c063d6",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 95,
        "y": 900,
        "wires": [
            [
                "7b206feb.fd8ba",
                "f64f0e4a.70d6d"
            ]
        ]
    },
    {
        "id": "ee283047.31583",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "3.   TC35 in SMS-Textmodus versetzen",
        "info": "",
        "x": 230,
        "y": 820,
        "wires": []
    },
    {
        "id": "4eab450e.c3ab7c",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "AT+CNMI=2,1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CNMI=",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 240,
        "y": 460,
        "wires": [
            [
                "b1b9e022.c3d09"
            ]
        ]
    },
    {
        "id": "b1b9e022.c3d09",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CNMI",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "ba106a8a.4b4f98",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "GSM_CNMI",
        "property": "GSM_CNMI",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 500,
        "wires": [
            [
                "d16ba3b5.b2ee2"
            ]
        ]
    },
    {
        "id": "d16ba3b5.b2ee2",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 500,
        "wires": [
            [
                "bdeb79ad.631eb8",
                "f1cf3471.eb98e8"
            ],
            [
                "b1c552b6.e4056"
            ]
        ]
    },
    {
        "id": "bdeb79ad.631eb8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CNMI",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 460,
        "wires": [
            [
                "5038ef30.74c2f",
                "f84cfe08.98bae"
            ]
        ]
    },
    {
        "id": "c6e93755.0ccd08",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "SMS Push aktiv",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1240,
        "y": 460,
        "wires": []
    },
    {
        "id": "98e219c8.27f2f8",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 420,
        "wires": [
            [
                "8ee1eade.e20818"
            ]
        ]
    },
    {
        "id": "d9a0df0f.7e1c9",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "1. Neue SMS-Nachrichtenanzeigen Push",
        "info": "",
        "x": 240,
        "y": 380,
        "wires": []
    },
    {
        "id": "77591e6c.c0974",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 95,
        "y": 460,
        "wires": [
            [
                "4eab450e.c3ab7c",
                "ba106a8a.4b4f98"
            ]
        ]
    },
    {
        "id": "408693dd.bd851c",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1235,
        "y": 640,
        "wires": []
    },
    {
        "id": "3f72aa12.1b0606",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1235,
        "y": 860,
        "wires": []
    },
    {
        "id": "dd9e4e5.4debcb",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "4. SIMPin prüfen",
        "info": "",
        "x": 160,
        "y": 1020,
        "wires": []
    },
    {
        "id": "97aedd4a.7366f",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "AT+CPIN",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CPIN",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 220,
        "y": 1100,
        "wires": [
            [
                "c0b2b2d.ecb405"
            ]
        ]
    },
    {
        "id": "c0b2b2d.ecb405",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "adfc666d.05bf48",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "setze flow.GSM_CPIN",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 700,
        "y": 1100,
        "wires": [
            [
                "26dafc61.e23c44",
                "8aa7ae00.19d09"
            ]
        ]
    },
    {
        "id": "3b88b735.c3cc88",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "GSM_CPIN",
        "property": "GSM_CPIN",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 1140,
        "wires": [
            [
                "d4030905.2c6208"
            ]
        ]
    },
    {
        "id": "f0d960cd.6b1be",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 95,
        "y": 1100,
        "wires": [
            [
                "3b88b735.c3cc88",
                "97aedd4a.7366f"
            ]
        ]
    },
    {
        "id": "5aa6d524.9427bc",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "5. Prüfen ob bei Mobilfunkprovider angemeldet",
        "info": "",
        "x": 260,
        "y": 1220,
        "wires": []
    },
    {
        "id": "91a45678.25c908",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1235,
        "y": 1020,
        "wires": []
    },
    {
        "id": "3dec192.b46ffe6",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1235,
        "y": 1260,
        "wires": []
    },
    {
        "id": "7c0561dd.8378a",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 95,
        "y": 1320,
        "wires": [
            [
                "8ff4247b.166bf8"
            ]
        ]
    },
    {
        "id": "7f2fc402.6987ac",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1235,
        "y": 1460,
        "wires": []
    },
    {
        "id": "c5b5ad8d.785e",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "6. Signalstärke ermitteln",
        "info": "",
        "x": 190,
        "y": 1420,
        "wires": []
    },
    {
        "id": "3c476f0e.7e708",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "99 = 0",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "99",
                "fromt": "num",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 650,
        "y": 1480,
        "wires": [
            []
        ]
    },
    {
        "id": "f8d11c02.4e73c",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "NICHT",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "NICHT Bereit",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 850,
        "y": 1520,
        "wires": [
            [
                "86d9b671.19e498"
            ]
        ]
    },
    {
        "id": "2538d5c4.38509a",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 95,
        "y": 1500,
        "wires": [
            [
                "6df214b0.8434fc"
            ]
        ]
    },
    {
        "id": "e9fbd468.3aeac8",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "# Modem Reset durchführen ----------------------------------------------------------------------------------------------------------------------------------",
        "info": "",
        "x": 500,
        "y": 1680,
        "wires": []
    },
    {
        "id": "9208d6be.0559b8",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "# Modem Reset durchführen ----------------------------------------------------------------------------------------------------------------------------------",
        "info": "",
        "x": 500,
        "y": 1840,
        "wires": []
    },
    {
        "id": "8d7ba5ed.83ba18",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "nach Modem Reset",
        "links": [
            "bc045147.3256c"
        ],
        "x": 415,
        "y": 1800,
        "wires": []
    },
    {
        "id": "bc045147.3256c",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": " Mobilfunkprovider angemeldet",
        "links": [
            "8d7ba5ed.83ba18"
        ],
        "x": 775,
        "y": 1340,
        "wires": [
            [
                "783a8bd7.1c2eb4"
            ]
        ]
    },
    {
        "id": "ed021fb9.0ee4e",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 95,
        "y": 1800,
        "wires": [
            [
                "106ec951.a4ac97"
            ]
        ]
    },
    {
        "id": "42c46a28.415454",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "Modem Reset ausführen",
        "links": [
            "51230bfe.793014"
        ],
        "x": 95,
        "y": 1760,
        "wires": [
            [
                "d94f2d97.85b96",
                "96b61333.571a6"
            ]
        ]
    },
    {
        "id": "51230bfe.793014",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "nicht angemeldet",
        "links": [
            "42c46a28.415454"
        ],
        "x": 735,
        "y": 1340,
        "wires": []
    },
    {
        "id": "fccba3de.5ccc2",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1275,
        "y": 1760,
        "wires": []
    },
    {
        "id": "c6d612d6.b7026",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "Modem Reset",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1100,
        "y": 1800,
        "wires": []
    },
    {
        "id": "a87c462.2a48db8",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "== 99",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "lt",
                "v": "99",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 150,
        "y": 1980,
        "wires": [
            [
                "6a01dce8.a4fb04",
                "b13bbe66.d8d9a",
                "5e668423.97089c"
            ]
        ]
    },
    {
        "id": "56a42b36.949324",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "7.  # SMS Speicher prüfen",
        "info": "",
        "x": 190,
        "y": 1940,
        "wires": []
    },
    {
        "id": "aaaaa3ed.681ad",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1275,
        "y": 1980,
        "wires": []
    },
    {
        "id": "97e066d8.453fd8",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1435,
        "y": 2360,
        "wires": []
    },
    {
        "id": "89e6cb69.ce3ad8",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "SMS Speicher prüfen",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1080,
        "y": 2020,
        "wires": []
    },
    {
        "id": "6a01dce8.a4fb04",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "checke Eingeganene SMS",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 2020,
        "wires": [
            [
                "e615faae.c851b8"
            ]
        ]
    },
    {
        "id": "47b62949.5ae818",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Incomming SMS PUSH",
        "info": "",
        "x": 180,
        "y": 2040,
        "wires": []
    },
    {
        "id": "f1dc4db8.e5815",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 95,
        "y": 2080,
        "wires": [
            [
                "65b6a65d.653c28"
            ]
        ]
    },
    {
        "id": "4b9c69fc.a10f98",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1275,
        "y": 2080,
        "wires": []
    },
    {
        "id": "c94f90e6.56839",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "SMS INPUT",
        "info": "",
        "x": 150,
        "y": 2220,
        "wires": []
    },
    {
        "id": "aa9c2450.f49bf8",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "ac20be03.b96cf"
        ],
        "x": 95,
        "y": 2260,
        "wires": [
            [
                "87b09b58.af2418"
            ]
        ]
    },
    {
        "id": "e00de907.dccaf8",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1235,
        "y": 2400,
        "wires": []
    },
    {
        "id": "1cc6c97.b93cf37",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "Wait 1 sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 610,
        "y": 2400,
        "wires": [
            [
                "b4e07a69.0ad448"
            ]
        ]
    },
    {
        "id": "c0380c44.33ba5",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Lösche SMS von SIM",
        "info": "",
        "x": 180,
        "y": 2360,
        "wires": []
    },
    {
        "id": "233fbbc6.7437f4",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL IN",
        "links": [
            "72a939df.a67a28"
        ],
        "x": 95,
        "y": 2620,
        "wires": [
            [
                "ab9af324.7e5b6"
            ]
        ]
    },
    {
        "id": "84a130cf.c94c5",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "OK",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 750,
        "y": 1300,
        "wires": [
            [
                "f57fd1e7.62bcf",
                "81b62651.d0ad88"
            ]
        ]
    },
    {
        "id": "c69bcac2.438878",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "checke Eingeganene SMS",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SMS eingegangen!",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 480,
        "y": 2120,
        "wires": [
            [
                "edf98005.7bd32"
            ]
        ]
    },
    {
        "id": "3d01ceff.3929e2",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "name": "SMS Push",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1110,
        "y": 2120,
        "wires": []
    },
    {
        "id": "d7da3858.a8a908",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "sende SMS...",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "sende SMS...",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 880,
        "y": 2540,
        "wires": [
            [
                "74b52f3d.68a45",
                "1a2a3dc3.dffb22",
                "405bf8b5.810ff8"
            ]
        ]
    },
    {
        "id": "74b52f3d.68a45",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "15",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "15",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 2540,
        "wires": [
            []
        ]
    },
    {
        "id": "5ffbfdf9.c97a64",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "1",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 2600,
        "wires": [
            []
        ]
    },
    {
        "id": "19b6b266.d7336e",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "SMS erfolgreich Versand",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SMS erfolgreich Versand",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 850,
        "y": 2600,
        "wires": [
            [
                "5ffbfdf9.c97a64",
                "1a2a3dc3.dffb22",
                "a27ef259.769d1"
            ]
        ]
    },
    {
        "id": "adef1bd7.96ffb8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "SMS NICHT Versand",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SMS konnte NICHT Versand werden",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860,
        "y": 2680,
        "wires": [
            [
                "489a3ffa.3efe5",
                "1a2a3dc3.dffb22",
                "db202ef.570f4d"
            ]
        ]
    },
    {
        "id": "489a3ffa.3efe5",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "13",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "13",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 2680,
        "wires": [
            []
        ]
    },
    {
        "id": "3e68bce.23d4044",
        "type": "inject",
        "z": "5c14d8ce.7af138",
        "name": "",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1370,
        "y": 2480,
        "wires": [
            []
        ]
    },
    {
        "id": "9f0ada5.ff20e28",
        "type": "inject",
        "z": "5c14d8ce.7af138",
        "name": "",
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1410,
        "y": 1640,
        "wires": [
            []
        ]
    },
    {
        "id": "de9044c.77626b8",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "msg.input",
        "property": "input",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "SERIAL_INPUT",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "START",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "STOP",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "RESET",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "SET_BAUD",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "SEND_SMS",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 6,
        "x": 500,
        "y": 3400,
        "wires": [
            [
                "2ff01e58.a37b42"
            ],
            [
                "60ec45f6.0ce6cc"
            ],
            [
                "e1e6215e.44411"
            ],
            [
                "aa5034b.e83e8c8"
            ],
            [
                "ccdfe505.b7dc28"
            ],
            [
                "c491c87e.5cfe58"
            ]
        ],
        "icon": "node-red/inject.svg"
    },
    {
        "id": "2ff01e58.a37b42",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL_INPUT",
        "links": [
            "299e1e17.e48bf2",
            "d131a127.66928"
        ],
        "x": 675,
        "y": 3300,
        "wires": []
    },
    {
        "id": "299e1e17.e48bf2",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL_INPUT",
        "links": [
            "2ff01e58.a37b42"
        ],
        "x": 895,
        "y": 3300,
        "wires": [
            [
                "aad70933.02aa28",
                "9867ca09.89bd38"
            ]
        ]
    },
    {
        "id": "b3c4ff6b.a2332",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "SERIAL_INPUT",
        "info": "",
        "x": 780,
        "y": 3300,
        "wires": []
    },
    {
        "id": "60ec45f6.0ce6cc",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "START",
        "links": [
            "603c3310.8562ec"
        ],
        "x": 675,
        "y": 3340,
        "wires": []
    },
    {
        "id": "8722caa8.8d10a8",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "START",
        "info": "",
        "x": 750,
        "y": 3340,
        "wires": []
    },
    {
        "id": "603c3310.8562ec",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "START",
        "links": [
            "60ec45f6.0ce6cc",
            "ad979a1.466fc68"
        ],
        "x": 95,
        "y": 120,
        "wires": [
            [
                "6d43bdba.af8ca4",
                "6cfdc886.b09bd8"
            ]
        ]
    },
    {
        "id": "cfe01652.2d58a8",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "RESET",
        "links": [
            "aa5034b.e83e8c8"
        ],
        "x": 895,
        "y": 1760,
        "wires": [
            [
                "28e69fc.31bfd6",
                "d316aaec.751bc8"
            ]
        ]
    },
    {
        "id": "aa5034b.e83e8c8",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "RESET",
        "links": [
            "cfe01652.2d58a8",
            "1e8da29d.9d6a9d",
            "47a78f6e.36d11",
            "5fb52c66.540164",
            "60f43634.e7ba28",
            "4e34626e.0c3cfc"
        ],
        "x": 675,
        "y": 3420,
        "wires": []
    },
    {
        "id": "9bfad4bd.e34b28",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "RESET",
        "info": "",
        "x": 750,
        "y": 3420,
        "wires": []
    },
    {
        "id": "d5e74889.9bc898",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SET_BAUD",
        "links": [
            "ccdfe505.b7dc28"
        ],
        "x": 895,
        "y": 3460,
        "wires": [
            [
                "af404e6f.62b6b"
            ]
        ]
    },
    {
        "id": "ccdfe505.b7dc28",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "SET_BAUD",
        "links": [
            "d5e74889.9bc898"
        ],
        "x": 675,
        "y": 3460,
        "wires": []
    },
    {
        "id": "54171c9b.0b6454",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "SET_BAUD",
        "info": "",
        "x": 770,
        "y": 3460,
        "wires": []
    },
    {
        "id": "af404e6f.62b6b",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "CONF",
        "rules": [
            {
                "t": "set",
                "p": "SERIAL",
                "pt": "msg",
                "to": "SERIAL",
                "tot": "env"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 990,
        "y": 3460,
        "wires": [
            [
                "977cb508.fd9468"
            ]
        ]
    },
    {
        "id": "1a2a3dc3.dffb22",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1080,
        "y": 2740,
        "wires": [
            [
                "17799fc2.9fd19"
            ]
        ]
    },
    {
        "id": "b3f6000d.845c2",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 2320,
        "wires": [
            [
                "9bb5155b.06f058"
            ]
        ]
    },
    {
        "id": "5cbb11eb.7236b",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 2260,
        "wires": [
            [
                "6453b63.a2f3548"
            ]
        ]
    },
    {
        "id": "edf98005.7bd32",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 960,
        "y": 2120,
        "wires": [
            [
                "3d01ceff.3929e2"
            ]
        ]
    },
    {
        "id": "e615faae.c851b8",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 880,
        "y": 2020,
        "wires": [
            [
                "89e6cb69.ce3ad8"
            ]
        ]
    },
    {
        "id": "589c4ca7.87cb34",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 920,
        "y": 1800,
        "wires": [
            [
                "c6d612d6.b7026"
            ]
        ]
    },
    {
        "id": "86d9b671.19e498",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1020,
        "y": 1540,
        "wires": [
            [
                "e0fde63e.f33da8"
            ]
        ]
    },
    {
        "id": "800a7abd.1fd458",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1020,
        "y": 1500,
        "wires": [
            [
                "35d803bf.7481ec"
            ]
        ]
    },
    {
        "id": "f57fd1e7.62bcf",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 920,
        "y": 1300,
        "wires": [
            [
                "59e9e839.aff658"
            ]
        ]
    },
    {
        "id": "8aa7ae00.19d09",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 900,
        "y": 1100,
        "wires": [
            [
                "baba7105.ea02e"
            ]
        ]
    },
    {
        "id": "a52be1b6.4218e",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 960,
        "y": 900,
        "wires": [
            [
                "45ae4080.72d1d"
            ]
        ]
    },
    {
        "id": "62f1109b.97a56",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1000,
        "y": 680,
        "wires": [
            [
                "7dc673f5.c8341c"
            ]
        ]
    },
    {
        "id": "5038ef30.74c2f",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1040,
        "y": 460,
        "wires": [
            [
                "c6e93755.0ccd08"
            ]
        ]
    },
    {
        "id": "7fcbfc9a.8468b4",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 200,
        "wires": [
            [
                "5e0c56b2.4eb2a8"
            ]
        ]
    },
    {
        "id": "6cfdc886.b09bd8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "AT",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "AT",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 120,
        "wires": [
            [
                "f357ea56.e52688",
                "cbad5023.f1d26",
                "b8767596.71f868"
            ]
        ]
    },
    {
        "id": "977cb508.fd9468",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "payload",
        "func": "msg.payload = msg.SERIAL + \" cs8 -parenb -cstopb clocal -echo raw speed 9600\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1120,
        "y": 3460,
        "wires": [
            [
                "2de3ea3.584bb16"
            ]
        ]
    },
    {
        "id": "c491c87e.5cfe58",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "SEND_SMS",
        "links": [
            "b95a692d.899558"
        ],
        "x": 675,
        "y": 3500,
        "wires": []
    },
    {
        "id": "eb6ac171.23c0c",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "SEND_SMS",
        "info": "",
        "x": 770,
        "y": 3500,
        "wires": []
    },
    {
        "id": "b95a692d.899558",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SEND_SMS",
        "links": [
            "c491c87e.5cfe58",
            "a216d576.c11ec8"
        ],
        "x": 75,
        "y": 3020,
        "wires": [
            [
                "58373e4a.1ffe7"
            ]
        ]
    },
    {
        "id": "2c3234fc.d938ec",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "d": true,
        "name": "Serial-In",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1180,
        "y": 3340,
        "wires": []
    },
    {
        "id": "9c2c4812.ec92a8",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Messenger_LetzterPruefStatus",
        "info": "",
        "x": 1750,
        "y": 200,
        "wires": []
    },
    {
        "id": "f5a3368b.848158",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Messenger_LetzteSignalstaerke",
        "info": "",
        "x": 1710,
        "y": 1480,
        "wires": []
    },
    {
        "id": "cfd8f94c.df8d58",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Messenger_Modus",
        "info": "",
        "x": 1670,
        "y": 1600,
        "wires": []
    },
    {
        "id": "42285ef1.64f01",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Messenger_LetzterSendeStatus",
        "info": "",
        "x": 1670,
        "y": 2540,
        "wires": []
    },
    {
        "id": "dda500a0.ce1ee",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Messenger_SMSEmfangAbsenderID",
        "info": "",
        "x": 1680,
        "y": 2200,
        "wires": []
    },
    {
        "id": "9e427404.0088c8",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Messenger_SMSEmfangText",
        "info": "",
        "x": 1660,
        "y": 2280,
        "wires": []
    },
    {
        "id": "72a98263.2b049c",
        "type": "inject",
        "z": "5c14d8ce.7af138",
        "name": "",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1410,
        "y": 1460,
        "wires": [
            []
        ]
    },
    {
        "id": "b1c552b6.e4056",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "5",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "5",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "c2a629d6.c7b878",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 720,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "b8767596.71f868",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 540,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "60f43634.e7ba28",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "0",
        "links": [
            "798a3dd4.45a534",
            "e1e6215e.44411",
            "aa5034b.e83e8c8"
        ],
        "x": 1315,
        "y": 240,
        "wires": [
            [
                "d98f7ab.2817a88"
            ]
        ]
    },
    {
        "id": "d98f7ab.2817a88",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "5fb52c66.540164",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "0",
        "links": [
            "798a3dd4.45a534",
            "e1e6215e.44411",
            "aa5034b.e83e8c8"
        ],
        "x": 1315,
        "y": 1420,
        "wires": [
            [
                "aeade7f9.517c78"
            ]
        ]
    },
    {
        "id": "aeade7f9.517c78",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1420,
        "wires": [
            []
        ]
    },
    {
        "id": "47a78f6e.36d11",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "0",
        "links": [
            "798a3dd4.45a534",
            "e1e6215e.44411",
            "aa5034b.e83e8c8"
        ],
        "x": 1275,
        "y": 2440,
        "wires": [
            [
                "bc7184ab.3abfc8"
            ]
        ]
    },
    {
        "id": "bc7184ab.3abfc8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 2440,
        "wires": [
            []
        ]
    },
    {
        "id": "bb43e281.6fe52",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "leer",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 410,
        "y": 2860,
        "wires": [
            []
        ]
    },
    {
        "id": "728ff2ec.089eec",
        "type": "inject",
        "z": "5c14d8ce.7af138",
        "name": "Poll",
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "x": 410,
        "y": 1420,
        "wires": [
            [
                "d0c117dd.3e6cf8"
            ]
        ]
    },
    {
        "id": "4cc96d0a.bd69c4",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_POLL",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 600,
        "y": 1520,
        "wires": [
            []
        ]
    },
    {
        "id": "d0c117dd.3e6cf8",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "GSM_POLL",
        "property": "GSM_POLL",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 810,
        "y": 1420,
        "wires": [
            [
                "a62ee938.46fb08"
            ]
        ]
    },
    {
        "id": "3ccde142.4edd5e",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_POLL",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1360,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "594d5b6b.2a6a94",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CSQ",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 1460,
        "wires": [
            []
        ]
    },
    {
        "id": "22a9d28f.300b0e",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CSQ",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 460,
        "y": 1600,
        "wires": [
            []
        ]
    },
    {
        "id": "5e22c84c.2ed5d8",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "GSM_CSQ",
        "property": "GSM_CSQ",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 510,
        "y": 1560,
        "wires": [
            [
                "8dfc56c9.5c05a8",
                "a87c462.2a48db8",
                "22a9d28f.300b0e"
            ]
        ]
    },
    {
        "id": "58373e4a.1ffe7",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "nicht leer",
        "property": "payload.message",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 240,
        "y": 3020,
        "wires": [
            [
                "986ca680.6ee978",
                "af8bc6ed.4a0ca8",
                "9d663792.479168"
            ]
        ]
    },
    {
        "id": "e87ab3dc.f612d",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "SMS INPUT",
        "info": "",
        "x": 130,
        "y": 2980,
        "wires": []
    },
    {
        "id": "6d43bdba.af8ca4",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status Start",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️ Starte...\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 230,
        "y": 80,
        "wires": [
            [
                "1ca47e9c.cce531"
            ]
        ]
    },
    {
        "id": "70532deb.646ee4",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "1ca47e9c.cce531",
            "de511c75.958c3",
            "17faef68.f41da1",
            "b64fa04.3dc8c6",
            "8fc5bf45.679a2",
            "f9fc87ef.243738",
            "90be421e.98cdc",
            "2c2e35ed.3d5d1a",
            "5cb6a04c.7d3cd",
            "cea9c3a4.ba80b",
            "d8fead68.7a56f",
            "32f947d0.380c88",
            "4dcd5e45.0128",
            "f84e5225.d2d74",
            "fe869a17.decc68",
            "865c3944.51acf8",
            "6162490c.ddbbf8",
            "64957964.7f33e8",
            "7e90072a.6c60a8",
            "5a27d587.66e23c"
        ],
        "x": 195,
        "y": 3520,
        "wires": [
            [
                "3fd78540.fb8d8a"
            ]
        ]
    },
    {
        "id": "1ca47e9c.cce531",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 355,
        "y": 80,
        "wires": []
    },
    {
        "id": "f84cfe08.98bae",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️️️️️️️️⚫️⚫️⚫️⚫️⚫️⚫️⚫️ SMS Push aktiviert\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 970,
        "y": 540,
        "wires": [
            [
                "de511c75.958c3"
            ]
        ]
    },
    {
        "id": "de511c75.958c3",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1105,
        "y": 540,
        "wires": []
    },
    {
        "id": "7dadaeb7.e3123",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️️⚫️⚫️⚫️⚫️⚫️⚫️ Errormessage aktiviert\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 990,
        "y": 760,
        "wires": [
            [
                "17faef68.f41da1"
            ]
        ]
    },
    {
        "id": "17faef68.f41da1",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1125,
        "y": 760,
        "wires": []
    },
    {
        "id": "1d3a86ef.bea9a9",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️️⚫️⚫️⚫️⚫️⚫️ Text Modus aktiviert\"};\nreturn msg;\n\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 980,
        "wires": [
            [
                "b64fa04.3dc8c6"
            ]
        ]
    },
    {
        "id": "b64fa04.3dc8c6",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1145,
        "y": 980,
        "wires": []
    },
    {
        "id": "26dafc61.e23c44",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️️⚫️⚫️⚫️⚫️ warte auf Provider...\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 910,
        "y": 1180,
        "wires": [
            [
                "8fc5bf45.679a2"
            ]
        ]
    },
    {
        "id": "8fc5bf45.679a2",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1045,
        "y": 1180,
        "wires": []
    },
    {
        "id": "81b62651.d0ad88",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️️⚫️⚫️⚫️ bei Provider angemeldet\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 910,
        "y": 1380,
        "wires": [
            [
                "f9fc87ef.243738"
            ]
        ]
    },
    {
        "id": "f9fc87ef.243738",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1045,
        "y": 1380,
        "wires": []
    },
    {
        "id": "66564c3c.d34ce4",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️⚪️️⚫️⚫️ Signalstärke:\" + msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 850,
        "y": 1640,
        "wires": [
            [
                "90be421e.98cdc"
            ]
        ]
    },
    {
        "id": "90be421e.98cdc",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1275,
        "y": 1640,
        "wires": []
    },
    {
        "id": "3fd78540.fb8d8a",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "limit",
        "pauseType": "rate",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 290,
        "y": 3520,
        "wires": [
            []
        ]
    },
    {
        "id": "468de009.a6066",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status Start",
        "func": "msg.payload = {fill:\"red\",shape:\"dot\",text:\"keine Verbindung\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 870,
        "y": 140,
        "wires": [
            [
                "5cb6a04c.7d3cd"
            ]
        ]
    },
    {
        "id": "5cb6a04c.7d3cd",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 975,
        "y": 140,
        "wires": []
    },
    {
        "id": "405bf8b5.810ff8",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 2560,
        "wires": [
            [
                "cea9c3a4.ba80b"
            ]
        ]
    },
    {
        "id": "cea9c3a4.ba80b",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1195,
        "y": 2560,
        "wires": []
    },
    {
        "id": "a27ef259.769d1",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"ring\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 2640,
        "wires": [
            [
                "d8fead68.7a56f",
                "c88cbbba.017c38"
            ]
        ]
    },
    {
        "id": "d8fead68.7a56f",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1395,
        "y": 2640,
        "wires": []
    },
    {
        "id": "db202ef.570f4d",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"ring\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 2700,
        "wires": [
            [
                "32f947d0.380c88"
            ]
        ]
    },
    {
        "id": "32f947d0.380c88",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1195,
        "y": 2700,
        "wires": []
    },
    {
        "id": "2690f234.90c07e",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1310,
        "y": 2640,
        "wires": [
            [
                "d8fead68.7a56f"
            ]
        ]
    },
    {
        "id": "c88cbbba.017c38",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "1sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1190,
        "y": 2640,
        "wires": [
            [
                "2690f234.90c07e"
            ]
        ]
    },
    {
        "id": "a766a893.4dc598",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"blue\",shape:\"dot\",text:\"SMS empfangen!\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 2060,
        "wires": [
            [
                "4dcd5e45.0128",
                "8c4420ce.53029"
            ]
        ]
    },
    {
        "id": "4dcd5e45.0128",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 755,
        "y": 2060,
        "wires": []
    },
    {
        "id": "8c4420ce.53029",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "3sec",
        "pauseType": "delay",
        "timeout": "3",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 2060,
        "wires": [
            [
                "cc94981a.6e7848"
            ]
        ]
    },
    {
        "id": "cc94981a.6e7848",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 650,
        "y": 2060,
        "wires": [
            [
                "4dcd5e45.0128"
            ]
        ]
    },
    {
        "id": "82618d85.dfc88",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "STOP",
        "links": [
            "e1e6215e.44411"
        ],
        "x": 1955,
        "y": 360,
        "wires": [
            [
                "67f3adc4.d96044"
            ]
        ]
    },
    {
        "id": "e1e6215e.44411",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STOP",
        "links": [
            "82618d85.dfc88",
            "60f43634.e7ba28",
            "47a78f6e.36d11",
            "5fb52c66.540164",
            "d1ed98fc.da8698",
            "4e34626e.0c3cfc",
            "6fc0d814.cab958"
        ],
        "x": 675,
        "y": 3380,
        "wires": []
    },
    {
        "id": "b13657a5.b25ea8",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "STOP",
        "info": "",
        "x": 750,
        "y": 3380,
        "wires": []
    },
    {
        "id": "1e8da29d.9d6a9d",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "RESET",
        "links": [
            "aa5034b.e83e8c8"
        ],
        "x": 895,
        "y": 3420,
        "wires": [
            [
                "19fb2f88.d617c"
            ]
        ]
    },
    {
        "id": "d1ed98fc.da8698",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "STOP",
        "links": [
            "e1e6215e.44411"
        ],
        "x": 895,
        "y": 3380,
        "wires": [
            [
                "2485d1d8.a6928e"
            ]
        ]
    },
    {
        "id": "2485d1d8.a6928e",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"grey\",shape:\"ring\",text:\"Stop\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 3380,
        "wires": [
            [
                "fe869a17.decc68"
            ]
        ]
    },
    {
        "id": "fe869a17.decc68",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1135,
        "y": 3380,
        "wires": []
    },
    {
        "id": "19fb2f88.d617c",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"grey\",shape:\"ring\",text:\"Reset\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 3420,
        "wires": [
            [
                "6162490c.ddbbf8"
            ]
        ]
    },
    {
        "id": "6162490c.ddbbf8",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1135,
        "y": 3420,
        "wires": []
    },
    {
        "id": "4e34626e.0c3cfc",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "AUS",
        "links": [
            "e1e6215e.44411",
            "aa5034b.e83e8c8"
        ],
        "x": 1315,
        "y": 1680,
        "wires": [
            [
                "90cc717f.a3ced"
            ]
        ]
    },
    {
        "id": "90cc717f.a3ced",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "false",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1680,
        "wires": [
            []
        ]
    },
    {
        "id": "58e0669c.b268a8",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 975,
        "y": 3020,
        "wires": []
    },
    {
        "id": "449e150c.fafb6c",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "a935c9f9.1a1268",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CNMI",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "be31c9d4.0e19a8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMEE",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "49e692be.7b4bdc",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMGF",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "57e9f497.5796bc",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "setze flow.GSM_CPIN",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "6246a68e.211848",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_POLL",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 640,
        "wires": [
            []
        ]
    },
    {
        "id": "26cf8627.9ace5a",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CSQ",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "271ac552.8392ea",
        "type": "inject",
        "z": "5c14d8ce.7af138",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 1810,
        "y": 400,
        "wires": [
            [
                "449e150c.fafb6c",
                "a935c9f9.1a1268",
                "be31c9d4.0e19a8",
                "49e692be.7b4bdc",
                "57e9f497.5796bc",
                "26cf8627.9ace5a",
                "6246a68e.211848",
                "efdc6b97.39fdc8",
                "61e18f7e.112ec",
                "30840362.015d9c",
                "cabfe318.b85bc",
                "47fe4518.3ae17c"
            ]
        ]
    },
    {
        "id": "6fc0d814.cab958",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "STOP",
        "links": [
            "e1e6215e.44411"
        ],
        "x": 1875,
        "y": 840,
        "wires": [
            [
                "449e150c.fafb6c",
                "a935c9f9.1a1268",
                "be31c9d4.0e19a8",
                "49e692be.7b4bdc",
                "57e9f497.5796bc",
                "26cf8627.9ace5a",
                "6246a68e.211848",
                "efdc6b97.39fdc8",
                "61e18f7e.112ec",
                "30840362.015d9c",
                "cabfe318.b85bc",
                "47fe4518.3ae17c"
            ]
        ]
    },
    {
        "id": "efdc6b97.39fdc8",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "30840362.015d9c",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_INDEX",
                "pt": "flow",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 760,
        "wires": [
            []
        ]
    },
    {
        "id": "61e18f7e.112ec",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_Delete",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "cabfe318.b85bc",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 800,
        "wires": [
            []
        ]
    },
    {
        "id": "47fe4518.3ae17c",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_INPUT",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 840,
        "wires": [
            []
        ]
    },
    {
        "id": "968ae9cb.7e2568",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "d": true,
        "name": "",
        "pauseType": "rate",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1220,
        "y": 3300,
        "wires": [
            [
                "72a939df.a67a28"
            ]
        ]
    },
    {
        "id": "22f9d007.f6c67",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 2180,
        "wires": [
            [
                "4c584901.473bc8"
            ]
        ]
    },
    {
        "id": "5e668423.97089c",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️⚪️⚪️️⚫️ prüfe ungelesene SMS\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 1920,
        "wires": [
            [
                "64957964.7f33e8",
                "d6f1843.8800078",
                "599385d6.bd353c"
            ]
        ]
    },
    {
        "id": "d6f1843.8800078",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "1sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 1940,
        "wires": [
            [
                "d80bef16.2ca9f"
            ]
        ]
    },
    {
        "id": "d80bef16.2ca9f",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1150,
        "y": 1940,
        "wires": [
            [
                "64957964.7f33e8"
            ]
        ]
    },
    {
        "id": "64957964.7f33e8",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1275,
        "y": 1920,
        "wires": []
    },
    {
        "id": "d3bf6164.5f2a3",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "OK",
        "property": "PIN",
        "propertyType": "env",
        "rules": [
            {
                "t": "empty"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 670,
        "y": 1040,
        "wires": [
            [
                "832cd570.85f778"
            ],
            [
                "86cb0ee8.ca0a2"
            ]
        ]
    },
    {
        "id": "7ae33fc3.f5d21",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "AT+CPIN=0000 \"\\r\"",
        "func": "var at_cmd = \"AT+CPIN=\" + msg.PIN;\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 1060,
        "wires": [
            [
                "b5852a29.3b2bd8"
            ]
        ]
    },
    {
        "id": "b5852a29.3b2bd8",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "to SERIAL OUT",
        "links": [
            "1680f7f6.5032b8"
        ],
        "x": 1235,
        "y": 1060,
        "wires": []
    },
    {
        "id": "86cb0ee8.ca0a2",
        "type": "change",
        "z": "5c14d8ce.7af138",
        "name": "PIN",
        "rules": [
            {
                "t": "set",
                "p": "PIN",
                "pt": "msg",
                "to": "PIN",
                "tot": "env"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 890,
        "y": 1060,
        "wires": [
            [
                "7ae33fc3.f5d21"
            ]
        ]
    },
    {
        "id": "66062d1e.e90564",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "🔵;🔴;⚫️;⚪️;🟢;🔘;",
        "info": "⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️\n⚪️️️️️️️️⚫️⚫️⚫️⚫️⚫️⚫️⚫️\n⚪️⚪️️⚫️⚫️⚫️⚫️⚫️⚫️\n⚪️⚪️⚪️️⚫️⚫️⚫️⚫️⚫️\n⚪️⚪️⚪️⚪️️⚫️⚫️⚫️⚫️\n⚪️⚪️⚪️⚪️⚪️️⚫️⚫️⚫️\n⚪️⚪️⚪️⚪️⚪️⚪️️⚫️⚫️\n⚪️⚪️⚪️⚪️⚪️⚪️⚪️️⚫️\n⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️",
        "x": 180,
        "y": 3280,
        "wires": []
    },
    {
        "id": "599385d6.bd353c",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "2sec",
        "pauseType": "delay",
        "timeout": "2",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 1900,
        "wires": [
            [
                "eef31267.43dde"
            ]
        ]
    },
    {
        "id": "eef31267.43dde",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1150,
        "y": 1900,
        "wires": [
            [
                "64957964.7f33e8"
            ]
        ]
    },
    {
        "id": "46a5b354.ffb23c",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "AUTOSTART",
        "property": "AUTOSTART",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 420,
        "y": 20,
        "wires": [
            [
                "ad979a1.466fc68"
            ]
        ]
    },
    {
        "id": "ec990c43.abaab",
        "type": "inject",
        "z": "5c14d8ce.7af138",
        "name": "",
        "topic": "",
        "payload": "Autostart",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "3",
        "x": 120,
        "y": 20,
        "wires": [
            [
                "46a5b354.ffb23c"
            ]
        ]
    },
    {
        "id": "ad979a1.466fc68",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "AUTOSTART",
        "links": [
            "603c3310.8562ec"
        ],
        "x": 755,
        "y": 20,
        "wires": []
    },
    {
        "id": "a035a2fb.d0518",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "SIM PIN setzen",
        "info": "",
        "x": 1340,
        "y": 1060,
        "wires": []
    },
    {
        "id": "c4399eb4.f34d7",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "SIM prüfen",
        "info": "",
        "x": 1320,
        "y": 1020,
        "wires": []
    },
    {
        "id": "621c0d60.502b14",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "send SMS",
        "links": [
            "7455f473.c5402c"
        ],
        "x": 675,
        "y": 2980,
        "wires": []
    },
    {
        "id": "7455f473.c5402c",
        "type": "link in",
        "z": "5c14d8ce.7af138",
        "name": "SMS Timeout",
        "links": [
            "621c0d60.502b14"
        ],
        "x": 735,
        "y": 2640,
        "wires": [
            [
                "69af9b0f.589f24"
            ]
        ]
    },
    {
        "id": "4d0fbe9c.9a709",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "to Serial",
        "info": "",
        "x": 100,
        "y": 3460,
        "wires": []
    },
    {
        "id": "2ba03111.5583ae",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "info": "",
        "x": 90,
        "y": 3520,
        "wires": []
    },
    {
        "id": "7dd58cf8.8a8854",
        "type": "http in",
        "z": "5c14d8ce.7af138",
        "name": "",
        "url": "/SIM800",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 210,
        "y": 3720,
        "wires": [
            [
                "57046424.b6a9fc"
            ]
        ]
    },
    {
        "id": "38d71d67.046552",
        "type": "http in",
        "z": "5c14d8ce.7af138",
        "name": "",
        "url": "/SIM800",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 210,
        "y": 3800,
        "wires": [
            [
                "f22c1308.3e503"
            ]
        ]
    },
    {
        "id": "57046424.b6a9fc",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "msg.url = \"/SIM800\";",
        "func": "msg.url = \"SIM800\";\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 460,
        "y": 3720,
        "wires": [
            [
                "3fdda4a0.ddf68c"
            ]
        ]
    },
    {
        "id": "3fdda4a0.ddf68c",
        "type": "template",
        "z": "5c14d8ce.7af138",
        "name": "JavaScript",
        "field": "payload.script",
        "fieldType": "msg",
        "format": "javascript",
        "syntax": "plain",
        "template": "$(document).ready(function(e) {\n    \n    $(\"form[ajax=true]\").submit(function(e) {\n        \n        e.preventDefault();\n        \n        var form_data = $(this).serialize();\n        var form_url = $(this).attr(\"action\");\n        var form_method = $(this).attr(\"method\").toUpperCase();\n        \n        $(\"#loadingimg\").show();\n        \n        $.ajax({\n            url: form_url, \n            type: form_method,      \n            data: form_data,     \n            cache: false,\n            success: function(returnhtml){                          \n                $(\"#result\").html(returnhtml); \n                $(\"#loadingimg\").hide();                    \n            }           \n        });    \n        \n    });\n    \n});",
        "x": 710,
        "y": 3720,
        "wires": [
            [
                "678654f3.66ddec"
            ]
        ]
    },
    {
        "id": "277544a0.31ebac",
        "type": "http response",
        "z": "5c14d8ce.7af138",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1090,
        "y": 3720,
        "wires": []
    },
    {
        "id": "ed7862d.effd0a",
        "type": "template",
        "z": "5c14d8ce.7af138",
        "name": "HTML",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n  <head>\n    <title>SIM800 GSM Modul</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\">\n    <meta charset=\"utf-8\">\n    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js\"></script>\n    <style>{{{payload.style}}}</style>\n  </head>\n\n<div>\n  <h2>SMS senden</h2>\n  <form method=\"post\" action=\"/{{url}}\" ajax=\"true\">\n    <label for=\"number\">Nummer</label>\n    <input type=\"text\" id=\"number\" name=\"number\">\n    \n    <label for=\"message\">SMS Text</label>\n    <input type=\"text\" id=\"message\" name=\"message\">\n  \n    <input type=\"submit\" value=\"senden\">\n  </form>\n  <span id=\"result\"></span>\n</div>\n\n</body>\n</html>\n<script>{{{payload.script}}}</script>",
        "x": 970,
        "y": 3720,
        "wires": [
            [
                "277544a0.31ebac"
            ]
        ]
    },
    {
        "id": "4fd7a4cd.9b0dac",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Website",
        "info": "",
        "x": 160,
        "y": 3680,
        "wires": []
    },
    {
        "id": "39e3b2f2.8d7d4e",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "Form Submission",
        "info": "",
        "x": 180,
        "y": 3760,
        "wires": []
    },
    {
        "id": "f22c1308.3e503",
        "type": "switch",
        "z": "5c14d8ce.7af138",
        "name": "nicht leer",
        "property": "payload.message",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 420,
        "y": 3800,
        "wires": [
            [
                "f689a9d9.a46568",
                "543802de.2f286c"
            ]
        ]
    },
    {
        "id": "e868c047.65a",
        "type": "comment",
        "z": "5c14d8ce.7af138",
        "name": "SMS WEBIF",
        "info": "",
        "x": 90,
        "y": 3640,
        "wires": []
    },
    {
        "id": "f689a9d9.a46568",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "Limiter",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "5",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 590,
        "y": 3800,
        "wires": [
            [
                "7ea117df.dea3b8",
                "a216d576.c11ec8"
            ]
        ]
    },
    {
        "id": "678654f3.66ddec",
        "type": "template",
        "z": "5c14d8ce.7af138",
        "name": "CSS",
        "field": "payload.style",
        "fieldType": "msg",
        "format": "html",
        "syntax": "mustache",
        "template": "input[type=text], select {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 100%;\n    background-color: #285E8A;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\ninput[type=submit]:hover {\n    background-color: #1990C7;\n}\n\ndiv {\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    background-color: #f2f2f2;\n    padding: 20px;\n}\n\nh2 {\n    color: #285E8A;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    text-align: center;\n}",
        "x": 850,
        "y": 3720,
        "wires": [
            [
                "ed7862d.effd0a"
            ]
        ]
    },
    {
        "id": "7ea117df.dea3b8",
        "type": "debug",
        "z": "5c14d8ce.7af138",
        "d": true,
        "name": "mysitepost",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 930,
        "y": 3800,
        "wires": []
    },
    {
        "id": "a216d576.c11ec8",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "SEND_SMS",
        "links": [
            "b95a692d.899558"
        ],
        "x": 715,
        "y": 3800,
        "wires": []
    },
    {
        "id": "543802de.2f286c",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "return msg.payload to client",
        "func": "msg.payload = 'OK';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 660,
        "y": 3760,
        "wires": [
            [
                "ef2f37c2.cfef88"
            ]
        ]
    },
    {
        "id": "ef2f37c2.cfef88",
        "type": "http response",
        "z": "5c14d8ce.7af138",
        "name": "",
        "x": 1090,
        "y": 3760,
        "wires": []
    },
    {
        "id": "96b61333.571a6",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"red\",shape:\"ring\",text:\"Nicht verbunden\"}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 210,
        "y": 1720,
        "wires": [
            [
                "7e90072a.6c60a8"
            ]
        ]
    },
    {
        "id": "7e90072a.6c60a8",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 635,
        "y": 1720,
        "wires": []
    },
    {
        "id": "d316aaec.751bc8",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Status",
        "func": "msg.payload = {fill:\"blue\",shape:\"dot\",text:\"RESET Modul\"}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 1720,
        "wires": [
            [
                "5a27d587.66e23c"
            ]
        ]
    },
    {
        "id": "5a27d587.66e23c",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "STATUS",
        "links": [
            "70532deb.646ee4"
        ],
        "x": 1275,
        "y": 1720,
        "wires": []
    },
    {
        "id": "9867ca09.89bd38",
        "type": "function",
        "z": "5c14d8ce.7af138",
        "name": "Filtern",
        "func": "var antwort = msg.payload;\n\nif (antwort.length > 3 && antwort.length !== \"\"){\n    msg.payload = (antwort.slice(0, antwort.length)).replace(\"\\n\", '').replace(\"\\r\", '');\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 3260,
        "wires": [
            [
                "e7d8b9ff.5f7e48"
            ]
        ]
    },
    {
        "id": "ac20be03.b96cf",
        "type": "link out",
        "z": "5c14d8ce.7af138",
        "name": "",
        "links": [
            "aa9c2450.f49bf8"
        ],
        "x": 1375,
        "y": 3260,
        "wires": []
    },
    {
        "id": "e7d8b9ff.5f7e48",
        "type": "delay",
        "z": "5c14d8ce.7af138",
        "name": "",
        "pauseType": "rate",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1220,
        "y": 3260,
        "wires": [
            [
                "ac20be03.b96cf",
                "72a939df.a67a28"
            ]
        ]
    },
    {
        "id": "e86d2172.5085b",
        "type": "tab",
        "label": "SIM800 GSM Modul",
        "disabled": false,
        "info": ""
    },
    {
        "id": "2a1195ea.a9c1aa",
        "type": "subflow:5c14d8ce.7af138",
        "z": "e86d2172.5085b",
        "name": "",
        "env": [
            {
                "name": "SERIAL",
                "value": "/dev/USB0",
                "type": "str"
            },
            {
                "name": "AUTOSTART",
                "type": "bool",
                "value": "true"
            }
        ],
        "x": 640,
        "y": 320,
        "wires": [
            [
                "34779a49.567316"
            ],
            [
                "c886b4eb.467c28"
            ],
            [
                "fb408784.e18308"
            ],
            [
                "9ae1fe28.b2e03"
            ],
            [
                "a4b649ed.fd9e28"
            ],
            [
                "4641ec8a.583284"
            ],
            [
                "b1879b1f.eee018"
            ],
            []
        ]
    },
    {
        "id": "1192a8e8.adad07",
        "type": "change",
        "z": "e86d2172.5085b",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "input",
                "pt": "msg",
                "to": "SERIAL_INPUT",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 220,
        "wires": [
            [
                "2a1195ea.a9c1aa"
            ]
        ],
        "inputLabels": [
            "SERIAL IN"
        ],
        "outputLabels": [
            "to GSM TC35"
        ],
        "icon": "node-red/inject.svg"
    },
    {
        "id": "f9350f41.fcfc3",
        "type": "inject",
        "z": "e86d2172.5085b",
        "name": "START",
        "topic": "",
        "payload": "START",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 210,
        "y": 280,
        "wires": [
            [
                "ce3705a7.d7b7d8"
            ]
        ],
        "icon": "node-red-dashboard/ui_switch.png"
    },
    {
        "id": "3ab0d3f8.3a1c5c",
        "type": "inject",
        "z": "e86d2172.5085b",
        "name": "Sende Test SMS",
        "topic": "",
        "payload": "{\"number\":\"0049123456789\",\"message\":\"Nodered SMS Text Deine CCU3\"}",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 180,
        "y": 400,
        "wires": [
            [
                "1b8786cb.05c3c9"
            ]
        ]
    },
    {
        "id": "b3f4c40d.8fc708",
        "type": "inject",
        "z": "e86d2172.5085b",
        "name": "STOP",
        "topic": "",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 210,
        "y": 340,
        "wires": [
            [
                "ab0d56df.456fd8"
            ]
        ],
        "icon": "node-red-dashboard/ui_switch.png"
    },
    {
        "id": "87ec03ac.4cf99",
        "type": "serial in",
        "z": "e86d2172.5085b",
        "name": "Serial-In",
        "serial": "6671c227.9e679c",
        "x": 200,
        "y": 220,
        "wires": [
            [
                "1192a8e8.adad07"
            ]
        ]
    },
    {
        "id": "34779a49.567316",
        "type": "serial out",
        "z": "e86d2172.5085b",
        "name": "Serail-Out",
        "serial": "6671c227.9e679c",
        "x": 980,
        "y": 160,
        "wires": []
    },
    {
        "id": "ce3705a7.d7b7d8",
        "type": "change",
        "z": "e86d2172.5085b",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "START",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 280,
        "wires": [
            [
                "2a1195ea.a9c1aa"
            ]
        ]
    },
    {
        "id": "1b8786cb.05c3c9",
        "type": "change",
        "z": "e86d2172.5085b",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "SEND_SMS",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 400,
        "wires": [
            [
                "2a1195ea.a9c1aa"
            ]
        ]
    },
    {
        "id": "ab0d56df.456fd8",
        "type": "change",
        "z": "e86d2172.5085b",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "STOP",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 340,
        "wires": [
            [
                "2a1195ea.a9c1aa"
            ]
        ]
    },
    {
        "id": "fb408784.e18308",
        "type": "debug",
        "z": "e86d2172.5085b",
        "name": "Signalstaerke",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1000,
        "y": 260,
        "wires": []
    },
    {
        "id": "4641ec8a.583284",
        "type": "debug",
        "z": "e86d2172.5085b",
        "name": "SMS Emfang Nummer",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1020,
        "y": 380,
        "wires": []
    },
    {
        "id": "c886b4eb.467c28",
        "type": "debug",
        "z": "e86d2172.5085b",
        "name": "Letzter Prüf Status",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1010,
        "y": 220,
        "wires": []
    },
    {
        "id": "9ae1fe28.b2e03",
        "type": "debug",
        "z": "e86d2172.5085b",
        "name": "Modus",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 970,
        "y": 300,
        "wires": []
    },
    {
        "id": "a4b649ed.fd9e28",
        "type": "debug",
        "z": "e86d2172.5085b",
        "name": "Letzter Sende Status",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1020,
        "y": 340,
        "wires": []
    },
    {
        "id": "b1879b1f.eee018",
        "type": "debug",
        "z": "e86d2172.5085b",
        "name": "SMS Emfang Text",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1010,
        "y": 420,
        "wires": []
    },
    {
        "id": "6671c227.9e679c",
        "type": "serial-port",
        "z": "",
        "serialport": "/dev/ttyS0",
        "serialbaud": "115200",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "newline": "\\r",
        "bin": "false",
        "out": "char",
        "addchar": "",
        "responsetimeout": "10000"
    }
]
