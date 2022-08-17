function start(state,game){
    game.createWizard(state.wizard);
    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}

function gameLoop(state,game){
    //Move Wizard;

    const {wizard} = state;
    const {wizardElement} = game;
    if(state.keys.KeyD){
        wizard.posX += wizard.speed;

    }
    if(state.keys.KeyA){
        wizard.posX -= wizard.speed;
    }
    if(state.keys.KeyS){
        wizard.posY += wizard.speed;
    }
    if(state.keys.KeyW){
        wizard.posY -= wizard.speed;
    }
    wizardElement.style.left = wizard.posX+"px";
    wizardElement.style.top = wizard.posY+"px";
    
    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}