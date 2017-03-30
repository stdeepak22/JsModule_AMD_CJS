SystemJS.config({    
    map:{               
        Amd_player : '/script/ModuleAMD/A_Player',
        Amd_game  : '/script/ModuleAMD/A_Game',
        Cjs_player : '/script/ModuleCJS/C_Player',
        Cjs_game  : '/script/ModuleCJS/C_Game',
        AmdCjs_player : '/script/AMD_CJS/C_Player' ,
        AmdCjs_game  : '/script/AMD_CJS/A_Game'
    },   
    packages:{
        '/script/':{defaultExtension: 'js'},        
    }
})