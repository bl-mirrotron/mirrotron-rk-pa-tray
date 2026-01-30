
module.exports = {
    uiPort: process.env.NODEREDPORT,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    flowFile: 'flows.json',
    flowFilePretty: true,
    credentialSecret: false,
    httpAdminRoot: '/admin',
    ui: { path: "ui" },
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$12$hP3fo1e/LdB3Uboipn7laeVhiRPmPcM7ockFdIJ/gK7XMmW8GlKiy",
            permissions: "*"
        }]
    },
    disableEditor: (process.env.ENABLE_NODERED_EDITOR === '0'),

    functionGlobalContext: {
    },
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
    editorTheme: {
        theme: "dark-scroll",
        tours: false,
        page: {
            title: "blinky-modbus-tray"
        },
        header: {
            title: "blinky-modbus-tray"
         },
        palette: {
            categories: ['common', 'function', 'network', 'sequence', 'parser', 'storage','subflows'],
        },

        projects: {
            /** To enable the Projects feature, set this value to true */
            enabled: false,
            workflow: {
                mode: "manual"
            }
        },
        codeEditor: 
        {
            lib: "monaco",
            options: 
            {
//                theme: "vs",
                formatOnType: false,
                formatOnPaste: false,
                useTabStops: true,
                colorDecorators: true,
                fontSize: 14,
                "bracketPairColorization.enabled": true,
                minimap: 
                {
                  enabled: false
                }
            }
        }
    }
}

